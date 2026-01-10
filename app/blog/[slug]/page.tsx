import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostsMeta, getPostBySlug, getAdjacentPosts } from "@/lib/posts";
import Link from "next/link";

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPostsMeta().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);

  return {
    title: `${meta.title} | Blog`,
    description: meta.summary || `Post: ${meta.title}`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  if (!slug) notFound();

  try {
    const { meta, content } = getPostBySlug(slug);
    const { prev, next } = getAdjacentPosts(slug);


    return (
      <div className="mx-auto max-w-3xl">
        {/* Back link */}
        <div className="sticky top-20 mb-6">
          <Link
            href="/blog"
            className="text-sm text-gray-600 underline hover:text-black"
          >
            ← Back to blog
          </Link>
        </div>
        <article className="prose max-w-none text-left prose-neutral ">
          <h1>{meta.title}</h1><br />
          <p className="text-sm text-gray-500">{meta.date}</p>
         
            <MDXRemote source={content} components={components} />
          
        </article>

        <nav className="mt-12 grid gap-4 border-t pt-6 sm:grid-cols-2">
          <div className="min-h-[44px] flex justify-start">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="inline-block w-fit rounded-lg border p-2 hover:bg-gray-50 transition"
              >
                <div className="text-xs text-gray-500">Previous</div>
                <div className="font-medium">← {prev.title}</div>
              </Link>
            ) : null}
          </div>

          <div className="min-h-[44px] flex justify-end">
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="inline-block w-fit rounded-lg border p-2 hover:bg-gray-50 transition"
              >
                <div className="text-xs text-gray-500">Next</div>
                <div className="font-medium">{next.title} →</div>
              </Link>
            ) : null}
          </div>
        </nav>
      </div>
    );
  } catch {
    notFound();
  }
}

const components = {
  h2: (props: any) => (
    <h2 className="mt-10 scroll-mt-24 font-semibold" {...props} />
  ),
  p: (props: any) => (
    <p className="leading-7 text-gray-700" {...props} />
  ),
};