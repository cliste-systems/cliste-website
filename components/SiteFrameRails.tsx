import { SITE_FRAME_CLASS } from "@/lib/site-layout";

/** Vertical side rails aligned to `SITE_FRAME_CLASS` (homepage + niche pages). */
export function SiteFrameRails() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[35] min-h-full"
      aria-hidden
    >
      <div className={`relative h-full min-h-full ${SITE_FRAME_CLASS}`}>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-slate-200" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-slate-200" />
      </div>
    </div>
  );
}
