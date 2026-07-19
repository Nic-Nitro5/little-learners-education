"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss, SiJavascript } from "react-icons/si";
import type { IconType } from "react-icons";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";
import Magnetic from "./Magnetic";
import OrbitingGlobe from "./OrbitingGlobe";

type Stack = {
  name: string;
  description: string;
  icon: IconType;
  color: string;
};

const STACK: Stack[] = [
  { name: "HTML", description: "Hyper Text Mark Up Language.", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", description: "Cascading Style Sheets.", icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", description: "Interactive programming.", icon: SiJavascript, color: "#f7df1e" },
];

function StackCard({ name, description, icon: Icon, color }: Stack) {
  return (
    <HoverCard className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm">
      <Icon size={36} color={color} aria-hidden="true" />
      <h3 className="font-semibold text-brand-brown">{name}</h3>
      <p className="text-xs leading-relaxed text-brand-brown/70">{description}</p>
    </HoverCard>
  );
}

export default function CodingSection() {
  const stripViewportRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-brand-beige-light px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-brown/70">
            Something New
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-brown sm:text-4xl">
            Digital Training
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-brand-brown">
            As the world is swiftly going online, we have introduced{" "}
            <strong>CODING</strong>. We have a new member on our team who is a
            private teacher for this learning programme and we are excited
            about this new journey for our current and future generation of
            students.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14 hidden sm:block">
          <OrbitingGlobe items={STACK} />
        </FadeIn>

        <div ref={stripViewportRef} className="mt-14 overflow-hidden sm:hidden">
          <motion.div
            drag="x"
            dragConstraints={stripViewportRef}
            dragElastic={0.12}
            dragTransition={{ power: 0.2, timeConstant: 200 }}
            className="flex w-max cursor-grab gap-4 px-1 active:cursor-grabbing"
          >
            {STACK.map((stack) => (
              <div key={stack.name} className="w-40 shrink-0">
                <StackCard {...stack} />
              </div>
            ))}
          </motion.div>
        </div>

        <Magnetic className="mt-12 inline-block">
          <a
            href="mailto:jasminhewetson@gmail.com"
            className="inline-block rounded-full bg-brand-brown px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-brown-dark"
          >
            Contact Now!
          </a>
        </Magnetic>
      </div>
    </section>
  );
}
