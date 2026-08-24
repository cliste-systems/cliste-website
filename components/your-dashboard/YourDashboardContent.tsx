import { SectionReveal } from "@/components/SectionReveal";
import { RetailCta } from "@/components/retail/RetailCta";
import { HowCaraWorksBlock } from "@/components/how-it-works/HowCaraWorksBlock";
import {
  YOUR_DASHBOARD_CTA,
  YOUR_DASHBOARD_STEP_1,
  YOUR_DASHBOARD_STEP_2,
  YOUR_DASHBOARD_STEP_3,
  YOUR_DASHBOARD_STEP_4,
  YOUR_DASHBOARD_STEP_5,
  YOUR_DASHBOARD_STEP_6,
} from "@/lib/your-dashboard-copy";
import { YourDashboardFaq } from "./YourDashboardFaq";

export function YourDashboardContent() {
  return (
    <div className="relative w-full min-w-0">
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="not-an-app"
          headingId="not-an-app-heading"
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
          id="call-lands"
          headingId="call-lands-heading"
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
          id="read-the-call"
          headingId="read-the-call-heading"
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
          id="action-inbox"
          headingId="action-inbox-heading"
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
        <HowCaraWorksBlock
          id="teach-cara"
          headingId="teach-cara-heading"
          headingDark={YOUR_DASHBOARD_STEP_5.headingDark}
          headingGradient={YOUR_DASHBOARD_STEP_5.headingGradient}
          body={YOUR_DASHBOARD_STEP_5.body}
          imageSrc={YOUR_DASHBOARD_STEP_5.image.src}
          imageAlt={YOUR_DASHBOARD_STEP_5.image.alt}
          imageOn="right"
          tone="white"
        />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksBlock
          id="change-cara"
          headingId="change-cara-heading"
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
        <YourDashboardFaq />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailCta copy={YOUR_DASHBOARD_CTA} headingId="your-dashboard-cta" />
      </SectionReveal>
    </div>
  );
}
