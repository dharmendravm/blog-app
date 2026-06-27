import { getPostBySlug } from "@/app/lib/posts";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <article className="mx-auto mt-10 max-w-4xl rounded-xl border border-zinc-800 bg-zinc-900 p-8 shadow-lg">
      <h1 className="mb-4 text-4xl font-bold text-white">{post.title}</h1>

      <p className="mb-8 text-lg text-zinc-400">{post.description}</p>

      <div className="border-t border-zinc-700 pt-6">
        <p className="leading-8 text-zinc-300">{post.content}</p>
      </div>
    </article>
  );
}
