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
import { FadeInSection } from "@/components/FadeInSection";

export default function Home() {
  return (
    <main id="main-content">
      <FadeInSection>
        <Hero />
      </FadeInSection>
      <FadeInSection>
        <TechStack />
      </FadeInSection>
      <FadeInSection>
        <DemoSection />
      </FadeInSection>
      <FadeInSection>
        <Capability />
      </FadeInSection>
      <FadeInSection>
        <Solutions />
      </FadeInSection>
      <FadeInSection>
        <Integrations />
      </FadeInSection>
      <FadeInSection>
        <Dashboard />
      </FadeInSection>
      <FadeInSection>
        <Security />
      </FadeInSection>
      <FadeInSection>
        <Technology />
      </FadeInSection>
      <FadeInSection>
        <Process />
      </FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <FAQ />
      </FadeInSection>
      {/* Contact CTA is in Footer */}
    </main>
  );
}
