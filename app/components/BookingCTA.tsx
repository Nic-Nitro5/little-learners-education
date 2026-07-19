import { LuCheck, LuCalendar, LuMail, LuShieldCheck } from "react-icons/lu";
import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

const CHECKLIST = [
  "Contact for consultation",
  "Flexible appointment times",
  "Tailored therapy & education options",
];

export default function BookingCTA() {
  return (
    <section className="bg-brand-gradient px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <FadeIn>
          <h2 className="font-serif text-3xl font-semibold text-brand-brown-dark sm:text-4xl">
            Grow With Confidence
          </h2>
          <p className="mt-4 text-brand-brown-dark/80">
            Take the first step towards positive change with a personalized
            consultation
          </p>
          <ul className="mt-8 space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-brown-dark">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-brown text-white">
                  <LuCheck size={14} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-beige-light text-brand-brown">
              <LuCalendar size={26} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold text-brand-brown">
              Book Your Session Time
            </h3>
            <p className="mt-2 text-sm text-brand-brown/70">
              Choose a time that works best for you
            </p>
            <Magnetic className="mt-6 inline-block">
              <a
                href="mailto:jasminhewetson@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-brown px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-brown-dark"
              >
                <LuMail size={16} aria-hidden="true" />
                Email Now
              </a>
            </Magnetic>
            <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-brand-brown/60">
              <LuShieldCheck size={14} aria-hidden="true" />
              Your information is secure
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
