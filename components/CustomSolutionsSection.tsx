import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_FRAME_CLASS } from "@/lib/site-layout";

const HAIRLINE_RULE =
  "h-px min-h-px w-[calc(100%+2rem)] max-w-none shrink-0 bg-slate-200 -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6 lg:w-[calc(100%+4rem)] lg:-mx-8";

const SECTION_Y_GAP = "pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24";

export function CustomSolutionsSection() {
  return (
    <section
      aria-labelledby="custom-solutions-heading"
      className="relative w-full overflow-x-clip bg-[#F8F9FB] text-slate-900"
    >
      <div
        className={`relative min-w-0 ${SITE_FRAME_CLASS} px-4 sm:px-6 lg:px-8`}
      >
        <div className={`px-2 sm:px-4 lg:px-6 ${SECTION_Y_GAP}`}>
          <div className="mb-10 sm:mb-12 lg:mb-14">
            <div className={HAIRLINE_RULE} aria-hidden />
          </div>

          <div className="max-w-2xl text-left sm:mx-auto sm:max-w-3xl sm:text-center">
            <h2
              id="custom-solutions-heading"
              className="font-display text-4xl font-semibold leading-[1.18] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]"
            >
              <span className="text-slate-900">Custom </span>
              <span className="bg-clip-text pb-0.5 text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400">
                solutions.
              </span>
            </h2>
            <p className="mt-5 text-balance text-muted-foreground sm:mt-6 sm:text-lg">
              Need more than off-the-shelf? We&apos;re voice engineers for
              trades, hospitality, clinics, and multi-site ops. Tell us how your
              line should work and we&apos;ll build Cara around it.
            </p>
            <div className="mt-8 flex justify-start sm:mt-9 sm:justify-center">
              <Link
                href="/book"
                className="group inline-flex items-center rounded-full border border-slate-300/90 bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-slate-400 hover:shadow-md sm:text-base"
              >
                Contact us
                <span className="ml-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 group-hover:translate-x-0.5 sm:ml-3 sm:h-9 sm:w-9">
                  <ArrowRight
                    className="size-4"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
