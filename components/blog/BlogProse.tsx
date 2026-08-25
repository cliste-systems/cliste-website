import type { ReactNode } from "react";

export function BlogProse({ children }: { children: ReactNode }) {
  return (
    <div className="blog-prose space-y-5 text-[15px] leading-relaxed text-slate-700 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-slate-900 [&_h2:first-child]:mt-0 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-slate-900 [&_li]:pl-1 [&_p+p]:mt-5 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}
