// filepath: /Users/shaswatraj/Desktop/earn/devfolio/src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

// Sample featured posts
const featuredPosts = [
  {
    id: 'getting-started-with-typescript',
    title: 'Getting Started with TypeScript in 2025',
    excerpt: 'Learn how to set up and use TypeScript in your projects with this comprehensive guide for beginners.',
    date: 'May 18, 2025',
    readingTime: '5 min read',
    category: 'TypeScript',
  },
  {
    id: 'react-performance-tips',
    title: 'Top React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques to make your React applications blazing fast.',
    date: 'May 15, 2025',
    readingTime: '7 min read',
    category: 'React',
  },
  {
    id: 'nextjs-app-router-guide',
    title: 'Complete Guide to Next.js App Router',
    excerpt: 'Everything you need to know about the Next.js App Router architecture.',
    date: 'May 10, 2025',
    readingTime: '8 min read',
    category: 'Next.js',
  },
];

// Sample featured projects
const featuredProjects = [
  {
    id: 'portfolio-website',
    title: 'Developer Portfolio',
    description: 'A modern portfolio website built with Next.js and TailwindCSS',
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    image: '/projects/portfolio.jpg',
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    description: 'A full-stack task management application with authentication',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/task-app.jpg',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-primary dark:text-primary-dark">Developer</span> Blog & Portfolio
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground dark:text-muted-foreground-dark">
            Exploring web development, programming tips, and tech insights.
            Join me on this coding journey.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog" 
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Read Blog
            </Link>
            <Link 
              href="/projects" 
              className="px-6 py-3 rounded-md border border-border dark:border-border-dark hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Posts</h2>
            <Link 
              href="/blog" 
              className="text-primary dark:text-primary-dark hover:underline"
            >
              View all posts →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link 
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 bg-secondary dark:bg-secondary-dark">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
            <Link 
              href="/projects" 
              className="text-primary dark:text-primary-dark hover:underline"
            >
              View all projects →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`} 
                className="group block"
              >
                <div className="h-full border border-border dark:border-border-dark rounded-lg overflow-hidden bg-background dark:bg-background-dark transition-all group-hover:shadow-md dark:group-hover:shadow-gray-800">
                  <div className="aspect-video relative bg-muted dark:bg-muted-dark">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground dark:text-muted-foreground-dark">
                      Project Image
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-muted-foreground-dark mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 text-xs font-medium rounded-md bg-accent dark:bg-accent-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to the Newsletter</h2>
            <p className="text-muted-foreground dark:text-muted-foreground-dark">
              Get the latest articles and resources delivered straight to your inbox.
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-md border border-border dark:border-border-dark bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
