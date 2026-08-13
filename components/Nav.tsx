import { SiteHeader } from "@/components/SiteHeader";

export function Nav() {
  return (
    <div className="relative z-20 w-full bg-white text-neutral-900 antialiased">
      <div className="mx-auto w-full max-w-[1920px] p-4 sm:p-6 lg:p-8">
        <SiteHeader className="px-2 py-2 sm:px-4 sm:py-3 lg:px-12 lg:py-4" />
      </div>
    </div>
  );
}
