import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import {
  SECTION_CONTENT_INSET,
  SECTION_INTRO_DESC,
  SECTION_INTRO_GRID,
  SECTION_INTRO_TITLE,
  SITE_FRAME_CLASS,
} from "@/lib/site-layout";

const STUDIO_HAIRLINE_RULE =
  "h-px min-h-px w-[calc(100%+2rem)] max-w-none shrink-0 bg-slate-200 -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6 lg:w-[calc(100%+4rem)] lg:-mx-8";

const RETAIL_POINTS = [
  "Overflow answering",
  "After-hours calls",
  "Action Inbox",
] as const;

const MOBILE_RETAIL_IMAGE = "/cara-retail-mobile.png";

export function ClisteStudioSection() {
  return (
    <section
      aria-labelledby="cara-retail-heading"
      className="relative w-full overflow-x-clip bg-[#F8F9FB] pb-0 text-slate-900"
    >
      <div
        className={`relative min-w-0 ${SITE_FRAME_CLASS} px-4 pt-[70px] sm:px-6 sm:pt-[80px] md:pt-[90px] lg:px-8 lg:pt-[110px]`}
      >
        <div className={SECTION_INTRO_GRID}>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span
                aria-hidden
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white/80 text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
              >
                <Store className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                Built for retail
              </p>
            </div>
            <h2
              id="cara-retail-heading"
              className={SECTION_INTRO_TITLE}
            >
              <span className="flex flex-wrap items-baseline gap-2.5 sm:gap-3">
                <span className="text-slate-900">Cara </span>
                <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
                  for retail.
                </span>
                <span
                  className="inline-flex shrink-0 select-none items-center rounded-full border border-slate-300/90 bg-white/80 px-2.5 py-0.5 font-sans text-[0.7rem] font-medium tracking-wide text-slate-500 shadow-sm"
                  title="In beta"
                >
                  beta
                </span>
              </span>
            </h2>
          </div>
          <p
            className={`${SECTION_INTRO_DESC} [text-wrap:wrap] [&>span]:block`}
          >
            <span>Your team is with customers.</span>
            <span>Cara answers in an Irish voice.</span>
            <span>Follow-ups land in your Action Inbox.</span>
          </p>
        </div>

        <div className={SECTION_CONTENT_INSET}>
          <Link
            href="/retail"
            className="group relative block min-w-0 w-full cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_60px_-30px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80 transition duration-500 hover:shadow-[0_24px_70px_-28px_rgba(15,23,42,0.22)] lg:rounded-[3rem]"
            aria-label="Cara for retail"
          >
            {/* Mobile: sharp full-bleed photo, no duplicate copy */}
            <div className="sm:hidden">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={MOBILE_RETAIL_IMAGE}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="100vw"
                  priority={false}
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-sm font-semibold text-slate-900">
                  See how it works for retail
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight
                    className="size-4"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
              </div>
            </div>

            {/* Desktop: text overlay on wide hero */}
            <div className="relative hidden sm:block sm:aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src="/cara-retail-hero.png"
                alt=""
                fill
                className="object-cover object-left"
                sizes="(max-width: 1024px) 100vw, 1280px"
                priority={false}
              />

              <div className="absolute inset-0 z-[1] flex flex-col justify-center p-10 lg:p-14 xl:p-16">
                <div className="max-w-xl lg:max-w-lg xl:max-w-xl">
                  <h3 className="font-display text-4xl font-semibold tracking-tight text-slate-900 lg:text-[2.75rem] lg:leading-[1.12]">
                    Every call answered.
                    <span className="mt-1 block text-slate-700">
                      Even when you&apos;re with a customer.
                    </span>
                  </h3>
                  <div
                    aria-hidden
                    className="mt-4 h-px w-10 bg-gradient-to-r from-slate-500/90 via-slate-400/80 to-transparent"
                  />
                  <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
                    Forward when you&apos;re busy or closed. Cara runs the call,
                    captures what the caller needs, and sends your team the right
                    next step, not another voicemail.
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {RETAIL_POINTS.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-slate-200/90 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-8 inline-flex items-center text-sm font-semibold text-slate-900">
                    See how it works for retail
                    <span className="ml-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/90 bg-white/80 text-slate-900 shadow-sm transition-all duration-300 group-hover:translate-x-1.5 group-hover:border-slate-400 group-hover:bg-white">
                      <ArrowRight
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="-mt-px w-full min-w-0 bg-[#F8F9FB] pt-16 pb-2 sm:pt-20 sm:pb-3 lg:pt-24">
        <div
          className={`relative min-w-0 ${SITE_FRAME_CLASS} px-4 sm:px-6 lg:px-8`}
        >
          <div className={`min-w-0 ${STUDIO_HAIRLINE_RULE}`} aria-hidden />
        </div>
      </div>
    </section>
  );
}
