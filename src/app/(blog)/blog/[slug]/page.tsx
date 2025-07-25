import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug } from "@/lib/devto";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

// Get post data from Dev.to API
async function getPostData(slug: string) {
  try {
    // Fetch article from Dev.to API
    const article = await getArticleBySlug(slug);
    
    // Return formatted article
    return {
      id: article.id,
      title: article.title,
      date: new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
      }),
      readingTime: `${Math.ceil(article.reading_time_minutes || 4)} min read`,
      author: {
        name: article.user?.name || 'Unknown Author',
        avatar: article.user?.profile_image || 'https://randomuser.me/api/portraits/men/32.jpg',
        username: article.user?.username || '',
      },
      category: article.tag_list?.[0] || 'General',
      content: article.body_html || '',
      tags: article.tag_list || [],
      coverImage: article.cover_image,
      url: article.url,
    };
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | DevFolio Blog',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | DevFolio Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostData(params.slug);
  
  // Handle not found case
  if (!post) {
    notFound();
  }
  
  return (
    <div className="py-12">
      {/* Breadcrumb */}
      <div className="mb-8">
        <div className="text-sm text-muted-foreground dark:text-muted-foreground-dark">
          <Link href="/" className="hover:text-primary dark:hover:text-primary-dark">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary dark:hover:text-primary-dark">Blog</Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </div>
      </div>
      
      {/* Post header */}
      <header className="mb-12">
        <div className="inline-block px-2 py-1 mb-4 text-xs font-medium rounded-md bg-secondary dark:bg-secondary-dark">
          {post.category}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        
        {/* Cover image if available */}
        {post.coverImage && (
          <div className="mb-8 aspect-video max-h-[500px] w-full relative rounded-lg overflow-hidden">
            <Image 
              src={post.coverImage} 
              alt={post.title}
              fill
              className="object-cover" 
              priority
            />
          </div>
        )}
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-muted dark:bg-muted-dark overflow-hidden">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="h-full w-full object-cover" 
              />
            </div>
            <span className="font-medium">{post.author.name}</span>
          </div>
          <span className="text-muted-foreground dark:text-muted-foreground-dark">•</span>
          <span className="text-muted-foreground dark:text-muted-foreground-dark">{post.date}</span>
          <span className="text-muted-foreground dark:text-muted-foreground-dark">•</span>
          <span className="text-muted-foreground dark:text-muted-foreground-dark">{post.readingTime}</span>
        </div>
      </header>
      
      {/* Post content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main content */}
        <div className="lg:col-span-3">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border dark:border-border-dark">
            <h3 className="text-lg font-medium mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 text-sm rounded-md bg-secondary dark:bg-secondary-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share */}
          <div className="mt-8 flex gap-4">
            <h3 className="text-lg font-medium">Share:</h3>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-foreground dark:hover:text-foreground-dark">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-foreground dark:hover:text-foreground-dark">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-foreground dark:hover:text-foreground-dark">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            {/* Table of contents would go here */}
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Table of Contents</h3>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                      Why TypeScript?
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                      Setting Up a TypeScript Project
                    </a>
                    <ul className="ml-4 mt-2 space-y-2">
                      <li>
                        <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                          Creating a New TypeScript Project
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                      Basic TypeScript Examples
                    </a>
                    <ul className="ml-4 mt-2 space-y-2">
                      <li>
                        <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                          Variables with Types
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                          Functions with Types
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                          Interfaces
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground dark:text-muted-foreground-dark hover:text-primary dark:hover:text-primary-dark">
                      Conclusion
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Related posts */}
            <div>
              <h3 className="text-lg font-medium mb-4">Related Posts</h3>
              <div className="space-y-4">
                {post.tags.map((tag) => (
                  <a 
                    key={tag} 
                    href={`/blog/tag/${tag}`} 
                    className="block p-4 border border-border dark:border-border-dark rounded-lg hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
                  >
                    <h4 className="font-medium line-clamp-2">{tag}</h4>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
