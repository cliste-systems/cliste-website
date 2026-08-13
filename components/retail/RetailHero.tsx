"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { SiteHeader } from "@/components/SiteHeader";
import { BgGradient } from "@/components/ui/bg-gredient";
import { RETAIL_HERO } from "@/lib/retail-copy";
import { NICHE_PAGE_FRAME_CLASS } from "@/lib/site-layout";

/** 21st.dev-style radial: soft grey at bottom → white at top */
const RETAIL_HERO_BG = {
  gradientFrom: "#e2e8f0",
  gradientTo: "#ffffff",
  gradientPosition: "50% 110%",
  gradientSize: "120% 85%",
  gradientStop: "32%",
} as const;

const ROTATING_WORDS = RETAIL_HERO.rotatingWords;
const WORD_CYCLE_MS = 3200;

function RotatingHeroWord({
  activeIndex,
  reduceMotion,
}: {
  activeIndex: number;
  reduceMotion: boolean | null;
}) {
  const activeWord = ROTATING_WORDS[activeIndex] ?? ROTATING_WORDS[0];
  const wordClassName =
    "block whitespace-nowrap bg-clip-text font-semibold text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400";

  if (reduceMotion) {
    return <span className={wordClassName}>{activeWord}</span>;
  }

  return (
    <>
      {ROTATING_WORDS.map((word, index) => (
        <motion.span
          key={word}
          aria-hidden={activeIndex !== index}
          className={`absolute inset-x-0 top-0 ${wordClassName}`}
          initial={false}
          animate={
            activeIndex === index
              ? { y: 0, opacity: 1 }
              : {
                  y: activeIndex > index ? "-100%" : "100%",
                  opacity: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
          }}
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

export function RetailHero() {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const intervalId = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % ROTATING_WORDS.length);
    }, WORD_CYCLE_MS);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion]);

  return (
    <header className="relative z-[1] w-full bg-[#F8F9FB] text-slate-900 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
      <div
        className={`${NICHE_PAGE_FRAME_CLASS} pb-0 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col`}
      >
        <div className="hero-bg-reveal relative w-full overflow-hidden rounded-[1.5rem] shadow-[0_1px_0_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 sm:rounded-[2rem] lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:rounded-[2.5rem]">
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

          <div className="relative z-10 flex min-h-[560px] flex-col px-6 py-8 sm:min-h-[580px] sm:px-10 sm:py-12 lg:min-h-0 lg:flex-1 lg:px-20 lg:py-14">
            <SiteHeader animated surface="light" />

            <div className="z-10 mt-24 flex max-w-5xl flex-col sm:mt-28 lg:mx-auto lg:mt-0 lg:flex lg:max-w-3xl lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:text-center">
              <div className="hero-fade hero-fade-d2 mb-5 flex flex-wrap items-center gap-2 sm:justify-start lg:justify-center">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                >
                  <Store className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  {RETAIL_HERO.eyebrow}
                </p>
                <span className="inline-flex shrink-0 select-none items-center rounded-full border border-slate-300/90 bg-white px-2.5 py-0.5 font-sans text-[0.7rem] font-medium tracking-wide text-slate-500 shadow-sm">
                  beta
                </span>
              </div>

              <h1
                id="retail-hero-heading"
                className="hero-fade hero-fade-d3 font-display text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
              >
                <span className="hidden lg:block">{RETAIL_HERO.titleDark}</span>
                <span className="block lg:hidden">
                  {RETAIL_HERO.titleMobileLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
                <span className="mt-2 block text-slate-600">
                  Even when you&apos;re
                </span>
                <span className="relative mt-1 block min-h-[1.35em] w-full overflow-hidden text-[0.9em] sm:mt-2 sm:text-[0.95em] lg:mx-auto lg:max-w-md lg:text-[1em]">
                  <RotatingHeroWord
                    activeIndex={wordIndex}
                    reduceMotion={reduceMotion}
                  />
                </span>
              </h1>

              <p className="hero-fade hero-fade-d4 mt-6 max-w-3xl text-base leading-relaxed text-slate-600 lg:hidden">
                {RETAIL_HERO.introMobileLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="hero-fade hero-fade-d4 mt-6 hidden max-w-3xl text-base leading-relaxed text-slate-600 lg:mt-8 lg:block lg:text-lg">
                {RETAIL_HERO.intro}
              </p>

              <div className="hero-fade hero-fade-d5 mt-8 flex w-full flex-col gap-4 sm:mt-12 sm:w-auto sm:flex-row lg:justify-center">
                <Link
                  href="/book"
                  className="flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-600 px-7 py-3 text-base font-normal text-white transition-colors hover:bg-slate-500 sm:w-auto"
                >
                  Contact us
                </Link>
                <Link
                  href="/#cara"
                  className="group flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-500/10 px-7 py-3 text-base font-normal text-slate-900 transition-all duration-300 hover:bg-slate-500/15 sm:w-auto sm:py-1.5 sm:pl-5 sm:pr-1.5"
                >
                  Hear Cara
                  <span className="ml-2.5 hidden h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:ml-3 sm:flex sm:h-9 sm:w-9">
                    <ArrowRight
                      className="size-4"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 -mx-4 sm:mt-8 sm:-mx-6 lg:mt-10 lg:-mx-8" aria-hidden>
          <div className="h-px min-h-px bg-slate-200" />
        </div>
      </div>
    </header>
  );
}
