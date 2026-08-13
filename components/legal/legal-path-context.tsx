"use client";

import Link from "next/link";
import { createContext, useContext, type ReactNode } from "react";
import { APP_ORIGIN } from "@/lib/site-auth";

const LegalPathContext = createContext(false);

export function LegalPathProvider({ children }: { children: ReactNode }) {
  return (
    <LegalPathContext.Provider value={true}>{children}</LegalPathContext.Provider>
  );
}

export function useLegalPathVariant(): "public" {
  useContext(LegalPathContext);
  return "public";
}

export function resolveLegalHref(href: string): string {
  if (href.startsWith("/dashboard/")) {
    return `${APP_ORIGIN}${href}`;
  }
  return href;
}

export function LegalInlineLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "font-medium text-slate-900 underline-offset-2 hover:underline";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={resolveLegalHref(href)} className={className}>
      {children}
    </Link>
  );
}
