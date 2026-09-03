"use client";

import { SiHtml5, SiCss, SiJavascript } from "react-icons/si";
import type { IconType } from "react-icons";
import FadeIn from "./FadeIn";
import HoverCard from "./HoverCard";
import OrbitingGlobe from "./OrbitingGlobe";
import SectionHeading from "./SectionHeading";
import EmailCTAButton from "./EmailCTAButton";

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
  return (
    <section className="bg-brand-beige-light px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <FadeIn>
          <SectionHeading eyebrow="Something New" title="Digital Training">
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-brand-brown">
              As the world is swiftly going online, we have introduced{" "}
              <strong>CODING</strong>. We have a new member on our team who is
              a private teacher for this learning programme and we are
              excited about this new journey for our current and future
              generation of students.
            </p>
          </SectionHeading>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-14 hidden sm:block">
          <OrbitingGlobe items={STACK} />
        </FadeIn>

        <div className="mt-14 flex flex-col gap-4 sm:hidden">
          {STACK.map((stack) => (
            <StackCard key={stack.name} {...stack} />
          ))}
        </div>

        <EmailCTAButton
          label="Contact Now!"
          wrapperClassName="mt-12 inline-block"
          className="inline-block rounded-full bg-brand-brown px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-brown-dark"
        />
      </div>
    </section>
  );
}
