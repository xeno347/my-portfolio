import { SplitTextReveal } from "@/src/components/animations/split-text-reveal";

export default function AboutPage() {
  return (
    <main className="surface-grid min-h-screen px-6 py-28 md:px-10 lg:px-14">
      <section className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-black/70">About</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <SplitTextReveal
            as="h1"
            mode="words"
            text="Technologist, IT Director, and BCA graduate with a strong foundation in systems architecture, UI/UX design, and full-stack development."
            className="font-display text-[clamp(2.5rem,8vw,7.5rem)] leading-[0.86] uppercase text-black"
          />
          <p className="mt-8 max-w-[58ch] text-base leading-8 text-black/80 md:text-lg">
            I currently lead IT and software development at Amrit Agri Innovations Pvt Ltd, where I architect Zenithra, a B2B SaaS platform for renewable bio-energy operations. My work bridges physical supply-chain realities with modern enterprise software using React, TypeScript, and cloud infrastructure.
          </p>
        </div>
      </section>
    </main>
  );
}
