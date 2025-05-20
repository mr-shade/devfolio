"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className={`max-w-2xl transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-accent dark:bg-accent-dark inline-block mb-6">
              Developer Blog & Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-primary dark:text-primary-dark">Dev</span>Folio
            </h1>
            <p className="text-xl text-muted-foreground dark:text-muted-foreground-dark mb-8">
              A modern blog and portfolio for developers, featuring articles on web development, 
              programming tutorials, and showcase of innovative projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/blog" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-md transition-colors"
              >
                Read Articles
              </Link>
              <Link 
                href="/projects" 
                className="px-6 py-3 bg-secondary dark:bg-secondary-dark hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 text-secondary-foreground dark:text-secondary-foreground-dark font-medium rounded-md border border-border dark:border-border-dark transition-colors"
              >
                Explore Projects
              </Link>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-xl opacity-30 dark:opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-background dark:bg-background-dark rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 relative">
                  <Image
                    src="/globe.svg"
                    alt="Developer illustration"
                    fill
                    className="object-contain dark:invert"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
