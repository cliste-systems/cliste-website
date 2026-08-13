import Link from "next/link";
import type { ReactNode } from "react";
import { ClisteLogo } from "@/components/ClisteLogo";
import { LegalPathProvider } from "@/components/legal/legal-path-context";
import { PublicLegalTabs } from "@/components/legal/PublicLegalTabs";
import { LegalContentTransition } from "@/components/legal/LegalContentTransition";
import { LoginLink } from "@/components/LoginLink";
import { CLISTE_COMPANY, companyRegistrationLine } from "@/lib/company-details";
import { APP_ORIGIN } from "@/lib/site-auth";
import { SITE_FRAME_CLASS } from "@/lib/site-layout";

type PublicLegalShellProps = {
  children: ReactNode;
};

export function PublicLegalShell({ children }: PublicLegalShellProps) {
  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 antialiased">
      <div className={`${SITE_FRAME_CLASS} px-4 sm:px-6 lg:px-8`}>
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 py-5 sm:py-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 rounded-lg transition-opacity hover:opacity-80"
            aria-label="Hello Cara home"
          >
            <ClisteLogo />
            <span className="truncate font-display text-lg font-semibold tracking-tight text-slate-900">
              Hello Cara
            </span>
          </Link>
          <LoginLink className="inline-flex h-10 shrink-0 items-center rounded-full bg-slate-900 px-5 text-sm font-medium text-white transition-colors hover:bg-slate-800">
            Log in
          </LoginLink>
        </header>

        <div className="py-5 sm:py-6">
          <PublicLegalTabs />
        </div>

        <LegalPathProvider>
          <main className="pb-4">
            <div className="rounded-[1.5rem] border border-slate-200/90 bg-white px-6 py-8 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:rounded-[2rem] sm:px-10 sm:py-10 lg:px-12 lg:py-12">
              <LegalContentTransition>{children}</LegalContentTransition>
            </div>
          </main>
        </LegalPathProvider>

        <footer className="space-y-2 border-t border-slate-200 py-8 text-center text-xs leading-relaxed text-slate-500 sm:py-10">
          <p>
            {companyRegistrationLine()} ·{" "}
            <a
            href={`mailto:${CLISTE_COMPANY.helloEmail}`}
            className="font-medium text-slate-700 underline-offset-2 hover:underline"
          >
            {CLISTE_COMPANY.helloEmail}
          </a>{" "}
          ·{" "}
          <a
            href={`mailto:${CLISTE_COMPANY.privacyEmail}`}
            className="font-medium text-slate-700 underline-offset-2 hover:underline"
          >
            {CLISTE_COMPANY.privacyEmail}
            </a>
          </p>
          <p>
            Signed in? Manage GDPR requests in your{" "}
            <a
              href={`${APP_ORIGIN}/dashboard/legal/data-requests`}
              className="font-medium text-slate-700 underline-offset-2 hover:underline"
            >
              dashboard Legal &amp; privacy
            </a>{" "}
            area.
          </p>
        </footer>
      </div>
    </div>
  );
}
