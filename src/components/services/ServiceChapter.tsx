import { assetPath } from "@/lib/asset-path";
import Link from "next/link";
import type { ServicePillar } from "@/data/site";
import styles from "./services.module.css";

export function ServiceChapter({ pillar }: { pillar: ServicePillar }) {
  const id = pillar.title.toLowerCase();
  return (
    <section className={`${styles.chapter} ${styles[pillar.theme]}`} id={id} data-service-chapter aria-labelledby={`${id}-heading`}>
      <div className={styles.chapterViewport} data-chapter-viewport>
        <div className={styles.environment}>
          <div className={styles.chapterBackdrop} aria-hidden="true">
            <img className={styles.chapterArtwork} src={pillar.pageArtwork} alt="" width={1200} height={1600} />
            {pillar.texture ? <img className={styles.chapterTerrain} src={assetPath("/assets/services-page-codex-handoff/assets/forest-terrain-texture.svg")} alt="" width={1600} height={700} /> : null}
          </div>
          <div className={`container ${styles.pinnedInner}`}>
            <div className={styles.chapterIntro}>
              <span className={styles.chapterNumber}>{pillar.number}</span>
              <h2 id={`${id}-heading`}>{pillar.title}</h2>
              <p>{pillar.description}</p>
              <span className={styles.capabilityCount}>{pillar.services.length} CAPABILITIES</span>
            </div>
          </div>
        </div>
        <div className={`container ${styles.chapterFlow}`}>
          <div className={styles.narrativePanel}>
            <span className={styles.serviceCounter} data-service-counter aria-hidden="true">01 / {pillar.services.length}</span>
            <div className={styles.cardRail}>
              {pillar.services.map((service) => (
                <div className={styles.cardFrame} key={service.id} data-card-frame>
                  <article className={styles.card} data-service-card data-service-id={service.id} aria-labelledby={`${service.id}-title`}>
                    <img className={styles.serviceIcon} src={service.icon} alt="" aria-hidden="true" width={32} height={32} />
                    <div>
                      <h3 id={`${service.id}-title`}>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                    <Link className={styles.cardLink} href="/contact" aria-label={`Discuss ${service.title}`}><span aria-hidden="true">→</span></Link>
                  </article>
                </div>
              ))}
            </div>
            <ol className={styles.serviceProgress} aria-label={`${pillar.title} service progress`}>
              {pillar.services.map((service, index) => (
                <li key={service.id}>
                  <a href={`#${service.id}`} data-service-progress>
                    <span className="sr-only">{String(index + 1).padStart(2, "0")} — {service.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className={styles.activationRail} aria-hidden="true" data-activation-rail>
        {pillar.services.map((service, index) => (
          <div className={styles.serviceZone} key={service.id} id={service.id} data-service-zone data-service-index={index} />
        ))}
      </div>
    </section>
  );
}
