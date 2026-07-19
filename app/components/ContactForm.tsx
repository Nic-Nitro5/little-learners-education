"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { LuChevronDown, LuSparkles } from "react-icons/lu";

const SERVICES = [
  "Private Teaching",
  "Private Tuition",
  "Advice",
  "Coding",
  "Therapy / Special Needs",
];

type Status = "idle" | "submitting" | "success" | "error" | "fallback";

const CONTACT_EMAIL = "jasminhewetson@gmail.com";

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
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setFields((f) => ({ ...f, name: "", message: "" }));
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (res.status === 503 && data.error === "EMAIL_NOT_CONFIGURED") {
        setStatus("fallback");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-5" noValidate>
      {/* Honeypot field — hidden from sighted users, irresistible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

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
            Thank you! Your message has been sent — we&apos;ll get back to you
            soon.
          </p>
        )}

        {status === "fallback" && (
          <p className="rounded-lg bg-white/10 px-4 py-3 text-sm text-brand-beige-light">
            Email sending isn&apos;t fully configured on this site yet.{" "}
            <a href={mailtoHref()} className="font-semibold underline">
              Click here to send your message via your email app instead
            </a>
            .
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
