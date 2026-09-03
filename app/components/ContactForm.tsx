"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { LuChevronDown, LuSparkles } from "react-icons/lu";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "../lib/site";

const SERVICES = [
  "Private Teaching",
  "Private Tuition",
  "Advice",
  "Coding",
  "Therapy / Special Needs",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    service: SERVICES[0],
    message: "",
  });

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Enquiry: ${fields.service}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setFields({
          name: "",
          email: "",
          service: SERVICES[0],
          message: "",
        });
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-5" noValidate>
      {/* Honeypot - Formspree silently drops any submission that fills `_gotcha` */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="_gotcha">Company</label>
        <input
          type="text"
          id="_gotcha"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <input
        type="hidden"
        name="_subject"
        value={`New enquiry: ${fields.service} - ${fields.name || "Website"}`}
      />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={fields.name}
          onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-beige/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={fields.email}
          onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-beige/50"
        />
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-white">
          Which service interests you?
        </label>
        <div className="group relative">
          <LuSparkles
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-beige transition-colors group-focus-within:text-white"
          />
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={(e) => setFields((f) => ({ ...f, service: e.target.value }))}
            className="w-full appearance-none rounded-lg border border-white/20 bg-white/10 py-3 pl-11 pr-10 text-white shadow-inner transition-colors focus:border-brand-beige focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-brand-beige/50"
          >
            {SERVICES.map((service) => (
              <option key={service} value={service} className="text-brand-brown">
                {service}
              </option>
            ))}
          </select>
          <LuChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-beige transition-transform duration-200 group-focus-within:rotate-180 group-focus-within:text-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={fields.message}
          onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-brand-beige focus:outline-none focus:ring-2 focus:ring-brand-beige/50"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={status === "submitting" ? undefined : { scale: 1.02 }}
        whileTap={status === "submitting" ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-full rounded-full bg-brand-beige px-8 py-3 text-sm font-semibold tracking-wide text-brand-brown-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit"}
      </motion.button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="rounded-lg bg-white/10 px-4 py-3 text-sm text-brand-beige-light">
            Thank you! Your message has been sent - we&apos;ll get back to you
            soon.
          </p>
        )}

        {status === "error" && (
          <p className="rounded-lg bg-white/10 px-4 py-3 text-sm text-brand-beige-light">
            Something went wrong sending your message.{" "}
            <a href={mailtoHref()} className="font-semibold underline">
              Send it via email instead
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
