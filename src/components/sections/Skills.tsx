import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SkillPill } from "@/components/ui/SkillPill";
import { skills, type Skill } from "@/data/skills";
import { fadeUp, defaultTransition } from "@/lib/animations";

const sizeMap = {
  sm: { fontSize: "0.72rem", px: "0.75rem", py: "0.35rem" },
  md: { fontSize: "0.88rem", px: "1rem",    py: "0.45rem" },
  lg: { fontSize: "1.05rem", px: "1.35rem", py: "0.6rem"  },
};

const FISHEYE_RADIUS = 160;
const MAX_SCALE = 1.45;
const CONTAINER_H = 520;

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseLeave() {
    setCursor(null);
  }

  function getFisheyeScale(skill: Skill, containerW: number) {
    if (!cursor) return 1;
    const px = (skill.x / 100) * containerW;
    const py = (skill.y / 100) * CONTAINER_H;
    const dist = Math.sqrt((cursor.x - px) ** 2 + (cursor.y - py) ** 2);
    if (dist > FISHEYE_RADIUS) return 1;
    const t = 1 - dist / FISHEYE_RADIUS;
    return 1 + (MAX_SCALE - 1) * t * t;
  }

  function getMagneticOffset(skill: Skill, containerW: number) {
    if (!cursor) return { x: 0, y: 0 };
    const px = (skill.x / 100) * containerW;
    const py = (skill.y / 100) * CONTAINER_H;
    const dist = Math.sqrt((cursor.x - px) ** 2 + (cursor.y - py) ** 2);
    if (dist > FISHEYE_RADIUS) return { x: 0, y: 0 };
    const strength = (1 - dist / FISHEYE_RADIUS) * 10;
    return {
      x: ((cursor.x - px) / dist) * strength,
      y: ((cursor.y - py) / dist) * strength,
    };
  }

  const containerW = containerRef.current?.offsetWidth ?? 800;

  return (
    <section id="skills" className="bg-page py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <p className="font-shadows text-olive text-sm mb-2">hover · explore</p>
          <h2 className="font-fraunces text-5xl font-bold text-ink scribble-underline">
            skills
          </h2>
        </motion.div>

        {/* Mobile: simple wrapping layout */}
        {isMobile ? (
          <motion.div
            className="flex flex-wrap gap-3 justify-center pt-8 pb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <SkillPill
                  label={skill.label}
                  rotation={skill.rotation}
                  style={{
                    fontSize: sizeMap[skill.size].fontSize,
                    padding: `${sizeMap[skill.size].py} ${sizeMap[skill.size].px}`,
                    transform: `rotate(${skill.rotation}deg)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Desktop: fisheye floating layout */
          <div
            ref={containerRef}
            className="relative w-full select-none"
            style={{ height: CONTAINER_H }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {skills.map((skill: Skill, i: number) => {
              const sz = sizeMap[skill.size];
              const floatDelay = (i * 0.18) % 1.2;
              const floatDuration = 3.5 + (i % 5) * 0.3;
              const fisheyeScale = getFisheyeScale(skill, containerW);
              const mag = getMagneticOffset(skill, containerW);

              return (
                <motion.div
                  key={skill.id}
                  className="absolute"
                  style={{
                    left: `${skill.x}%`,
                    top: `${skill.y}%`,
                    x: mag.x,
                    y: mag.y,
                    zIndex: fisheyeScale > 1.1 ? 10 : 1,
                  }}
                  initial={{ opacity: 0, scale: 0.4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: floatDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: floatDelay,
                    }}
                  >
                    <motion.div
                      animate={{ scale: fisheyeScale }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      style={{ transformOrigin: "center" }}
                    >
                      <SkillPill
                        label={skill.label}
                        rotation={skill.rotation}
                        style={{
                          fontSize: sz.fontSize,
                          padding: `${sz.py} ${sz.px}`,
                          transform: `rotate(${skill.rotation}deg)`,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}