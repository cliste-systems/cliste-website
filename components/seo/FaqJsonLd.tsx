import { faqJsonLd, type FaqItem } from "@/lib/seo";

type FaqJsonLdProps = {
  faqs: readonly FaqItem[];
};

export function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  if (faqs.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
    />
  );
}
