import Link from "next/link";

import styles from "./editorial.module.css";

export default function Home() {
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

        <section className={styles.home}>
          <h1>Notes on web development.</h1>
          <p>
            Short, practical articles about Next.js, React, and the things I
            learn while building for the web.
          </p>
          <Link href="/blog" className={styles.primaryLink}>
            Browse all posts &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
