import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteFrameRails } from "@/components/SiteFrameRails";
import { RetailPageContent } from "@/components/retail/RetailPageContent";
import { RetailHero } from "@/components/retail/RetailHero";
import { RETAIL_META } from "@/lib/retail-copy";
import { HERO_VIEWPORT_SHELL_CLASS } from "@/lib/site-layout";

export const metadata: Metadata = {
  title: RETAIL_META.title,
  description: RETAIL_META.description,
};

export default function RetailPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white text-neutral-900 antialiased">
      <div className="relative w-full min-w-0">
        <div className={HERO_VIEWPORT_SHELL_CLASS}>
          <RetailHero />
        </div>
        <RetailPageContent />
        <SiteFrameRails />
      </div>
      <Footer />
    </main>
  );
}
