import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  return { title: post?.title ?? "Post not found" };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  if (!getPostSlugs().includes(params.slug)) notFound();

  const post = await getPostBySlug(params.slug);

  return (
    <main className="relative min-h-screen bg-[#050505] px-6 py-6 sm:px-10 lg:px-24">
      <CursorGlow />

      <article className="relative z-10 mx-auto flex max-w-4xl flex-col gap-8">
        <Navbar />

        <div>
          <Link
            href="/blog"
            className="text-sm text-gray-500 transition-colors hover:text-indigo-300"
          >
            ← All posts
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            {post.title}
          </h1>
          <time className="mt-2 block font-mono text-xs text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>

        <div
          className="prose prose-invert prose-sm max-w-none prose-headings:font-bold prose-headings:text-gray-100 prose-p:leading-relaxed prose-p:text-gray-400 prose-a:text-indigo-300 prose-strong:text-gray-200 prose-li:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <div className="border-t border-white/10 pt-6">
          <Link
            href="/blog"
            className="text-sm text-gray-500 transition-colors hover:text-indigo-300"
          >
            ← Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}
