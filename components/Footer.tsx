"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ClisteLogo } from "@/components/ClisteLogo";
import { SITE_FRAME_CLASS } from "@/lib/site-layout";
import { CLISTE_COMPANY } from "@/lib/company-details";
import { CLISTE_TAGLINE } from "@/lib/site-copy";
import { APP_AUTHENTICATE_URL } from "@/lib/site-auth";

const currentYear = new Date().getFullYear();
const CONTACT_EMAIL = CLISTE_COMPANY.helloEmail;

const FOOTER_LINKS = {
  product: [
    { label: "Hear Cara", href: "/#cara" },
    { label: "How Cara works", href: "/how-cara-works" },
    { label: "How Cara is built", href: "/how-cara-is-built" },
    { label: "Cara for retail", href: "/#cara-retail-heading" },
    { label: "FAQ", href: "/#cara-retail-faq-heading" },
  ],
  company: [
    { label: "Contact", href: "/book" },
    { label: "Log in", href: APP_AUTHENTICATE_URL, external: true },
  ],
  legal: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "DPA", href: "/legal/dpa" },
    { label: "Cookies", href: "/legal/cookies" },
    { label: "Sub-processors", href: "/legal/sub-processors" },
  ],
} as const;

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm text-slate-700 transition-colors hover:text-slate-950"
              >
                {link.label}
                <ArrowUpRight
                  className="size-3.5 opacity-35 group-hover:opacity-60"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-sm text-slate-700 transition-colors hover:text-slate-950"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const pathname = usePathname();
  const showContactCta =
    pathname !== "/book" &&
    pathname !== "/" &&
    pathname !== "/retail" &&
    pathname !== "/how-cara-works" &&
    pathname !== "/how-cara-is-built";

  return (
    <footer id="contact" className="w-full border-t border-slate-200 bg-[#F8F9FB]">
      <div className={`${SITE_FRAME_CLASS} px-4 sm:px-6 lg:px-8`}>
        {showContactCta && (
          <div className="flex flex-col gap-5 border-b border-slate-200 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
            <div>
              <p className="font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                Ready to hear Cara on your line?
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Book a call with our team.
              </p>
            </div>
            <Link
              href="/book"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Book a demo
            </Link>
          </div>
        )}

        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] lg:gap-16 lg:py-16">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="HelloCara home"
            >
              <ClisteLogo />
              <span className="font-display text-lg font-semibold tracking-tight text-slate-900">
                HelloCara
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {CLISTE_TAGLINE}
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-950 hover:decoration-slate-500"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
            <FooterLinks title="Product" links={FOOTER_LINKS.product} />
            <FooterLinks title="Company" links={FOOTER_LINKS.company} />
            <FooterLinks title="Legal" links={FOOTER_LINKS.legal} />
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-200 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {CLISTE_COMPANY.legalName}</p>
          <p className="text-slate-400">GDPR compliant · EU-hosted · Donegal, Ireland</p>
        </div>
      </div>
    </footer>
  );
}
