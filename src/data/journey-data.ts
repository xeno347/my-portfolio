export type JourneyExperience = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
};

export type JourneyEducation = {
  institution: string;
  credential: string;
  period: string;
  location: string;
};

export type JourneyProject = {
  slug: string;
  title: string;
  stack: string[];
  period: string;
  status: "live" | "completed";
  tag: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  highlights: string[];
};

export const journeyExperiences: JourneyExperience[] = [
  {
    company: "Amrit Agri Innovations Pvt Ltd",
    role: "Director - IT & Software Development",
    period: "Mar 2026 - Present",
    location: "Bhilai, India",
    points: [
      "Spearheading the newly formed IT division under a Startup India recognized enterprise structure.",
      "Leading architecture, design, and go-to-market for Zenithra, a B2B SaaS platform for renewable bio-energy workflows.",
      "Digitizing agricultural and biomass supply-chain operations into decision-ready software systems.",
    ],
  },
  {
    company: "Amrit Agrotech",
    role: "Lead UI/UX Designer & Developer",
    period: "Sep 2024 - Feb 2026",
    location: "Durg, India",
    points: [
      "Led product design and frontend execution of AgriScale (Farm-Connect), a full-featured farm management SaaS dashboard.",
      "Built 12+ responsive dashboards spanning Employee, Logistics, AI Analysis, Task Management, and operations reporting.",
      "Delivered mobile-first and accessibility-focused interfaces for broader rural and field adoption.",
    ],
  },
  {
    company: "Skyroot Marktech Pvt. Ltd.",
    role: "UI/UX Designer",
    period: "Jan 2024 - Jul 2025",
    location: "Pune, India",
    points: [
      "Led UX design for AapliShala HRMS across Admin, HR, and Employee journeys, defining role-specific IA and task flows.",
      "Designed wireframes, interactive prototypes, and component libraries in Figma, then iterated through usability testing with cross-functional teams.",
      "Standardized reusable UI patterns for attendance, leave, payroll, and profile workflows to improve consistency and reduce handoff friction.",
      "Partnered with developers to align interaction behavior, edge cases, and responsive breakpoints for web and mobile dashboard views.",
    ],
  },
];

export const journeyEducation: JourneyEducation[] = [
  {
    institution: "Symbiosis Institute of Computer Studies and Research",
    credential: "Bachelor of Computer Applications (BCA)",
    period: "2022 - 2025",
    location: "Pune, India",
  },
  {
    institution: "Delhi Public School",
    credential: "Senior Secondary (CBSE)",
    period: "2021 - 2022",
    location: "Durg, India",
  },
  {
    institution: "Bishop Cotton School",
    credential: "Secondary Education (ICSE)",
    period: "2013 - 2020",
    location: "Shimla, India",
  },
];

export const journeyProjects: JourneyProject[] = [
  {
    slug: "agriscale-farm-connect",
    title: "AgriScale (Farm-Connect)",
    stack: ["React", "TypeScript", "shadcn/ui", "AWS", "AI Integration", "Excel Automation"],
    period: "2024 - Present",
    status: "live",
    tag: "Live • Ongoing",
    summary:
      "An operations-first farm intelligence platform that connects planning, tasks, workforce, logistics, and analytics in one command surface.",
    challenge:
      "Field teams and managers were operating across disconnected tools, resulting in delayed decisions, fragmented data, and weak accountability loops.",
    solution:
      "Designed a role-aware SaaS dashboard ecosystem with deep workflow coverage: task pipelines, employee management, AI analysis, inventory signals, and synced records.",
    impact: [
      "12+ production dashboards shipped",
      "Faster decision cycles through centralized visibility",
      "Higher adoption via mobile-first UX and clearer interaction patterns",
    ],
    highlights: [
      "Interactive farm map and timeline-driven daily task planning",
      "Multi-step modal workflows for creating tasks, employees, and inventory records",
      "Excel-linked data pipelines for practical operational onboarding",
    ],
  },
  {
    slug: "zenithra",
    title: "Zenithra",
    stack: ["B2B SaaS", "System Architecture", "React", "TypeScript"],
    period: "2026 - Present",
    status: "live",
    tag: "Production Build",
    summary:
      "A digital management ecosystem for renewable bio-energy facilities focused on biomass procurement and plant logistics.",
    challenge:
      "Bio-energy teams needed unified visibility across transport, intake, and plant-side operations without relying on fragmented spreadsheets.",
    solution:
      "Architected operator dashboards and workflow modules that expose real-time movement, bottlenecks, and daily operational metrics.",
    impact: [
      "Clearer cross-team coordination for logistics and plant operations",
      "Lower communication lag between planning and execution layers",
      "Foundation for scale-ready enterprise reporting",
    ],
    highlights: [
      "System architecture aligned with operational supply-chain reality",
      "Real-time dashboard surfaces for throughput and transport visibility",
      "Decision-focused IA for leadership and floor operators",
    ],
  },
  {
    slug: "aaplishala-hrms",
    title: "AapliShala HRMS",
    stack: ["Figma", "React", "TypeScript", "Design Systems"],
    period: "2024 - 2025",
    status: "completed",
    tag: "Completed",
    summary:
      "A role-driven HRMS product experience for Admin, HR, and Employee personas with cleaner navigation, stronger hierarchy, and faster day-to-day workflow execution.",
    challenge:
      "The product had fragmented navigation, overlapping role permissions, and inconsistent module behavior, which made attendance, leave, and employee operations harder than necessary.",
    solution:
      "Designed a modular dashboard system with role-specific information architecture, reusable components, and clearer action paths; validated changes with feedback loops before handoff.",
    impact: [
      "Reduced interaction friction in core HR tasks such as attendance and leave management",
      "Improved consistency across modules through shared UI patterns",
      "Faster onboarding for new internal users and operations teams",
      "Clearer collaboration between product, design, and engineering during iterations",
    ],
    highlights: [
      "Role-specific dashboards for Admin, HR, and Employee use cases",
      "Component-based interface architecture with reusable table, form, and status patterns",
      "Wireframe-to-prototype workflow with usability checkpoints",
      "Cross-team collaboration with product and engineering stakeholders",
    ],
  },
  {
    slug: "petdopt",
    title: "PetDopt",
    stack: ["React Native", "Next.js", "Nest.js", "AWS"],
    period: "2025",
    status: "completed",
    tag: "Completed",
    summary:
      "A mobile pet-adoption platform built for easier discovery, safer onboarding, and stronger adopter-to-shelter communication.",
    challenge:
      "Adoption journeys were too fragmented, with poor discoverability, weak communication flow, and inconsistent trust signals.",
    solution:
      "Built a streamlined user flow with dynamic filters, location-aware discovery, and real-time chat-driven interactions.",
    impact: [
      "Reduced friction across core adoption steps",
      "Better user confidence through transparent listing flows",
      "Improved communication turnaround with in-app messaging",
    ],
    highlights: [
      "Location-based search APIs for nearby matches",
      "Secure onboarding and profile handling",
      "Real-time chat channel for adoption follow-through",
    ],
  },
];

export const journeyProjectMap: Record<string, JourneyProject> = Object.fromEntries(
  journeyProjects.map((project) => [project.slug, project]),
);
