"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./FadeIn";
import TiltCard from "./TiltCard";
import SectionHeading from "./SectionHeading";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
  focus?: string;
};

export const GALLERY: GalleryItem[] = [
  {
    title: "Comprehensive teaching and Therapy",
    description:
      "From foundation phase to independent learners, every child is part of one big Little Learners community, supported by well-rounded teaching and therapy that grows with them one bright day at a time.",
    image: "/images/kids-walking.jpeg",
  },
  {
    title: "Each child as a whole",
    description:
      "Every child is an individual, therefore we teach each child according to their own abilities, development and pace. We look at their unique needs and qualities to improve where needed.",
    image: "/images/portfolio/ale.jpg",
    focus: "object-top",
  },
  {
    title: "Good & healthy learning habits",
    description:
      "Children needed to learn in a good and proper environment, whereby they can focus, our job is to establish that they have this whilst we teach. We provide a healthy structure of teaching, enabling them with good learning habits.",
    image: "/images/portfolio/home-work.jpg",
  },
  {
    title: "Growth",
    description:
      "All children learn at different levels, we focus on the growth of individuals' strengths and pay clear attention to this through certain types of learning.",
    image: "/images/portfolio/dan2.jpg",
    focus: "object-top",
  },
  // {
  //   title: "Unique development",
  //   description:
  //     "Every child grows according to their own phase and pace. We look at every child as a whole and work with their abilities in accordance to their personality and character.",
  //   image: "/images/portfolio/dan1.jpg",
  // },
  {
    title: "Reading & writing",
    description:
      "This is the foundation of what our focus is all about, empowering the child to do this at the most advanced level possible.",
    image: "/images/portfolio/IMG-20191021-WA0018.jpg",
    focus: "object-top",
  },
  {
    title: "Understanding",
    description:
      "We aim to have our students constantly on the same 'page' as us, working hand in hand to achieve the same goals in learning.",
    image: "/images/older-kids.jpeg",
    focus: "object-top",
  },
  {
    title: "Motivation",
    description:
      "Our motivation comes from seeing our students achieve excellence consistently. 'A dream won't work unless you do'.",
    image: "/images/portfolio/shlok.jpg",
    focus: "object-[50%_15%]",
  },
  {
    title: "Improvement",
    description:
      "Our aim at Little Learners Education is to always have our students achieve the best possible results, as a team, including parents, ourselves and the student working diligently together as one.",
    image: "/images/portfolio/IMG-20191112-WA0031.jpg",
    focus: "object-[50%_35%]",
  },
  {
    title: "Consistency",
    description:
      "A steady reading and homework log, kept up every single day, is what turns small daily efforts into real, lasting progress.",
    image: "/images/portfolio/IMG_20200122_151056.jpg",
    focus: "object-top",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = GALLERY[activeIndex];

  return (
    <section id="portfolio" className="scroll-mt-20 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <FadeIn>
          <SectionHeading eyebrow="Gallery" title="Our Amazing Students" />
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:auto-rows-[11rem]">
          <FadeIn className="sm:col-span-2 sm:row-span-2">
            <TiltCard className="group relative h-full min-h-40 overflow-hidden rounded-2xl shadow-md">
              <AnimatePresence mode="sync">
                <motion.div
                  key={active.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className={`object-cover transition-transform duration-500 group-hover:scale-110 ${active.focus ?? "object-center"}`}
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-brown-dark/90 via-brand-brown-dark/20 to-transparent p-6 text-left">
                <h3 className="font-serif text-lg font-semibold text-white">
                  {active.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-beige-light/90">
                  {active.description}
                </p>
              </div>
            </TiltCard>
          </FadeIn>

          {GALLERY.map((item, i) => {
            if (i === activeIndex) return null;
            return (
              <FadeIn key={item.title} delay={(i % 2) * 0.1}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show "${item.title}" as the featured photo`}
                  className="block h-full w-full text-left"
                >
                  <TiltCard className="group relative h-full min-h-40 overflow-hidden rounded-2xl shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 640px) 25vw, 50vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-110 ${item.focus ?? "object-center"}`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-brown-dark/90 via-brand-brown-dark/20 to-transparent p-6 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                      <h3 className="font-serif text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </TiltCard>
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
