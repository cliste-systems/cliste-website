import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import {
  NICHE_PAGE_FRAME_CLASS,
  SECTION_CONTENT_INSET,
} from "@/lib/site-layout";

export type NicheHeroCta = {
  label: string;
  href: string;
};

export type NicheHeroProps = {
  id?: string;
  eyebrow: string;
  icon: LucideIcon;
  badge?: string;
  titleDark: string;
  titleGradient: string;
  intro?: readonly string[];
  imageSrc: string;
  imageMobileSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  imageDesktopPosition?: string;
  primaryCta: NicheHeroCta;
  secondaryCta?: NicheHeroCta;
};

/**
 * Niche landing hero: flat fold, nav + copy + image share one content column.
 */
export function NicheHero({
  id = "niche-hero-heading",
  eyebrow,
  icon: Icon,
  badge,
  titleDark,
  titleGradient,
  intro,
  imageSrc,
  imageMobileSrc,
  imageAlt = "",
  imagePosition = "center",
  imageDesktopPosition = "center",
  primaryCta,
  secondaryCta,
}: NicheHeroProps) {
  const mobileImage = imageMobileSrc ?? imageSrc;
  const desktopImage = imageSrc;

  return (
    <header className="relative w-full bg-[#F8F9FB] text-slate-900">
      <div
        className={`relative min-w-0 ${NICHE_PAGE_FRAME_CLASS} pb-12 sm:pb-16 lg:pb-20`}
      >
        <div className={SECTION_CONTENT_INSET}>
          <SiteHeader surface="light" className="py-4 sm:py-5" />

          <div className="pt-10 sm:pt-12 lg:pt-14">
            <div className="max-w-3xl">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span
                  aria-hidden
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-200/80 bg-white text-slate-600 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                  {eyebrow}
                </p>
                {badge ? (
                  <span className="inline-flex shrink-0 select-none items-center rounded-full border border-slate-300/90 bg-white px-2.5 py-0.5 font-sans text-[0.7rem] font-medium tracking-wide text-slate-500 shadow-sm">
                    {badge}
                  </span>
                ) : null}
              </div>

              <h1
                id={id}
                className="font-display text-[2.35rem] font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
              >
                <span className="text-slate-900">{titleDark} </span>
                <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
                  {titleGradient}
                </span>
              </h1>

              {intro?.length ? (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg [text-wrap:wrap] [&>span]:block">
                  {intro.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              ) : null}

              <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">
                <Link
                  href={primaryCta.href}
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
                >
                  {primaryCta.label}
                </Link>
                {secondaryCta ? (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-slate-300/90 bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 sm:w-auto"
                  >
                    {secondaryCta.label}
                    <ArrowRight
                      className="size-4"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="relative mt-8 sm:mt-10 lg:mt-12">
              <div className="relative h-[13.75rem] w-full overflow-hidden rounded-[1.25rem] shadow-[0_24px_80px_-40px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/90 sm:h-[15rem] sm:rounded-[1.75rem] lg:h-[20.5rem] lg:rounded-[2rem]">
                <Image
                  src={mobileImage}
                  alt={imageAlt}
                  fill
                  unoptimized
                  className="object-cover lg:hidden"
                  style={{ objectPosition: imagePosition }}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority
                />
                <Image
                  src={desktopImage}
                  alt={imageAlt}
                  fill
                  unoptimized
                  className="hidden object-cover lg:block"
                  style={{ objectPosition: imageDesktopPosition }}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${SECTION_CONTENT_INSET} mt-12 sm:mt-14 lg:mt-16`}>
          <div
            className="h-px min-h-px w-full bg-slate-200"
            aria-hidden
          />
        </div>
      </div>
    </header>
  );
}
