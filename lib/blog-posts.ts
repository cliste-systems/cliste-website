import {
  AfterHoursShopPhonePost,
  afterHoursShopPhoneMeta,
} from "@/content/blog/after-hours-shop-phone";
import {
  MissedCallsSmallBusinessPost,
  missedCallsSmallBusinessMeta,
} from "@/content/blog/missed-calls-small-business";
import type { BlogPostEntry } from "@/lib/blog-types";

export const BLOG_INDEX_META = {
  title: "Blog",
  description:
    "Practical notes on shop phone lines, missed calls, and keeping customers in the loop.",
} as const;

const BLOG_POST_ENTRIES: BlogPostEntry[] = [
  {
    ...missedCallsSmallBusinessMeta,
    Post: MissedCallsSmallBusinessPost,
  },
  {
    ...afterHoursShopPhoneMeta,
    Post: AfterHoursShopPhonePost,
  },
];

export const blogPosts = [...BLOG_POST_ENTRIES].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export function getBlogPost(slug: string): BlogPostEntry | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatBlogDate(isoDate: string): string {
  const date = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat("en-IE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
