"use client";

import { useState, type FormEvent } from "react";
import styles from "./company.module.css";

type Capability = { title: string };

export function ProjectEnquiry({ capabilities, recipient }: { capabilities: readonly Capability[]; recipient: string | null }) {
  const [status, setStatus] = useState("");

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const company = String(fields.get("company") ?? "").trim();
    const capability = String(fields.get("capability") ?? "Not sure yet");
    const message = String(fields.get("message") ?? "").trim();
    const body = `PROJECT ENQUIRY\n\nName: ${name}\nEmail: ${email}\nOrganisation: ${company || "Not specified"}\nArea of interest: ${capability}\n\nWhat we're trying to solve:\n${message}\n`;
    if (recipient) {
      window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(`Project enquiry${company ? ` — ${company}` : ""}`)}&body=${encodeURIComponent(body)}`;
      setStatus("Your email application has been requested. Review and send the draft there to complete your enquiry.");
      return;
    }
    const url = URL.createObjectURL(new Blob([body], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "project-brief.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    // Revoke after the browser has started the download.
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setStatus("Your project brief is ready to save. No enquiry has been sent.");
  }

  return (
    <form className={styles.enquiry} onSubmit={prepareEnquiry} aria-labelledby="enquiry-heading">
      <h2 id="enquiry-heading">Tell us about your project.</h2>
      <p>You don&apos;t need a technical specification. Start with the challenge and what a useful outcome would look like.</p>
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="enquiry-name">Your name</label>
          <input id="enquiry-name" name="name" autoComplete="name" maxLength={120} required />
        </div>
        <div className={styles.field}>
          <label htmlFor="enquiry-email">Email address</label>
          <input id="enquiry-email" name="email" type="email" autoComplete="email" maxLength={254} required />
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor="enquiry-company">Organisation <span>(optional)</span></label>
          <input id="enquiry-company" name="company" autoComplete="organization" maxLength={160} />
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor="enquiry-capability">Where can we help?</label>
          <select id="enquiry-capability" name="capability" defaultValue="Not sure yet">
            <option>Not sure yet</option>
            {capabilities.map((capability) => <option key={capability.title} value={capability.title}>{capability.title.charAt(0) + capability.title.slice(1).toLowerCase()}</option>)}
          </select>
        </div>
        <div className={`${styles.field} ${styles.fieldWide}`}>
          <label htmlFor="enquiry-message">What are you trying to solve?</label>
          <textarea id="enquiry-message" name="message" placeholder="Your goals, what you have in place, and anything that is getting in the way." maxLength={4000} rows={6} required />
        </div>
      </div>
      <div className={styles.formFooter}>
        <button className="button button--primary" type="submit">Submit</button>
      </div>
      <p className={styles.status} role="status">{status}</p>
    </form>
  );
}
