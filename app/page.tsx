import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { HomeWithRails } from "@/components/HomeWithRails";
import { Footer } from "@/components/Footer";
import { SiteFrameRails } from "@/components/SiteFrameRails";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";
import { RETAIL_FAQS_HOMEPAGE } from "@/lib/retail-faq";
import { pageMetadata } from "@/lib/seo";
import { CLISTE_META_DESCRIPTION } from "@/lib/site-copy";

const HOME_TITLE = "HelloCara | AI voice receptionist for Irish businesses";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/",
    title: HOME_TITLE,
    description: CLISTE_META_DESCRIPTION,
  }),
  title: { absolute: HOME_TITLE },
};

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
