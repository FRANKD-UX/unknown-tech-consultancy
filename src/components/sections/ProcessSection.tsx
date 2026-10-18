"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { processSteps } from "@/data/site";
import { SectionIntro } from "@/components/ui/SectionIntro";

const stageInterval = 650;
const startDelay = 100;

export function ProcessSection() {
  const flowRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"pending" | "playing" | "complete">("pending");

  useEffect(() => {
    const flow = flowRef.current;
    if (!flow) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPhase(motion.matches ? "complete" : "playing");
        observer.disconnect();
      }
    }, { threshold: 0.25, rootMargin: "0px 0px -8% 0px" });
    const respectMotion = () => {
      if (motion.matches) {
        setPhase("complete");
        observer.disconnect();
      }
    };
    if (motion.matches) respectMotion();
    else observer.observe(flow);
    motion.addEventListener("change", respectMotion);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", respectMotion);
    };
  }, []);

  return (
    <section className="section section--warm">
      <div className="container">
        <SectionIntro
          eyebrow="OUR PROCESS"
          title={"From challenge\nto lasting impact."}
          body="A clear, collaborative process that keeps things moving and delivers real results."
        />

        <div
          className="process-flow"
          ref={flowRef}
          data-process-state={phase}
          style={{ "--process-duration": `${(processSteps.length - 1) * stageInterval}ms` } as CSSProperties}
        >
          <div className="process-timeline" aria-hidden="true">
            <div className="process-timeline__progress" />
          </div>
          {processSteps.map((step, index) => (
            <article
              className="process-step"
              key={step.number}
              style={{ "--process-delay": `${startDelay + index * stageInterval}ms` } as CSSProperties}
            >
              <span className="process-step__node" aria-hidden="true" />
              <span className="process-step__number">{step.number}</span>
              <div
                className="process-step__body"
                onAnimationEnd={(event) => {
                  if (index === processSteps.length - 1 && event.target === event.currentTarget) {
                    setPhase("complete");
                  }
                }}
              >
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 ? (
                <span className="process-step__arrow" aria-hidden="true">›</span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
