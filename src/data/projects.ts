export type Project = {
  id: string;
  slug: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  textColor: string;
  tagline?: string;
};

export const projects: Project[] = [
  {
    id: "passport-buddy",
    slug: "passport-buddy",
    title: "Passport Buddy",
    year: "2025",
    description:
      "A travel companion app that tracks visa requirements, entry rules, and document checklists for every country — so you never get stuck at a border.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    color: "#443025",
    textColor: "#E8E1D1",
  },
  {
    id: "lumere",
    slug: "lumere",
    title: "Lumere",
    year: "2025",
    description:
      "A medication tracker with smart reminders, interaction warnings, and a clean UI designed for elderly users to manage prescriptions with zero friction.",
    tags: ["React Native", "Expo", "Firebase"],
    color: "#61222B",
    textColor: "#E8E1D1"
  },
  {
    id: "lens",
    slug: "lens",
    title: "Lens",
    year: "2026",
    description:
      "AI powered data analysis tool that transforms CSV files into actionable insights, visualizations and interactive queries using React, TypeScript and a lightweight Node.js backend.",
    tags: ["React.js", "TypeScript", "Zustand", "Tailwind CSS", "Node.js", "Express.js", "PapaParse", "Chart.js", "Gemini"],
    color: "#9C7063",
    textColor: "#E8E1D1",
  },
  {
    id: "credify",
    slug: "credify",
    title: "Credify",
    year: "2026",
    description:
      "A full stack web application that helps job seekers quickly assess whether a job posting is trustworthy using explainable risk analysis and confidence scoring.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Axios", "Cheerio", "SQLite", "Gemini"],
    color: "#C38381",
    textColor: "#E8E1D1",
  }
];