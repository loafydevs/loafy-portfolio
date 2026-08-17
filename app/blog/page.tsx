import Link from "next/link";
import Navbar from "@/components/Navbar";
import CursorGlow from "@/components/CursorGlow";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="relative min-h-screen bg-[#050505] px-6 py-6 sm:px-10 lg:px-24">
      <CursorGlow />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10">
        <Navbar />

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-50">
            Blog
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Notes on shipping software, mostly to myself.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {posts.length === 0 && (
            <p className="text-sm text-gray-500">No posts yet — check back soon.</p>
          )}
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-base font-bold text-gray-100 group-hover:text-indigo-300">
                  {post.title}
                </h2>
                <time className="shrink-0 font-mono text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="text-sm text-gray-500 transition-colors hover:text-indigo-300"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
