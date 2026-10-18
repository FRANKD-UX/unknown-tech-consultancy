import { assetPath } from "@/lib/asset-path";
import { processSteps } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "./services.module.css";

const engagements = [
  { title: "Project-based", description: "Ideal for defined projects with clear outcomes." },
  { title: "Retainer", description: "Ongoing support, development and optimisation." },
  { title: "Advisory", description: "Strategy, architecture and technical leadership." },
];

export function ServicesClosing() {
  return (
    <>
      <section className={styles.summary} aria-labelledby="services-process-heading">
        <div className={`container ${styles.summaryLayout}`}>
          <div className={styles.summaryHeading}>
            <p className={styles.eyebrow}>OUR PROCESS</p>
            <h2 id="services-process-heading">A clear path from<br />strategy to impact.</h2>
          </div>
          <ol className={styles.processSummary}>
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className={styles.engagements} aria-labelledby="engagement-heading">
        <div className={`container ${styles.summaryLayout}`}>
          <div className={styles.summaryHeading}>
            <p className={styles.eyebrow}>ENGAGEMENT MODELS</p>
            <h2 id="engagement-heading">Flexible ways<br />to work together.</h2>
          </div>
          <div className={styles.engagementGrid}>
            {engagements.map((engagement, index) => (
              <article key={engagement.title}>
                <span className={styles.engagementIndex}>0{index + 1}</span>
                <h3>{engagement.title}</h3>
                <p>{engagement.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.closing} aria-labelledby="services-cta-heading">
        <img src={assetPath("/assets/services-page-codex-handoff/assets/forest-terrain-texture.svg")} alt="" aria-hidden="true" width={1600} height={700} />
        <div className={`container ${styles.closingInner}`}>
          <div>
            <p className={styles.eyebrow}>READY FOR WHAT&apos;S NEXT?</p>
            <h2 id="services-cta-heading">Let&apos;s turn your ideas into real-world impact.</h2>
            <p>Tell us what you&apos;re trying to solve and we&apos;ll help you determine the right next step.</p>
          </div>
          <ButtonLink href="/contact" variant="light" className={styles.accentButton} showArrow={false}>Let&apos;s Talk</ButtonLink>
        </div>
      </section>
    </>
  );
}
