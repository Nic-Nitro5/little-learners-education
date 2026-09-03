import FadeIn from "./FadeIn";
import SpecialtiesGrid from "./SpecialtiesGrid";
import SectionHeading from "./SectionHeading";

export default function Specialties() {
  return (
    <section id="specialties" className="scroll-mt-20 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Specializations"
            title="We Specialise In"
            className="mb-12 text-center"
          />
          <SpecialtiesGrid />
        </FadeIn>
      </div>
    </section>
  );
}
