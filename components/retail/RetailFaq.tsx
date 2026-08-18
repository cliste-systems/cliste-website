import { RETAIL_FAQ_INTRO } from "@/lib/retail-copy";
import { RETAIL_FAQS } from "@/lib/retail-faq";
import {
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_GRID,
  RETAIL_SECTION_INTRO_TITLE,
  SECTION_CONTENT_INSET,
} from "@/lib/site-layout";
import { RetailFaqAccordion } from "./RetailFaqAccordion";

export function RetailFaq() {
  return (
    <section
      aria-labelledby="retail-faq-heading"
      className="relative w-full bg-white text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className={RETAIL_SECTION_INTRO_GRID}>
          <h2 id="retail-faq-heading" className={RETAIL_SECTION_INTRO_TITLE}>
            <span className="text-slate-900">{RETAIL_FAQ_INTRO.titleDark}</span>
            <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
              {RETAIL_FAQ_INTRO.titleGradient}
            </span>
          </h2>
        </div>

        <div className={SECTION_CONTENT_INSET}>
          <RetailFaqAccordion faqs={RETAIL_FAQS} />
        </div>
      </div>
    </section>
  );
}
