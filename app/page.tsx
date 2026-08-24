import { Hero } from "@/components/Hero";
import { HomeWithRails } from "@/components/HomeWithRails";
import { Footer } from "@/components/Footer";
import { SiteFrameRails } from "@/components/SiteFrameRails";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { RETAIL_FAQS_HOMEPAGE } from "@/lib/retail-faq";

export default function Home() {
  return (
    <>
      <FaqJsonLd faqs={RETAIL_FAQS_HOMEPAGE} />
    <main id="main-content" className="overflow-x-clip">
      <div className="relative w-full min-w-0">
        <div className="relative w-full min-w-0">
          <Hero />
          <SiteFrameRails className="lg:hidden" />
        </div>
        <div className="relative w-full min-w-0">
          <HomeWithRails />
          <SiteFrameRails />
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
}
