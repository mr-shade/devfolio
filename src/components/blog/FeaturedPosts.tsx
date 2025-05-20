"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  featured?: boolean;
  coverImage?: string;
};

type FeaturedPostsProps = {
  posts: Post[];
  title?: string;
  viewAllLink?: string;
};

export default function FeaturedPosts({ posts, title = "Featured Articles", viewAllLink = "/blog" }: FeaturedPostsProps) {
  // For animation staggering
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-12 md:py-16">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <article 
                className={`h-full border border-border dark:border-border-dark rounded-lg overflow-hidden bg-background dark:bg-background-dark transition-all duration-300 ${
                  hoveredIndex === index ? 'shadow-lg dark:shadow-gray-800/30 scale-[1.02]' : 'shadow dark:shadow-none'
                }`}
              >
                <div className="aspect-video relative bg-muted dark:bg-muted-dark overflow-hidden">
                  <Image
                    src={post.coverImage || `https://source.unsplash.com/featured/?${encodeURIComponent(post.category.toLowerCase())}`}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground dark:text-muted-foreground-dark mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
                    {post.date}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
