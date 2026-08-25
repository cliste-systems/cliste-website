import { articleJsonLd } from "@/lib/seo";

type ArticleJsonLdProps = {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
};

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  dateModified,
}: ArticleJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          articleJsonLd({
            headline,
            description,
            url,
            datePublished,
            dateModified,
          }),
        ),
      }}
    />
  );
}
