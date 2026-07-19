import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-brand-brown px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionHeading eyebrow="Say Hello" title="Leave us a Message" variant="dark">
            <p className="mt-4 text-brand-beige-light/80">
              Interested in what we have to offer? Need advice? Leave us a
              message and we&apos;ll get back to you
            </p>
          </SectionHeading>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
