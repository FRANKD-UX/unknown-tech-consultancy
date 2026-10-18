import type { ReactNode } from "react";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ButtonLink } from "@/components/ui/ButtonLink";
import styles from "./team.module.css";

export function TeamShell({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`${styles.page} ${dark ? styles.forest : ""}`}>
      <header className={styles.header}><SiteNavbar /></header>
      {children}
      <SiteFooter />
    </div>
  );
}

export function TeamContact({ dark = false }: { dark?: boolean }) {
  return (
    <section className={styles.contact} aria-labelledby="team-contact-heading">
      <div className={`container ${styles.contactInner}`}>
        <div>
          <p className={styles.eyebrow}>LET&apos;S WORK TOGETHER</p>
          <h2 id="team-contact-heading">Let&apos;s turn your ideas into real-world impact.</h2>
          <p>Have a project in mind or want to learn more about how we can help?</p>
        </div>
        <ButtonLink href="/contact" variant={dark ? "light" : "primary"} showArrow={false}>Let&apos;s Talk</ButtonLink>
      </div>
    </section>
  );
}
