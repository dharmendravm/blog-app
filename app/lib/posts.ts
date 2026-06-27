export type Post = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    description:
      "Learn the fundamentals of Next.js and build your first application.",
    content:
      "Next.js is a React framework that provides file-based routing, server-side rendering, static site generation, API routes, and many other features that make building modern web applications easier.",
  },
  {
    slug: "server-vs-client-components",
    title: "Server Components vs Client Components",
    description:
      "Understand the differences between Server and Client Components.",
    content:
      "Server Components render on the server and reduce JavaScript sent to the browser, while Client Components enable interactivity through hooks like useState and useEffect.",
  },
  {
    slug: "dynamic-routing-in-nextjs",
    title: "Dynamic Routing in Next.js",
    description: "Create dynamic pages using file-based routing.",
    content:
      "Dynamic routes allow you to create pages for blog posts, products, or users using folder names enclosed in square brackets such as [slug].",
  },
  {
    slug: "fetching-data-in-nextjs",
    title: "Fetching Data in Next.js",
    description: "Explore different ways to fetch data in Next.js.",
    content:
      "Next.js supports data fetching using fetch(), async Server Components, Route Handlers, and caching strategies like force-cache and no-store.",
  },
  {
    slug: "deploy-nextjs-app",
    title: "Deploying a Next.js Application",
    description: "Learn how to deploy your Next.js project.",
    content:
      "Deploy your application on Vercel for the best developer experience or use Docker to deploy on your own cloud infrastructure.",
  },
];

export function getPosts() {
  return posts;
}
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
