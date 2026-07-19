import FadeIn from "./FadeIn";

export default function VideoSection() {
  return (
    <section className="bg-brand-beige-light px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <FadeIn>
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-brand-brown-dark shadow-xl">
            <video
              src="/videos/VID-20191021-WA0004.mp4"
              controls
              preload="metadata"
              playsInline
              aria-label="Little Learners Mondeling — student performing an Afrikaans oral"
              className="h-full w-full object-cover"
            >
              Your browser does not support embedded video.
            </video>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl font-semibold text-brand-brown sm:text-4xl">
            Little Learners - Mondeling
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-brand-brown">
            <p>
              A &quot;mondeling&quot; is an Afrikaans term for oral. We pride
              ourselves in languages as this is one of the subjects we are
              passionate about. We love teaching English and Afrikaans.
            </p>
            <p>
              Afrikaans derives from the Dutch language. It originated in
              South Africa during the 17th century. It is one of the 11
              spoken languages in South Africa, spoken by approximately 6
              million people as their first language and is taught at schools
              throughout the country.
            </p>
            <p>
              On the left our student performs the oral in his second
              language as required by the national teaching curriculum. The
              Afrikaans language is often a second language or in many cases
              as much as a third or even fourth language. As a result many
              students require extra lessons. Here we have one of our
              foundation phase students doing a better job with his Afrikaans
              oral.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
