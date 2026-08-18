import { WHEN_SOMEONE_RINGS } from "@/lib/how-cara-works-copy";
import { HowCaraWorksBlock } from "./HowCaraWorksBlock";

export function WhenSomeoneRings() {
  return (
    <HowCaraWorksBlock
      id="when-someone-rings"
      headingId="when-someone-rings-heading"
      headingDark={WHEN_SOMEONE_RINGS.headingDark}
      headingGradient={WHEN_SOMEONE_RINGS.headingGradient}
      body={WHEN_SOMEONE_RINGS.body}
      imageSrc={WHEN_SOMEONE_RINGS.image.src}
      imageAlt={WHEN_SOMEONE_RINGS.image.alt}
      imageOn="right"
      tone="white"
    />
  );
}
