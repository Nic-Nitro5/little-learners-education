import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="flex flex-row items-center text-center">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-semibold text-brand-brown sm:text-4xl">
              About Miss Jasmin
            </h2>
            <p className="mt-6 leading-relaxed text-brand-brown">
              The international company, led by Jasmin, who is a Teacher,
              Therapist and the Founder, is established on a wealth of
              experience in education and business. As an independent
              entrepreneur with a strong background in working with both
              children and adults, Jasmin brings expertise in digital
              services, client relations, public relations, education,
              psychology and research. With a solid foundation in business
              development and a strong professional work ethic, she is
              qualified and certified in Education and Psychology, as well as
              various forms of Therapy and Counseling.
            </p>
            <p className="mt-4 leading-relaxed text-brand-brown">
              Over the years, Jasmin has worked closely with families,
              schools and individual clients to design learning and therapy
              plans that meet each person exactly where they are, drawing on
              a genuine passion for helping children and adults reach their
              full potential. This company specializes in the growing demand
              for online Education, Private Teaching, Tuition and Therapy,
              blending academic precision with a warm, patient and personalized
              approach. Today, Little Learners Education provides
              comprehensive schooling solutions along with a diverse range of
              therapy services for both children and adults, all guided by
              Jasmin&apos;s commitment to nurturing confident, capable
              learners.
            </p>
          </div>

          <div className="relative mx-auto mt-12 aspect-4/5 w-full max-w-[360px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/jasmin.webp"
              alt="Portrait of Jasmin, Teacher, Therapist and Founder of Little Learners Education"
              fill
              sizes="(min-width: 768px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
