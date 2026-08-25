import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { DpaDocument } from "@/content/legal/dpa-document";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/legal/dpa",
  title: "Data Processing Agreement",
  description: `Data processing agreement for ${CLISTE_COMPANY.productName} business customers.`,
});

export default function DpaPage() {
  return (
    <LegalDocumentBody>
      <DpaDocument />
    </LegalDocumentBody>
  );
}
