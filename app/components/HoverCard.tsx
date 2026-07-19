"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type HoverCardProps = {
  children: ReactNode;
  className?: string;
};

export default function HoverCard({ children, className }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}
