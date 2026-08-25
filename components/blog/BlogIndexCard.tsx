import Link from "next/link";
import { formatBlogDate } from "@/lib/blog-posts";
import type { BlogPostMeta } from "@/lib/blog-types";

type BlogIndexCardProps = {
  post: BlogPostMeta;
};

export function BlogIndexCard({ post }: BlogIndexCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition hover:border-slate-300">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {formatBlogDate(post.publishedAt)}
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-900">
        <Link href={`/blog/${post.slug}`} className="hover:text-slate-700">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {post.description}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex text-sm font-medium text-slate-900 underline-offset-2 hover:underline"
      >
        Read more
      </Link>
    </article>
  );
}
