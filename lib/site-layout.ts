/**
 * Main hero card shell (same 128deg ramp as `Hero`). Used for Cara portrait
 * underlay so Cara’s panel matches the top-of-page brand instead of flat black.
 */
export const HERO_CARD_GRADIENT =
  "linear-gradient(128deg, #fcfcfd 0%, #f5f6f8 16%, #e8eaee 32%, #cfd3da 50%, #8a8f99 72%, #3f4451 88%, #1c1f26 100%)" as const;

/** Light card shell for niche landing pages (retail, verticals, etc.) */
export const NICHE_HERO_GRADIENT =
  "linear-gradient(145deg, #fcfcfd 0%, #f7f8fa 24%, #eef1f5 52%, #e6eaef 82%, #dfe4eb 100%)" as const;

export const NICHE_PAGE_SHELL_CLASS =
  "mx-auto w-full max-w-[1920px] p-4 sm:p-6 lg:p-8" as const;

/** Shared content column: matches `PlatformOverview` and `CaraDemo` side rails */
export const SITE_FRAME_CLASS =
  "mx-auto w-[calc(100%-2rem)] max-w-[calc(1360px-2rem)] sm:w-[calc(100%-3rem)] sm:max-w-[calc(1360px-3rem)] lg:w-[calc(100%-4rem)] lg:max-w-[calc(1360px-4rem)]";

/** Niche pages: same width + padding as homepage section content rails */
export const NICHE_PAGE_FRAME_CLASS =
  `${SITE_FRAME_CLASS} px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8` as const;

/** Full-viewport hero shell (mobile + desktop niche pages) */
export const HERO_VIEWPORT_SHELL_CLASS =
  "bg-[#F8F9FB] flex min-h-[100svh] flex-col lg:min-h-[100svh]" as const;

/** Inner frame under the viewport shell — card grows on mobile */
export const HERO_PAGE_FRAME_INNER_CLASS =
  `${NICHE_PAGE_FRAME_CLASS} flex min-h-0 flex-1 flex-col pb-0` as const;

/** Rounded hero card — retail-style inset card filling mobile viewport */
export const HERO_NICHE_CARD_CLASS =
  "hero-bg-reveal relative flex w-full h-[calc(100svh-2rem)] max-h-[calc(100svh-2rem)] flex-col overflow-hidden rounded-[1.5rem] shadow-[0_1px_0_rgba(15,23,42,0.04)] ring-1 ring-slate-200/80 sm:h-[calc(100svh-3rem)] sm:max-h-[calc(100svh-3rem)] sm:rounded-[2rem] lg:h-auto lg:max-h-none lg:min-h-0 lg:flex-1 lg:rounded-[2.5rem]" as const;

export const HERO_NICHE_CARD_INNER_CLASS =
  "relative z-10 flex flex-1 flex-col px-6 py-8 sm:px-10 sm:py-12 lg:min-h-0 lg:flex-1 lg:px-20 lg:py-14" as const;

export const HERO_NICHE_CONTENT_CLASS =
  "z-10 mt-24 flex max-w-5xl flex-1 flex-col sm:mt-28 lg:mx-auto lg:mt-0 lg:flex lg:max-w-3xl lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:text-center" as const;

export const HERO_NICHE_HEADING_CLASS =
  "hero-fade hero-fade-d3 font-display text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-balance text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]" as const;

export const HERO_NICHE_INTRO_CLASS =
  "hero-fade hero-fade-d4 mt-6 max-w-3xl text-base leading-relaxed text-slate-600 lg:mt-8 lg:text-lg" as const;

export const HERO_NICHE_CTA_ROW_CLASS =
  "hero-fade hero-fade-d5 mt-8 flex w-full flex-col gap-4 sm:mt-12 sm:w-auto sm:flex-row lg:justify-center" as const;

export const HERO_NICHE_DIVIDER_CLASS =
  "mt-6 -mx-4 sm:mt-8 sm:-mx-6 lg:mt-10 lg:-mx-8" as const;

/** Scroll margin for post-hero SectionReveal blocks (home + retail) */
export const SECTION_REVEAL_ROOT_MARGIN = "0px 0px -12% 0px" as const;

/** Vertical padding around the 1px Cara↔Studio rule. */
export const STUDIO_HAIRLINE_INSET = "py-4 sm:py-5" as const;

/** More space *above* the 1px rule under Studio cards (line sits lower than the Cara interstitial by design). */
export const STUDIO_BOTTOM_HAIRLINE_INSET =
  "pt-24 pb-4 sm:pt-28 sm:pb-5" as const;

/** Shared section intro — Features9, Partners, Cara, retail, FAQ */
export const SECTION_SHELL_PAD =
  "px-4 pt-16 pb-14 sm:px-6 sm:pt-20 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-24" as const;

export const SECTION_INTRO_GRID =
  "mb-10 grid grid-cols-1 gap-6 px-2 sm:mb-14 sm:px-4 lg:mb-16 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-8 lg:px-6" as const;

export const SECTION_INTRO_TITLE =
  "font-display text-4xl font-semibold leading-[1.18] tracking-tight text-balance md:text-5xl" as const;

export const SECTION_INTRO_DESC =
  "max-w-xl text-balance text-muted-foreground lg:max-w-none lg:pt-1" as const;

export const SECTION_CONTENT_INSET = "px-2 sm:px-4 lg:px-6" as const;

/** Compact vertical rhythm for /retail sections below the hero */
export const RETAIL_SECTION_FRAME =
  `${SITE_FRAME_CLASS} px-4 pt-12 pb-10 sm:px-6 sm:pt-14 sm:pb-12 lg:px-8 lg:pt-16 lg:pb-14` as const;

export const RETAIL_SECTION_INTRO_GRID =
  "mb-6 grid grid-cols-1 gap-5 px-2 sm:mb-8 sm:px-4 lg:mb-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-6 lg:px-6" as const;

export const RETAIL_SECTION_INTRO_TITLE =
  "font-display text-3xl font-semibold leading-[1.18] tracking-tight text-balance sm:text-4xl" as const;

export const RETAIL_SECTION_SHELL =
  "overflow-hidden rounded-[1.5rem] bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_60px_-30px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 lg:rounded-[2rem]" as const;

export const RETAIL_ROW_DIVIDER =
  "mx-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent sm:mx-6 lg:mx-8" as const;
