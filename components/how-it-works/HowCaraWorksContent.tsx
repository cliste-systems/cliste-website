import { SectionReveal } from "@/components/SectionReveal";
import { RetailCta } from "@/components/retail/RetailCta";
import { HOW_CARA_WORKS_CTA } from "@/lib/how-cara-works-copy";
import { HowCaraWorksFaq } from "./HowCaraWorksFaq";
import { IfSheDoesntKnow } from "./IfSheDoesntKnow";
import { OnYourLine } from "./OnYourLine";
import { WhenSomeoneRings } from "./WhenSomeoneRings";

export function HowCaraWorksContent() {
  return (
    <div className="relative w-full min-w-0">
      <SectionReveal className="w-full min-w-0">
        <WhenSomeoneRings />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <IfSheDoesntKnow />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <OnYourLine />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <HowCaraWorksFaq />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailCta copy={HOW_CARA_WORKS_CTA} headingId="how-cara-works-cta" />
      </SectionReveal>
    </div>
  );
}
