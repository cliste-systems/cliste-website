import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { CookiesDocument } from "@/content/legal/cookies-document";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/legal/cookies",
  title: "Cookies",
  description: `Cookie notice for the ${CLISTE_COMPANY.productName} website and dashboard.`,
});

export default function CookiesPage() {
  return (
    <LegalDocumentBody>
      <CookiesDocument />
    </LegalDocumentBody>
  );
}
