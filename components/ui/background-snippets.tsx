import { cn } from "@/lib/utils";

type BackgroundSnippetsProps = {
  className?: string;
};

/**
 * Black field + deep purple / indigo from the bottom (21st-style).
 * Full viewport width (breaks out of the content frame).
 */
export function BackgroundSnippets({ className }: BackgroundSnippetsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 h-full min-h-full w-screen max-w-[100vw] -translate-x-1/2 left-1/2",
        className,
      )}
      aria-hidden
    >
      <div className="h-full w-full bg-black" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_130%_75%_at_50%_100%,#5b21b6_0%,#3b0764_28%,#1e293b_45%,rgba(0,0,0,0)_68%)]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-violet-950/90 via-violet-950/25 to-transparent"
        aria-hidden
      />
    </div>
  );
}
