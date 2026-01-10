import Link from "next/link";
import { getAllPostsMeta } from "@/lib/posts";

/**
 * Blog UI
 */

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-2 text-gray-600">
          Technical posts, project breakdowns, and what I’m learning.
        </p>
      </div>

      <ul className="space-y-5">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-lg border p-5">
            <div className="flex items-center justify-between gap-4">
              <Link href={`/blog/${p.slug}`} className="font-semibold underline">
                {p.title}
              </Link>
              <span className="text-sm text-gray-500">{p.date}</span>
            </div>

            {p.summary ? (
              <p className="mt-2 text-sm text-gray-600">{p.summary}</p>
            ) : null}

            {p.tags && p.tags.length ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border px-3 py-1 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
