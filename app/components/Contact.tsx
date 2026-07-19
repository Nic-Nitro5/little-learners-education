import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-brand-brown px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-beige">
            Say Hello
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">
            Leave us a Message
          </h2>
          <p className="mt-4 text-brand-beige-light/80">
            Interested in what we have to offer? Need advice? Leave us a
            message and we&apos;ll get back to you
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
