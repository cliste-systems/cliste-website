import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { DpaDocument } from "@/content/legal/dpa-document";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/legal/dpa",
  title: "Data Processing Agreement",
  description: `GDPR Article 28 data processing agreement between ${CLISTE_COMPANY.legalName} (processor) and your business (controller).`,
});

export default function DpaPage() {
  return (
    <LegalDocumentBody>
      <DpaDocument />
    </LegalDocumentBody>
  );
}
