import { ON_YOUR_LINE } from "@/lib/how-cara-works-copy";
import { HowCaraWorksBlock } from "./HowCaraWorksBlock";

export function OnYourLine() {
  return (
    <HowCaraWorksBlock
      id="on-your-line"
      headingId="on-your-line-heading"
      headingDark={ON_YOUR_LINE.headingDark}
      headingGradient={ON_YOUR_LINE.headingGradient}
      body={ON_YOUR_LINE.body}
      imageSrc={ON_YOUR_LINE.image.src}
      imageAlt={ON_YOUR_LINE.image.alt}
      imageOn="right"
      tone="white"
    />
  );
}
