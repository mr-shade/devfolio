import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | DevFolio",
  description: "Get in touch with me for collaborations, questions, or opportunities",
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <PageHeader
        title="Contact Me"
        description="Feel free to reach out for collaborations, questions, or just to say hello!"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <div className="text-muted-foreground dark:text-muted-foreground-dark space-y-4">
              <div className="flex items-start">
                <div className="shrink-0 mt-1 mr-3 p-2 bg-secondary dark:bg-secondary-dark rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground dark:text-foreground-dark">Email</p>
                  <a href="mailto:contact@devfolio.dev" className="text-sm hover:text-primary dark:hover:text-primary-dark transition-colors">
                    contact@devfolio.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="shrink-0 mt-1 mr-3 p-2 bg-secondary dark:bg-secondary-dark rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground dark:text-foreground-dark">Location</p>
                  <p className="text-sm">San Francisco, California</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary dark:bg-secondary-dark hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 rounded-md transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary dark:bg-secondary-dark hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 rounded-md transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary dark:bg-secondary-dark hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 rounded-md transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary dark:bg-secondary-dark hover:bg-secondary/80 dark:hover:bg-secondary-dark/80 rounded-md transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12c0 2.1 1.7 3.82 3.8 3.82h16.4c2.1 0 3.8-1.71 3.8-3.82V4.94c0-2.1-1.7-3.82-3.8-3.82H3.8C1.7 1.12 0 2.84 0 4.94zm9.14 12.33c-.72.72-1.58.9-3.8.9H2.7v-8.92h2.65c2.15 0 2.99.18 3.7.9.58.58.7 1.05.7 3.6 0 2.53-.12 3-1.06 3.53zm7.7 0c-.4.4-.9.61-2.3.61h-1.45v-9.03h1.5c1.35 0 1.8.19 2.22.69.5.59.6 1.26.6 3.86 0 2.38-.1 3.25-.57 3.87zm4.46-4.89v3.87l.23.23h1.4v-8.97h-1.4c-.33 2.62-.57 4.3-.23 4.87z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="bg-secondary/50 dark:bg-secondary-dark/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
            <ul className="space-y-2 text-muted-foreground dark:text-muted-foreground-dark">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
