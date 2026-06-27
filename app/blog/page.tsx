import Link from "next/link";

import { getPosts } from "@/app/lib/posts";
import styles from "../editorial.module.css";

export default function BlogPage() {
  const posts = getPosts();

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

        <section className={styles.pageIntro}>
          <h1>Blog</h1>
          <p>Articles and notes about building modern web applications.</p>
        </section>

        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.postItem}>
              <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
