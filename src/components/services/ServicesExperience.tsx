"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import styles from "./services.module.css";

type PillarLink = { id: string; number: string; title: string };

export function ServicesExperience({ pillars, children }: { pillars: PillarLink[]; children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(pillars[0]?.id);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const chapters = [...root.querySelectorAll<HTMLElement>("[data-service-chapter]")];
    const groups = chapters.map((chapter) => ({
      chapter,
      frames: [...chapter.querySelectorAll<HTMLElement>("[data-card-frame]")],
      zones: [...chapter.querySelectorAll<HTMLElement>("[data-service-zone]")],
      progress: [...chapter.querySelectorAll<HTMLAnchorElement>("[data-service-progress]")],
      counter: chapter.querySelector<HTMLElement>("[data-service-counter]"),
    }));
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1121px)");
    let focal: IntersectionObserver | undefined;
    let currentChapter: IntersectionObserver | undefined;
    let focalPoint = 0;

    const activate = (group: typeof groups[number], index: number) => {
      if (group.chapter.dataset.activeService === String(index)) return;
      group.chapter.dataset.activeService = String(index);
      group.frames.forEach((frame, position) => {
        frame.dataset.phase = position === index ? "active" : position === index + 1 ? "incoming" : position === index - 1 ? "outgoing" : "hidden";
        frame.inert = position !== index;
        if (position === index) frame.removeAttribute("aria-hidden");
        else frame.setAttribute("aria-hidden", "true");
      });
      group.progress.forEach((link, position) => {
        if (position === index) link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });
      if (group.counter) group.counter.textContent = `${String(index + 1).padStart(2, "0")} / ${group.frames.length}`;
    };

    const syncChapter = (group: typeof groups[number]) => {
      const first = group.zones[0]?.getBoundingClientRect();
      if (!first || !first.height) return;
      const index = Math.max(0, Math.min(group.frames.length - 1, Math.floor((focalPoint - first.top) / first.height)));
      activate(group, index);
    };

    const updateCurrentChapter: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
          if (root.dataset.oneCard === "true") {
            const group = groups.find((item) => item.chapter === entry.target);
            if (group) syncChapter(group);
          }
        }
      }
    };

    const configureMotion = () => {
      focal?.disconnect();
      currentChapter?.disconnect();
      const mainNavHeight = root.querySelector("header")?.getBoundingClientRect().height ?? 104;
      const pillarNavHeight = root.querySelector("#explore-services")?.getBoundingClientRect().height ?? 64;
      root.style.setProperty("--main-nav-height", `${mainNavHeight}px`);
      const stickyOffset = mainNavHeight + pillarNavHeight;
      const chapterPoint = Math.min(window.innerHeight - 1, stickyOffset + 1);
      currentChapter = new IntersectionObserver(updateCurrentChapter, {
        rootMargin: `${-chapterPoint}px 0px ${-(window.innerHeight - chapterPoint) + 1}px 0px`, threshold: 0,
      });
      chapters.forEach((chapter) => currentChapter?.observe(chapter));
      const enabled = desktop.matches && !motion.matches;
      root.dataset.oneCard = String(enabled);
      groups.forEach((group) => {
        delete group.chapter.dataset.activeService;
        if (!enabled) {
          group.frames.forEach((frame) => {
            delete frame.dataset.phase;
            frame.inert = false;
            frame.removeAttribute("aria-hidden");
          });
          group.progress.forEach((link) => link.removeAttribute("aria-current"));
        }
      });
      if (!enabled) return;
      focalPoint = (window.innerHeight + stickyOffset) / 2;
      // A one-pixel activation band plus half-open zone bounds selects exactly
      // one service, even when adjacent native scroll segments meet.
      focal = new IntersectionObserver((entries) => {
        if (root.dataset.oneCard !== "true") return;
        const changed = new Set<typeof groups[number]>();
        for (const entry of entries) {
          const group = groups.find((item) => item.chapter === entry.target.parentElement?.parentElement);
          if (group) changed.add(group);
        }
        // Process exits too: at a shared boundary the incoming zone may touch
        // the tiny observer band just before the focal point actually enters it.
        changed.forEach(syncChapter);
      }, { rootMargin: `${-focalPoint}px 0px ${-(window.innerHeight - focalPoint) + 1}px 0px`, threshold: 0 });
      groups.forEach((group) => {
        syncChapter(group);
        group.zones.forEach((zone) => focal?.observe(zone));
      });
    };

    configureMotion();
    const navigationResize = new ResizeObserver(configureMotion);
    root.querySelectorAll("header, #explore-services").forEach((element) => navigationResize.observe(element));
    // The enhanced scroll segments do not exist in the server layout yet.
    // Restore an explicitly requested fragment once, without overriding native
    // history restoration or any scrolling the user has already started.
    const initialAnchor = window.requestAnimationFrame(() => {
      if (!window.location.hash || window.scrollY !== 0) return;
      let id: string;
      try { id = decodeURIComponent(window.location.hash.slice(1)); }
      catch { return; }
      for (const group of groups) {
        const index = group.zones.findIndex((zone) => zone.id === id);
        const target = group.chapter.id === id ? group.chapter : index >= 0
          ? root.dataset.oneCard === "true" ? group.zones[index] : group.frames[index]
          : null;
        if (target) {
          target.scrollIntoView({ behavior: "instant", block: "start" });
          if (root.dataset.oneCard === "true") syncChapter(group);
          break;
        }
      }
    });
    motion.addEventListener("change", configureMotion);
    desktop.addEventListener("change", configureMotion);
    window.addEventListener("resize", configureMotion, { passive: true });
    return () => {
      window.cancelAnimationFrame(initialAnchor);
      focal?.disconnect();
      currentChapter?.disconnect();
      navigationResize.disconnect();
      motion.removeEventListener("change", configureMotion);
      desktop.removeEventListener("change", configureMotion);
      window.removeEventListener("resize", configureMotion);
    };
  }, []);

  return (
    <div className={styles.experience} ref={rootRef}>
      <header className={styles.mainNavHeader}>
        <SiteNavbar />
        <h1 className="sr-only">Services</h1>
      </header>
      <nav className={styles.pillarNav} aria-label="Explore services by pillar" id="explore-services">
        <div className={`container ${styles.pillarNavInner}`}>
          <span className={styles.pillarNavCaption}>EXPLORE BY PILLAR</span>
          {pillars.map((pillar) => (
            <a href={`#${pillar.id}`} key={pillar.id} aria-current={active === pillar.id ? "location" : undefined}>
              <span>{pillar.number}</span> {pillar.title.charAt(0) + pillar.title.slice(1).toLowerCase()}
            </a>
          ))}
        </div>
      </nav>
      {children}
    </div>
  );
}
