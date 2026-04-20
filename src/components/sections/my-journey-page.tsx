"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { TransitionLink } from "@/src/components/layout/transition-link";
import { journeyEducation, journeyExperiences, journeyProjects } from "@/src/data/journey-data";

gsap.registerPlugin(ScrollTrigger);

const heroInfoBlocks = [
  { label: "Current Role", value: "Director - IT & Software Development" },
  { label: "Focus", value: "Systems Architecture • UI/UX • Full-Stack" },
  { label: "Base", value: "Durg, India" },
  { label: "Languages", value: "English • Hindi • Punjabi" },
];

export function MyJourneyPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const heroOrbRef = useRef<HTMLDivElement | null>(null);
  const experienceRefs = useRef<Array<HTMLDivElement | null>>([]);
  const educationRefs = useRef<Array<HTMLDivElement | null>>([]);
  const projectsRailWrapRef = useRef<HTMLDivElement | null>(null);
  const projectsRailRef = useRef<HTMLDivElement | null>(null);
  const projectCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const projectGlowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const liveProjects = journeyProjects.filter((project) => project.status === "live");
  const completedProjects = journeyProjects.filter((project) => project.status === "completed");

  useLayoutEffect(() => {
    const root = rootRef.current;
    const heroTitle = heroTitleRef.current;
    const heroOrb = heroOrbRef.current;
    const projectsRailWrap = projectsRailWrapRef.current;
    const projectsRail = projectsRailRef.current;

    if (!root || !heroTitle || !heroOrb || !projectsRailWrap || !projectsRail) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroTitle,
        { yPercent: 16, scale: 1.06, rotate: 0.001 },
        {
          yPercent: -16,
          scale: 0.94,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=120%",
            scrub: true,
          },
        },
      );

      gsap.fromTo(
        heroOrb,
        { yPercent: -10, xPercent: -8, rotate: -10 },
        {
          yPercent: 20,
          xPercent: 8,
          rotate: 15,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      const experienceCards = experienceRefs.current.filter(Boolean) as HTMLDivElement[];
      experienceCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 120, rotateX: 8 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.06,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          },
        );
      });

      const educationCards = educationRefs.current.filter(Boolean) as HTMLDivElement[];
      educationCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 96, rotate: index % 2 === 0 ? -2 : 2 },
          {
            opacity: 1,
            y: 0,
            rotate: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      const railDistance = Math.max(0, projectsRail.scrollWidth - projectsRailWrap.clientWidth);
      if (railDistance > 0) {
        gsap.to(projectsRail, {
          x: -railDistance,
          ease: "none",
          scrollTrigger: {
            trigger: projectsRailWrap,
            start: "top top",
            end: `+=${railDistance + window.innerHeight * 0.55}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });
      }

      const projectCards = projectCardRefs.current.filter(Boolean) as HTMLDivElement[];
      projectCards.forEach((card, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        gsap.fromTo(
          card,
          {
            y: 70 * direction,
            rotate: 1.8 * direction,
          },
          {
            y: -70 * direction,
            rotate: -1.8 * direction,
            ease: "none",
            scrollTrigger: {
              trigger: projectsRailWrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.1,
            },
          },
        );
      });

      const projectGlows = projectGlowRefs.current.filter(Boolean) as HTMLDivElement[];
      projectGlows.forEach((glow, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        gsap.fromTo(
          glow,
          { xPercent: 24 * direction, yPercent: -8 },
          {
            xPercent: -24 * direction,
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: projectsRailWrap,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.4,
            },
          },
        );
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={rootRef} className="relative overflow-hidden bg-[#eae6dd] text-black">
      <section className="relative min-h-screen border-b border-black/10 px-6 pb-14 pt-32 md:px-10 lg:px-14">
        <div
          ref={heroOrbRef}
          className="pointer-events-none absolute right-[-12rem] top-[4rem] h-[24rem] w-[24rem] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(240,82,53,0.62), rgba(240,82,53,0.15) 45%, rgba(0,0,0,0) 72%)",
          }}
        />

        <div className="mx-auto max-w-[120rem]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/70">Sharaj Singh Padda</p>
          <h1 ref={heroTitleRef} className="font-display mt-5 text-[clamp(3.5rem,17vw,14rem)] uppercase leading-[0.78]">
            My Journey
          </h1>
          <p className="wf-text-main mt-6 max-w-[68ch] text-black/80">
            From design systems and dashboard architecture to full-stack SaaS execution, this is the complete timeline of my work experience, projects, and academic foundation.
          </p>

          <div className="mt-9 grid grid-cols-12 gap-4 md:gap-5">
            <div className="col-span-12 grid grid-cols-1 gap-3 md:col-span-6">
              {heroInfoBlocks.map((block) => (
                <article key={block.label} className="border border-black/20 bg-[#f8f3e9] p-4 md:p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/65">{block.label}</p>
                  <p className="mt-2 text-sm leading-7 text-black/85 md:text-base">{block.value}</p>
                </article>
              ))}
            </div>

            <div className="col-span-12 border border-black/20 bg-[#0f0f0f] p-5 text-[#f2f0e9] md:col-span-6 md:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f2f0e9]/75">Product Snapshot</p>
              <h3 className="font-display mt-4 text-6xl uppercase leading-[0.82] md:text-7xl">Live Product Motion</h3>
              <p className="mt-4 max-w-[50ch] text-sm leading-7 text-[#f2f0e9]/85 md:text-base">
                Scroll down to the Projects rail to explore layered parallax movement. Each product card now moves on a separate depth plane with drifting glow gradients for a smoother, cinematic motion system.
              </p>

              <div className="mt-5 grid grid-cols-12 gap-2">
                <div className="col-span-4 border border-white/20 bg-white/5 p-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f2f0e9]/78">
                  Horizontal rail pin
                </div>
                <div className="col-span-4 border border-white/20 bg-white/5 p-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f2f0e9]/78">
                  Layered card drift
                </div>
                <div className="col-span-4 border border-white/20 bg-white/5 p-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f2f0e9]/78">
                  Glow parallax
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <div className="mb-12 grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/70">Work Experience</p>
            </div>
            <h2 className="wf-heading-h1 col-span-12 md:col-span-8">Roles That Built My Edge</h2>
          </div>

          <div className="space-y-5">
            {journeyExperiences.map((experience, index) => (
              <div
                key={`${experience.company}-${experience.period}`}
                ref={(node) => {
                  experienceRefs.current[index] = node;
                }}
                className="border border-black/20 bg-[#f6f1e7] p-6 md:p-7"
              >
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-4">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f05235]">{experience.period}</p>
                    <p className="mt-2 text-sm text-black/70">{experience.location}</p>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="wf-heading-h3 text-black">{experience.role}</h3>
                    <p className="mt-1 text-lg text-black/80">{experience.company}</p>
                    <ul className="mt-4 space-y-2 pl-4 text-sm leading-7 text-black/80 md:text-base">
                      {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/12 py-20">
        <div className="mb-8 px-6 md:px-10 lg:px-14">
          <div className="mx-auto max-w-[120rem]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/70">Projects</p>
            <h2 className="wf-heading-h1 mt-4">Open any project for full details</h2>
          </div>
        </div>

        <div ref={projectsRailWrapRef} className="relative h-[78vh] overflow-hidden">
          <div ref={projectsRailRef} className="flex h-full items-stretch gap-5 px-6 md:px-10 lg:px-14">
            {journeyProjects.map((project, index) => (
              <div
                key={project.slug}
                ref={(node) => {
                  projectCardRefs.current[index] = node;
                }}
                className="relative w-[min(92vw,34rem)] shrink-0"
              >
                <TransitionLink
                  href={`/my-journey/projects/${project.slug}`}
                  className="group relative block h-full overflow-hidden border border-black/30 bg-[#111] p-6 text-[#f2f0e9] md:p-7"
                >
                  <div
                    ref={(node) => {
                      projectGlowRefs.current[index] = node;
                    }}
                    className="pointer-events-none absolute inset-0 opacity-75 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 75% 15%, rgba(240,82,53,0.35), rgba(0,0,0,0) 45%), linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
                    }}
                  />
                  <p className="relative z-10 font-mono text-xs uppercase tracking-[0.22em] text-[#f05235]">
                    {project.period}
                  </p>
                  <h3 className="relative z-10 mt-4 font-display text-6xl uppercase leading-[0.82]">
                    {project.title}
                  </h3>
                  <span
                    className={`relative z-10 mt-4 inline-flex border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
                      project.status === "live"
                        ? "border-[#96ff00]/70 bg-[#96ff00]/10 text-[#dbf86f]"
                        : "border-white/30 text-white/80"
                    }`}
                  >
                    {project.tag}
                  </span>
                  <p className="relative z-10 mt-5 max-w-[42ch] text-sm leading-7 text-[#f2f0e9]/85 md:text-base">
                    {project.summary}
                  </p>
                  <p className="relative z-10 mt-8 font-mono text-xs uppercase tracking-[0.2em] text-[#f2f0e9]/70">
                    Open project details
                  </p>
                </TransitionLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <div className="mb-12 grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/70">Project Archive</p>
            </div>
            <h2 className="wf-heading-h1 col-span-12 md:col-span-8">All Projects, Fully Listed</h2>
          </div>

          <div className="space-y-14">
            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="wf-heading-h3 text-black">Live Projects</h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/60">{liveProjects.length} active builds</p>
              </div>
              <div className="grid grid-cols-12 gap-4 md:gap-5">
                {liveProjects.map((project) => (
                  <TransitionLink
                    key={`archive-live-${project.slug}`}
                    href={`/my-journey/projects/${project.slug}`}
                    className="col-span-12 overflow-hidden border border-black/20 bg-[#f7f3ea] transition-transform duration-300 hover:-translate-y-1 md:col-span-6"
                  >
                    <div className="grid grid-cols-12 gap-0 md:min-h-[20rem]">
                      <div
                        className="col-span-12 min-h-[11rem] md:col-span-5"
                        style={{
                          background:
                            project.slug === "agriscale-farm-connect"
                              ? "linear-gradient(135deg, rgba(240,82,53,0.95), rgba(240,82,53,0.25) 45%, rgba(0,0,0,0.9))"
                              : "linear-gradient(135deg, rgba(0,0,0,0.95), rgba(240,82,53,0.25) 52%, rgba(22,22,22,0.95))",
                        }}
                      >
                        <div className="flex h-full flex-col justify-between p-5 text-[#f2f0e9]">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Live</span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">{project.period}</span>
                          </div>
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#dbf86f]">thumbnail</p>
                            <p className="mt-2 font-display text-4xl uppercase leading-[0.84]">{project.title}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 p-5 md:col-span-7 md:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f05235]">{project.period}</p>
                          <span className="inline-flex border border-[#96ff00]/70 bg-[#96ff00]/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#2c3f00]">
                            {project.tag}
                          </span>
                        </div>
                        <h4 className="wf-heading-h3 mt-4 text-black">{project.title}</h4>
                        <p className="wf-text-main mt-3 text-black/80">{project.summary}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.slice(0, 4).map((item) => (
                            <span
                              key={`${project.slug}-${item}`}
                              className="border border-black/15 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-black/70"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TransitionLink>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="wf-heading-h3 text-black">Completed Projects</h3>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/60">{completedProjects.length} shipped</p>
              </div>
              <div className="grid grid-cols-12 gap-4 md:gap-5">
                {completedProjects.map((project) => (
                  <TransitionLink
                    key={`archive-completed-${project.slug}`}
                    href={`/my-journey/projects/${project.slug}`}
                    className="col-span-12 overflow-hidden border border-black/20 bg-[#f7f3ea] transition-transform duration-300 hover:-translate-y-1 md:col-span-6"
                  >
                    <div className="grid grid-cols-12 gap-0 md:min-h-[20rem]">
                      <div
                        className="col-span-12 min-h-[11rem] md:col-span-5"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(17,17,17,0.98), rgba(240,82,53,0.18) 48%, rgba(18,18,18,0.95))",
                        }}
                      >
                        <div className="flex h-full flex-col justify-between p-5 text-[#f2f0e9]">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">Completed</span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em]">{project.period}</span>
                          </div>
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#dbf86f]">thumbnail</p>
                            <p className="mt-2 font-display text-4xl uppercase leading-[0.84]">{project.title}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-12 p-5 md:col-span-7 md:p-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f05235]">{project.period}</p>
                          <span className="inline-flex border border-black/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-black/70">
                            {project.tag}
                          </span>
                        </div>
                        <h4 className="wf-heading-h3 mt-4 text-black">{project.title}</h4>
                        <p className="wf-text-main mt-3 text-black/80">{project.summary}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.stack.slice(0, 4).map((item) => (
                            <span
                              key={`${project.slug}-${item}`}
                              className="border border-black/15 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-black/70"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TransitionLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[120rem]">
          <div className="mb-12 grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-black/70">Education</p>
            </div>
            <h2 className="wf-heading-h1 col-span-12 md:col-span-8">Academic Foundation</h2>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-5">
            {journeyEducation.map((education, index) => (
              <article
                key={education.institution}
                ref={(node) => {
                  educationRefs.current[index] = node;
                }}
                className="col-span-12 border border-black/20 bg-[#f5f0e4] p-6 md:col-span-4 md:p-7"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#f05235]">{education.period}</p>
                <h3 className="wf-heading-h3 mt-4 text-black">{education.credential}</h3>
                <p className="mt-2 text-black/80">{education.institution}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-black/65">{education.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
