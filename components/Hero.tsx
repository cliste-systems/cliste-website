"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  HERO_CARD_GRADIENT,
  HERO_NICHE_CARD_CLASS,
  HERO_NICHE_CARD_INNER_CLASS,
  HERO_NICHE_CTA_ROW_CLASS,
  HERO_PAGE_FRAME_INNER_CLASS,
  HERO_VIEWPORT_SHELL_CLASS,
} from "@/lib/site-layout";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll-to-section";
import { ColorBends } from "./ColorBends";
import { SiteHeader } from "./SiteHeader";
import { BlurredInfiniteSlider } from "./ui/infinite-slider";

function PartnerLogos() {
  const iconCls = "h-5 w-5 shrink-0 text-neutral-900 lg:h-6 lg:w-6";
  const labelCls =
    "whitespace-nowrap text-[15px] font-semibold tracking-tight text-neutral-900 lg:text-lg";

  const items: { label: string; icon: ReactNode }[] = [
    {
      label: "Encrypted",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Irish lines",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M7 3.5h3.2l1.2 3.2-1.8 1.3a11 11 0 0 0 5.4 5.4l1.3-1.8 3.2 1.2V16a2.5 2.5 0 0 1-2.5 2.5A13.5 13.5 0 0 1 4.5 6 2.5 2.5 0 0 1 7 3.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Live voice",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="19" cy="5" r="2" fill="currentColor" />
          <path
            d="M4 11v2M7 8v8M10 6v12M13 9v6M16 7v10"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "GDPR",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      ),
    },
    {
      label: "EU hosted",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="11"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M8 20h8M12 16v4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "99.95% uptime",
      icon: (
        <svg className={iconCls} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 13l4-4 4 4 5-7 5 9"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="hero-fade hero-fade-d6 flex w-full min-w-0 flex-col items-center overflow-hidden md:flex-row">
      <div className="hidden flex-shrink-0 md:block md:max-w-52 md:border-r md:border-neutral-200 md:pr-6 md:text-left">
        <p className="text-sm font-medium text-neutral-600">
          Trusted infrastructure, built for businesses.
        </p>
      </div>
      <div className="w-full min-w-0 overflow-hidden py-4 md:py-6 md:flex-1">
        <BlurredInfiniteSlider
          speedOnHover={20}
          speed={40}
          gap={72}
          fadeWidth={80}
        >
          {items.map(({ label, icon }) => (
            <div
              key={label}
              className="flex shrink-0 items-center gap-3 text-neutral-900"
            >
              {icon}
              <span className={labelCls}>{label}</span>
            </div>
          ))}
        </BlurredInfiniteSlider>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div
      className="min-h-0 bg-[#F8F9FB] text-neutral-900 antialiased selection:bg-indigo-200 selection:text-neutral-900 lg:bg-white"
    >
      <div
        className={cn(
          HERO_VIEWPORT_SHELL_CLASS,
          HERO_PAGE_FRAME_INNER_CLASS,
          "lg:mx-auto lg:max-w-[1920px] lg:min-h-0 lg:bg-white lg:p-6 lg:pt-8 lg:pb-0",
        )}
      >
        <div
          className={cn(
            HERO_NICHE_CARD_CLASS,
            "shadow-sm ring-black/[0.06] lg:min-h-[calc(100svh-12rem)] lg:max-h-[820px] lg:flex-none lg:rounded-[3.5rem]",
          )}
          style={{ background: HERO_CARD_GRADIENT }}
        >
            {/* Animated ColorBends: confined to the right pink area.
                Linear mask so left side stays original cream/white. */}
            <div
              aria-hidden
              className="hero-bg-wipe pointer-events-none absolute inset-0"
            >
              <ColorBends
                colors={["#e8eaee", "#cfd3da", "#8a8f99", "#3f4451", "#1c1f26"]}
                rotation={110}
                speed={0.18}
                scale={1.15}
                frequency={1.05}
                warpStrength={1.2}
                bandWidth={5}
                intensity={1.35}
                noise={0.06}
                iterations={2}
                mouseInfluence={0.25}
                parallax={0.2}
                transparent
                className="opacity-[0.68] mix-blend-soft-light sm:opacity-80 lg:opacity-90"
              />
            </div>

            {/* Desktop-only mask override: let the animation breathe wider on lg+ */}
            <style jsx>{`
              @media (min-width: 1024px) {
                .hero-bg-wipe {
                  -webkit-mask-image: linear-gradient(
                    100deg,
                    transparent 30%,
                    rgba(0, 0, 0, 0.55) 55%,
                    #000 80%
                  ) !important;
                  mask-image: linear-gradient(
                    100deg,
                    transparent 30%,
                    rgba(0, 0, 0, 0.55) 55%,
                    #000 80%
                  ) !important;
                }
              }
            `}</style>

            {/* One-shot diagonal sweep, desktop only (linear mask caused a harsh band on narrow viewports) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
              style={{
                WebkitMaskImage:
                  "linear-gradient(100deg, transparent 35%, rgba(0,0,0,0.6) 60%, #000 85%)",
                maskImage:
                  "linear-gradient(100deg, transparent 35%, rgba(0,0,0,0.6) 60%, #000 85%)",
              }}
            >
              <div
                className="hero-sweep absolute inset-y-0 left-0 w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                  filter: "blur(20px)",
                }}
              />
            </div>

            <svg
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <defs>
                <pattern
                  id="grid-pattern"
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
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            <div
              className={cn(
                HERO_NICHE_CARD_INNER_CLASS,
                "relative z-[2] lg:min-h-[calc(100svh-12rem)] lg:max-h-[820px]",
              )}
            >
              <SiteHeader animated homeScroll surface="hero" />

              <div className="z-10 mt-24 flex max-w-5xl flex-1 flex-col sm:mt-28 lg:mb-auto lg:mt-auto lg:flex-none">
                <h1
                  id="hero-heading"
                  className="hero-fade hero-fade-d3 font-display text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-br from-slate-950 via-slate-600 to-slate-300 sm:text-5xl lg:text-[7.5rem] lg:leading-[1.05] lg:pb-1.5"
                >
                  Your phone, always answered.
                </h1>
                <p className="hero-fade hero-fade-d4 mt-6 max-w-3xl text-base leading-relaxed text-neutral-800 lg:mt-8 lg:text-3xl lg:font-normal lg:leading-snug lg:tracking-tight">
                  Cara answers your business phone when you can&apos;t. Cara sounds
                  like a real person, and never misses a call.
                </p>
                <div className={HERO_NICHE_CTA_ROW_CLASS}>
                  <Link
                    href="/book"
                    className="flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-600 px-7 py-3 text-base font-normal text-white transition-colors hover:bg-slate-500 sm:w-auto"
                  >
                    Contact us
                  </Link>
                  <button
                    type="button"
                    onClick={() => scrollToSection("cara")}
                    className="flex w-full cursor-pointer items-center justify-center rounded-full bg-slate-500/10 px-7 py-3 text-base font-normal text-slate-900 transition-colors hover:bg-slate-500/15 sm:w-auto"
                  >
                    Hear it work
                  </button>
                </div>
              </div>
            </div>
        </div>

        {/* Partner strip — desktop only so mobile hero fills the viewport */}
        <div className="mt-4 hidden px-6 pb-3 sm:px-10 sm:pb-10 lg:block lg:mt-12 lg:px-20 lg:pb-8">
          <PartnerLogos />
        </div>
      </div>
    </div>
  );
}
