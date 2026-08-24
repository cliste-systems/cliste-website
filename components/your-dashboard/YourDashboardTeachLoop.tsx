import { HowCaraWorksSectionImage } from "@/components/how-it-works/HowCaraWorksSectionImage";
import {
  YOUR_DASHBOARD_STEP_5,
  YOUR_DASHBOARD_TEACH_CLOSING,
  YOUR_DASHBOARD_TEACH_STEPS,
} from "@/lib/your-dashboard-copy";
import {
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_TITLE,
  SECTION_CONTENT_INSET,
} from "@/lib/site-layout";
import { cn } from "@/lib/utils";

export function YourDashboardTeachLoop() {
  const imageFirstOnDesktop = false;

  return (
    <section
      id="step-5"
      aria-labelledby="step-5-heading"
      className="relative w-full scroll-mt-24 bg-white text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className="grid grid-cols-1 items-start gap-8 px-2 sm:gap-10 sm:px-4 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-6 xl:gap-16">
          <div
            className={cn(
              "order-1 min-h-0",
              imageFirstOnDesktop ? "lg:order-1" : "lg:order-2",
            )}
          >
            <HowCaraWorksSectionImage
              src={YOUR_DASHBOARD_STEP_5.image.src}
              alt={YOUR_DASHBOARD_STEP_5.image.alt}
              className="bg-white"
            />
          </div>

          <div
            className={cn(
              "order-2 flex flex-col justify-center",
              imageFirstOnDesktop ? "lg:order-2" : "lg:order-1",
            )}
          >
            <div className="max-w-md">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
                {YOUR_DASHBOARD_STEP_5.eyebrow}
              </p>
              <h2 id="step-5-heading" className={RETAIL_SECTION_INTRO_TITLE}>
                <span className="block text-slate-900">
                  {YOUR_DASHBOARD_STEP_5.headingDark}
                </span>
                <span className="mt-1 block bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">
                  {YOUR_DASHBOARD_STEP_5.headingGradient}
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-[17px]">
                {YOUR_DASHBOARD_STEP_5.body}
              </p>
            </div>
          </div>
        </div>

        <div className={`${SECTION_CONTENT_INSET} mt-10 sm:mt-12`}>
          <ol className="list-decimal space-y-3 pl-5 text-base leading-relaxed text-slate-600 sm:pl-6">
            {YOUR_DASHBOARD_TEACH_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            {YOUR_DASHBOARD_TEACH_CLOSING}
          </p>
        </div>
      </div>
    </section>
  );
}
