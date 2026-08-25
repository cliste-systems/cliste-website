import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { TermsDocument } from "@/content/legal/terms-document";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/legal/terms",
  title: "Terms of service",
  description: `Terms of service for ${CLISTE_COMPANY.productName}.`,
});

export default function TermsPage() {
  return (
    <LegalDocumentBody>
      <TermsDocument />
    </LegalDocumentBody>
  );
}
