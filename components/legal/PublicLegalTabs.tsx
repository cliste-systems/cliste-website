"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { PUBLIC_LEGAL_PAGES } from "@/lib/legal-pages";
import { cn } from "@/lib/utils";

const TAB_SPRING = {
  type: "spring" as const,
  stiffness: 420,
  damping: 32,
};

export function PublicLegalTabs() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

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
              "relative flex min-w-[4.75rem] flex-1 items-center justify-center rounded-full px-2.5 py-2 text-center text-xs font-medium whitespace-nowrap transition-colors duration-200 sm:min-w-0 sm:px-3 sm:text-sm",
              active
                ? "text-white"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
            )}
          >
            {active &&
              (reduceMotion ? (
                <span className="absolute inset-0 rounded-full bg-slate-900 shadow-sm" />
              ) : (
                <motion.span
                  layoutId="legal-tab-pill"
                  className="absolute inset-0 rounded-full bg-slate-900 shadow-sm"
                  transition={TAB_SPRING}
                />
              ))}
            <span className="relative z-[1]">{page.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
