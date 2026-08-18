import { HowCaraWorksSectionImage } from "./HowCaraWorksSectionImage";
import { RETAIL_SECTION_FRAME, RETAIL_SECTION_INTRO_TITLE } from "@/lib/site-layout";
import { cn } from "@/lib/utils";

type HowCaraWorksBlockProps = {
  id: string;
  headingId: string;
  headingDark: string;
  headingGradient: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imageOn?: "left" | "right";
  tone?: "white" | "grey";
  imageAspectClass?: string;
};

export function HowCaraWorksBlock({
  id,
  headingId,
  headingDark,
  headingGradient,
  body,
  imageSrc,
  imageAlt,
  imageOn = "right",
  tone = "white",
  imageAspectClass,
}: HowCaraWorksBlockProps) {
  const imageFirstOnDesktop = imageOn === "left";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "relative w-full scroll-mt-24 text-slate-900",
        tone === "grey" ? "bg-[#F8F9FB]" : "bg-white",
      )}
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
              src={imageSrc}
              alt={imageAlt}
              aspectClass={imageAspectClass}
              className={tone === "grey" ? "bg-[#F8F9FB]" : "bg-white"}
            />
          </div>

          <div
            className={cn(
              "order-2 flex flex-col justify-center",
              imageFirstOnDesktop ? "lg:order-2" : "lg:order-1",
            )}
          >
            <div className="max-w-md">
              <h2 id={headingId} className={RETAIL_SECTION_INTRO_TITLE}>
                <span className="block text-slate-900">{headingDark}</span>
                <span className="mt-1 block bg-clip-text text-transparent bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400">
                  {headingGradient}
                </span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-[17px]">
                {body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
