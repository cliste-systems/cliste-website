import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { SubProcessorsDocument } from "@/content/legal/sub-processors-document";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/legal/sub-processors",
  title: "Sub-processors",
  description: `Sub-processor list for ${CLISTE_COMPANY.productName}.`,
});

export default function SubProcessorsPage() {
  return (
    <LegalDocumentBody>
      <SubProcessorsDocument variant="public" />
    </LegalDocumentBody>
  );
}
