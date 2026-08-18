import { SectionReveal } from "@/components/SectionReveal";
import { RetailCaraStory } from "./RetailCaraStory";
import { RetailCta } from "./RetailCta";
import { RetailFaq } from "./RetailFaq";

/**
 * Post-hero retail blocks use SectionReveal (globals `.section-reveal`, same
 * motion as the homepage hero fade-up).
 */
export function RetailPageContent() {
  return (
    <div className="relative w-full min-w-0">
      <SectionReveal className="w-full min-w-0">
        <RetailCaraStory />
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
