"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const narrativeItems = [
  "Director - IT & Software Development at Amrit Agri Innovations since March 2026.",
  "Architecting Zenithra, a B2B SaaS platform for renewable bio-energy operations.",
  "Built 12+ dashboards in AgriScale across logistics, AI analysis, and workforce operations.",
  "Shipping full-stack experiences with React, Next.js, TypeScript, Nest.js, and AWS.",
] as const;

export function ScrollPinNarrative() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const ctx = gsap.context(() => {
      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

      gsap.set(items, { opacity: 0.1, y: 64 });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      items.forEach((item, index) => {
        timeline
          .to(item, { opacity: 1, y: 0, duration: 0.55 }, index)
          .to(item, { opacity: index === items.length - 1 ? 1 : 0.2, y: -20, duration: 0.45 }, index + 0.55);
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative noisy-divider bg-[#dcd4c4]">
      <div className="mx-auto min-h-screen max-w-[1400px] px-6 py-20 md:px-10 lg:px-14">
        <div className="grid min-h-[70vh] grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/70">
              Career Highlights
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="space-y-7 md:space-y-10">
              {narrativeItems.map((item, index) => (
                <div
                  key={item}
                  ref={(node) => {
                    itemRefs.current[index] = node;
                  }}
                  className="font-display text-4xl leading-[0.9] text-black sm:text-5xl md:text-6xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
