import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { SiteFrameRails } from "@/components/SiteFrameRails";
import { YourDashboardContent } from "@/components/how-it-works/YourDashboardContent";
import { YourDashboardHero } from "@/components/how-it-works/YourDashboardHero";
import { YOUR_DASHBOARD_META, YOUR_DASHBOARD_FAQS } from "@/lib/your-dashboard-copy";
import { pageMetadata } from "@/lib/seo";
import { HERO_VIEWPORT_SHELL_CLASS } from "@/lib/site-layout";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

export const metadata: Metadata = pageMetadata({
  path: "/your-dashboard",
  title: YOUR_DASHBOARD_META.title,
  description: YOUR_DASHBOARD_META.description,
});

export default function YourDashboardPage() {
  return (
    <>
      <FaqJsonLd faqs={YOUR_DASHBOARD_FAQS} />
    <main className="relative min-h-screen overflow-x-clip bg-white text-neutral-900 antialiased">
      <div className="relative w-full min-w-0">
        <div className={HERO_VIEWPORT_SHELL_CLASS}>
          <YourDashboardHero />
        </div>
        <YourDashboardContent />
        <SiteFrameRails />
      </div>
      <Footer />
    </main>
    </>
  );
}
