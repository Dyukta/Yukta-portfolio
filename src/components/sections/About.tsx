import { motion } from "framer-motion";
import { PaperCard } from "@/components/ui/PaperCard";

const tags = ["code × design", "full stack builder",  "sleepy coder", "problem solver"];

export function About() {
  return (
    <section id="about" className="bg-page py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="font-fraunces text-5xl font-bold text-ink scribble-underline">
            about me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <PaperCard>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-caveat text-3xl font-bold text-pink">hi!</span>
              <span className="text-2xl">🌸</span>
            </div>

            <div className="space-y-5">
              <p className="font-caveat text-xl leading-relaxed text-ink">
                i'm a{" "}
                <span className="text-pink font-semibold">full stack developer</span>{" "}
                + ui/ux designer who enjoys turning random ideas into real usable products.
              </p>
              <p className="font-caveat text-xl leading-relaxed text-ink">
                i live where {" "}
                <span className="underline decoration-pink decoration-2 underline-offset-2">code </span>{" "}
                meets <span className="text-olive font-semibold">craft</span> enjoying both sides of building things  the messy logic behind the scenes and the small design decisions that make everything feel smoother.
              </p>
              <p className="font-caveat text-xl leading-relaxed text-ink">
                when i'm not building: i spend time sleeping, watching shows or exploring unfamiliar places and ideas (˶˃ ᵕ ˂˶)
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-ink/30 font-shadows text-sm text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
                <path
                  d="M2 14 Q12 4 22 14 Q32 24 42 14 Q52 4 62 14 Q72 24 78 14"
                  stroke="#cd6184"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </PaperCard>
        </motion.div>
      </div>
    </section>
  );
}