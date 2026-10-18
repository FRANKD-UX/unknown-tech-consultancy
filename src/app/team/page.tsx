import type { Metadata } from "next";
import { teamMembers, teamPage, workingTogether } from "@/data/team";
import { TeamCard } from "@/components/team/TeamCard";
import { TeamContact, TeamShell } from "@/components/team/TeamShell";
import styles from "@/components/team/team.module.css";

export const metadata: Metadata = {
  title: "Our Team",
  description: teamPage.intro,
};

export default function TeamPage() {
  return (
    <TeamShell>
      <main>
        <section className={`container ${styles.people}`} aria-labelledby="team-heading">
          <div className={styles.introduction}>
            <div>
              <p className={styles.eyebrow}>{teamPage.eyebrow}</p>
              <h1 id="team-heading">{teamPage.headline}</h1>
              <p className={styles.lead}>{teamPage.intro}</p>
            </div>
            <div className={styles.secondaryIntro}>
              <p className={styles.eyebrow}>{teamPage.secondaryEyebrow}</p>
              <h2>{teamPage.secondaryHeadline}</h2>
              <p>{teamPage.secondaryCopy}</p>
            </div>
          </div>
          <div className={styles.teamGrid}>
            {teamMembers.map((member) => <TeamCard key={member.id} member={member} />)}
          </div>
        </section>
        <section className={styles.together} aria-labelledby="together-heading">
          <div className={`container ${styles.togetherInner}`}>
            <div>
              <p className={styles.eyebrow}>{workingTogether.eyebrow}</p>
              <h2 id="together-heading">{workingTogether.headline}</h2>
              <p>{workingTogether.intro}</p>
            </div>
            <ol className={styles.flow}>
              {workingTogether.steps.map((step) => (
                <li key={step.step}>
                  <span className={styles.flowNode} aria-hidden="true">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <TeamContact />
      </main>
    </TeamShell>
  );
}
