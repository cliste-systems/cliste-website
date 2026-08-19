import { CaraDemo } from "@/components/CaraDemo";
import { CaraRetailFaq } from "@/components/CaraRetailFaq";
import { ClisteStudioSection } from "@/components/ClisteStudioSection";
import { CustomSolutionsSection } from "@/components/CustomSolutionsSection";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import { PlatformOverview } from "@/components/PlatformOverview";
import { SectionReveal } from "@/components/SectionReveal";
import { SITE_FRAME_CLASS, STUDIO_HAIRLINE_INSET } from "@/lib/site-layout";

/**
 * Groups the feature block, partners marquee, and Cara with one shared pair
 * of vertical lines (side rails) running the full height, aligned to SITE_FRAME.
 * Post-hero blocks use SectionReveal (globals `.section-reveal`, same motion as hero).
 */
export function HomeWithRails() {
  return (
    <div className="relative w-full min-w-0">
      <SectionReveal className="w-full min-w-0">
        <PlatformOverview />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <PartnersMarquee />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <CaraDemo />
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <>
          {/* Hairline: overlap 1px so no body (white) shows in the subpixel seam */}
          <div
            className={`-mt-px w-full min-w-0 bg-[#F8F9FB] ${STUDIO_HAIRLINE_INSET}`}
          >
            <div
              className={`relative min-w-0 ${SITE_FRAME_CLASS} px-4 sm:px-6 lg:px-8`}
            >
              <div
                className="h-px min-h-px w-[calc(100%+2rem)] max-w-none shrink-0 bg-slate-200 -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6 lg:w-[calc(100%+4rem)] lg:-mx-8"
                aria-hidden
              />
            </div>
          </div>
          <ClisteStudioSection />
        </>
      </SectionReveal>
      <SectionReveal className="w-full min-w-0">
        <>
          <CaraRetailFaq />
          <CustomSolutionsSection />
        </>
      </SectionReveal>
    </div>
  );
}
