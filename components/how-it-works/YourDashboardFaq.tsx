import {
  YOUR_DASHBOARD_FAQ_INTRO,
  YOUR_DASHBOARD_FAQS,
} from "@/lib/your-dashboard-copy";
import {
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_TITLE,
  SECTION_CONTENT_INSET,
} from "@/lib/site-layout";
import { RetailFaqAccordion } from "@/components/retail/RetailFaqAccordion";

export function YourDashboardFaq() {
  return (
    <section
      id="questions"
      aria-labelledby="your-dashboard-faq-heading"
      className="relative w-full scroll-mt-24 bg-[#F8F9FB] text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <h2
          id="your-dashboard-faq-heading"
          className={`${RETAIL_SECTION_INTRO_TITLE} px-2 sm:px-4 lg:px-6`}
        >
          {YOUR_DASHBOARD_FAQ_INTRO.heading}
        </h2>

        <div className={`${SECTION_CONTENT_INSET} mt-8`}>
          <RetailFaqAccordion faqs={YOUR_DASHBOARD_FAQS} />
        </div>
      </div>
    </section>
  );
}
