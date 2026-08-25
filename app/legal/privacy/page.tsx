import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { PrivacyNoticeDocument } from "@/content/legal/privacy-document";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/legal/privacy",
  title: "Privacy notice",
  description: `Privacy notice for ${CLISTE_COMPANY.productName} business customers and callers.`,
});

export default function PrivacyPage() {
  return (
    <LegalDocumentBody>
      <PrivacyNoticeDocument />
    </LegalDocumentBody>
  );
}
