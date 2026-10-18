import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BeyondSection } from "@/components/sections/BeyondSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <BeyondSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
