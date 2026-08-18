import { HowCaraWorksBlock } from "@/components/how-it-works/HowCaraWorksBlock";
import {
  RETAIL_BACKUP,
  RETAIL_CUSTOM,
  RETAIL_SETUP,
  RETAIL_SHOP,
} from "@/lib/retail-copy";

export function RetailCaraStory() {
  return (
    <>
      <HowCaraWorksBlock
        id="retail-backup"
        headingId="retail-backup-heading"
        headingDark={RETAIL_BACKUP.headingDark}
        headingGradient={RETAIL_BACKUP.headingGradient}
        body={RETAIL_BACKUP.body}
        imageSrc={RETAIL_BACKUP.image.src}
        imageAlt={RETAIL_BACKUP.image.alt}
        imageOn="right"
        tone="white"
      />
      <HowCaraWorksBlock
        id="retail-shop"
        headingId="retail-shop-heading"
        headingDark={RETAIL_SHOP.headingDark}
        headingGradient={RETAIL_SHOP.headingGradient}
        body={RETAIL_SHOP.body}
        imageSrc={RETAIL_SHOP.image.src}
        imageAlt={RETAIL_SHOP.image.alt}
        imageOn="left"
        tone="grey"
      />
      <HowCaraWorksBlock
        id="retail-custom"
        headingId="retail-custom-heading"
        headingDark={RETAIL_CUSTOM.headingDark}
        headingGradient={RETAIL_CUSTOM.headingGradient}
        body={RETAIL_CUSTOM.body}
        imageSrc={RETAIL_CUSTOM.image.src}
        imageAlt={RETAIL_CUSTOM.image.alt}
        imageOn="right"
        tone="white"
      />
      <HowCaraWorksBlock
        id="retail-setup"
        headingId="retail-setup-heading"
        headingDark={RETAIL_SETUP.headingDark}
        headingGradient={RETAIL_SETUP.headingGradient}
        body={RETAIL_SETUP.body}
        imageSrc={RETAIL_SETUP.image.src}
        imageAlt={RETAIL_SETUP.image.alt}
        imageOn="left"
        tone="grey"
      />
    </>
  );
}
