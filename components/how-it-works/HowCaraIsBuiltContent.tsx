import { SectionReveal } from "@/components/SectionReveal";
import { RetailCta } from "@/components/retail/RetailCta";
import {
  BUILT_CUSTOM,
  BUILT_DASHBOARD,
  BUILT_DASHBOARD_CONTINUE,
  BUILT_FROM,
  BUILT_LINE,
  BUILT_TICKETS,
  HOW_CARA_IS_BUILT_CTA,
} from "@/lib/how-cara-is-built-copy";
import { HowCaraIsBuiltFaq } from "./HowCaraIsBuiltFaq";
import { HowCaraWorksBlock } from "./HowCaraWorksBlock";

export function HowCaraIsBuiltContent() {
  return (
    <div className="relative w-full min-w-0">
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="completely-custom"
          headingId="completely-custom-heading"
          headingDark={BUILT_CUSTOM.headingDark}
          headingGradient={BUILT_CUSTOM.headingGradient}
          body={BUILT_CUSTOM.body}
          imageSrc={BUILT_CUSTOM.image.src}
          imageAlt={BUILT_CUSTOM.image.alt}
          imageOn="right"
          tone="white"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="built-from"
          headingId="built-from-heading"
          headingDark={BUILT_FROM.headingDark}
          headingGradient={BUILT_FROM.headingGradient}
          body={BUILT_FROM.body}
          imageSrc={BUILT_FROM.image.src}
          imageAlt={BUILT_FROM.image.alt}
          imageOn="left"
          tone="grey"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="go-live"
          headingId="go-live-heading"
          headingDark={BUILT_LINE.headingDark}
          headingGradient={BUILT_LINE.headingGradient}
          body={BUILT_LINE.body}
          imageSrc={BUILT_LINE.image.src}
          imageAlt={BUILT_LINE.image.alt}
          imageOn="right"
          tone="white"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="she-asks"
          headingId="she-asks-heading"
          headingDark={BUILT_TICKETS.headingDark}
          headingGradient={BUILT_TICKETS.headingGradient}
          body={BUILT_TICKETS.body}
          imageSrc={BUILT_TICKETS.image.src}
          imageAlt={BUILT_TICKETS.image.alt}
          imageOn="left"
          tone="grey"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="dashboard"
          headingId="dashboard-heading"
          headingDark={BUILT_DASHBOARD.headingDark}
          headingGradient={BUILT_DASHBOARD.headingGradient}
          body={BUILT_DASHBOARD.body}
          imageSrc={BUILT_DASHBOARD.image.src}
          imageAlt={BUILT_DASHBOARD.image.alt}
          imageOn="right"
          tone="white"
          continueLink={BUILT_DASHBOARD_CONTINUE}
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraIsBuiltFaq />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailCta
          copy={HOW_CARA_IS_BUILT_CTA}
          headingId="how-cara-is-built-cta"
        />
      </SectionReveal>
    </div>
  );
}
