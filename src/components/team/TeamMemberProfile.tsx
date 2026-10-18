import Image from "next/image";
import Link from "next/link";
import { memberNumber, type TeamMember } from "@/data/team";
import { TeamContact, TeamShell } from "./TeamShell";
import styles from "./team.module.css";

export function TeamMemberProfile({ member }: { member: TeamMember }) {
  return (
    <TeamShell dark>
      <main className={styles.profileMain}>
        <div className="container">
          <Link href="/team" className={styles.backLink}><span aria-hidden="true">←</span> Back to Team</Link>
          <article className={styles.profile} aria-labelledby="member-name">
            <div className={styles.portraitColumn}>
              <span className={styles.memberNumber} aria-hidden="true">{memberNumber(member)}</span>
              <div className={styles.profilePortrait}>
                <Image src={member.photo} alt={`Portrait of ${member.name}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 40vw, 30vw" preload />
              </div>
              <p className={styles.portraitStatement}>{member.cardValue}</p>
            </div>
            <div className={styles.identity}>
              <p className={styles.eyebrow}>{member.category}</p>
              <h1 id="member-name">{member.name}</h1>
              <p className={styles.role}>{member.role}</p>
              <h2 className={styles.valueHeadline}>{member.profileHeadline}</h2>
              <p className={styles.profileIntro}>{member.profileIntro}</p>
              <div className={styles.biography}>
                {member.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {member.technicalExpertise ? (
                <section className={styles.expertise} aria-labelledby="expertise-heading">
                  <h2 className={styles.eyebrow} id="expertise-heading">TECHNICAL EXPERTISE</h2>
                  <ul>{member.technicalExpertise.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </section>
              ) : null}
            </div>
            <section className={styles.journey} aria-labelledby="journey-heading">
              <h2 id="journey-heading" className={styles.eyebrow}>{member.clientJourneyTitle}</h2>
              <ol className={styles.journeySteps}>
                {member.clientJourney.map((step) => (
                  <li key={step.step}>
                    <span className={styles.journeyNode} aria-hidden="true">{step.step}</span>
                    <div><h3>{step.title}</h3><p>{step.copy}</p></div>
                  </li>
                ))}
              </ol>
              <div className={styles.outcome}>
                <h3 className={styles.eyebrow}>CLIENT OUTCOME</h3>
                <p>{member.clientOutcome}</p>
              </div>
            </section>
          </article>
        </div>
        <TeamContact dark />
      </main>
    </TeamShell>
  );
}
