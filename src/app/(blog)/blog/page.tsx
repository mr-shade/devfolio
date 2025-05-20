import { Metadata } from "next";

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
  },
  {
    id: 'react-performance-tips',
    title: 'Top React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques to make your React applications blazing fast.',
    date: 'May 15, 2025',
    readingTime: '7 min read',
    category: 'React',
    featured: true,
  },
  {
    id: 'nextjs-app-router-guide',
    title: 'Complete Guide to Next.js App Router',
    excerpt: 'Everything you need to know about the Next.js App Router architecture.',
    date: 'May 10, 2025',
    readingTime: '8 min read',
    category: 'Next.js',
    featured: true,
  },
  {
    id: 'async-javascript',
    title: 'Understanding Asynchronous JavaScript',
    excerpt: 'A deep dive into promises, async/await, and handling asynchronous operations in JavaScript.',
    date: 'May 5, 2025',
    readingTime: '10 min read',
    category: 'JavaScript',
    featured: false,
  },
  {
    id: 'css-grid-layout',
    title: 'Mastering CSS Grid Layout',
    excerpt: 'Learn how to create complex layouts with CSS Grid.',
    date: 'May 3, 2025',
    readingTime: '6 min read',
    category: 'CSS',
    featured: false,
  },
  {
    id: 'typescript-generics',
    title: 'TypeScript Generics Explained',
    excerpt: 'Learn how to use generics in TypeScript to create reusable, type-safe components.',
    date: 'April 28, 2025',
    readingTime: '9 min read',
    category: 'TypeScript',
    featured: false,
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

        {/* Main content - Blog posts */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <a 
                key={post.id} 
                href={`/blog/${post.id}`} 
                className="group block"
              >
                <div className="h-full border border-border dark:border-border-dark rounded-lg overflow-hidden transition-all group-hover:shadow-md dark:group-hover:shadow-gray-800">
                  <div className="p-6">
                    <div className="inline-block px-2 py-1 mb-4 text-xs font-medium rounded-md bg-secondary dark:bg-secondary-dark">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-muted-foreground-dark mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground dark:text-muted-foreground-dark">
                      <span>{post.date}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-2">
              <a
                href="#"
                className="px-3 py-1 rounded-md border border-border dark:border-border-dark disabled:opacity-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="px-3 py-1 rounded-md bg-primary text-primary-foreground"
              >
                1
              </a>
              <a
                href="#"
                className="px-3 py-1 rounded-md hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
              >
                2
              </a>
              <span className="px-3 py-1">...</span>
              <a
                href="#"
                className="px-3 py-1 rounded-md hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
              >
                5
              </a>
              <a
                href="#"
                className="px-3 py-1 rounded-md border border-border dark:border-border-dark hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
              >
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
