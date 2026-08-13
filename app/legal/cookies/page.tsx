import type { Metadata } from "next";
import { LegalDocumentBody } from "@/components/legal/legal-document";
import { CookiesDocument } from "@/content/legal/cookies-document";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "What cookies and similar technologies Cliste uses on the dashboard, login, and marketing site.",
};

export default function CookiesPage() {
  return (
    <LegalDocumentBody>
      <CookiesDocument />
    </LegalDocumentBody>
  );
}
