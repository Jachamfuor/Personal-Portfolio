import fs from "node:fs/promises";
import path from "node:path";

const username = process.env.GITHUB_USERNAME || "Jachamfuor";
const token = process.env.GITHUB_TOKEN || ""; // optional (helps rate limits)

const OUT_DIR = path.join(process.cwd(), "data");
const OUT_FILE = path.join(OUT_DIR, "activity.json");

function headers() {
  const h = {
    "Accept": "application/vnd.github+json",
    "User-Agent": "self-updating-portfolio",
  };
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function gh(url) {
  const res = await fetch(url, { headers: headers() });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`GitHub API error ${res.status} for ${url}\n${text}`);
  }
  return res.json();
}

async function fetchRecentCommits() {
  // Public events include PushEvent with commits
  const events = await gh(`https://api.github.com/users/${username}/events/public?per_page=30`);

  const commits = [];
  for (const e of events) {
    if (e.type !== "PushEvent") continue;

    const repoFullName = e.repo?.name; // "owner/repo"
    const createdAt = e.created_at;

    const payloadCommits = e.payload?.commits || [];
    for (const c of payloadCommits) {
      // sha in events payload can be short; keep it as-is, link still works
      commits.push({
        repo: repoFullName,
        message: c.message,
        sha: c.sha,
        url: repoFullName && c.sha ? `https://github.com/${repoFullName}/commit/${c.sha}` : null,
        createdAt,
      });
      if (commits.length >= 8) break;
    }
    if (commits.length >= 8) break;
  }

  return commits;
}

async function fetchRecentRepos() {
  const repos = await gh(
    `https://api.github.com/users/${username}/repos?per_page=6&sort=pushed&type=owner`
  );

  return repos.map((r) => ({
    name: r.name,
    fullName: r.full_name,
    description: r.description,
    language: r.language,
    stars: r.stargazers_count,
    url: r.html_url,
    updatedAt: r.pushed_at || r.updated_at,
  }));
}

async function main() {
  const [recentCommits, recentRepos] = await Promise.all([
    fetchRecentCommits(),
    fetchRecentRepos(),
  ]);

  const data = {
    generatedAt: new Date().toISOString(),
    username,
    recentCommits,
    recentRepos,
  };

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(OUT_FILE, JSON.stringify(data, null, 2), "utf8");

  console.log(`✅ Wrote ${OUT_FILE}`);
}

main().catch((err) => {
  console.error("❌ generate-activity failed:");
  console.error(err);
  process.exit(1);
});
