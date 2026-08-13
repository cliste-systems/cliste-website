import { RETAIL_HOW_IT_WORKS } from "@/lib/retail-copy";
import {
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_GRID,
  RETAIL_SECTION_INTRO_TITLE,
  RETAIL_SECTION_SHELL,
  SECTION_CONTENT_INSET,
  SECTION_INTRO_DESC,
} from "@/lib/site-layout";

export function RetailHowItWorks() {
  return (
    <section
      aria-labelledby="retail-how-heading"
      className="relative w-full bg-white text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className={RETAIL_SECTION_INTRO_GRID}>
          <h2 id="retail-how-heading" className={RETAIL_SECTION_INTRO_TITLE}>
            <span className="text-slate-900">{RETAIL_HOW_IT_WORKS.titleDark} </span>
            <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
              {RETAIL_HOW_IT_WORKS.titleGradient}
            </span>
          </h2>
          <p className={SECTION_INTRO_DESC}>{RETAIL_HOW_IT_WORKS.intro}</p>
        </div>

        <div className={SECTION_CONTENT_INSET}>
          <div className={RETAIL_SECTION_SHELL}>
            <div className="grid auto-rows-fr grid-cols-1 divide-y divide-slate-200/80 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {RETAIL_HOW_IT_WORKS.steps.map((step) => (
                <div
                  key={step.step}
                  className="flex h-full flex-col p-4 sm:p-5 lg:p-6"
                >
                  <p className="font-display text-2xl font-semibold tracking-tight text-slate-300">
                    {step.step}
                  </p>
                  <h3 className="mt-3 font-display text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-[17px]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-snug text-slate-600 line-clamp-2 sm:text-[13px]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
