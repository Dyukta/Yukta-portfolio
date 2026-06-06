import type { Variants, Transition } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const folderHover: Variants = {
  rest: { y: 0 },
  hover: { y: -6 },
};

export const tapeEntry: Variants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const skillFloat = (delay: number): Variants => ({
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay },
  },
});

export const defaultTransition: Transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 24,
};