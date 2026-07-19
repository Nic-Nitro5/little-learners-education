import Link from "next/link";
import FadeIn from "./FadeIn";
import SpecialtiesGrid from "./SpecialtiesGrid";
import Magnetic from "./Magnetic";

export default function Specialties() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-brown/70">
              Specializations
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-brand-brown sm:text-4xl">
              We Specialise In
            </h2>
          </div>
          <SpecialtiesGrid />

          <div className="mt-12 text-center">
            <Magnetic className="inline-block">
              <Link
                href="/#services"
                className="inline-block rounded-full bg-brand-brown px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-brown-dark"
              >
                What We Offer
              </Link>
            </Magnetic>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
