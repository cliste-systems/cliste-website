import {
  HOW_CARA_IS_BUILT_FAQ_INTRO,
  HOW_CARA_IS_BUILT_FAQS,
} from "@/lib/how-cara-is-built-copy";
import {
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_TITLE,
  SECTION_CONTENT_INSET,
} from "@/lib/site-layout";
import { RetailFaqAccordion } from "@/components/retail/RetailFaqAccordion";

export function HowCaraIsBuiltFaq() {
  return (
    <section
      id="questions"
      aria-labelledby="how-cara-is-built-faq-heading"
      className="relative w-full scroll-mt-24 bg-[#F8F9FB] text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className="px-2 sm:px-4 lg:px-6">
          <h2
            id="how-cara-is-built-faq-heading"
            className={RETAIL_SECTION_INTRO_TITLE}
          >
            {HOW_CARA_IS_BUILT_FAQ_INTRO.heading}
          </h2>
        </div>

        <div className={`${SECTION_CONTENT_INSET} mt-8`}>
          <RetailFaqAccordion faqs={HOW_CARA_IS_BUILT_FAQS} />
        </div>
      </div>
    </section>
  );
}
