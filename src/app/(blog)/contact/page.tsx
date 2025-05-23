import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | DevFolio",
  description: "Get in touch with me for collaborations, questions, or opportunities",
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-2xl">
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md border border-border dark:border-border-dark bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-md border border-border dark:border-border-dark bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this regarding?"
                className="w-full px-4 py-3 rounded-md border border-border dark:border-border-dark bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-md border border-border dark:border-border-dark bg-background dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div>
          <div className="bg-card dark:bg-card-dark rounded-lg border border-border dark:border-border-dark p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary dark:text-primary-dark">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark mt-1">
                    <a href="mailto:hello@example.com" className="hover:text-primary dark:hover:text-primary-dark">
                      hello@example.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 dark:bg-primary-dark/10 flex items-center justify-center text-primary dark:text-primary-dark">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark mt-1">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border dark:border-border-dark">
              <h3 className="font-medium mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-muted dark:bg-muted-dark flex items-center justify-center text-muted-foreground dark:text-muted-foreground-dark hover:text-foreground dark:hover:text-foreground-dark transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-muted dark:bg-muted-dark flex items-center justify-center text-muted-foreground dark:text-muted-foreground-dark hover:text-foreground dark:hover:text-foreground-dark transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-muted dark:bg-muted-dark flex items-center justify-center text-muted-foreground dark:text-muted-foreground-dark hover:text-foreground dark:hover:text-foreground-dark transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-card dark:bg-card-dark rounded-lg border border-border dark:border-border-dark p-8">
            <h3 className="text-xl font-bold mb-4">Availability</h3>
            <p className="text-muted-foreground dark:text-muted-foreground-dark">
              I'm currently available for freelance work and open to discussing new opportunities.
              My typical response time is within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
