import type { Metadata } from "next";
import { servicePillars } from "@/data/site";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ServicesExperience } from "@/components/services/ServicesExperience";
import { ServiceChapter } from "@/components/services/ServiceChapter";
import { ServicesClosing } from "@/components/services/ServicesClosing";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our software, cloud, automation, security and managed technology services, built around your business goals.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <ServicesExperience pillars={servicePillars.map((pillar) => ({ id: pillar.title.toLowerCase(), number: pillar.number, title: pillar.title }))}>
          {servicePillars.map((pillar) => <ServiceChapter pillar={pillar} key={pillar.number} />)}
        </ServicesExperience>
        <ServicesClosing />
      </main>
      <SiteFooter />
    </>
  );
}
