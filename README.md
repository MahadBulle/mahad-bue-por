# Mahad Bule — Personal Portfolio

A complete responsive portfolio built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **shadcn/ui** components using Radix primitives.

## Run locally

Node.js 22 or newer is required.

```bash
git clone https://github.com/MahadBulle/mahad-bue-por.git
cd mahad-bue-por
npm install
npm run dev
```

Open http://localhost:3000.

## Production checks

```bash
npm run typecheck
npm run build
npm start
```

The first install creates a package-lock.json. Commit it to pin the resolved dependencies for subsequent `npm ci` installs.

## Features

- Responsive hero, About, Selected Work, Expertise, Process and Contact sections.
- Working project category filters and accessible project detail dialogs.
- Light/dark themes, persisted with next-themes; light by default.
- Responsive mobile navigation, keyboard focus styles, skip link and reduced-motion support.
- Contact form validates input and opens WhatsApp with a prefilled message. It does not store submissions or claim to send email.
- Downloadable text professional profile.
- Metadata, favicon and a custom not-found page.
- Source-owned shadcn/ui Button and Dialog, with components.json configured for adding further components.

## Personalise

Edit `lib/data.ts` for identity, contact links, projects and skills. The portrait uses the account's GitHub avatar. Replace it with a local portrait and update `app/page.tsx` if desired. Edit biography text in `app/page.tsx`, styling in `app/globals.css`, and the downloadable profile in `public/Mahad-Bule-Profile.txt`.

Project artwork is an **illustrative interface**, clearly labelled in the UI. It is not a screenshot and does not claim client revenue, customer counts or performance results. Only KACDO has a verified public project URL; other projects offer project details and a contact action.

## Deploy to Vercel

Import this repository at https://vercel.com/new, keep the detected Next.js preset, and deploy. No database, environment variables or paid integrations are required. To use a custom canonical URL, add `metadataBase` and canonical metadata in `app/layout.tsx` after your domain is confirmed.

## Interaction checks

```bash
npx playwright install --with-deps chromium
npm run test:e2e
```

Playwright checks filtering, project details, mobile navigation, theme switching, and the generated WhatsApp URL using a local interception. It also saves desktop and mobile screenshots.

## Stack credits

Next.js / React / Tailwind CSS / shadcn/ui (MIT) / Radix UI / Lucide icons / next-themes.
