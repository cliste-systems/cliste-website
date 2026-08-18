import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RETAIL_CTA } from "@/lib/retail-copy";
import { RETAIL_SECTION_FRAME } from "@/lib/site-layout";

type RetailCtaCopy = {
  title: string;
  body: string;
  button: string;
};

export function RetailCta({
  copy = RETAIL_CTA,
  headingId = "retail-cta-heading",
}: {
  copy?: RetailCtaCopy;
  headingId?: string;
} = {}) {
  return (
    <section
      aria-labelledby={headingId}
      className="relative w-full border-t border-slate-200 bg-[#F8F9FB] text-slate-900"
    >
      <div className={`relative min-w-0 ${RETAIL_SECTION_FRAME}`}>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h2
              id={headingId}
              className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              {copy.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {copy.body}
            </p>
          </div>
          <Link
            href="/book"
            className="group inline-flex w-full shrink-0 items-center justify-center rounded-full border border-slate-300/90 bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-md sm:w-auto"
          >
            {copy.button}
            <span className="ml-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight
                className="size-4"
                strokeWidth={1.75}
                aria-hidden
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
