"use client";

import {
  SECTION_CONTENT_INSET,
  SECTION_INTRO_DESC,
  SECTION_INTRO_GRID,
  SECTION_INTRO_TITLE,
  SITE_FRAME_CLASS,
} from "@/lib/site-layout";
import { RETAIL_FAQS_HOMEPAGE } from "@/lib/retail-faq";
import { RetailFaqAccordion } from "@/components/retail/RetailFaqAccordion";

export function CaraRetailFaq() {
  return (
    <section
      aria-labelledby="cara-retail-faq-heading"
      className="relative w-full overflow-x-clip bg-[#F8F9FB] pb-0 text-slate-900"
    >
      <div
        className={`relative min-w-0 ${SITE_FRAME_CLASS} px-4 pt-[70px] sm:px-6 sm:pt-[80px] md:pt-[90px] lg:px-8 lg:pt-[110px]`}
      >
        <div className={SECTION_INTRO_GRID}>
          <div>
            <h2 id="cara-retail-faq-heading" className={SECTION_INTRO_TITLE}>
              <span className="text-slate-900">Common </span>
              <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
                questions.
              </span>
            </h2>
          </div>
          <p className={SECTION_INTRO_DESC}>
            Straight answers about how Cara works: setup, callers, and what
            happens after the phone rings.
          </p>
        </div>

        <div className={SECTION_CONTENT_INSET}>
          <RetailFaqAccordion faqs={RETAIL_FAQS_HOMEPAGE} />
        </div>
      </div>
    </section>
  );
}
