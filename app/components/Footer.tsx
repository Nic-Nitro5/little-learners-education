import { LuMail, LuVideo } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import UnderlineLink from "./UnderlineLink";
import {
  CONTACT_EMAIL,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  NAV_LINKS,
  LEGAL_LINKS,
} from "../lib/site";

const FOOTER_LINKS = [...NAV_LINKS.slice(1), ...LEGAL_LINKS];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-beige px-6 py-12 text-brand-brown">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="font-script text-3xl text-brand-brown-dark">Little Learners Education</p>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email Little Learners Education"
            className="rounded-full border border-brand-brown/30 p-3 transition-colors hover:bg-brand-brown hover:text-white"
          >
            <LuMail size={18} aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Message Little Learners Education on WhatsApp at ${WHATSAPP_DISPLAY}`}
            className="rounded-full border border-brand-brown/30 p-3 transition-colors hover:bg-brand-brown hover:text-white"
          >
            <FaWhatsapp size={18} aria-hidden="true" />
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
          {FOOTER_LINKS.map((link) => (
            <UnderlineLink
              key={link.href}
              href={link.href}
              className="hover:text-brand-brown-dark"
            >
              {link.label}
            </UnderlineLink>
          ))}
        </nav>

        <p className="text-xs text-brand-brown/60">
          &copy; Little Learners Education {year}
        </p>
      </div>
    </footer>
  );
}
