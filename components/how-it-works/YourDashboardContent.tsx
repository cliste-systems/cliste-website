import { SectionReveal } from "@/components/SectionReveal";
import { RetailCta } from "@/components/retail/RetailCta";
import {
  CARA_WRITES_IT_DOWN,
  IF_IT_NEEDS_YOU,
  SAME_PLACE_YOU_CHANGE_CARA,
  YOUR_DASHBOARD_CTA,
} from "@/lib/your-dashboard-copy";
import { HowCaraWorksBlock } from "./HowCaraWorksBlock";
import { YourDashboardFaq } from "./YourDashboardFaq";

export function YourDashboardContent() {
  return (
    <div className="relative w-full min-w-0">
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="cara-writes-it-down"
          headingId="cara-writes-it-down-heading"
          headingDark={CARA_WRITES_IT_DOWN.headingDark}
          headingGradient={CARA_WRITES_IT_DOWN.headingGradient}
          body={CARA_WRITES_IT_DOWN.body}
          imageSrc={CARA_WRITES_IT_DOWN.image.src}
          imageAlt={CARA_WRITES_IT_DOWN.image.alt}
          imageOn="right"
          tone="white"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="if-it-needs-you"
          headingId="if-it-needs-you-heading"
          headingDark={IF_IT_NEEDS_YOU.headingDark}
          headingGradient={IF_IT_NEEDS_YOU.headingGradient}
          body={IF_IT_NEEDS_YOU.body}
          imageSrc={IF_IT_NEEDS_YOU.image.src}
          imageAlt={IF_IT_NEEDS_YOU.image.alt}
          imageOn="left"
          tone="grey"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="change-cara"
          headingId="change-cara-heading"
          headingDark={SAME_PLACE_YOU_CHANGE_CARA.headingDark}
          headingGradient={SAME_PLACE_YOU_CHANGE_CARA.headingGradient}
          body={SAME_PLACE_YOU_CHANGE_CARA.body}
          imageSrc={SAME_PLACE_YOU_CHANGE_CARA.image.src}
          imageAlt={SAME_PLACE_YOU_CHANGE_CARA.image.alt}
          imageOn="right"
          tone="white"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <YourDashboardFaq />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailCta copy={YOUR_DASHBOARD_CTA} headingId="your-dashboard-cta" />
      </SectionReveal>
    </div>
  );
}
