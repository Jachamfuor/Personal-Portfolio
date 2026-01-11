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

async function fetchRecentCommitsFromRepos() {
    // Get recently pushed repos first
    const repos = await gh(
        `https://api.github.com/users/${username}/repos?per_page=6&sort=pushed&type=owner`
    );

    const commits = [];

    for (const r of repos) {
        // Grab up to 2 latest commits per repo
        const repoCommits = await gh(
            `https://api.github.com/repos/${r.full_name}/commits?per_page=2`
        );

        for (const c of repoCommits) {
            commits.push({
                repo: r.full_name,
                message: c.commit?.message?.split("\n")[0] || "(no message)",
                sha: c.sha,
                url: c.html_url,
                createdAt: c.commit?.author?.date || null,
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
        fetchRecentCommitsFromRepos(),
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
