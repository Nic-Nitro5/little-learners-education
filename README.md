# Little Learners Education

Marketing website for Little Learners Education — a founder-led education,
tuition and therapy practice. Built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## Stack

- **Next.js 16** (App Router) + **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-based theme in `app/globals.css`, brand colors:
  `brand-brown`, `brand-brown-dark`, `brand-beige`, `brand-beige-light`)
- **next/font** for Playfair Display (serif) and Parisienne (script accent)
- **framer-motion** for scroll-triggered fade/slide-in animation (`FadeIn`)
- **react-icons** (Lucide set for UI icons, Simple Icons set for the
  HTML/CSS/JS badges in the Coding section)
- **resend** for transactional email from the contact form (optional — see
  below)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/page.tsx` — assembles the single long-scroll homepage from
  `app/components/*`
- `app/privacy-policy/page.tsx`, `app/terms/page.tsx` — legal pages
- `app/api/contact/route.ts` — contact form Route Handler

## What's placeholder and needs replacing before launch

**Images** — all real assets are now wired in: the hero, about, gallery, and
video sections use real photos and video served from `/public/images` and
`/public/videos`. Nothing on the site currently uses stock placeholder imagery.

**Contact form email sending** — the form at `app/api/contact/route.ts`
already:

- validates required fields
- rejects spam via a honeypot field (`company`), invisible to real users
- sends the enquiry with [Resend](https://resend.com) **if** a
  `RESEND_API_KEY` environment variable is set

If no key is configured, the API responds `503 EMAIL_NOT_CONFIGURED` and the
`ContactForm` component falls back to a `mailto:jasminhewetson@gmail.com` link
pre-filled with the visitor's message, so the form is never a dead end.

To wire up real sending:

1. Create a [Resend](https://resend.com) account and verify a sending domain
   (or use their `onboarding@resend.dev` sandbox address for testing).
2. Set `RESEND_API_KEY` in your deployment environment (e.g. Vercel project
   env vars) and locally in `.env.local`.
3. Update the `from` address in `route.ts` once a verified domain is set up.

## What a real deploy needs

- A production `RESEND_API_KEY` (or swap in your preferred email provider —
  the Route Handler is the only place that needs to change)
- A real domain, and an update to `metadataBase` in `app/layout.tsx` to match
  it (currently a placeholder `littlelearnerseducation.co.za`)
- An Open Graph image (`opengraph-image` file convention or an `images` entry
  under `openGraph` in `app/layout.tsx`) for social share previews
