import type { Metadata } from "next";
import { PublicLegalShell } from "@/components/legal/PublicLegalShell";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy, terms, sub-processors and cookie information for the Cliste AI voice platform.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PublicLegalShell>{children}</PublicLegalShell>;
}
