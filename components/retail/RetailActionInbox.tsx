import { ArrowDown, ArrowRight, Phone, Sparkles } from "lucide-react";
import { RETAIL_INBOX } from "@/lib/retail-copy";
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

function RowDivider() {
  return <div aria-hidden className={RETAIL_ROW_DIVIDER} />;
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center text-slate-300", className)}
    >
      <ArrowDown className="size-4 lg:hidden" strokeWidth={1.75} />
      <ArrowRight className="hidden size-4 lg:block" strokeWidth={1.75} />
    </div>
  );
}

function FlowCallerCard({ quote }: { quote: string }) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200/90 bg-[#F8F9FB] p-4">
      <div className="flex items-center gap-2 text-slate-500">
        <Phone className="size-3" strokeWidth={1.75} aria-hidden />
        <p className="text-[10px] font-medium uppercase tracking-[0.16em]">
          On the call
        </p>
      </div>
      <p className="mt-2 font-display text-base font-semibold leading-snug tracking-tight text-slate-900 sm:text-[17px]">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

function FlowCaraStep({ step }: { step: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200/90 bg-white px-3 py-3.5 text-center shadow-sm">
      <span
        aria-hidden
        className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm"
      >
        <Sparkles className="size-3.5" strokeWidth={1.75} />
      </span>
      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
        Cara
      </p>
      <p className="mt-1 text-xs font-medium leading-snug text-slate-900 sm:text-[13px]">
        {step}
      </p>
    </div>
  );
}

function FlowOutcomeCard({
  tag,
  outcome,
}: {
  tag: string;
  outcome: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm">
      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
        {tag}
      </p>
      <p className="mt-2 text-xs leading-snug text-slate-700 sm:text-[13px]">
        {outcome}
      </p>
    </div>
  );
}

function MobileFlowCard({
  caller,
  caraStep,
  tag,
  outcome,
}: {
  caller: string;
  caraStep: string;
  tag: string;
  outcome: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm">
      <div className="border-b border-slate-200/80 bg-[#F8F9FB] p-4">
        <div className="flex items-center gap-2 text-slate-500">
          <Phone className="size-3" strokeWidth={1.75} aria-hidden />
          <p className="text-[10px] font-medium uppercase tracking-[0.16em]">
            On the call
          </p>
        </div>
        <p className="mt-2 font-display text-base font-semibold leading-snug tracking-tight text-slate-900">
          &ldquo;{caller}&rdquo;
        </p>
      </div>

      <div className="flex items-start gap-3 border-b border-slate-200/80 p-4">
        <span
          aria-hidden
          className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm"
        >
          <Sparkles className="size-3.5" strokeWidth={1.75} />
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
            Cara
          </p>
          <p className="mt-1 text-xs font-medium leading-snug text-slate-900">
            {caraStep}
          </p>
        </div>
      </div>

      <div className="p-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
          {tag}
        </p>
        <p className="mt-2 text-xs leading-snug text-slate-700">{outcome}</p>
      </div>
    </div>
  );
}

export function RetailActionInbox() {
  return (
    <section
      aria-labelledby="retail-inbox-heading"
      className="relative w-full bg-[#F8F9FB] text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className={RETAIL_SECTION_INTRO_GRID}>
          <h2 id="retail-inbox-heading" className={RETAIL_SECTION_INTRO_TITLE}>
            <span className="text-slate-900">{RETAIL_INBOX.titleDark} </span>
            <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
              {RETAIL_INBOX.titleGradient}
            </span>
          </h2>
          <p className={SECTION_INTRO_DESC}>{RETAIL_INBOX.intro}</p>
        </div>

        <div className={SECTION_CONTENT_INSET}>
          <div className={RETAIL_SECTION_SHELL}>
            {RETAIL_INBOX.flows.map((flow, index) => (
              <div key={flow.caller}>
                <div className="space-y-3 p-4 sm:p-5 lg:hidden">
                  <MobileFlowCard
                    caller={flow.caller}
                    caraStep={flow.caraStep}
                    tag={flow.tag}
                    outcome={flow.outcome}
                  />
                </div>

                <div className="hidden grid-cols-[minmax(0,1fr)_auto_minmax(0,0.75fr)_auto_minmax(0,1fr)] items-center gap-3 p-6 lg:grid">
                  <FlowCallerCard quote={flow.caller} />
                  <FlowArrow />
                  <FlowCaraStep step={flow.caraStep} />
                  <FlowArrow />
                  <FlowOutcomeCard tag={flow.tag} outcome={flow.outcome} />
                </div>

                {index < RETAIL_INBOX.flows.length - 1 ? <RowDivider /> : null}
              </div>
            ))}

            <RowDivider />

            <div className="grid auto-rows-fr grid-cols-1 divide-y divide-slate-200/80 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {RETAIL_INBOX.points.map((point) => (
                <div
                  key={point.title}
                  className="flex h-full flex-col p-4 sm:p-5 lg:p-6"
                >
                  <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-slate-900">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-snug text-slate-600 line-clamp-2 sm:text-[13px]">
                    {point.body}
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
