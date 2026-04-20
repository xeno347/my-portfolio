import { notFound } from "next/navigation";
import { journeyProjectMap, journeyProjects } from "@/src/data/journey-data";
import { TransitionLink } from "@/src/components/layout/transition-link";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journeyProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = journeyProjectMap[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eae6dd] px-6 pb-24 pt-28 text-black md:px-10 lg:px-14">
      <div className="mx-auto max-w-[92rem]">
        <TransitionLink
          href="/my-journey"
          className="inline-flex border border-black/25 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-black/80 transition-colors hover:bg-black hover:text-[#f2f0e9]"
        >
          Back to my journey
        </TransitionLink>

        <section className="mt-7 border border-black/20 bg-[#f7f3ea] p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f05235]">{project.period}</p>
          <h1 className="font-display mt-4 text-[clamp(3rem,10vw,8rem)] uppercase leading-[0.82] text-black">
            {project.title}
          </h1>
          <span
            className={`mt-4 inline-flex border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
              project.status === "live"
                ? "border-[#7cb600] bg-[#96ff00]/15 text-[#2c3f00]"
                : "border-black/30 text-black/80"
            }`}
          >
            {project.tag}
          </span>
          <p className="wf-text-main mt-6 max-w-[74ch] text-black/85">{project.summary}</p>
        </section>

        <section className="mt-8 grid grid-cols-12 gap-4 md:gap-5">
          <article className="col-span-12 border border-black/20 bg-[#f6f1e6] p-6 md:col-span-6 md:p-7">
            <h2 className="wf-heading-h3 text-black">Challenge</h2>
            <p className="wf-text-main mt-4 text-black/80">{project.challenge}</p>
          </article>

          <article className="col-span-12 border border-black/20 bg-[#f6f1e6] p-6 md:col-span-6 md:p-7">
            <h2 className="wf-heading-h3 text-black">Solution</h2>
            <p className="wf-text-main mt-4 text-black/80">{project.solution}</p>
          </article>
        </section>

        <section className="mt-8 grid grid-cols-12 gap-4 md:gap-5">
          <article className="col-span-12 border border-black/20 bg-[#111] p-6 text-[#f2f0e9] md:col-span-6 md:p-7">
            <h2 className="wf-heading-h3">Impact</h2>
            <ul className="mt-4 space-y-2 pl-4 text-sm leading-7 text-[#f2f0e9]/85 md:text-base">
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="col-span-12 border border-black/20 bg-[#f2ece1] p-6 md:col-span-6 md:p-7">
            <h2 className="wf-heading-h3 text-black">Highlights</h2>
            <ul className="mt-4 space-y-2 pl-4 text-sm leading-7 text-black/80 md:text-base">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-8 border border-black/20 bg-[#f7f3ea] p-6 md:p-7">
          <h2 className="wf-heading-h3 text-black">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="border border-black/25 bg-[#ebe4d7] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-black/80"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
