import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { DemoSection } from "@/components/DemoSection";
import { Capability } from "@/components/Capability";
import { Solutions } from "@/components/Solutions";
import { Integrations } from "@/components/Integrations";
import { Dashboard } from "@/components/Dashboard";
import { Security } from "@/components/Security";
import { Technology } from "@/components/Technology";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TechStack />
      <DemoSection />
      <Capability />
      <Solutions />
      <Integrations />
      <Dashboard />
      <Security />
      <Technology />
      <Process />
      <About />
      <FAQ />
      {/* Contact CTA is in Footer */}
    </main>
  );
}
