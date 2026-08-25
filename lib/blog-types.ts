import type { ComponentType } from "react";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
};

export type BlogPostEntry = BlogPostMeta & {
  Post: ComponentType;
};
