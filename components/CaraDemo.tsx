"use client";

import { Headphones } from "lucide-react";
import { CaraVoicePlayer } from "@/components/CaraVoicePlayer";
import { cn } from "@/lib/utils";
import {
  SECTION_CONTENT_INSET,
  SECTION_INTRO_DESC,
  SECTION_INTRO_GRID,
  SECTION_INTRO_TITLE,
  SECTION_SHELL_PAD,
  SITE_FRAME_CLASS,
} from "@/lib/site-layout";

/** Same fold as Cara for retail section (mobile + desktop) */
const FOLD = "#F8F9FB";
const FOLD_RGB = "248, 249, 251";

const PROOF = [
  { label: "Accent", value: "Irish-native" },
  { label: "Delivery", value: "Human-sounding" },
  { label: "Ready", value: "Live in 48 hours" },
] as const;

export function CaraDemo() {
  return (
    <section
      id="cara"
      aria-labelledby="cara-engine-heading"
      className="relative w-full scroll-mt-6 overflow-hidden sm:scroll-mt-10"
      style={{ backgroundColor: FOLD }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* Mobile: anchor on cliff side (image is mostly white fog on the left) */}
        <img
          src="/cara-backdrop.png"
          alt=""
          className="absolute -right-[6%] top-0 h-[155%] w-[118%] max-w-none object-cover object-[100%_48%] opacity-100 [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_50%,rgba(0,0,0,0.75)_68%,rgba(0,0,0,0.25)_84%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_0%,black_50%,rgba(0,0,0,0.75)_68%,rgba(0,0,0,0.25)_84%,transparent_100%)] sm:hidden"
        />
        <img
          src="/cara-backdrop.png"
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover opacity-90 [object-position:100%_0%] sm:block"
        />
        {/* Mobile: white only behind header; bottom fade handled separately */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 12%, rgba(255,255,255,0.45) 22%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background: `linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 52%, rgba(${FOLD_RGB},0.18) 72%, rgba(${FOLD_RGB},0.55) 86%, ${FOLD} 100%)`,
          }}
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0) 22%, rgba(255,255,255,0) 100%)",
          }}
        />
        {/* Mobile bottom: soft blur + long fade into next section */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-[2] h-52 min-h-[38vh] backdrop-blur-[6px] [-webkit-mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_100%)] [mask-image:linear-gradient(to_top,black_0%,black_35%,transparent_100%)] sm:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-[3] h-56 min-h-[42vh] sm:hidden"
          style={{
            background: `linear-gradient(180deg, rgba(${FOLD_RGB},0) 0%, rgba(255,255,255,0.08) 38%, rgba(${FOLD_RGB},0.35) 62%, rgba(${FOLD_RGB},0.72) 82%, rgba(${FOLD_RGB},0.94) 94%, ${FOLD} 100%)`,
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-[2] hidden h-40 min-h-[20vh] sm:block md:min-h-[24vh]"
          style={{
            background: `linear-gradient(180deg, rgba(${FOLD_RGB},0) 0%, rgba(${FOLD_RGB},0.2) 30%, rgba(${FOLD_RGB},0.55) 65%, rgba(${FOLD_RGB},0.92) 90%, ${FOLD} 100%)`,
          }}
        />
      </div>

      <div className={`relative z-10 min-w-0 ${SITE_FRAME_CLASS}`}>
        <div className={cn(SECTION_SHELL_PAD, "pb-20 sm:pb-20 lg:pb-28")}>
          <div className={SECTION_INTRO_GRID}>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white/80 text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                >
                  <Headphones className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Meet Cara
                </p>
              </div>
              <h2 id="cara-engine-heading" className={SECTION_INTRO_TITLE}>
                <span className="text-slate-900">Hear Cara. Irish-native. </span>
                <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
                  Human-sounding.
                </span>
              </h2>
            </div>
            <p className={SECTION_INTRO_DESC}>
              Press play. This is Cara on your line, in an Irish accent.
              Unedited, unfiltered.
            </p>
          </div>

          <div className={SECTION_CONTENT_INSET}>
          <div
            className="relative overflow-hidden rounded-[20px] shadow-[0_24px_80px_-40px_rgba(15,23,42,0.1)] ring-1 ring-slate-900/[0.06] sm:rounded-[24px] lg:rounded-[28px]"
            style={{
              background:
                "linear-gradient(168deg, #fbf9f6 0%, #f3efe9 38%, #ebe4dc 100%)",
            }}
          >
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
              {/* Left: portrait; object-cover removes letterbox “white gaps” */}
              <div
                className="relative aspect-[5/4] w-full max-h-[min(52vh,360px)] overflow-hidden sm:max-h-none lg:aspect-auto lg:min-h-[560px]"
                style={{ background: "#f0e9e2" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/cara.png"
                  alt="Cara, the Cliste voice agent"
                  className="absolute inset-0 z-[1] h-full w-full object-cover object-[50%_22%] sm:object-[50%_35%] lg:object-center"
                />

                {/* Soft blend into copy column (warm, not pure white) */}
                <div
                  aria-hidden
                  className="absolute inset-y-0 right-0 z-[2] hidden w-40 lg:block"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(240,233,226,0) 0%, rgba(244,238,230,0.75) 55%, rgba(248,244,238,0.98) 100%)",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 z-[2] h-14 sm:h-28 lg:hidden"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(240,233,226,0) 0%, rgba(247,242,235,0.97) 100%)",
                  }}
                />

                {/* Voice-sample badge */}
                <div className="absolute bottom-3 left-3 z-[3] flex items-center gap-2 rounded-full border border-slate-300/50 bg-[#fbf7f1]/90 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] uppercase text-slate-600 shadow-sm backdrop-blur-sm sm:bottom-5 sm:left-5 sm:gap-2.5 sm:px-3 sm:py-1.5 sm:text-[11px] sm:tracking-[0.14em] lg:bottom-6 lg:left-6">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  />
                  Voice sample · Cliste AI
                </div>
              </div>

              {/* Right: player, same paper family, no hard white panel */}
              <div className="relative flex min-h-0 flex-col justify-start gap-3 border-t border-slate-800/[0.06] bg-gradient-to-b from-[#f9f5ef]/95 to-[#f3ede4]/90 p-4 text-slate-900 sm:gap-6 sm:p-6 md:gap-7 md:p-8 lg:h-full lg:justify-between lg:gap-12 lg:border-t-0 lg:border-l lg:border-slate-800/[0.05] lg:from-[#faf6f0] lg:to-[#f0e9e1] lg:p-10 xl:p-12">
                <CaraVoicePlayer />
              </div>
            </div>

            <dl className="grid grid-cols-3 gap-2 border-t border-slate-800/10 bg-[#e8e0d7]/35 px-3 py-4 sm:gap-0 sm:divide-x sm:divide-slate-800/10 sm:px-10 sm:py-7 lg:px-12">
              {PROOF.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={cn(
                    "flex min-w-0 flex-col text-center sm:text-left",
                    i === 0 && "sm:pr-5",
                    i === 1 && "sm:px-4",
                    i === 2 && "sm:pl-5",
                  )}
                >
                  <dt className="text-[9px] font-medium tracking-[0.16em] uppercase text-slate-500 sm:text-[11px] sm:tracking-[0.2em]">
                    {label}
                  </dt>
                  <dd className="mt-0.5 font-display text-[0.8rem] font-semibold leading-snug tracking-tight text-slate-900 sm:mt-1.5 sm:text-[1.05rem] sm:text-lg">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          </div>
        </div>
      </div>
      {/*
        Seals the seam into Cliste: gradients can leave a band of body white (#fff)
        at the section edge; this full-bleed fold sits above the backdrop layers.
      */}
      <div
        aria-hidden
        className="relative z-[8] h-10 w-full shrink-0 bg-gradient-to-b from-transparent to-[#F8F9FB] sm:h-6 sm:bg-[#F8F9FB]"
      />
    </section>
  );
}
