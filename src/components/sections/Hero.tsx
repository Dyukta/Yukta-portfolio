import { motion } from "framer-motion";
import { PillButton } from "@/components/ui/PillButton";

export function Hero() {
  return (
    <section
      id="home"
      className="bg-page min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden pt-20"
    >
      <motion.div
        className="absolute select-none pointer-events-none"
        style={{ top: "22%", left: "10%", rotate: "-8deg" }}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <motion.div
          className="flex items-center gap-2"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-pink text-4xl">★</span>
          <span className="font-caveat text-pink text-4xl">hello!</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute select-none pointer-events-none"
        style={{ top: "20%", right: "12%", rotate: "6deg" }}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <motion.div
          className="flex items-center gap-1.5"
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-shadows text-olive text-3xl">welcome</span>
          <span className="text-olive text-2xl">✿</span>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <motion.p
          className="font-shadows text-ink/60 text-xl tracking-wide"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          since you're new here
        </motion.p>

        <motion.h1
          className="font-fraunces leading-none mt-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          <span className="block text-7xl md:text-8xl font-black italic text-ink">
            this is
          </span>
          <span
            className="block text-6xl md:text-7xl font-black text-pink"
            style={{ marginTop: "0.05em" }}
          >
            Yukta Dewangan
          </span>
        </motion.h1>

        <motion.p
          className="font-shadows text-ink text-xl mt-3 flex items-center gap-2"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
        >
          let me be your tour guide <span>✿</span>
        </motion.p>

        <motion.p
          className="font-inter text-ink/70 text-base mt-2 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.36 }}
        >
          Software engineer + creative thinker building thoughtful, useful and slightly delightful web experiences.
        </motion.p>

        <motion.div
          className="flex items-center gap-4 mt-7"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.44 }}
        >
          <PillButton href="#projects" variant="primary">see my work →</PillButton>
          <PillButton href="#contact" variant="outline">contact</PillButton>
        </motion.div>
      </div>
    </section>
  );
}