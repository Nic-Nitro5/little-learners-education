import FadeIn from "./FadeIn";
import Magnetic from "./Magnetic";

export default function PricingCTA() {
  return (
    <section className="bg-white px-6 py-20">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif text-3xl font-semibold text-brand-brown-dark sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-brand-brown-dark/80">
          Enquire and receive a custom quote tailored to you
        </p>
        <Magnetic className="mt-8 inline-block">
          <a
            href="mailto:jasminhewetson@gmail.com"
            className="inline-block rounded-full bg-brand-brown px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition-transform hover:scale-105 hover:bg-brand-brown-dark"
          >
            Request Pricing
          </a>
        </Magnetic>
        <p className="mt-4 text-xs text-brand-brown-dark/60">
          Response within 24 hours
        </p>
      </FadeIn>
    </section>
  );
}
