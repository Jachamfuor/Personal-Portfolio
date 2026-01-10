import fs from "fs";
import path from "path";
import matter from "gray-matter"

export type PostMeta = {
    title: string;
    date: string;
    tags: string[];
    summary: string;
    slug: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function getPostFiles() {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllPostsMeta(): PostMeta[] {
    const files = getPostFiles()

    const posts = files.map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const fullPath = path.join(POSTS_DIR, file);
        const raw = fs.readFileSync(fullPath, "utf8");

        const { data } = matter(raw);

        return {
            slug,
            title: String(data.title ?? slug),
            date: String(data.date ?? "1970-01-01"),
            tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
            summary: data.summary ? String(data.summary) : "",
        } satisfies PostMeta;
    })
    .filter((p): p is PostMeta => Boolean(p));

    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return posts;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`);

  console.log("[getPostBySlug]", { slug, fullPath, exists: fs.existsSync(fullPath) });

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const meta: PostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? "1970-01-01"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    summary: data.summary ? String(data.summary) : "",
  };

  return { meta, content };
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllPostsMeta(); // assumes newest -> oldest
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  // Since posts are sorted newest -> oldest:
  // prev = newer post (index - 1)
  // next = older post (index + 1)
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  return { prev, next };
}
