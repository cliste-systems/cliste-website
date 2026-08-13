"use client";

import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller";
import { PARTNER_MARQUEE_LOGOS } from "@/lib/partner-marquee";
import { SITE_FRAME_CLASS } from "@/lib/site-layout";

/**
 * Sits under the feature grid, above the Cara engine block.
 * Reuses the same side rails as PlatformOverview / Cara.
 */
export function PartnersMarquee() {
  return (
    <section className="relative w-full overflow-x-hidden border-b border-slate-200 bg-[#FBFCFE] pb-6 sm:pb-8">
      <div className={`relative min-w-0 ${SITE_FRAME_CLASS}`}>
        <div className="relative z-10 w-full min-w-0 max-w-full">
          <MarqueeLogoScroller
            className="box-border w-full min-w-0 max-w-full"
            title={
              <>
                <span className="text-slate-900">Enterprise infrastructure </span>
                <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
                  behind every call.
                </span>
              </>
            }
            titleId="partners-marquee-heading"
            description="Supabase, Vercel, and Railway in the EU. Twilio for Irish lines. LiveKit for real-time voice. Cloudflare at the edge."
            logos={PARTNER_MARQUEE_LOGOS}
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
