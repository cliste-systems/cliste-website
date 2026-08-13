import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { SubProcessorsDocument } from "@/content/legal/sub-processors-document";

export const metadata: Metadata = {
  title: "Sub-processors",
  description:
    "How Cliste uses third parties to run the platform — categories and transfer safeguards.",
};

export default function SubProcessorsPage() {
  return (
    <LegalDocumentBody>
      <SubProcessorsDocument variant="public" />
    </LegalDocumentBody>
  );
}
