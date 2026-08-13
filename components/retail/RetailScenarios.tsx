"use client";

import {
  Clock,
  Moon,
  Package,
  Phone,
  ShoppingBag,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BlurredInfiniteSlider } from "@/components/ui/infinite-slider";
import {
  RETAIL_CALLER_PHRASES,
  RETAIL_USE_CASES,
  type RetailUseCaseIcon,
} from "@/lib/retail-copy";
import {
  RETAIL_ROW_DIVIDER,
  RETAIL_SECTION_FRAME,
  RETAIL_SECTION_INTRO_GRID,
  RETAIL_SECTION_INTRO_TITLE,
  RETAIL_SECTION_SHELL,
  SECTION_CONTENT_INSET,
  SECTION_INTRO_DESC,
} from "@/lib/site-layout";
import { cn } from "@/lib/utils";

const USE_CASE_ICONS: Record<RetailUseCaseIcon, LucideIcon> = {
  "phone-order": Phone,
  "click-collect": ShoppingBag,
  clock: Clock,
  package: Package,
  users: Users,
  moon: Moon,
};

function RowDivider() {
  return <div aria-hidden className={RETAIL_ROW_DIVIDER} />;
}

function WaveformIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      className={className}
    >
      <line x1="4" y1="10" x2="4" y2="14" />
      <line x1="8" y1="7" x2="8" y2="17" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="16" y1="7" x2="16" y2="17" />
      <line x1="20" y1="10" x2="20" y2="14" />
    </svg>
  );
}

function MobileUseCaseCard({
  icon: Icon,
  title,
  body,
  featured = false,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm",
        featured && "ring-1 ring-slate-300/60",
      )}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/90 bg-[#F8F9FB] text-slate-700"
        >
          <Icon className="size-3.5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-slate-900">
            {title}
          </h3>
          <p className="mt-1.5 text-xs leading-snug text-slate-600">{body}</p>
        </div>
      </div>
    </div>
  );
}

export function RetailScenarios() {
  const featured = RETAIL_USE_CASES.filter((item) => item.span === "featured");
  const compact = RETAIL_USE_CASES.filter((item) => item.span === "default");

  return (
    <section
      aria-labelledby="retail-scenarios-heading"
      className="relative w-full bg-[#F8F9FB] text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className={`${RETAIL_SECTION_INTRO_GRID} mb-8 lg:mb-10`}>
          <h2 id="retail-scenarios-heading" className={RETAIL_SECTION_INTRO_TITLE}>
            <span className="text-slate-900">Real calls. </span>
            <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
              Real retail talk.
            </span>
          </h2>
          <p className={SECTION_INTRO_DESC}>
            From opening hours to click and collect, Cara handles the calls that
            interrupt a busy shop floor.
          </p>
        </div>

        <div className={SECTION_CONTENT_INSET}>
          <div className={RETAIL_SECTION_SHELL}>
            <div className="border-b border-slate-200/80 bg-white px-4 py-4 sm:px-6 sm:py-5">
              <div className="mb-3 flex items-center gap-2">
                <span
                  aria-hidden
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200/90 bg-[#F8F9FB] text-slate-600 shadow-sm"
                >
                  <WaveformIcon className="h-3.5 w-3.5" />
                </span>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  What callers actually say
                </p>
              </div>
              <BlurredInfiniteSlider
                speed={32}
                speedOnHover={16}
                gap={40}
                fadeWidth={48}
              >
                {RETAIL_CALLER_PHRASES.map((phrase) => (
                  <span
                    key={phrase}
                    className="shrink-0 whitespace-nowrap text-xs font-medium tracking-tight text-slate-700 sm:text-[13px]"
                  >
                    &ldquo;{phrase}&rdquo;
                  </span>
                ))}
              </BlurredInfiniteSlider>
            </div>

            <div className="space-y-3 p-4 lg:hidden">
              {featured.map((useCase) => {
                const Icon = USE_CASE_ICONS[useCase.icon];
                return (
                  <MobileUseCaseCard
                    key={useCase.title}
                    icon={Icon}
                    title={useCase.title}
                    body={useCase.body}
                    featured
                  />
                );
              })}
              {compact.map((useCase) => {
                const Icon = USE_CASE_ICONS[useCase.icon];
                return (
                  <MobileUseCaseCard
                    key={useCase.title}
                    icon={Icon}
                    title={useCase.title}
                    body={useCase.body}
                  />
                );
              })}
            </div>

            <div className="hidden lg:block">
              <RowDivider />
              <div className="grid auto-rows-fr grid-cols-4 gap-4 p-6">
                {featured.map((useCase) => {
                  const Icon = USE_CASE_ICONS[useCase.icon];
                  return (
                    <UseCaseCard
                      key={useCase.title}
                      icon={Icon}
                      title={useCase.title}
                      body={useCase.body}
                      featured
                    />
                  );
                })}
                {compact.map((useCase) => {
                  const Icon = USE_CASE_ICONS[useCase.icon];
                  return (
                    <UseCaseCard
                      key={useCase.title}
                      icon={Icon}
                      title={useCase.title}
                      body={useCase.body}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  icon: Icon,
  title,
  body,
  featured = false,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex h-full flex-col rounded-xl border border-slate-200/90 bg-[#F8F9FB] p-4 shadow-sm transition-[box-shadow,ring-color] duration-300 hover:shadow-md hover:ring-1 hover:ring-slate-300/80",
        featured && "col-span-2",
      )}
    >
      <span
        aria-hidden
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200/90 bg-white text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
      >
        <Icon className="size-3.5" strokeWidth={1.75} />
      </span>
      <h3 className="mt-3 font-display text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-[17px]">
        {title}
      </h3>
      <p className="mt-1.5 text-xs leading-snug text-slate-600 line-clamp-2 sm:text-[13px]">
        {body}
      </p>
    </div>
  );
}
