import Link from "next/link";
import { Phone } from "lucide-react";
import { CaraVoicePlayer } from "@/components/CaraVoicePlayer";
import { RETAIL_HEAR_CARA } from "@/lib/retail-copy";
import {
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_TITLE,
  RETAIL_SECTION_SHELL,
} from "@/lib/site-layout";

export function RetailHearCara() {
  return (
    <section
      id="hear-cara"
      aria-labelledby="retail-hear-cara-heading"
      className="relative w-full scroll-mt-24 bg-[#F8F9FB] text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className="grid grid-cols-1 items-center gap-8 px-2 sm:gap-10 sm:px-4 lg:grid-cols-2 lg:gap-12 lg:px-6">
          <div className="max-w-md">
            <h2 id="retail-hear-cara-heading" className={RETAIL_SECTION_INTRO_TITLE}>
              <span className="block text-slate-900">
                {RETAIL_HEAR_CARA.headingDark}
              </span>
              <span className="mt-1 block bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">
                {RETAIL_HEAR_CARA.headingGradient}
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-[17px]">
              {RETAIL_HEAR_CARA.body}
            </p>
            <a
              href={RETAIL_HEAR_CARA.demoPhoneHref}
              className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-5 py-4 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white"
                aria-hidden
              >
                <Phone className="size-4" strokeWidth={1.75} />
              </span>
              <span>
                <span className="block text-sm font-medium text-slate-900">
                  {RETAIL_HEAR_CARA.ringLabel}
                </span>
                <span className="mt-0.5 block font-display text-lg font-semibold tracking-tight text-slate-900">
                  {RETAIL_HEAR_CARA.demoPhoneDisplay}
                </span>
              </span>
            </a>
          </div>

          <div className={`${RETAIL_SECTION_SHELL} p-5 sm:p-6 lg:p-8`}>
            <p className="mb-4 text-sm font-medium text-slate-700">Sample call</p>
            <CaraVoicePlayer compact />
          </div>
        </div>
      </div>
    </section>
  );
}
