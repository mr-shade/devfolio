import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

type Props = {
  title: string;
  description?: string;
  backLink?: string;
  backLinkText?: string;
};

export default function PageHeader({
  title,
  description,
  backLink,
  backLinkText = 'Back',
}: Props) {
  return (
    <div className="mb-12">
      {backLink && (
        <Link
          href={backLink}
          className="inline-flex items-center mb-4 text-sm text-muted-foreground dark:text-muted-foreground-dark hover:text-foreground dark:hover:text-foreground-dark transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-1 rotate-180"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clipRule="evenodd"
            />
          </svg>
          {backLinkText}
        </Link>
      )}
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      
      {description && (
        <p className="text-xl text-muted-foreground dark:text-muted-foreground-dark max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
