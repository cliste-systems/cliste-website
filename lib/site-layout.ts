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
