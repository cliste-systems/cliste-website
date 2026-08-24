import type { Metadata } from "next";

import { getSiteUrl } from "@/lib/site-url";

export type FaqItem = {
  question: string;
  answer: string;
};

/** Shared Open Graph / Twitter image (existing app icon). */
export const DEFAULT_OG_IMAGE = {
  url: "/icon.png",
  width: 512,
  height: 512,
  alt: "HelloCara - AI Voice Receptionist",
} as const;

/** Absolute canonical URL for a site path (`/` or `/retail`, etc.). */
export function canonicalPath(path: string): string {
  const base = getSiteUrl().replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? base : `${base}${normalized}`;
}

/** Per-page metadata: preserves title/description; adds canonical + OG/Twitter URLs. */
export function pageMetadata(opts: {
  path: string;
  title: string;
  description: string;
}): Metadata {
  const canonical = canonicalPath(opts.path);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: opts.title,
      description: opts.description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export function faqJsonLd(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
