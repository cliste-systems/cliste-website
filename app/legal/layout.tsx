import type { Metadata } from "next";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { PublicLegalShell } from "@/components/legal/PublicLegalShell";

export const metadata: Metadata = {
  title: "Legal",
  description: `Privacy, terms, sub-processors and cookie information for ${CLISTE_COMPANY.productName}.`,
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicLegalShell>{children}</PublicLegalShell>;
}
