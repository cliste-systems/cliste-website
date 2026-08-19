import { SITE_FRAME_CLASS } from "@/lib/site-layout";

/** Vertical side rails aligned to `SITE_FRAME_CLASS` — one continuous pair per page shell */
export function SiteFrameRails() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[35] min-h-full"
      aria-hidden
    >
      <div className={`relative mx-auto h-full min-h-full ${SITE_FRAME_CLASS}`}>
        <div className="absolute inset-y-0 left-0 w-px bg-slate-200" />
        <div className="absolute inset-y-0 right-0 w-px bg-slate-200" />
      </div>
    </div>
  );
}
