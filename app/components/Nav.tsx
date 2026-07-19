"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Miss Jasmin" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Methods" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-white/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <Link
          href="/"
          className={`font-script text-2xl transition-colors ${
            scrolled || open ? "text-brand-brown" : "text-white"
          }`}
        >
          Little Learners Education
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative text-sm font-medium tracking-wide transition-colors hover:text-brand-beige ${
                  scrolled ? "text-brand-brown" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 md:hidden ${
            scrolled || open ? "text-brand-brown" : "text-white"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <LuX size={26} /> : <LuMenu size={26} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white shadow-sm transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-brand-brown transition-colors hover:bg-brand-beige-light"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 border-t border-brand-beige-light pt-2">
            <Link
              href="/privacy-policy"
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-sm text-brand-brown/70 hover:bg-brand-beige-light"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/terms"
              onClick={() => setOpen(false)}
              className="block rounded-md px-2 py-2 text-sm text-brand-brown/70 hover:bg-brand-beige-light"
            >
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
