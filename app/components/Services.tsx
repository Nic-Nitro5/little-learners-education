import Image from "next/image";
import {
  LuGraduationCap,
  LuLanguages,
  LuSparkles,
  LuHeartHandshake,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";

type Service = {
  title: string;
  description: string;
  icon: IconType;
};

const SERVICES: Service[] = [
  {
    title: "Teaching and Tuition",
    description:
      "From daily studying and homework support to building consistent routines and passing grades, we cover every subject and school phase, including full private teaching programs. Sessions are tailored to each learner's pace, whether that's a young child building foundational skills or an adult returning to study, with regular progress check-ins to keep families and students informed every step of the way.",
    icon: LuGraduationCap,
  },
  {
    title: "TEFL/TESOL/TESL English",
    description:
      "Qualified to teach English at an internationally recognized standard, covering reading, writing, speaking and comprehension for non-native speakers of all ages. Lessons are delivered in a personal, one-on-one setting or fully online, with structured curricula that build confidence for exams, travel, work or everyday conversation.",
    icon: LuLanguages,
  },
  {
    title: "Unique Methods",
    description:
      "There is something different for everyone, so we draw on a toolbox of proven, research-backed teaching methods and adapt them to each learner's strengths, interests and learning style. This approach works just as well for young children finding their feet as it does for adult and varsity-level learners tackling advanced or specialized material.",
    icon: LuSparkles,
  },
  {
    title: "Therapy and Counseling",
    description:
      "Whether you decide on an online or in-house experience, sessions are guided by qualified, compassionate professionals across a range of therapeutic and counseling approaches, covering emotional, behavioral and developmental support for both children and adults. We work closely with each client and their family to set clear goals and track meaningful progress and lasting growth over time.",
    icon: LuHeartHandshake,
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-brand-brown px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-beige">
            Services
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            What We Offer
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-start">
          <FadeIn className="relative mx-auto w-full max-w-md lg:sticky lg:top-28">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/socials.jpeg"
                alt="Hand sketching app wireframes and notes on a desk with a smartphone"
                fill
                sizes="(min-width: 1024px) 32vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="relative -mt-10 ml-auto aspect-square w-2/5 overflow-hidden rounded-2xl border-4 border-brand-beige shadow-xl">
              <Image
                src="/images/kids-game.jpeg"
                alt="Child learning interactively through an educational laptop game"
                fill
                sizes="(min-width: 1024px) 13vw, 36vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {SERVICES.map(({ title, description, icon: Icon }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <HoverCard className="flex h-full flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:bg-white/10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-beige text-brand-brown-dark">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-beige-light/80">
                    {description}
                  </p>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
