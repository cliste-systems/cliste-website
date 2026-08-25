import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCta, BlogShell } from "@/components/blog/BlogShell";
import { ArticleJsonLd } from "@/components/seo/ArticleJsonLd";
import { blogPosts, formatBlogDate, getBlogPost } from "@/lib/blog-posts";
import { blogPostMetadata, canonicalPath } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return blogPostMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { Post } = post;
  const url = canonicalPath(`/blog/${post.slug}`);

  return (
    <BlogShell>
      <ArticleJsonLd
        headline={post.title}
        description={post.description}
        url={url}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />

      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        <Link href="/blog" className="hover:text-slate-800">
          Blog
        </Link>
      </p>

      <header className="mt-4 max-w-3xl">
        <p className="text-sm text-muted-foreground">
          {formatBlogDate(post.publishedAt)}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>
      </header>

      <article className="mt-10 max-w-3xl">
        <Post />
        <BlogCta />
      </article>
    </BlogShell>
  );
}
