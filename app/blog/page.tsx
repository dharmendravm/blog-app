import Link from "next/link";

import { getPosts } from "@/app/lib/posts";

export default function BlogPage() {
  const posts = getPosts();
  return (
    <div className="px-8 py-10">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border-b border-zinc-700 pb-6"
          >
            <Link
              href={`/blog/${post.slug}`}
              className="text-2xl font-semibold hover:text-blue-400 transition-colors"
            >
              {post.title}
            </Link>

            <p className="mt-2 text-zinc-400">
              {post.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
