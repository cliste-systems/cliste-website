import Link from "next/link";
import type { Metadata } from "next";
import { BlogIndexCard } from "@/components/blog/BlogIndexCard";
import { BlogShell } from "@/components/blog/BlogShell";
import { BLOG_INDEX_META, blogPosts } from "@/lib/blog-posts";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: BLOG_INDEX_META.title,
  description: BLOG_INDEX_META.description,
});

export default function BlogIndexPage() {
  return (
    <BlogShell>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        Blog
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        Notes on running a shop phone line.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Short, practical reads for Irish shop owners on missed calls, after-hours
        cover, and keeping customers in the loop.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogIndexCard key={post.slug} post={post} />
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        Looking for product detail? Start with{" "}
        <Link href="/how-cara-works" className="font-medium text-slate-900 underline-offset-2 hover:underline">
          how Cara works
        </Link>
        .
      </p>
    </BlogShell>
  );
}
