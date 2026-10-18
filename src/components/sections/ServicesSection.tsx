import Link from "next/link";
import { servicePillars } from "@/data/site";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionIntro
          eyebrow="WHAT WE DO"
          title="Technology Services for Real Business Impact"
          body="From building and automating to securing and scaling, we deliver end-to-end technology services designed around your goals."
        />

        <div className="service-pillars">
          {servicePillars.map((pillar) => (
            <article className={`service-pillar service-pillar--${pillar.theme}`} key={pillar.number} aria-labelledby={`service-pillar-${pillar.number}`}>
              <img className="service-pillar__artwork" src={pillar.artwork} alt="" aria-hidden="true" width={1200} height={1600} />
              {pillar.texture ? (
                <img className="service-pillar__terrain" src={pillar.texture} alt="" aria-hidden="true" width={1600} height={700} />
              ) : null}

              <div className="service-pillar__content">
                <span className="service-pillar__number">{pillar.number}</span>
                <h3 id={`service-pillar-${pillar.number}`}>{pillar.title}</h3>
                <p className="service-pillar__description">{pillar.description}</p>

                <ul>
                  {pillar.services.map((service) => (
                    <li key={service.id}>
                      <img className="service-pillar__icon" src={service.icon} alt="" aria-hidden="true" width={20} height={20} />
                      <span>{service.title}</span>
                    </li>
                  ))}
                </ul>

                <Link className="service-pillar__cta" href="/services">
                  <span className="service-pillar__cta-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                  <span>{pillar.ctaLabel}</span>
                  <span className="service-pillar__cta-line" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
