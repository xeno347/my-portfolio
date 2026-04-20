"use client";

import { motion } from "framer-motion";

type SystemCard = {
  title: string;
  text: string;
};

const cards: readonly SystemCard[] = [
  {
    title: "Director - IT & Software Development",
    text: "Amrit Agri Innovations Pvt Ltd (Mar 2026 - Present): leading the newly formed IT division, defining architecture, and driving go-to-market execution for enterprise software products.",
  },
  {
    title: "Lead UI/UX Designer & Developer",
    text: "Amrit Agrotech (Sep 2024 - Feb 2026): led design and frontend development of AgriScale, built 12+ responsive dashboards, and shipped mobile-first workflows for field adoption.",
  },
  {
    title: "UI/UX Designer",
    text: "Skyroot Marktech Pvt. Ltd. (Jan 2024 - Jul 2025): led UX for AapliShala HRMS by structuring Admin, HR, and Employee flows, building reusable design patterns, and iterating through usability testing to improve clarity across web and mobile.",
  },
  {
    title: "Education foundation",
    text: "Bachelor of Computer Applications from Symbiosis Institute of Computer Studies and Research, Pune (2022 - 2025), with continuous focus on systems thinking and product execution.",
  },
];

export function AgriSystemCards() {
  return (
    <section className="bg-[#0f0f0f] px-6 py-24 text-[#f2f0e9] md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#dbf86f]">Career Timeline</p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2 className="font-display text-5xl leading-[0.86] uppercase sm:text-6xl md:text-7xl">
              Experience that spans strategy, design, and engineering.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-4 md:gap-5">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="col-span-12 border border-[#f2f0e9]/25 bg-[#171717] p-6 md:col-span-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.09, ease: [0.2, 1, 0.25, 1] }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#dbf86f]">
                {`0${index + 1}`}
              </p>
              <h3 className="mt-4 font-display text-4xl leading-[0.9] uppercase md:text-5xl">{card.title}</h3>
              <p className="mt-4 max-w-[40ch] text-sm leading-7 text-[#f2f0e9]/80 md:text-base">
                {card.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
