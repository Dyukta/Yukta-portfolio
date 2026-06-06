import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderCard } from "@/components/ui/FolderCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { projects, type Project } from "@/data/projects";
import { fadeUp, defaultTransition } from "@/lib/animations";

const PEEK = 68;
const CARD_HEIGHT = 88;

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active: Project | null =
    projects.find((p) => p.id === activeId) ?? null;

  const stackHeight =
    (projects.length - 1) * PEEK + CARD_HEIGHT + 32;

  return (
    <section id="projects" className="bg-page py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <p className="font-shadows text-olive text-sm mb-2">
            pick a folder from the shelf →
          </p>

         <h2 className="font-fraunces text-5xl font-bold text-ink scribble-underline">
            Projects
          </h2>
        </motion.div>

        {/* GitHub */}
        <motion.div className="flex justify-center mb-16">
          <a
            href="https://github.com/Dyukta"
            target="_blank"
            rel="noopener noreferrer"
            className="pill font-shadows border px-5 py-2"
          >
            view my github →
          </a>
        </motion.div>

        {/* Stacked on mobile, side-by-side on lg+ */}
        <div
          className="flex flex-col gap-10 lg:grid lg:gap-8 lg:items-start"
          style={{
            gridTemplateColumns: "clamp(300px, 40%, 380px) 1fr",
          }}
        >
          {/* LEFT: Binder */}
          <motion.div className="w-full">
            <div
              className="relative rounded-2xl overflow-visible"
              style={{
                background: "linear-gradient(145deg, #F7E9DA 0%, #E4C6AC 100%);",
                border: "2px solid #b8a898",
                boxShadow:
                  "inset 0 2px 4px rgba(255,255,255,0.5), 4px 6px 16px rgba(0,0,0,0.12)",
                padding: "24px 24px 40px 24px",
                minHeight: "420px",
              }}
            >
              {/* Top label strip */}
              <div
                className="flex justify-between items-center mb-5 px-1"
                style={{
                  borderBottom: "1.5px dashed #a89880",
                  paddingBottom: "10px",
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-5 h-5 rounded-full border-2"
                    style={{
                      borderColor: "#8a7a6a",
                      background: "transparent",
                    }}
                  />
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#6b5c4c" }}
                  >
                    my work
                  </span>
                </div>
              </div>

              {/* Side binder dots */}
              <div
                className="absolute top-0 bottom-0 flex flex-col justify-evenly items-center py-10"
                style={{
                  width: "18px",
                  left: "-9px",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-full"
                    style={{
                      width: 12,
                      height: 12,
                      background: "#9C7063",
                      border: "2px solid #a89880",
                      boxShadow:
                        "inset 0 1px 2px rgba(0,0,0,0.15)",
                    }}
                  />
                ))}
              </div>

              {/* Cards stack */}
              <div
                className="relative ml-4 mt-6 overflow-visible"
                style={{ height: stackHeight }}
              >
                {projects.map((project, i) => (
                  <FolderCard
                    key={project.id}
                    project={project}
                    isActive={activeId === project.id}
                    onClick={() =>
                      setActiveId(
                        activeId === project.id ? null : project.id
                      )
                    }
                    stackIndex={i}
                  />
                ))}
              </div>

              {/* Bottom label */}
              <p
                className="absolute -bottom-7 left-0 right-0 text-center text-xs"
                style={{
                  color: "#8a7a6a",
                  fontFamily: "'Shadows Into Light', cursive",
                }}
              >
                click a tab to pull it out onto the desk
              </p>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <div className="flex-1 lg:sticky lg:top-24">
            <div className="relative">
              {/* Tape */}
              <div
                className="absolute -top-3 left-1/2 z-10"
                style={{
                  transform: "translateX(-50%)",
                  width: 130,
                  height: 24,
                  backgroundColor: "rgba(226, 200, 188, 0.55)",
                  borderRadius: 2,
                }}
              />

              {/* Paper */}
              <div
                className="rounded-lg border p-6 sm:p-10 flex flex-col justify-center"
                style={{
                  borderColor: "#d4c9b8",
                  minHeight: stackHeight + 125,
                  backgroundImage:
                    "radial-gradient(circle, #c8b8a4 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundColor: "#f5f0e8",
                }}
              >
                <AnimatePresence mode="wait">
                  {active ? (
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-sm mb-2 text-olive font-shadows tracking-wide">
                        {active.year} · {active.slug}
                      </p>

                      <h3
                        className="font-fraunces text-4xl sm:text-5xl font-bold mb-3"
                        style={{ color: active.color }}
                      >
                        {active.title}
                      </h3>

                      {active.tagline && (
                        <p
                          className="text-base italic mb-4"
                          style={{
                            fontFamily: "'Fraunces', serif",
                            color: "#5c4a2a",
                            opacity: 0.8,
                          }}
                        >
                          {active.tagline}
                        </p>
                      )}

                      <p className="text-sm text-ink/60 mb-6 leading-relaxed">
                        {active.description}
                      </p>

                      <p className="text-xs uppercase tracking-widest text-ink/40 mb-2 font-medium">
                        tech stack
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {active.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 border rounded-full text-xs"
                            style={{
                              borderColor: "#c8b8a4",
                              color: "#5c4a2a",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 items-center">
                        <a
                          href="#"
                          className="pill text-white px-6 py-2.5 text-sm font-medium"
                          style={{
                            backgroundColor: active.color,
                          }}
                        >
                          live demo →
                        </a>

                        <a
                          href="#"
                          className="pill px-6 py-2.5 border text-sm"
                          style={{
                            borderColor: "#c8b8a4",
                            color: "#5c4a2a",
                          }}
                        >
                          {"</>"} code
                        </a>

                        <button
                          onClick={() => setActiveId(null)}
                          className="ml-auto text-sm opacity-40 hover:opacity-70 transition-opacity"
                        >
                          ✕ close
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <EmptyState />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}