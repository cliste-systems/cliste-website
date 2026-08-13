import { SectionReveal } from "@/components/SectionReveal";
import { RetailActionInbox } from "./RetailActionInbox";
import { RetailCta } from "./RetailCta";
import { RetailFaq } from "./RetailFaq";
import { RetailHowItWorks } from "./RetailHowItWorks";
import { RetailScenarios } from "./RetailScenarios";
import { RetailSetup } from "./RetailSetup";

/**
 * Post-hero retail blocks use SectionReveal (globals `.section-reveal`, same
 * motion as the homepage hero fade-up).
 */
export function RetailPageContent() {
  return (
    <div className="relative w-full min-w-0">
      <SectionReveal className="w-full min-w-0">
        <RetailScenarios />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailHowItWorks />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailActionInbox />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailSetup />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailFaq />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <RetailCta />
      </SectionReveal>
    </div>
  );
}
