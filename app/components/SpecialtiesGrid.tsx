"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuBrain,
  LuHeartHandshake,
  LuMessageCircle,
  LuLanguages,
  LuBookOpen,
  LuUser,
  LuClipboardCheck,
  LuPuzzle,
  LuPalette,
  LuMusic,
  LuCode,
  LuMail,
  LuX,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import Magnetic from "./Magnetic";

type Specialty = {
  name: string;
  icon: IconType;
};

export const SPECIALTIES: Specialty[] = [
  { name: "Educational Psychology", icon: LuBrain },
  { name: "Special Needs", icon: LuHeartHandshake },
  { name: "Counselling", icon: LuMessageCircle },
  { name: "TESOL | TEFL | TESL", icon: LuLanguages },
  { name: "Private Tuition", icon: LuBookOpen },
  { name: "Private Teaching", icon: LuUser },
  { name: "Assessments | Evaluations", icon: LuClipboardCheck },
  { name: "Play Therapy", icon: LuPuzzle },
  { name: "Art Therapy | Little Creatives Club", icon: LuPalette },
  { name: "Music Therapy", icon: LuMusic },
  { name: "Coding", icon: LuCode },
];

// Subtle, candid "photos on a corkboard" tilt per card — index-aligned with
// SPECIALTIES. The two featured (bento) cards get a smaller tilt so the
// larger tiles still read as grounded rather than off-kilter.
const ROTATIONS = [-0.5, 2, -2, 1.5, 2, -1, 1, -2, 1.5, -1.5, 0.5];

// Classic sticky-note colors, cycled per card, so the board reads like a mix
// of real Post-its rather than one tone repeated 12 times.
const NOTE_COLORS = ["#F6E4A1", "#F3C7D3", "#BFE2EC", "#CBE7C4", "#F6CBA0"];

const CORK_BOARD_STYLE = {
  backgroundColor: "#AD8B5C",
  backgroundImage:
    "radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1.5px)",
  backgroundSize: "14px 14px",
};

export default function SpecialtiesGrid() {
  const [active, setActive] = useState<Specialty | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;
    closeButtonRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div
        className="rounded-[2rem] p-6 shadow-inner sm:p-10"
        style={CORK_BOARD_STYLE}
      >
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:auto-rows-[10rem] sm:gap-x-8 sm:gap-y-10">
          {SPECIALTIES.map(({ name, icon: Icon }, i) => {
            const featured = i === 0 || i === SPECIALTIES.length - 1;
            return (
            <motion.button
              key={name}
              type="button"
              onClick={() => setActive({ name, icon: Icon })}
              style={{ backgroundColor: NOTE_COLORS[i % NOTE_COLORS.length] }}
              initial={{ opacity: 0, y: -48, scale: 0.6, rotate: ROTATIONS[i] * 5 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: ROTATIONS[i],
                transition: { type: "spring", stiffness: 260, damping: 20, delay: i * 0.06 },
              }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{
                rotate: 0,
                y: -6,
                scale: 1.03,
                boxShadow: "0 20px 32px -8px rgba(0,0,0,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className={`group relative flex flex-col items-center justify-center gap-3 rounded-sm p-5 text-center shadow-lg ${
                featured ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-0 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 35% 30%, #ff8a80, #b71c1c 70%)",
                }}
              />
              <span
                className={`flex items-center justify-center rounded-full bg-white/70 text-brand-brown transition-colors group-hover:bg-white ${
                  featured ? "h-16 w-16" : "h-12 w-12"
                }`}
              >
                <Icon size={featured ? 30 : 22} aria-hidden="true" />
              </span>
              <span
                className={`font-medium leading-snug text-brand-brown ${
                  featured ? "text-base" : "text-sm"
                }`}
              >
                {name}
              </span>
            </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="specialty-modal-title"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl"
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close dialog"
                className="absolute right-4 top-4 text-brand-brown/60 hover:text-brand-brown"
              >
                <LuX size={20} />
              </button>

              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-beige-light text-brand-brown">
                <active.icon size={26} aria-hidden="true" />
              </span>

              <h3 id="specialty-modal-title" className="font-serif text-lg font-semibold text-brand-brown">
                {active.name}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-brand-brown">
                Hello! It&apos;s Jasmin here, — For further information
                regarding this particular service, please select a contact
                method below.
              </p>

              <Magnetic className="mt-6 inline-block">
                <a
                  href="mailto:jasminhewetson@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-brown px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-brown-dark"
                >
                  <LuMail size={16} aria-hidden="true" />
                  Email Now
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
