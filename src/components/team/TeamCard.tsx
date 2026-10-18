import Image from "next/image";
import Link from "next/link";
import { memberNumber, type TeamMember } from "@/data/team";
import styles from "./team.module.css";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link className={styles.card} href={member.route} aria-labelledby={`${member.id}-card-name`}>
      <div className={styles.cardPortrait}>
        <Image src={member.photo} alt={`Portrait of ${member.name}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
        <span className={styles.cardIndex} aria-hidden="true">{memberNumber(member)}</span>
      </div>
      <div className={styles.cardContent}>
        <h3 id={`${member.id}-card-name`}>{member.name}</h3>
        <p className={styles.cardRole}>{member.role}</p>
        <div className={styles.cardValue}>
          <p>{member.cardValue}</p>
          <span className={styles.arrow} aria-hidden="true">→</span>
        </div>
      </div>
    </Link>
  );
}
