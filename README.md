# Foirton Optimum Services Limited — Website

Corporate website for Foirton Optimum Services Limited (heavy machinery sales, leasing, lending, and equipment sourcing — Rivers State, Nigeria).

Built with Next.js (App Router), React, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

## Before launch

1. **Phone and email** — edit `company.phone` and `company.email` in `src/data/site.ts`. They show as clearly marked `[Add …]` placeholders until replaced, then automatically become clickable `tel:` / `mailto:` links.
2. **Contact form delivery** — set `CONTACT_WEBHOOK_URL` (see `.env.example`). Submissions are validated in `src/app/api/equipment-request/route.ts` and forwarded as JSON. Without it, the form shows visitors a "not available yet" message instead of silently dropping requests.
3. **Site URL** — set `NEXT_PUBLIC_SITE_URL` to the live domain (not needed on Vercel).
4. **Map** — the contact map is located by the street address. Swap the `iframe` `src` in `src/components/Contact.tsx` for an exact Google Maps embed once one exists.
5. **Photography** — the machinery photos are licensed from Wikimedia Commons (credited at `/photo-credits`). Replace them with the company's own photos when available: drop files into `src/assets/images/` with the same names, and update or remove `src/data/photo-credits.json`.

## Structure

```
src/
  app/            layout, home page, /photo-credits, API route, SEO files (icon, OG image, robots, sitemap)
  components/     Navbar, Hero, Intro, About, Services (ServiceCard), Equipment (EquipmentCard),
                  Industries (IndustryCard), WhyUs, Process, CTA, Contact, ContactForm, Footer
  data/site.ts    all company details, copy, services, equipment, and industries
  assets/images/  optimised machinery photography
```

Equipment and service buttons link to `/?equipment=…#contact` or `/?service=…#contact`, which pre-fills the contact form.
