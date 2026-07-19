import Image from "next/image";
import FadeIn from "./FadeIn";
import EmailCTAButton from "./EmailCTAButton";

export default function CalloutBanner() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20">
      <Image
        src="/images/pencil-book.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-brand-brown-dark/80" />

      <FadeIn className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
          Achieve <span className="font-script text-brand-beige">your</span>{" "}
          goals!
        </h2>
        <EmailCTAButton
          label="Contact Now!"
          wrapperClassName="inline-block shrink-0"
          className="inline-block rounded-full bg-brand-beige px-8 py-3 text-sm font-semibold tracking-wide text-brand-brown-dark transition-transform hover:scale-105"
        />
      </FadeIn>
    </section>
  );
}
