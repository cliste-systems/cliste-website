"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PUBLIC_LEGAL_PAGES } from "@/lib/legal-pages";
import { cn } from "@/lib/utils";

export function PublicLegalTabs() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Legal documents"
      className="no-scrollbar flex w-full items-stretch overflow-x-auto overflow-y-hidden rounded-full border border-slate-200/90 bg-white p-1 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
    >
      {PUBLIC_LEGAL_PAGES.map((page) => {
        const active = pathname === page.href;
        return (
          <Link
            key={page.href}
            href={page.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative flex min-w-[4.75rem] flex-1 items-center justify-center rounded-full px-2.5 py-2 text-center text-xs font-medium whitespace-nowrap transition-colors sm:min-w-0 sm:px-3 sm:text-sm",
              active
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            )}
          >
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}
