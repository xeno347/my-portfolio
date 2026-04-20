import { MagneticButton } from "@/src/components/ui/magnetic-button";

export default function ContactPage() {
  return (
    <main className="surface-grid min-h-screen px-6 py-28 md:px-10 lg:px-14">
      <section className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-black/70">Contact</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h1 className="font-display text-[clamp(2.6rem,9vw,8rem)] leading-[0.85] uppercase text-black">
            Let&apos;s build something serious.
          </h1>
          <p className="mt-6 max-w-[52ch] text-base leading-8 text-black/80 md:text-lg">
            Reach out for product architecture, dashboard UX, full-stack implementation, or design systems. I work across React, Next.js, TypeScript, Node.js, and AWS.
          </p>
          <div className="mt-10">
            <MagneticButton href="mailto:sharajpadda881@gmail.com?subject=Portfolio%20Collaboration">
              sharajpadda881@gmail.com
            </MagneticButton>
          </div>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-black/70">
            +91 7000526029 • Behance: behance.net/sharajpaddal
          </p>
        </div>
      </section>
    </main>
  );
}
