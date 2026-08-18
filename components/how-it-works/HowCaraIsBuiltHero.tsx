import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { BgGradient } from "@/components/ui/bg-gredient";
import { HOW_CARA_IS_BUILT_HERO } from "@/lib/how-cara-is-built-copy";
import {
  HERO_NICHE_CARD_CLASS,
  HERO_NICHE_CARD_INNER_CLASS,
  HERO_NICHE_CONTENT_CLASS,
  HERO_NICHE_CTA_ROW_CLASS,
  HERO_NICHE_DIVIDER_CLASS,
  HERO_NICHE_HEADING_CLASS,
  HERO_NICHE_INTRO_CLASS,
  HERO_PAGE_FRAME_INNER_CLASS,
} from "@/lib/site-layout";

const HERO_BG = {
  gradientFrom: "#e2e8f0",
  gradientTo: "#ffffff",
  gradientPosition: "50% 110%",
  gradientSize: "120% 85%",
  gradientStop: "32%",
} as const;

export function HowCaraIsBuiltHero() {
  return (
    <header className="relative z-[1] flex min-h-0 w-full flex-1 flex-col text-slate-900">
      <div className={HERO_PAGE_FRAME_INNER_CLASS}>
        <div className={HERO_NICHE_CARD_CLASS}>
          <BgGradient {...HERO_BG} />

          <svg
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <pattern
                id="how-cara-built-grid-pattern"
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
            <rect
              width="100%"
              height="100%"
              fill="url(#how-cara-built-grid-pattern)"
            />
          </svg>

          <div className={HERO_NICHE_CARD_INNER_CLASS}>
            <SiteHeader animated surface="light" />

            <div className={HERO_NICHE_CONTENT_CLASS}>
              <div className="hero-fade hero-fade-d2 mb-5 flex flex-wrap items-center gap-2 sm:justify-start lg:justify-center">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                >
                  <Wrench className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  {HOW_CARA_IS_BUILT_HERO.eyebrow}
                </p>
              </div>

              <h1 id="how-cara-is-built-heading" className={HERO_NICHE_HEADING_CLASS}>
                <span className="block">{HOW_CARA_IS_BUILT_HERO.titleDark}</span>
                <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">
                  {HOW_CARA_IS_BUILT_HERO.titleGradient}
                </span>
              </h1>

              <p className={HERO_NICHE_INTRO_CLASS}>{HOW_CARA_IS_BUILT_HERO.intro}</p>

              <div className={HERO_NICHE_CTA_ROW_CLASS}>
                <Link
                  href="/book"
                  className="flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-600 px-7 py-3 text-base font-normal text-white transition-colors hover:bg-slate-500 sm:w-auto"
                >
                  {HOW_CARA_IS_BUILT_HERO.primaryCta}
                </Link>
                <Link
                  href="#completely-custom"
                  className="group flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-500/10 px-7 py-3 text-base font-normal text-slate-900 transition-all duration-300 hover:bg-slate-500/15 sm:w-auto sm:py-1.5 sm:pl-5 sm:pr-1.5"
                >
                  {HOW_CARA_IS_BUILT_HERO.secondaryCta}
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

        <div className={HERO_NICHE_DIVIDER_CLASS} aria-hidden>
          <div className="h-px min-h-px bg-slate-200" />
        </div>
      </div>
    </header>
  );
}
