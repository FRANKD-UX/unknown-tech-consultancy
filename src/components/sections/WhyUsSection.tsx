import { values } from "@/data/site";
import { SectionIntro } from "@/components/ui/SectionIntro";

export function WhyUsSection() {
  return (
    <section className="section section--forest">
      <div className="forest-texture" aria-hidden="true" />
      <div className="container section__content">
        <SectionIntro
          eyebrow="WHY US"
          title={"Technology should solve\nthe problem, not become\nanother one."}
          body="We combine technical expertise with business understanding to deliver solutions that are practical, scalable and built for the long term."
          inverse
        />

        <div className="value-grid">
          {values.map((value) => (
            <article className="value-item" key={value.title}>
              <img src={value.icon} alt="" aria-hidden="true" />
              <div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
