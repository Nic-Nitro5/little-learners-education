import Link from "next/link";
import FadeIn from "./FadeIn";
import SpecialtiesGrid from "./SpecialtiesGrid";
import Magnetic from "./Magnetic";
import SectionHeading from "./SectionHeading";

export default function Specialties() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Specializations"
            title="We Specialise In"
            className="mb-12 text-center"
          />
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
