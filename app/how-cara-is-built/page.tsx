import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteFrameRails } from "@/components/SiteFrameRails";
import { HowCaraIsBuiltContent } from "@/components/how-it-works/HowCaraIsBuiltContent";
import { HowCaraIsBuiltHero } from "@/components/how-it-works/HowCaraIsBuiltHero";
import { HOW_CARA_IS_BUILT_META } from "@/lib/how-cara-is-built-copy";

export const metadata: Metadata = {
  title: HOW_CARA_IS_BUILT_META.title,
  description: HOW_CARA_IS_BUILT_META.description,
};

export default function HowCaraIsBuiltPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white text-neutral-900 antialiased">
      <div className="relative w-full min-w-0">
        <div className="bg-[#F8F9FB] lg:flex lg:min-h-[100svh] lg:flex-col">
          <HowCaraIsBuiltHero />
        </div>
        <HowCaraIsBuiltContent />
        <SiteFrameRails />
      </div>
      <Footer />
    </main>
  );
}
