import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  variant?: "light" | "dark";
  className?: string;
  children?: ReactNode;
};

const EYEBROW_CLASS = {
  light: "text-brand-brown/70",
  dark: "text-brand-beige",
};

const TITLE_CLASS = {
  light: "text-brand-brown",
  dark: "text-white",
};

export default function SectionHeading({
  eyebrow,
  title,
  variant = "light",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p
        className={`text-sm font-semibold uppercase tracking-[0.3em] ${EYEBROW_CLASS[variant]}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-serif text-3xl font-semibold sm:text-4xl ${TITLE_CLASS[variant]}`}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
