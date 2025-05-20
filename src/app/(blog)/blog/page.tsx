import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | DevFolio",
  description: "Articles and tutorials on web development, programming, and tech",
};

// Sample blog categories
const categories = [
  { name: "All", count: 12 },
  { name: "JavaScript", count: 4 },
  { name: "TypeScript", count: 3 },
  { name: "React", count: 3 },
  { name: "Next.js", count: 2 },
];

// Sample blog posts
const posts = [
  {
    id: 'getting-started-with-typescript',
    title: 'Getting Started with TypeScript in 2025',
    excerpt: 'Learn how to set up and use TypeScript in your projects with this comprehensive guide for beginners.',
    date: 'May 18, 2025',
    readingTime: '5 min read',
    category: 'TypeScript',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'react-performance-tips',
    title: 'Top React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques to make your React applications blazing fast.',
    date: 'May 15, 2025',
    readingTime: '7 min read',
    category: 'React',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'nextjs-app-router-guide',
    title: 'Complete Guide to Next.js App Router',
    excerpt: 'Everything you need to know about the Next.js App Router architecture.',
    date: 'May 10, 2025',
    readingTime: '8 min read',
    category: 'Next.js',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'async-javascript',
    title: 'Understanding Asynchronous JavaScript',
    excerpt: 'A deep dive into promises, async/await, and handling asynchronous operations in JavaScript.',
    date: 'May 5, 2025',
    readingTime: '10 min read',
    category: 'JavaScript',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'css-grid-layout',
    title: 'Mastering CSS Grid Layout',
    excerpt: 'Learn how to create complex layouts with CSS Grid.',
    date: 'May 3, 2025',
    readingTime: '6 min read',
    category: 'CSS',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1541250628459-d8c06f161ce8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'typescript-generics',
    title: 'TypeScript Generics Explained',
    excerpt: 'Learn how to use generics in TypeScript to create reusable, type-safe components.',
    date: 'April 28, 2025',
    readingTime: '9 min read',
    category: 'TypeScript',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1598425237654-4fc758e50a93?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-2xl">
          Articles, tutorials, and insights on web development, programming, and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with categories */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name} className="flex justify-between items-center">
                  <a
                    href={`#${category.name.toLowerCase()}`}
                    className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                  >
                    {category.name}
                  </a>
                  <span className="text-sm bg-muted dark:bg-muted-dark rounded-full px-2 py-0.5">
                    {category.count}
                  </span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Search</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 rounded-md border border-border dark:border-border-dark bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="h-5 w-5 text-muted-foreground dark:text-muted-foreground-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content with posts */}
        <div className="lg:col-span-3">
          <div className="space-y-12">
            {/* Featured posts */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts
                  .filter((post) => post.featured)
                  .map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="h-full border border-border dark:border-border-dark rounded-lg overflow-hidden bg-background dark:bg-background-dark hover:shadow-md dark:hover:shadow-gray-800 transition-all hover:border-primary dark:hover:border-primary-dark hover:scale-[1.01] duration-200">
                        <div className="aspect-video relative bg-muted dark:bg-muted-dark overflow-hidden">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <div className="mb-4 flex justify-between items-center">
                            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary dark:bg-secondary-dark">
                              {post.category}
                            </span>
                            <div className="text-xs text-muted-foreground dark:text-muted-foreground-dark">
                              {post.readingTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground dark:text-muted-foreground-dark mb-4">
                            {post.excerpt}
                          </p>
                          <div className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                            {post.date}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Recent posts */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Recent Articles</h2>
              <div className="grid grid-cols-1 gap-6">
                {posts
                  .filter((post) => !post.featured)
                  .map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.id}`}
                      className="block group"
                    >
                      <div className="border border-border dark:border-border-dark rounded-lg overflow-hidden bg-background dark:bg-background-dark hover:shadow-md dark:hover:shadow-gray-800 transition-all hover:border-primary dark:hover:border-primary-dark">
                        <div className="md:flex">
                          <div className="md:w-1/3 aspect-video md:aspect-auto relative bg-muted dark:bg-muted-dark overflow-hidden">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-6 md:w-2/3">
                            <div className="mb-3 flex justify-between items-center">
                              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary dark:bg-secondary-dark">
                                {post.category}
                              </span>
                              <div className="text-xs text-muted-foreground dark:text-muted-foreground-dark">
                                {post.readingTime}
                              </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground dark:text-muted-foreground-dark mb-3">
                              {post.excerpt}
                            </p>
                            <div className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                              {post.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2">
              <button
                disabled
                className="px-3 py-1 rounded-md border border-border dark:border-border-dark disabled:opacity-50"
              >
                Previous
              </button>
              <button
                className="px-3 py-1 rounded-md bg-primary text-primary-foreground"
              >
                1
              </button>
              <button
                className="px-3 py-1 rounded-md hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
              >
                2
              </button>
              <span className="px-3 py-1">...</span>
              <button
                className="px-3 py-1 rounded-md hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
              >
                5
              </button>
              <button
                className="px-3 py-1 rounded-md border border-border dark:border-border-dark hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
