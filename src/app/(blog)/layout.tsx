import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {children}
    </div>
  );
}
