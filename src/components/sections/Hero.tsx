import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CapabilityCarousel } from "@/components/hero/CapabilityCarousel";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__image" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__shell">
        <SiteNavbar />

        <div className="hero__content">
          <p className="hero__eyebrow">BUILD · AUTOMATE · SECURE · SCALE</p>
          <h1>
            <span>We engineer</span>
            <span>the systems behind</span>
            <span>ambitious businesses.</span>
          </h1>
          <p className="hero__description">
            A technology consultancy delivering software,<br className="desktop-break" />
            cloud infrastructure, automation and security<br className="desktop-break" />
            for real-world business challenges.
          </p>
          <ButtonLink href="/contact" showArrow={false}>Start a project</ButtonLink>
        </div>

        <CapabilityCarousel />
      </div>
    </header>
  );
}
