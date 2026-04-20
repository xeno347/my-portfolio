"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type FeatureItem = {
  title: string;
  description: string;
  metric: string;
  colSpan: string;
};

const featureCards: readonly FeatureItem[] = [
  {
    title: "Zenithra",
    description:
      "Architected a digital management ecosystem for bio-energy facilities to streamline biomass procurement and plant logistics.",
    metric: "B2B SaaS + System Architecture",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    title: "AgriScale",
    description:
      "Designed a farm monitoring system with Excel sync, AI-driven yield insights, and role-based operational dashboards.",
    metric: "React + TypeScript + AWS",
    colSpan: "col-span-12 md:col-span-3",
  },
  {
    title: "AapliShala",
    description:
      "Created a multi-role HRMS dashboard with clearer hierarchy, stronger usability, and improved team workflows.",
    metric: "Figma + React + HRMS",
    colSpan: "col-span-12 md:col-span-3",
  },
  {
    title: "PetDopt",
    description:
      "Built a mobile pet adoption experience with secure onboarding, dynamic filtering, and real-time chat support.",
    metric: "React Native + Next.js + Nest.js",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "Leadership & Strategy",
    description:
      "Product architecture, cross-functional leadership, go-to-market planning, and agile execution across teams.",
    metric: "Director-level ownership",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "Full-stack execution",
    description:
      "Frontend with React/Next.js and backend integration via Node.js, Nest.js, REST APIs, and AWS infrastructure.",
    metric: "Design to deployment",
    colSpan: "col-span-12 md:col-span-4",
  },
];

type PointerState = {
  x: number;
  y: number;
};

export function FeatureBentoGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pointer, setPointer] = useState<PointerState>({ x: 50, y: 50 });

  const activeCard = useMemo(
    () => (activeIndex === null ? null : featureCards[activeIndex]),
    [activeIndex],
  );

  return (
    <section className="surface-grid bg-background px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-black/65">Capabilities</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-5xl leading-[0.86] text-black sm:text-6xl md:text-7xl">
              Projects and capabilities from my resume.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-4 md:gap-5">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              className={`${card.colSpan} relative min-h-56 overflow-hidden border border-black/30 bg-[#f8f6ef] p-6`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width) * 100;
                const y = ((event.clientY - rect.top) / rect.height) * 100;
                setPointer({ x, y });
              }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
                style={{
                  opacity: activeIndex === index ? 1 : 0,
                  background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(150,255,0,0.33), transparent 60%)`,
                }}
              />
              <p className="relative z-10 font-mono text-[11px] uppercase tracking-[0.22em] text-black/70">
                {card.metric}
              </p>
              <h3 className="relative z-10 mt-7 font-display text-4xl leading-[0.9] text-black md:text-5xl">
                {card.title}
              </h3>
              <p className="relative z-10 mt-4 max-w-[34ch] text-sm leading-7 text-black/80 md:text-base">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 h-[56px] border border-black/20 bg-[#ece7da] px-4 py-3">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-black/75">
            {activeCard
              ? `Focused capability: ${activeCard.title}`
              : "Hover a capability tile to inspect interaction detail."}
          </p>
        </div>
      </div>
    </section>
  );
}
