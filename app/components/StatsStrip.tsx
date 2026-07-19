"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { SPECIALTIES } from "./SpecialtiesGrid";
import FadeIn from "./FadeIn";

type Stat = {
  label: string;
  value: number;
  suffix: string;
};

const STATS: Stat[] = [
  {
    label: "Years Running",
    value: new Date().getFullYear() - 2015,
    suffix: "+",
  },
  { label: "Specialties Covered", value: SPECIALTIES.length, suffix: "" },
  { label: "Success Rate", value: 99, suffix: "%" },
  { label: "Individualized Learning", value: 100, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node) return;

    if (reduceMotion) {
      node.textContent = `${value}${suffix}`;
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, reduceMotion]);

  return (
    <p
      ref={ref}
      className="font-serif text-4xl font-semibold text-brand-brown sm:text-5xl"
    >
      0{suffix}
    </p>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-brand-beige-light px-6 py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 text-sm font-medium text-brand-brown/70">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
