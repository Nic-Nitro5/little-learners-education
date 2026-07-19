"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";

export default function IndividualNeedsPanel() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-60, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden px-6 py-28"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="/images/book.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-brand-brown-dark/75" />

      <FadeIn className="mx-auto max-w-3xl text-center">
        <h3 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
          Individual Needs
        </h3>
        <p className="mt-5 leading-relaxed text-brand-beige-light/90">
          We specialize in <strong className="text-white">foundation phase</strong>,{" "}
          <strong className="text-white">intermediate phase</strong>, as well as adult{" "}
          <strong className="text-white">teaching, tuition and therapy</strong>. We
          cover all <strong className="text-white">government curriculum</strong> and{" "}
          <strong className="text-white">private sector curriculum</strong>. Along
          with many years of experience and positive results with an optimal
          pass rate, we ensure you a great educational and therapy
          experience. With an online home base, we offer{" "}
          <strong className="text-white">Little Learners Education</strong> which
          covers multiple educational options and counseling or therapy
          focused on your specific needs at an international level. Should
          you require international service, we specialize in{" "}
          <strong className="text-white">online teaching methods</strong> through
          an online platform of your choice.
        </p>
      </FadeIn>
    </section>
  );
}
