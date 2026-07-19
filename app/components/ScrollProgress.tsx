"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX: reduceMotion ? scrollYProgress : smoothed, transformOrigin: "0%" }}
      className="fixed inset-x-0 top-0 z-[60] h-1 bg-brand-beige"
      aria-hidden="true"
    />
  );
}
