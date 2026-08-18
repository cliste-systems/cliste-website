"use client";

import { useState } from "react";
import { RETAIL_SECTION_SHELL } from "@/lib/site-layout";
import { cn } from "@/lib/utils";

type HowCaraWorksSectionImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function HowCaraWorksSectionImage({
  src,
  alt,
  className,
}: HowCaraWorksSectionImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <figure
      className={cn(
        "relative aspect-[3/2] w-full",
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
        // Optional slot — file can be added later at the public path.
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
