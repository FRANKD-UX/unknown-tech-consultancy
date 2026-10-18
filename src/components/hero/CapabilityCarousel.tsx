"use client";

import { useEffect, useRef, useState } from "react";
import { servicePillars, type Service } from "@/data/site";

const services = servicePillars.flatMap<Service>((pillar) => pillar.services);
// Identical presentation copies provide room to scroll in either direction
// while the CSS animation moves by exactly one catalogue width.
const copies = [0, 1, 2, 3] as const;
const marqueePixelsPerSecond = 50;

export function CapabilityCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLUListElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [interacting, setInteracting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    const track = viewport?.querySelector<HTMLElement>(".capability-track");
    if (!viewport || !group || !track) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const resetPosition = () => {
      // The CSS loop travels one catalogue, or one quarter of the four-copy
      // track. Derive duration from that measured distance, not item count.
      const width = group.getBoundingClientRect().width;
      const duration = width / marqueePixelsPerSecond;
      const progress = track.getAnimations()[0]?.effect?.getComputedTiming().progress ?? 0;
      track.style.setProperty("--capability-duration", `${duration}s`);
      const animation = track.getAnimations()[0];
      if (animation) animation.currentTime = progress * duration * 1000;
      viewport.scrollLeft = motion.matches ? 0 : width;
    };
    resetPosition();
    motion.addEventListener("change", resetPosition);
    const resize = new ResizeObserver(resetPosition);
    resize.observe(group);
    return () => {
      motion.removeEventListener("change", resetPosition);
      resize.disconnect();
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  const pauseForInteraction = () => {
    setInteracting(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setInteracting(false), 1200);
  };

  const handleScroll = () => {
    const viewport = viewportRef.current;
    const width = groupRef.current?.getBoundingClientRect().width;
    if (!viewport || !width) return;
    pauseForInteraction();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Rebase onto an identical copy, preserving both animation phase and pixels.
    if (viewport.scrollLeft < width || viewport.scrollLeft >= width * 2) {
      viewport.scrollLeft = width + ((viewport.scrollLeft % width) + width) % width;
    }
  };

  const move = (direction: number) => {
    const viewport = viewportRef.current;
    const item = groupRef.current?.firstElementChild;
    if (!viewport || !item) return;
    pauseForInteraction();
    viewport.scrollBy({ left: direction * (item.getBoundingClientRect().width + parseFloat(getComputedStyle(groupRef.current!).columnGap)), behavior: "instant" });
  };

  return (
    <div
      className="capability-carousel"
      role="region"
      aria-label="Technology services"
      data-paused={paused || interacting}
    >
      <div
        className="capability-viewport"
        id="hero-services"
        ref={viewportRef}
        tabIndex={0}
        aria-label="All services. Use arrow keys to browse and Space to pause or resume motion."
        onScroll={handleScroll}
        onTouchStart={pauseForInteraction}
        onTouchEnd={pauseForInteraction}
        onWheel={pauseForInteraction}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          } else if (event.key === " ") {
            event.preventDefault();
            setPaused((value) => !value);
          }
        }}
      >
        <div className="capability-track">
          {copies.map((copy) => (
            <ul className="capability-group" key={copy} ref={copy === 0 ? groupRef : undefined} aria-hidden={copy !== 0 ? true : undefined}>
              {services.map((service) => (
                <li className="capability" key={service.id} data-service-id={service.id}>
                  <img src={service.icon} width={64} height={64} alt="" aria-hidden="true" draggable={false} />
                  <span className="capability__pillar">{service.pillar}</span>
                  <span className="capability__title">{service.title}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <button
        className="sr-only"
        type="button"
        aria-label={paused ? "Resume service marquee" : "Pause service marquee"}
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? "Resume service marquee" : "Pause service marquee"}
      </button>
    </div>
  );
}
