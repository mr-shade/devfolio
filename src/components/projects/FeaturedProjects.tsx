"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
};

type FeaturedProjectsProps = {
  projects: Project[];
  title?: string;
  viewAllLink?: string;
};

export default function FeaturedProjects({ 
  projects, 
  title = "Featured Projects", 
  viewAllLink = "/projects" 
}: FeaturedProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-12 md:py-16 bg-secondary/50 dark:bg-secondary-dark/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <Link 
            href={viewAllLink}
            className="text-primary dark:text-primary-dark hover:underline font-medium text-sm flex items-center"
          >
            View all
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/projects/${project.id}`}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`h-full border border-border dark:border-border-dark rounded-lg overflow-hidden bg-background dark:bg-background-dark transition-all duration-300 ${
                  hoveredIndex === index ? 
                    'shadow-xl dark:shadow-gray-800/30 border-primary dark:border-primary-dark' : 
                    'shadow dark:shadow-none'
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-2/5 aspect-video md:aspect-auto relative bg-muted dark:bg-muted-dark overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground dark:text-muted-foreground-dark mb-4">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-accent dark:bg-accent-dark"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
