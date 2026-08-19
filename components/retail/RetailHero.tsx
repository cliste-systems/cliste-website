"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Store } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import { BgGradient } from "@/components/ui/bg-gredient";
import { RETAIL_HERO } from "@/lib/retail-copy";
import {
  HERO_NICHE_CARD_CLASS,
  HERO_NICHE_CARD_INNER_CLASS,
  HERO_NICHE_CONTENT_CLASS,
  HERO_NICHE_CTA_ROW_CLASS,
  HERO_NICHE_DIVIDER_CLASS,
  HERO_NICHE_EYEBROW_CLASS,
  HERO_NICHE_HEADING_CLASS,
  HERO_NICHE_INTRO_CLASS,
  HERO_NICHE_TITLE_GRADIENT_CLASS,
  HERO_PAGE_FRAME_INNER_CLASS,
} from "@/lib/site-layout";

/** 21st.dev-style radial: soft grey at bottom → white at top */
const RETAIL_HERO_BG = {
  gradientFrom: "#e2e8f0",
  gradientTo: "#ffffff",
  gradientPosition: "50% 110%",
  gradientSize: "120% 85%",
  gradientStop: "32%",
} as const;

const ROTATING_WORDS = RETAIL_HERO.rotatingWords;

export function RetailHero() {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % ROTATING_WORDS.length);
    }, 2800);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <header className="relative z-[1] flex min-h-0 w-full flex-1 flex-col text-slate-900">
      <div className={HERO_PAGE_FRAME_INNER_CLASS}>
        <div className={HERO_NICHE_CARD_CLASS}>
          <BgGradient {...RETAIL_HERO_BG} />

          <svg
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <pattern
                id="retail-grid-pattern"
                x="50%"
                y="0"
                width="256"
                height="256"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 128 124 L 128 132 M 124 128 L 132 128"
                  fill="none"
                  stroke="black"
                  strokeOpacity="0.1"
                  strokeWidth="1.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#retail-grid-pattern)" />
          </svg>

          <div className={HERO_NICHE_CARD_INNER_CLASS}>
            <SiteHeader animated surface="light" />

            <div className={HERO_NICHE_CONTENT_CLASS}>
              <div className={HERO_NICHE_EYEBROW_CLASS}>
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                >
                  <Store className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  {RETAIL_HERO.eyebrow}
                </p>
              </div>

              <h1 id="retail-hero-heading" className={HERO_NICHE_HEADING_CLASS}>
                <span className="hidden text-slate-900 lg:block">
                  {RETAIL_HERO.titleDark}
                </span>
                <span className="block lg:hidden">
                  {RETAIL_HERO.titleMobileLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
                {reduceMotion ? (
                  <span className={HERO_NICHE_TITLE_GRADIENT_CLASS}>
                    {RETAIL_HERO.titleGradient}
                  </span>
                ) : (
                  <>
                    <span className="mt-2 block text-slate-600">
                      Even when you&apos;re
                    </span>
                    <span
                      className="relative mt-1 block h-[1.15em] w-full overflow-hidden sm:mt-2"
                      aria-live="polite"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={ROTATING_WORDS[wordIndex]}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute inset-x-0 block bg-clip-text font-semibold text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400"
                        >
                          {ROTATING_WORDS[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </>
                )}
              </h1>

              <p className={`${HERO_NICHE_INTRO_CLASS} lg:hidden`}>
                {RETAIL_HERO.introMobileLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className={`${HERO_NICHE_INTRO_CLASS} hidden lg:block`}>
                {RETAIL_HERO.intro}
              </p>

              <div className={HERO_NICHE_CTA_ROW_CLASS}>
                <Link
                  href="/book"
                  className="flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-600 px-7 py-3 text-base font-normal text-white transition-colors hover:bg-slate-500 sm:w-auto"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={HERO_NICHE_DIVIDER_CLASS} aria-hidden>
          <div className="h-px min-h-px bg-slate-200" />
        </div>
      </div>
    </header>
  );
}
