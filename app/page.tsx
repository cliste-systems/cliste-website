import { Hero } from "@/components/Hero";
import { HomeWithRails } from "@/components/HomeWithRails";
import { Footer } from "@/components/Footer";
import { SiteFrameRails } from "@/components/SiteFrameRails";

export default function Home() {
  return (
    <main id="main-content" className="overflow-x-clip">
      <div className="relative w-full min-w-0">
        <Hero />
        <HomeWithRails />
        <SiteFrameRails />
      </div>
      <Footer />
    </main>
  );
}
