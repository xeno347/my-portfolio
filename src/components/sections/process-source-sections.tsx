import { MagneticButton } from "@/src/components/ui/magnetic-button";

type Card = {
  title: string;
  text: string;
};

const systemCards: readonly Card[] = [
  {
    title: "Director - IT & Software Development (2026 - present)",
    text: "At Amrit Agri Innovations Pvt Ltd, I lead architecture, product direction, and execution for technology initiatives recognized under Startup India.",
  },
  {
    title: "Zenithra product architecture",
    text: "I designed Zenithra as a specialized B2B SaaS platform for renewable bio-energy operations, connecting biomass procurement, plant logistics, and decision dashboards.",
  },
  {
    title: "Lead UI/UX + development at Amrit Agrotech",
    text: "Built and shipped AgriScale with 12+ responsive dashboards including employee, logistics, AI analysis, and task management experiences.",
  },
  {
    title: "UI system foundation at Skyroot Marktech",
    text: "At Skyroot Marktech, I led UX for AapliShala HRMS across Admin, HR, and Employee workflows, building role-specific IA, reusable components, and usability-tested interaction patterns.",
  },
  {
    title: "BCA in computer applications",
    text: "Completed Bachelor of Computer Applications at Symbiosis Institute of Computer Studies and Research, Pune (2022 - 2025).",
  },
  {
    title: "Hands-on full-stack delivery",
    text: "I build across React, Next.js, TypeScript, Node.js, Nest.js, REST APIs, AWS, and production-grade design systems with measurable outcomes.",
  },
];

const resultCards: readonly Card[] = [
  {
    title: "Zenithra",
    text: "Architected a digital ecosystem for bio-energy facilities with unified operator dashboards and real-time logistics visibility.",
  },
  {
    title: "AgriScale",
    text: "Designed a farm monitoring platform with Excel-based data sync, AI-driven analysis, and end-to-end productivity workflows.",
  },
  {
    title: "AapliShala",
    text: "Designed a multi-role HRMS experience with cleaner attendance, leave, and profile workflows, stronger dashboard hierarchy, and modular patterns that improved cross-module consistency.",
  },
  {
    title: "PetDopt",
    text: "Built a mobile adoption app with real-time chat and location-based discovery to improve onboarding and matching experience.",
  },
];

const realityCards: readonly Card[] = [
  {
    title: "No fantasy guarantees",
    text: "No inflated promises. What I guarantee is a site or product system that earns trust, shows your value clearly, and supports better decisions before the first call.",
  },
  {
    title: "Products do not find clients by themselves",
    text: "Software is a closer, not a prospecting engine. It strengthens the work already happening across strategy, referrals, content, and outbound.",
  },
  {
    title: "Bad fundamentals stay bad",
    text: "Great UX can package value beautifully, but weak positioning, fuzzy offers, or unclear ownership still need to be fixed at the source.",
  },
  {
    title: "Reality of my stack",
    text: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, shadcn/ui, Node.js, Nest.js, AWS, REST APIs, Git, and Figma-based systems.",
  },
  {
    title: "Reality of my background",
    text: "BCA from Symbiosis Institute of Computer Studies and Research, Pune (2022 - 2025), plus prior schooling in Durg and Shimla. Languages: English, Hindi, Punjabi.",
  },
];

export function ProcessSystemSection() {
  return (
    <section className="process-section process-section-system bg-[#eae6dd]">
      <div className="process-container-large">
        <div className="process-grid-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/75">How I work</p>
            <h2 className="wf-heading-h1 mt-4 text-black">
              <span className="text-[#f05235]" style={{ fontFamily: "cursive", textTransform: "none" }}>
                My
              </span>
              <br />
              System
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="space-y-4 md:space-y-5">
              {systemCards.map((card) => (
                <article key={card.title} className="border border-black/18 bg-[#f3efe7] p-5 md:p-7">
                  <h3 className="wf-heading-h3 text-black">
                    {card.title}
                  </h3>
                  <p className="wf-text-main mt-4 max-w-[56ch] text-black/80">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessResultsSection() {
  return (
    <section className="process-section process-section-results bg-[#eae6dd]">
      <div className="process-container-large">
        <h2 className="wf-heading-h1 text-black">
          What you get is
          <br />
          <span className="text-[#f05235]" style={{ fontFamily: "cursive", textTransform: "none" }}>
            a website that works
          </span>
        </h2>

        <div className="process-grid-12 mt-12 md:gap-5">
          {resultCards.map((card, index) => (
            <article key={card.title} className="col-span-12 border border-black/18 bg-[#f7f4ec] p-5 md:col-span-6 md:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f05235]">{`(0${index + 1})`}</p>
              <h3 className="wf-heading-h3 mt-4 text-black">
                {card.title}
              </h3>
              <p className="wf-text-main mt-4 max-w-[46ch] text-black/80">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessRealitySection() {
  return (
    <section className="process-section process-section-reality bg-[#eae6dd]">
      <div className="process-container-large">
        <div className="process-grid-12 md:gap-6">
          <div className="col-span-12 md:col-span-4">
            <div className="space-y-6 md:sticky md:top-24">
              <h2 className="wf-heading-h1 text-black">
                Reality
                <br />
                <span className="text-[#f05235]" style={{ fontFamily: "cursive", textTransform: "none" }}>
                  check
                </span>
              </h2>

              <div className="border border-black/18 bg-[#f7f3ea] p-4 text-black/80">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/60">
                  literally me as a business owner saying all this
                </p>
                <div className="mt-4 h-56 overflow-hidden border border-black/12 bg-[linear-gradient(180deg,rgba(17,17,17,0.96),rgba(17,17,17,0.86),rgba(240,82,53,0.26))]">
                  <div className="flex h-full items-end justify-center p-5">
                    <div className="w-full rounded-t-[40%] border border-white/10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.14),rgba(0,0,0,0)_55%),linear-gradient(180deg,rgba(0,0,0,0.28),rgba(0,0,0,0.85))]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div className="space-y-3 md:space-y-4">
              {realityCards.map((card, index) => (
                <article key={card.title} className="border-t border-black/18 py-4 md:py-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f05235]">{`(0${index + 1})`}</p>
                  <h3 className="wf-heading-h3 mt-3 text-black">
                    {card.title}
                  </h3>
                  <p className="wf-text-main mt-3 max-w-[54ch] text-black/80">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSpacerSection() {
  return (
    <div className="process-section bg-[#eae6dd] py-0">
      <div className="process-container-large">
        <div className="h-24 md:h-28">
          <div className="h-full border-t border-black/10" />
        </div>
      </div>
    </div>
  );
}

export function ProcessCtaSection() {
  return (
    <section className="process-section process-section-cta bg-[#101010] text-[#f2f0e9]">
      <div className="process-container-large text-center">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#f2f0e9]/75">Work with me</p>
        <h2 className="wf-heading-h1 mt-8">
          Let&apos;s build
          <br />
          <span className="text-[#f05235]" style={{ fontFamily: "cursive", textTransform: "none" }}>
            together
          </span>
        </h2>
        <div className="mt-10 flex justify-center">
          <MagneticButton href="/contact">Contact Sharaj</MagneticButton>
        </div>
      </div>
    </section>
  );
}
