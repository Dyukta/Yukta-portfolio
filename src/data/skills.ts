export type Skill = {
  id: string;
  label: string;
  x: number;
  y: number;
  rotation: number;
  size: "sm" | "md" | "lg";
};

export const skills: Skill[] = [
  { id: "React.js",      label: "React.js",      x: 50, y: 35, rotation: -8,  size: "lg" },
  { id: "Typescript", label: "TypeScript", x: 28, y: 48, rotation: 5,   size: "lg" },
  { id: "Node.js",     label: "Node.js",    x: 68, y: 50, rotation: -4,  size: "lg" },
  { id: "Next.js",     label: "Next.js",    x: 58, y: 72, rotation: 10,  size: "md" },
  { id: "Tailwind CSS",   label: "Tailwind CSS",   x: 38, y: 65, rotation: -12, size: "md" },
  { id: "Figma",      label: "Figma",      x: 78, y: 68, rotation: 6,   size: "md" },
  { id: "SQL/PostgreSQL",   label: "SQL/PostgreSQL",   x: 82, y: 40, rotation: -6,  size: "md" },
  { id: "Git/Github",        label: "Git/Github",        x: 20, y: 72, rotation: 8,   size: "sm" },
  { id: "vite",       label: "Vite",       x: 52, y: 88, rotation: -3,  size: "sm" },
  { id: "Javascript",        label: "Javascript",        x: 72, y: 22, rotation: 12,  size: "sm" },
  { id: "Express.js",        label: "Express.js",        x: 42, y: 15, rotation: -9,  size: "md" },
  { id: "MongoDB",     label: "MongoDB",     x: 15, y: 55, rotation: 7,   size: "sm" },
  { id: "framer",     label: "Framer",     x: 32, y: 82, rotation: -5,  size: "sm" },
  { id: "Vue.js",    label: "Vue.js",   x: 18, y: 30, rotation: 11,  size: "sm" },
  { id: "SQLite",    label: "SQLite",    x: 65, y: 38, rotation: -7,  size: "md" },
  { id: "REST APIs",    label: "REST APIs",    x: 46, y: 78, rotation: 4,   size: "sm" },
  { id: "CSS3",      label: "CSS3",      x: 12, y: 42, rotation: 5,   size: "sm" },
  { id: "HTML5",    label: "HTML5",    x: 35, y: 92, rotation: -8,  size: "sm" }
];