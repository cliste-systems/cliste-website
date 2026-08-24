import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  GitBranch,
  Headphones,
  Home,
  Inbox,
  Phone,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import { HowCaraWorksSectionImage } from "@/components/how-it-works/HowCaraWorksSectionImage";
import { YOUR_DASHBOARD_SCREEN_TOUR } from "@/lib/your-dashboard-copy";
import {
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_TITLE,
  RETAIL_SECTION_SHELL,
} from "@/lib/site-layout";

const SIDEBAR_ICONS: Record<string, LucideIcon> = {
  Home,
  Calls: Phone,
  "Action Inbox": Inbox,
  Contacts: Users,
  "Call flow": GitBranch,
  "Cara Setup": Wrench,
  Usage: BarChart3,
  Support: Headphones,
  Settings,
};

export function YourDashboardScreenTour() {
  return (
    <section
      id="whats-on-it"
      aria-labelledby="whats-on-it-heading"
      className="relative w-full scroll-mt-24 bg-white text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className="grid grid-cols-1 items-start gap-8 px-2 sm:gap-10 sm:px-4 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-6 xl:gap-16">
          <div className="order-1 min-h-0 lg:order-1">
            <HowCaraWorksSectionImage
              src={YOUR_DASHBOARD_SCREEN_TOUR.image.src}
              alt={YOUR_DASHBOARD_SCREEN_TOUR.image.alt}
              className="bg-white"
            />
          </div>

          <div className="order-2 flex flex-col justify-center lg:order-2">
            <div className="max-w-md lg:max-w-none">
              <h2 id="whats-on-it-heading" className={RETAIL_SECTION_INTRO_TITLE}>
                <span className="block text-slate-900">
                  {YOUR_DASHBOARD_SCREEN_TOUR.headingDark}
                </span>
                <span className="mt-1 block bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">
                  {YOUR_DASHBOARD_SCREEN_TOUR.headingGradient}
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-[17px]">
                {YOUR_DASHBOARD_SCREEN_TOUR.intro}
              </p>

              <div className={`${RETAIL_SECTION_SHELL} mt-8 p-4 sm:p-6`}>
                <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                  {YOUR_DASHBOARD_SCREEN_TOUR.items.map((item) => {
                    const Icon = SIDEBAR_ICONS[item.label];

                    return (
                      <div key={item.label} className="flex items-start gap-3">
                        {Icon ? (
                          <span
                            aria-hidden
                            className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
                          >
                            <Icon className="size-[18px]" strokeWidth={1.75} />
                          </span>
                        ) : null}
                        <div className="min-w-0">
                          <dt className="font-display text-[15px] font-semibold tracking-tight text-slate-900">
                            {item.label}
                          </dt>
                          <dd className="mt-0.5 text-sm leading-relaxed text-slate-600">
                            {item.description}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
