import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SITE_FRAME_CLASS } from "@/lib/site-layout";

type BlogCtaProps = {
  title?: string;
  body?: string;
  button?: string;
};

const DEFAULT_COPY = {
  title: "Want to see how it works?",
  body: "Book a call and we will walk you through a real shop setup.",
  button: "Book a call",
} as const;

export function BlogCta({
  title = DEFAULT_COPY.title,
  body = DEFAULT_COPY.body,
  button = DEFAULT_COPY.button,
}: BlogCtaProps = {}) {
  return (
    <section className="mt-14 rounded-2xl border border-slate-200 bg-[#F8F9FB] p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{body}</p>
        </div>
        <Link
          href="/book"
          className="group inline-flex w-full shrink-0 items-center justify-center rounded-full border border-slate-300/90 bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-md sm:w-auto"
        >
          {button}
          <span className="ml-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
          </span>
        </Link>
      </div>
    </section>
  );
}

type BlogShellProps = {
  children: React.ReactNode;
};

export function BlogShell({ children }: BlogShellProps) {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <div className={`${SITE_FRAME_CLASS} px-4 pb-24 pt-10 sm:px-6 sm:pt-14 lg:px-8`}>
        {children}
      </div>
      <Footer />
    </main>
  );
}
