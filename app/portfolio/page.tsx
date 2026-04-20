import { FeatureBentoGrid } from "@/src/components/ui/feature-bento-grid";
import { SplitTextReveal } from "@/src/components/animations/split-text-reveal";

export default function PortfolioPage() {
  return (
    <main className="flex w-full flex-col pt-24">
      <section className="surface-grid px-6 py-20 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 md:gap-8">
          <p className="col-span-12 font-mono text-xs uppercase tracking-[0.22em] text-black/70 md:col-span-3">
            Portfolio
          </p>
          <div className="col-span-12 md:col-span-9">
            <SplitTextReveal
              as="h1"
              mode="words"
              text="Selected systems and products across bio-energy SaaS, farm intelligence, HRMS workflows, and mobile consumer platforms."
              className="font-display text-[clamp(2.4rem,8vw,7rem)] leading-[0.86] uppercase text-black"
            />
          </div>
        </div>
      </section>
      <FeatureBentoGrid />
    </main>
  );
}
