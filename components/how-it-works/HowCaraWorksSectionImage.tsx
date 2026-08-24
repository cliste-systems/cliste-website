"use client";

import { useState } from "react";
import { RETAIL_SECTION_SHELL } from "@/lib/site-layout";
import { cn } from "@/lib/utils";

type HowCaraWorksSectionImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Tailwind aspect class: default 3:2; use 2:1 for wide diagrams */
  aspectClass?: string;
};

export function HowCaraWorksSectionImage({
  src,
  alt,
  className,
  aspectClass = "aspect-[3/2]",
}: HowCaraWorksSectionImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn(
        "relative w-full",
        aspectClass,
        RETAIL_SECTION_SHELL,
        className,
      )}
    >
      {failed ? (
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-100 via-[#eef0f3] to-slate-200"
          aria-hidden
        />
      ) : (
        // Optional slot: file can be added later at the public path.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full rounded-[1.5rem] object-cover object-center lg:rounded-[2rem]"
        />
      )}
    </figure>
  );
}
