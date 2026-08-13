import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { TermsDocument } from "@/content/legal/terms-document";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `Terms governing use of ${CLISTE_COMPANY.productName} operated by ${CLISTE_COMPANY.legalName}.`,
};

export default function TermsPage() {
  return (
    <LegalDocumentBody>
      <TermsDocument />
    </LegalDocumentBody>
  );
}
