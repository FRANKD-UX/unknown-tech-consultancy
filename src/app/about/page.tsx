import type { Metadata } from "next";
import { values, servicePillars } from "@/data/site";
import { EditorialShell } from "@/components/company/EditorialShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "@/components/company/company.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Commercial thinking, design and technical engineering brought together to solve real business challenges.",
};

export default function AboutPage() {
  return (
    <EditorialShell>
      <section className={`container ${styles.aboutIntro}`} aria-labelledby="about-heading">
        <p className={styles.eyebrow}>ABOUT UNKNOWN</p>
        <div className={styles.introSplit}>
          <h1 id="about-heading">The business comes first.<br />The technology follows.</h1>
          <div className={styles.introCopy}>
            <p className={styles.lead}>We bring commercial thinking, design and technical engineering together to solve real-world business challenges.</p>
            <p>From the first conversation to the systems that support everyday operations, our focus is on what your business needs to achieve — and the right technology to help it get there.</p>
          </div>
        </div>
      </section>

      <section className={styles.principles} aria-labelledby="principles-heading">
        <div className={`container ${styles.principlesLayout}`}>
          <div>
            <p className={styles.eyebrow}>WHAT GUIDES US</p>
            <h2 id="principles-heading">Practical thinking.<br />Lasting value.</h2>
          </div>
          <div className={styles.valueList}>
            {values.map((value, index) => (
              <article key={value.title}>
                <span className={styles.index} aria-hidden="true">0{index + 1}</span>
                <div><h3>{value.title}</h3><p>{value.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`container ${styles.connected}`} aria-labelledby="connected-heading">
        <div className={styles.connectedIntro}>
          <div>
            <p className={styles.eyebrow}>ONE CONNECTED APPROACH</p>
            <h2 id="connected-heading">From opportunity<br />to everyday operation.</h2>
          </div>
          <div>
            <p>Building a solution is one part of the work. Connecting it, protecting it and keeping it useful as the business evolves matter just as much.</p>
            <p>Our four capabilities bring that work together, with the right expertise for each engagement.</p>
          </div>
        </div>
        <div className={styles.pillarLinks}>
          {servicePillars.map((pillar) => (
            <article key={pillar.title}>
              <span className={styles.index}>{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <ButtonLink href={`/services#${pillar.title.toLowerCase()}`} variant="outline" showArrow={false} className={styles.capabilityButton}>Explore capability</ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.roundOff} aria-labelledby="people-heading">
        <div className={`container ${styles.roundOffInner}`}>
          <div>
            <p className={styles.eyebrow}>THE PEOPLE BEHIND IT</p>
            <h2 id="people-heading">Different expertise.<br />A shared purpose.</h2>
            <p>Commercial insight, thoughtful design and dependable engineering. Meet the people who bring these disciplines together around your goals.</p>
            <ButtonLink href="/team" variant="light" showArrow={false}>Meet our team</ButtonLink>
          </div>
          <div className={styles.conversation}>
            <p className={styles.eyebrow}>LET&apos;S TALK</p>
            <h3>What are you trying to solve?</h3>
            <p>Tell us where you want to go. We&apos;ll help you determine the right next step.</p>
            <ButtonLink href="/contact" showArrow={false}>Start a conversation</ButtonLink>
          </div>
        </div>
      </section>
    </EditorialShell>
  );
}
