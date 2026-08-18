import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteFrameRails } from "@/components/SiteFrameRails";
import { HowCaraWorksContent } from "@/components/how-it-works/HowCaraWorksContent";
import { HowCaraWorksHero } from "@/components/how-it-works/HowCaraWorksHero";
import { HOW_CARA_WORKS_META } from "@/lib/how-cara-works-copy";

export const metadata: Metadata = {
  title: HOW_CARA_WORKS_META.title,
  description: HOW_CARA_WORKS_META.description,
};

export default function HowCaraWorksPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white text-neutral-900 antialiased">
      <div className="relative w-full min-w-0">
        <div className="bg-[#F8F9FB] lg:flex lg:min-h-[100svh] lg:flex-col">
          <HowCaraWorksHero />
        </div>
        <HowCaraWorksContent />
        <SiteFrameRails />
      </div>
      <Footer />
    </main>
  );
}
