import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { getFabricStyle } from "@/lib/fabricStyle";

type FolderCardProps = {
  project: Project;
  isActive: boolean;
  onClick: () => void;
  stackIndex: number;
};

const PEEK = 68;
const CARD_HEIGHT = 78;

export function FolderCard({ project, isActive, onClick, stackIndex }: FolderCardProps) {
  const top = stackIndex * PEEK;
  const zIndex = isActive ? 50 : stackIndex + 1;
  const tabLeft = 16 + stackIndex * 55;

  return (
    <motion.div
      className="absolute left-0 right-0 cursor-pointer select-none overflow-visible"
      style={{ top, zIndex }}
      onClick={onClick}
      initial={{ opacity: 0, x: 20 }}
      animate={{
        opacity: 1,
        x: isActive ? -12 : 0,
        y: isActive ? -10 : 0,
      }}
      transition={{
        duration: 0.28,
        ease: [0.34, 1.2, 0.64, 1],
        delay: stackIndex * 0.05,
      }}
      whileHover={!isActive ? { x: -4, transition: { duration: 0.15 } } : {}}
    >
      {/* Tab label */}
      <div
        className="absolute font-shadows text-xs leading-none px-3 py-[5px] rounded-t-md whitespace-nowrap"
        style={{
          top: -20,
          left: tabLeft,
          zIndex: 100 + stackIndex,
          backgroundColor: project.color,
          color: project.textColor,
          minWidth: 90,
          filter: "brightness(0.85)",
        }}
      >
        {project.slug}
      </div>

      {/* Card body */}
      <motion.div
        className="relative overflow-hidden rounded-sm w-full"
        style={{
          ...getFabricStyle(project.color),
          boxShadow: isActive
            ? "6px 8px 24px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.12)"
            : "0 2px 8px rgba(0,0,0,0.12)",
        }}
        animate={{ height: isActive ? 88 : CARD_HEIGHT }}
        transition={{ duration: 0.22 }}
      >
        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")`,
            backgroundSize: "150px 150px",
            mixBlendMode: "multiply",
            opacity: 0.45,
          }}
        />

        {/* Top edge highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none z-20"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 100%)",
          }}
        />

        {/* Content row */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-between px-5"
          style={{ color: project.textColor }}
        >
          <p className="font-fraunces text-[22px] font-bold leading-tight tracking-tight">
            {project.title}
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <p className="font-shadows text-xs opacity-50">{project.year}</p>
          </div>
        </div>

        {/* Active left accent stripe */}
        {isActive && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[3px] z-30"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 100%)",
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}