import type { Metadata } from "next";
import { servicePillars } from "@/data/site";
import { contactDetails } from "@/data/contact";
import { EditorialShell } from "@/components/company/EditorialShell";
import { ProjectEnquiry } from "@/components/company/ProjectEnquiry";
import styles from "@/components/company/company.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell us what you're trying to build, improve, secure or scale. Start with the business challenge and explore the right next step.",
};

export default function ContactPage() {
  return (
    <EditorialShell>
      <section className={`container ${styles.contactLayout}`} aria-labelledby="contact-heading">
        <div className={styles.contactIntro}>
          <p className={styles.eyebrow}>CONTACT US</p>
          <h1 id="contact-heading">Every good solution starts with a conversation.</h1>
          <p>Whether you&apos;re looking to build something new, connect existing systems or make your technology more dependable, start with what you&apos;re trying to achieve.</p>
          {contactDetails.email ? (
            <a className={styles.directContact} href={`mailto:${contactDetails.email}`}>{contactDetails.email} <span aria-hidden="true">↗</span></a>
          ) : null}
        </div>
        <ProjectEnquiry capabilities={servicePillars.map(({ title }) => ({ title }))} recipient={contactDetails.email} />
      </section>
    </EditorialShell>
  );
}
