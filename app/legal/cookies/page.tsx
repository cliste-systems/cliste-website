import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { CookiesDocument } from "@/content/legal/cookies-document";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/legal/cookies",
  title: "Cookies",
  description: `What cookies and similar technologies ${CLISTE_COMPANY.productName} uses on the dashboard, login, and marketing site.`,
});

export default function CookiesPage() {
  return (
    <LegalDocumentBody>
      <CookiesDocument />
    </LegalDocumentBody>
  );
}
