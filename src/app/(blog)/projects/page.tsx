import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | DevFolio",
  description: "Showcase of development projects and applications",
};

// Sample projects data
const projects = [
  {
    id: 'portfolio-website',
    title: 'Developer Portfolio',
    description: 'A modern portfolio website built with Next.js and TailwindCSS',
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'task-manager',
    title: 'Task Manager App',
    description: 'A full-stack task management application with authentication',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/task-app.jpg',
    featured: true,
  },
  {
    id: 'e-commerce-platform',
    title: 'E-commerce Platform',
    description: 'A complete e-commerce solution with product management, cart, and checkout',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Prisma'],
    image: '/projects/ecommerce.jpg',
    featured: false,
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description: 'Real-time weather information with location-based forecasts',
    tags: ['JavaScript', 'React', 'API Integration', 'CSS'],
    image: '/projects/weather.jpg',
    featured: false,
  },
  {
    id: 'markdown-editor',
    title: 'Markdown Editor',
    description: 'A feature-rich markdown editor with preview functionality',
    tags: ['TypeScript', 'React', 'CodeMirror', 'Marked'],
    image: '/projects/markdown.jpg',
    featured: false,
  },
  {
    id: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for tracking social media performance',
    tags: ['React', 'D3.js', 'Firebase', 'Material UI'],
    image: '/projects/dashboard.jpg',
    featured: false,
  },
];

// Categories derived from project tags
const categories = [
  { name: "All", count: projects.length },
  { name: "React", count: projects.filter(project => project.tags.includes('React')).length },
  { name: "TypeScript", count: projects.filter(project => project.tags.includes('TypeScript')).length },
  { name: "Next.js", count: projects.filter(project => project.tags.includes('Next.js')).length },
  { name: "Node.js", count: projects.filter(project => project.tags.includes('Node.js')).length },
];

export default function ProjectsPage() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-2xl">
          A collection of my development projects, experiments, and applications.
        </p>
      </div>

      {/* Filter and categories */}
      <div className="mb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              className="px-4 py-2 rounded-md border border-border dark:border-border-dark hover:bg-secondary dark:hover:bg-secondary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
            >
              {category.name}
              <span className="ml-2 text-sm bg-muted dark:bg-muted-dark rounded-full px-2 py-0.5">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group block"
          >
            <div className="h-full border border-border dark:border-border-dark rounded-lg overflow-hidden bg-background dark:bg-background-dark transition-all group-hover:shadow-md dark:group-hover:shadow-gray-800 group-hover:border-primary dark:group-hover:border-primary-dark group-hover:scale-[1.01] duration-200">
              <div className="aspect-video relative bg-muted dark:bg-muted-dark overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
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
  );
}
 