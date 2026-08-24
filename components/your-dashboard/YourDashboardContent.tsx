import { SectionReveal } from "@/components/SectionReveal";
import { RetailCta } from "@/components/retail/RetailCta";
import { HowCaraWorksBlock } from "@/components/how-it-works/HowCaraWorksBlock";
import {
  YOUR_DASHBOARD_CTA,
  YOUR_DASHBOARD_STEP_1,
  YOUR_DASHBOARD_STEP_2,
  YOUR_DASHBOARD_STEP_3,
  YOUR_DASHBOARD_STEP_4,
  YOUR_DASHBOARD_STEP_6,
} from "@/lib/your-dashboard-copy";
import { YourDashboardFaq } from "./YourDashboardFaq";
import { YourDashboardScreenTour } from "./YourDashboardScreenTour";
import { YourDashboardTeachLoop } from "./YourDashboardTeachLoop";

export function YourDashboardContent() {
  return (
    <div className="relative w-full min-w-0">
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="step-1"
          headingId="step-1-heading"
          eyebrow={YOUR_DASHBOARD_STEP_1.eyebrow}
          headingDark={YOUR_DASHBOARD_STEP_1.headingDark}
          headingGradient={YOUR_DASHBOARD_STEP_1.headingGradient}
          body={YOUR_DASHBOARD_STEP_1.body}
          imageSrc={YOUR_DASHBOARD_STEP_1.image.src}
          imageAlt={YOUR_DASHBOARD_STEP_1.image.alt}
          imageOn="right"
          tone="white"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="step-2"
          headingId="step-2-heading"
          eyebrow={YOUR_DASHBOARD_STEP_2.eyebrow}
          headingDark={YOUR_DASHBOARD_STEP_2.headingDark}
          headingGradient={YOUR_DASHBOARD_STEP_2.headingGradient}
          body={YOUR_DASHBOARD_STEP_2.body}
          imageSrc={YOUR_DASHBOARD_STEP_2.image.src}
          imageAlt={YOUR_DASHBOARD_STEP_2.image.alt}
          imageOn="left"
          tone="grey"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="step-3"
          headingId="step-3-heading"
          eyebrow={YOUR_DASHBOARD_STEP_3.eyebrow}
          headingDark={YOUR_DASHBOARD_STEP_3.headingDark}
          headingGradient={YOUR_DASHBOARD_STEP_3.headingGradient}
          body={YOUR_DASHBOARD_STEP_3.body}
          imageSrc={YOUR_DASHBOARD_STEP_3.image.src}
          imageAlt={YOUR_DASHBOARD_STEP_3.image.alt}
          imageOn="right"
          tone="white"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="step-4"
          headingId="step-4-heading"
          eyebrow={YOUR_DASHBOARD_STEP_4.eyebrow}
          headingDark={YOUR_DASHBOARD_STEP_4.headingDark}
          headingGradient={YOUR_DASHBOARD_STEP_4.headingGradient}
          body={YOUR_DASHBOARD_STEP_4.body}
          imageSrc={YOUR_DASHBOARD_STEP_4.image.src}
          imageAlt={YOUR_DASHBOARD_STEP_4.image.alt}
          imageOn="left"
          tone="grey"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <YourDashboardTeachLoop />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="step-6"
          headingId="step-6-heading"
          eyebrow={YOUR_DASHBOARD_STEP_6.eyebrow}
          headingDark={YOUR_DASHBOARD_STEP_6.headingDark}
          headingGradient={YOUR_DASHBOARD_STEP_6.headingGradient}
          body={YOUR_DASHBOARD_STEP_6.body}
          imageSrc={YOUR_DASHBOARD_STEP_6.image.src}
          imageAlt={YOUR_DASHBOARD_STEP_6.image.alt}
          imageOn="left"
          tone="grey"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <YourDashboardScreenTour />
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
