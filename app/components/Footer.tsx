import Link from "next/link";
import { LuMail, LuVideo } from "react-icons/lu";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-beige px-6 py-12 text-brand-brown">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="font-script text-3xl text-brand-brown-dark">Little Learners Education</p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:jasminhewetson@gmail.com"
            aria-label="Email Little Learners Education"
            className="rounded-full border border-brand-brown/30 p-3 transition-colors hover:bg-brand-brown hover:text-white"
          >
            <LuMail size={18} aria-hidden="true" />
          </a>
          <span
            aria-label="Video consultations available"
            title="Video consultations available"
            className="rounded-full border border-brand-brown/30 p-3"
          >
            <LuVideo size={18} aria-hidden="true" />
          </span>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {[
            { href: "/#about", label: "About Miss Jasmin" },
            { href: "/#services", label: "Services" },
            { href: "/#portfolio", label: "Methods" },
            { href: "/#contact", label: "Contact" },
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms", label: "Terms & Conditions" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative hover:text-brand-brown-dark"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <p className="text-xs text-brand-brown/60">
          &copy; Little Learners Education {year}
        </p>
      </div>
    </footer>
  );
}
