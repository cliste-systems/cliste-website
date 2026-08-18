import { HOW_CARA_WORKS_FAQ_INTRO, HOW_CARA_WORKS_FAQS } from "@/lib/how-cara-works-copy";
import {
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_TITLE,
  SECTION_CONTENT_INSET,
} from "@/lib/site-layout";
import { RetailFaqAccordion } from "@/components/retail/RetailFaqAccordion";

export function HowCaraWorksFaq() {
  return (
    <section
      id="questions"
      aria-labelledby="how-cara-works-faq-heading"
      className="relative w-full scroll-mt-24 bg-[#F8F9FB] text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <h2
          id="how-cara-works-faq-heading"
          className={`${RETAIL_SECTION_INTRO_TITLE} px-2 sm:px-4 lg:px-6`}
        >
          {HOW_CARA_WORKS_FAQ_INTRO.heading}
        </h2>

        <div className={`${SECTION_CONTENT_INSET} mt-8`}>
          <RetailFaqAccordion faqs={HOW_CARA_WORKS_FAQS} />
        </div>
      </div>
    </section>
  );
}
