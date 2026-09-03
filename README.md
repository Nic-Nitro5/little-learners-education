# Little Learners Education

Marketing website for Little Learners Education - a founder-led education,
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
- **Formspree** for contact form delivery (no backend code - the form posts
  straight to a Formspree endpoint)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/page.tsx` - assembles the single long-scroll homepage from
  `app/components/*`
- `app/privacy-policy/page.tsx`, `app/terms/page.tsx` - legal pages
- `app/components/ContactForm.tsx` - contact form; posts directly to Formspree
  (`FORMSPREE_ENDPOINT` in `app/lib/site.ts`)

## What's placeholder and needs replacing before launch

**Images** - all real assets are now wired in: the hero, about, gallery, and
video sections use real photos and video served from `/public/images` and
`/public/videos`. Nothing on the site currently uses stock placeholder imagery.

**Contact form** - `ContactForm` posts directly to the Formspree endpoint in
`FORMSPREE_ENDPOINT` (`app/lib/site.ts`). Formspree:

- emails each submission to the account owner
- silently drops spam that fills the hidden `_gotcha` honeypot field
- uses the `_subject` hidden field for the notification subject line

On a network/Formspree error the form falls back to a
`mailto:jasminhewetson@gmail.com` link pre-filled with the visitor's message,
so it's never a dead end. To point at a different inbox, create a new form in
Formspree and swap the endpoint (and confirm the address in the Formspree
dashboard).

## What a real deploy needs

- The Formspree form confirmed/verified in the Formspree dashboard (free tier
  caps monthly submissions; upgrade if needed)
- A real domain, and an update to `metadataBase` in `app/layout.tsx` to match
  it (currently a placeholder `littlelearnerseducation.co.za`)
- An Open Graph image (`opengraph-image` file convention or an `images` entry
  under `openGraph` in `app/layout.tsx`) for social share previews
