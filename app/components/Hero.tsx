"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { LuChevronDown } from "react-icons/lu";
import Magnetic from "./Magnetic";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.1, 1.25]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/smile-m.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover sepia-[.65]"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-brand-brown-dark/60" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white"
      >
        <motion.h1
          variants={item}
          className="font-script text-5xl sm:text-6xl md:text-7xl"
        >
          Little Learners Education
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-3 text-sm uppercase tracking-[0.3em] text-brand-beige-light/90"
        >
          Established: 2015
        </motion.p>
        <motion.p
          variants={item}
          className="font-script mt-8 text-2xl leading-relaxed text-brand-beige-light sm:text-3xl"
        >
          &ldquo;Helping children to thrive by understanding how they think, feel and
          learn as individuals&rdquo;
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <Magnetic className="inline-block">
            <Link
              href="/#about"
              className="inline-block rounded-full bg-brand-beige px-8 py-3 text-sm font-semibold tracking-wide text-brand-brown-dark shadow-lg transition-transform hover:scale-105"
            >
              Find Out More
            </Link>
          </Magnetic>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center text-white/80"
      >
        <LuChevronDown size={28} />
      </motion.div>
    </section>
  );
}
