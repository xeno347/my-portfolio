"use client";

import { motion } from "framer-motion";
import { SplitTextReveal } from "@/src/components/animations/split-text-reveal";
import { MagneticButton } from "@/src/components/ui/magnetic-button";

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { y: 22, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.2, 1, 0.25, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section className="surface-grid relative min-h-screen overflow-hidden px-6 py-10 md:px-10 md:py-14 lg:px-14">
      <motion.div
        className="mx-auto grid min-h-[88vh] max-w-[1400px] grid-cols-12 gap-6 md:gap-8"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={heroItem} className="col-span-12 md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-black/70">
            Sharaj Singh Padda
          </p>
          <p className="mt-3 max-w-[26ch] text-sm leading-7 text-black/75">
            Technologist, IT Director, and BCA graduate building scalable B2B SaaS systems across renewable bio-energy, operations, and enterprise workflows.
          </p>
        </motion.div>

        <div className="col-span-12 flex flex-col justify-end gap-8 md:col-span-8">
          <SplitTextReveal
            as="h1"
            text="Designing products that ship and scale"
            mode="chars"
            className="font-display text-7xl leading-[0.8] text-black sm:text-8xl md:text-[9.5rem]"
          />

          <SplitTextReveal
            as="h2"
            text="From product architecture and UI systems to full-stack implementation with React, Next.js, TypeScript, Node.js, and AWS."
            mode="words"
            className="max-w-[42ch] text-lg leading-relaxed text-black/85 md:text-2xl"
            delay={0.2}
          />

          <motion.div variants={heroItem} className="float-in">
            <MagneticButton aria-label="Open contact page">
              Contact Sharaj
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
