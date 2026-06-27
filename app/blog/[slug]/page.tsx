import type { Metadata } from "next";
import Link from "next/link";

import { getPostBySlug } from "@/app/lib/posts";
import styles from "../../editorial.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
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
  const post = getPostBySlug(slug);

  if (!post) {
    return <h1>Post Not Found</h1>;
  }

  return (
    <main className={styles.shell}>
      <div className={styles.container}>
        <header className={styles.siteHeader}>
          <Link href="/" className={styles.siteName}>
            Dev Notes
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/blog">Blog</Link>
          </nav>
        </header>

        <article className={styles.article}>
          <Link href="/blog" className={styles.backLink}>
            &larr; Back to blog
          </Link>

          <header className={styles.articleHeader}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </header>

          <div className={styles.articleBody}>
            <p>{post.content}</p>
          </div>

          <footer className={styles.articleFooter}>
            <Link href="/blog">View all posts</Link>
          </footer>
        </article>
      </div>
    </main>
  );
}
