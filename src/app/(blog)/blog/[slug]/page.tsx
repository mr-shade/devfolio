import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

// This would normally come from your CMS or API
const getPostData = (slug: string) => {
  // In a real app, fetch data from an API or CMS
  return {
    title: 'Getting Started with TypeScript in 2025',
    date: 'May 18, 2025',
    readingTime: '5 min read',
    author: {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    category: 'TypeScript',
    content: `
# Getting Started with TypeScript in 2025

TypeScript has become an essential tool for modern web development. As a superset of JavaScript, it adds static typing and other features that make code more robust and maintainable.

## Why TypeScript?

TypeScript offers several advantages over plain JavaScript:

- **Static typing**: Catch errors at compile time instead of runtime
- **Better tooling**: Enhanced IDE support with autocomplete and type checking
- **Improved maintainability**: Types serve as documentation
- **Safety at scale**: Safer refactoring in large codebases

## Setting Up a TypeScript Project

To get started with TypeScript, you'll need to set up a new project or add TypeScript to an existing one.

### Creating a New TypeScript Project

1. Initialize a new project:

\`\`\`bash
mkdir my-ts-project
cd my-ts-project
npm init -y
\`\`\`

2. Install TypeScript:

\`\`\`bash
npm install typescript --save-dev
\`\`\`

3. Create a TypeScript configuration file:

\`\`\`bash
npx tsc --init
\`\`\`

4. Configure your \`tsconfig.json\`:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
\`\`\`

## Basic TypeScript Examples

### Variables with Types

\`\`\`typescript
let userName: string = "John";
let userAge: number = 30;
let isActive: boolean = true;
\`\`\`

### Functions with Types

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Arrow function with types
const multiply = (a: number, b: number): number => a * b;
\`\`\`

### Interfaces

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
}

function createUser(user: User): void {
  console.log(\`Created user: \${user.name}\`);
}
\`\`\`

## Conclusion

TypeScript continues to evolve and improve, making it an invaluable tool for developers in 2025. By adding static typing to JavaScript, it helps catch errors early and improves code quality, especially in larger projects.

As you continue your TypeScript journey, you'll discover more advanced features like generics, utility types, and decorators that can further enhance your development experience.
    `,
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Web Development'],
    relatedPosts: [
      {
        id: 'typescript-generics',
        title: 'TypeScript Generics Explained',
      },
      {
        id: 'async-javascript',
        title: 'Understanding Asynchronous JavaScript',
      },
    ],
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostData(params.slug);
  
  return {
    title: `${post.title} | DevFolio Blog`,
    description: post.content.substring(0, 160),
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostData(params.slug);
  
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
                {post.relatedPosts.map((relatedPost) => (
                  <a 
                    key={relatedPost.id} 
                    href={`/blog/${relatedPost.id}`} 
                    className="block p-4 border border-border dark:border-border-dark rounded-lg hover:bg-secondary dark:hover:bg-secondary-dark transition-colors"
                  >
                    <h4 className="font-medium line-clamp-2">{relatedPost.title}</h4>
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
