"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { IconType } from "react-icons";

type OrbitItem = {
  name: string;
  description: string;
  icon: IconType;
  color: string;
};

const RADIUS = 140;

// Rounding here (rather than leaving raw Math.cos/sin floats) keeps the
// server-rendered transform string and the client's hydrated value
// identical — otherwise SSR and the browser can produce different
// floating-point tails for the same angle, causing a hydration mismatch.
function round(value: number) {
  return Math.round(value * 100) / 100;
}

function Satellite({
  item,
  index,
  count,
  rotation,
}: {
  item: OrbitItem;
  index: number;
  count: number;
  rotation: MotionValue<number>;
}) {
  const angle = useTransform(rotation, (r) => r + (index * 360) / count);
  const x = useTransform(angle, (a) => round(Math.cos((a * Math.PI) / 180) * RADIUS));
  const y = useTransform(angle, (a) => round(Math.sin((a * Math.PI) / 180) * RADIUS));
  const Icon = item.icon;

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        style={{ x, y }}
        title={item.description}
        className="flex flex-col items-center gap-1.5"
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg"
        >
          <Icon size={22} color={item.color} aria-hidden="true" />
        </motion.span>
        <span className="rounded-full bg-white/90 px-2 py-0.5 text-xs font-semibold text-brand-brown shadow-sm">
          {item.name}
        </span>
        <span className="sr-only">{item.description}</span>
      </motion.div>
    </div>
  );
}

export default function OrbitingGlobe({ items }: { items: OrbitItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const rotation = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 720]
  );

  return (
    <div ref={containerRef} className="relative mx-auto h-80 w-80">
      <div className="absolute inset-12" style={{ perspective: 700 }}>
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_22%_38%,_#4c8c5a_0%,_transparent_20%),radial-gradient(circle_at_68%_62%,_#3f7a4d_0%,_transparent_18%),radial-gradient(circle_at_78%_22%,_#5a9c6a_0%,_transparent_14%),radial-gradient(circle_at_30%_78%,_#6fae7a_0%,_transparent_12%),radial-gradient(circle_at_32%_28%,_#7ec8f0_0%,_#1f6a96_45%,_#0a3652_100%)] shadow-2xl" />
        <div className="absolute inset-0 rounded-full border border-white/25" />
        <div
          className="absolute inset-0 rounded-full border border-white/20"
          style={{ transform: "rotateY(60deg)" }}
        />
        <div
          className="absolute inset-0 rounded-full border border-white/20"
          style={{ transform: "rotateY(120deg)" }}
        />
        <div
          className="absolute inset-0 rounded-full border border-white/15"
          style={{ transform: "rotateX(65deg)" }}
        />
      </div>

      <div className="absolute inset-0 rounded-full border border-dashed border-brand-brown/15" />

      {items.map((item, i) => (
        <Satellite
          key={item.name}
          item={item}
          index={i}
          count={items.length}
          rotation={rotation}
        />
      ))}
    </div>
  );
}
