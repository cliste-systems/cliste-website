import { Features9 } from "@/components/blocks/features-9";
import { SITE_FRAME_CLASS } from "@/lib/site-layout";

export function PlatformOverview() {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "#FBFCFE" }}
      aria-labelledby="features-heading"
    >
      <div className={`relative min-w-0 ${SITE_FRAME_CLASS}`}>
        <Features9 />
      </div>
    </section>
  );
}
