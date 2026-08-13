import { Hero } from "@/components/Hero";
import { HomeWithRails } from "@/components/HomeWithRails";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
      <main id="main-content" className="overflow-x-clip">
      <Hero />
      <HomeWithRails />
      <Footer />
    </main>
  );
}
