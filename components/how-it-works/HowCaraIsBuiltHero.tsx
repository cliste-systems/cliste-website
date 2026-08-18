import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { BgGradient } from "@/components/ui/bg-gredient";
import { HOW_CARA_IS_BUILT_HERO } from "@/lib/how-cara-is-built-copy";
import { NICHE_PAGE_FRAME_CLASS } from "@/lib/site-layout";

const HERO_BG = {
  gradientFrom: "#e2e8f0",
  gradientTo: "#ffffff",
  gradientPosition: "50% 110%",
  gradientSize: "120% 85%",
  gradientStop: "32%",
} as const;

export function HowCaraIsBuiltHero() {
  return (
    <header className="relative z-[1] w-full bg-[#F8F9FB] text-slate-900 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
      <div
        className={`${NICHE_PAGE_FRAME_CLASS} pb-0 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col`}
      >
        <div className="hero-bg-reveal relative w-full overflow-hidden rounded-[1.5rem] shadow-[0_1px_0_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 sm:rounded-[2rem] lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:rounded-[2.5rem]">
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

          <div className="relative z-10 flex min-h-[560px] flex-col px-6 py-8 sm:min-h-[580px] sm:px-10 sm:py-12 lg:min-h-0 lg:flex-1 lg:px-20 lg:py-14">
            <SiteHeader surface="light" />

            <div className="z-10 mt-24 flex max-w-5xl flex-col sm:mt-28 lg:mx-auto lg:mt-0 lg:flex lg:max-w-3xl lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:text-center">
              <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                {HOW_CARA_IS_BUILT_HERO.eyebrow}
              </p>

              <h1
                id="how-cara-is-built-heading"
                className="font-display text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
              >
                <span className="block">{HOW_CARA_IS_BUILT_HERO.titleDark}</span>
                <span className="mt-2 block bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">
                  {HOW_CARA_IS_BUILT_HERO.titleGradient}
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 lg:mt-8 lg:text-lg">
                {HOW_CARA_IS_BUILT_HERO.intro}
              </p>

              <div className="mt-8 flex w-full flex-col gap-4 sm:mt-12 sm:w-auto sm:flex-row lg:justify-center">
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

        <div className="mt-6 -mx-4 sm:mt-8 sm:-mx-6 lg:mt-10 lg:-mx-8" aria-hidden>
          <div className="h-px min-h-px bg-slate-200" />
        </div>
      </div>
    </header>
  );
}
