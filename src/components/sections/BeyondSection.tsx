import { ButtonLink } from "@/components/ui/ButtonLink";
import { supportingServices } from "@/data/site";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function BeyondSection() {
  return (
    <section className="section section--bone section--compact">
      <div className="container">
        <SectionIntro
          eyebrow="MORE WAYS WE HELP"
          title="Beyond custom development."
          body="From day-to-day support to long-term digital growth, we provide the surrounding technology services businesses need to keep moving."
        />

        <div className="support-grid">
          {supportingServices.map((service) => (
            <article className="support-item" key={service.title}>
              <img src={service.icon} alt="" aria-hidden="true" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ButtonLink href="/services" variant="outline" showArrow={false}>Learn more</ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
