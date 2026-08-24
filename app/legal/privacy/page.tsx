import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { PrivacyNoticeDocument } from "@/content/legal/privacy-document";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/legal/privacy",
  title: "Privacy notice",
  description: `How ${CLISTE_COMPANY.legalName} processes business and caller personal data for the ${CLISTE_COMPANY.productName} AI voice inbox platform.`,
});

export default function PrivacyPage() {
  return (
    <LegalDocumentBody>
      <PrivacyNoticeDocument />
    </LegalDocumentBody>
  );
}
