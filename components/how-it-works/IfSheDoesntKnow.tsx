import { IF_SHE_DOESNT_KNOW } from "@/lib/how-cara-works-copy";
import { HowCaraWorksBlock } from "./HowCaraWorksBlock";

export function IfSheDoesntKnow() {
  return (
    <HowCaraWorksBlock
      id="if-she-doesnt-know"
      headingId="if-she-doesnt-know-heading"
      headingDark={IF_SHE_DOESNT_KNOW.headingDark}
      headingGradient={IF_SHE_DOESNT_KNOW.headingGradient}
      body={IF_SHE_DOESNT_KNOW.body}
      imageSrc={IF_SHE_DOESNT_KNOW.image.src}
      imageAlt={IF_SHE_DOESNT_KNOW.image.alt}
      imageOn="left"
      tone="grey"
    />
  );
}
