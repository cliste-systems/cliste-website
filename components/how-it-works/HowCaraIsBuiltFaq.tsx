import Link from "next/link";
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
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            {HOW_CARA_IS_BUILT_FAQ_INTRO.desc}{" "}
            {HOW_CARA_IS_BUILT_FAQ_INTRO.worksNote}{" "}
            <Link
              href={HOW_CARA_IS_BUILT_FAQ_INTRO.worksHref}
              className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-2 transition-colors hover:decoration-slate-500"
            >
              {HOW_CARA_IS_BUILT_FAQ_INTRO.worksLinkLabel}
            </Link>
            .{" "}
            {HOW_CARA_IS_BUILT_FAQ_INTRO.retailNote}{" "}
            <Link
              href={HOW_CARA_IS_BUILT_FAQ_INTRO.retailHref}
              className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-2 transition-colors hover:decoration-slate-500"
            >
              {HOW_CARA_IS_BUILT_FAQ_INTRO.retailLinkLabel}
            </Link>
            .
          </p>
        </div>

        <div className={`${SECTION_CONTENT_INSET} mt-8`}>
          <RetailFaqAccordion faqs={HOW_CARA_IS_BUILT_FAQS} />
        </div>
      </div>
    </section>
  );
}
