# Sanjay Singh Rawat — Digital B2B eCommerce briefing

A personal microsite presenting Sanjay Singh Rawat’s comparable experience as a Senior Scrum Master for digital B2B eCommerce delivery. It combines an executive briefing with a Chemist Warehouse public-architecture walkthrough and a Merck/MSD pharmaceutical commerce case study.

Live site: https://sanjaypst1.github.io/chemwarehouse/

## Purpose of the architecture comparison

The site helps Sanjay explain that the underlying technology products may differ, while the delivery challenge category is comparable: regulated pharmaceutical commerce, multiple user groups, backend services, APIs, product and customer data, external partners, controlled releases, and complex upstream and downstream dependencies.

## Verified facts vs illustrative architecture

Every architecture claim is labelled as one of:

- **Verified public information** — Chemist Warehouse facts supported by the public sources listed below
- **Sanjay’s Merck/MSD experience** — first-person delivery experience Sanjay has provided
- **Illustrative reference architecture** — a discussion aid reconstructed from common enterprise patterns; not a confirmed Merck stack

Never merge these categories. Do not invent Merck product names. Prefer “technology-agnostic capability” or “illustrative component, subject to validation”.

## Public sources

1. Convert Digital case study — https://www.convertdigital.com.au/our-work/chemistwarehouse
2. commercetools customer story — https://commercetools.com/customer-stories/chemist-warehouse
3. Chemist Warehouse Developer Portal — https://portal.chemistwarehouse.com.au/
4. Crossfire EDI/API trading-partner notes — https://crossfireintegration.com/integrations/trading-partners/chemist-warehouse/
5. TGA data integrity guidance — https://www.tga.gov.au/products/regulations-all-products/manufacturing/data-management-and-data-integrity-dmdi
6. 21 CFR Part 11 — https://www.ecfr.gov/current/title-21/chapter-I/subchapter-A/part-11
7. EU GMP Annex 11 — https://health.ec.europa.eu/system/files/2016-11/annex11_01-2011_en_0.pdf

## Technology stack

- Vite, React and TypeScript
- GSAP with ScrollTrigger
- Three.js for the connected-delivery hero
- Accessible semantic HTML and CSS
- Lucide icons
- GitHub Actions and GitHub Pages

## Main website sections

1. Hero and positioning
2. Role understanding and delivery flow
3. Programme needs and relevant experience
4. Chemist Warehouse public ecosystem and layered architecture
5. Upstream/downstream flows and B2B patterns
6. Merck/MSD featured case study, journeys and API domains
7. GxP and regulated delivery controls
8. Platform comparison and transferable patterns
9. Operating rhythm, metrics and challenges
10. Discovery questions for the first two weeks
11. 30-60-90 day plan with API/data focus
12. Practical delivery artefacts
13. Leadership, experience, contact and public sources

## File structure

```
/
├── public/                 Favicon, social preview, robots, sitemap, manifest
├── src/components/         Navigation, confidence labels, layer accordion, canvas
├── src/sections/           Page sections
├── src/animations/         GSAP motion
├── src/three/              Connected-delivery scene
├── src/data/               Professional and architecture content
├── src/hooks/              Motion, WebGL and active-section hooks
├── src/styles/             Design tokens, layout and print CSS
├── CONTENT_VALIDATION.md   Private pre-share checklist (not rendered on site)
└── .github/workflows/deploy.yml
```

## Local prerequisites

- Node.js 22 or later
- npm 10 or later

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run preview
```

## How to update the Merck capability model

Edit `src/data/merckArchitecture.ts` for narrative, value streams, capability layers, API domains, journeys and leadership points.

## How to validate or remove a claim

1. Check the confidence label in the UI.
2. For Chemist Warehouse facts, confirm against `src/data/chemistArchitecture.ts` and `src/data/sources.ts`.
3. For Merck experience, confirm against `CONTENT_VALIDATION.md`.
4. If unvalidated, keep the claim illustrative or remove it.
5. Never present illustrative architecture as verified fact.

## How to update source links

Edit `src/data/sources.ts`. The Sources section near the footer renders from that file.

## How to update API-domain content

Edit `merckApiDomains` in `src/data/merckArchitecture.ts`. Keep it as domains, not invented API counts.

## How to update the GxP section

Edit `src/data/gxpControls.ts`. Preserve the caution that not every commerce interaction is automatically GxP regulated.

## How to update Chemist Warehouse architecture content

Edit `src/data/chemistArchitecture.ts` and `src/data/upstreamDownstream.ts`. Keep the public-view qualification and do not describe 200+ dataflows as 200+ APIs.

## How to update contact information

Edit `src/data/site.ts`.

## How to update professional content

Also see `src/data/` for alignment, plan, artefacts, challenges, metrics, transfers and experience.

## How to add a PDF CV later

Place a real CV file in `public/`, then add a link in `src/sections/Contact.tsx`.

## How to update the social-preview image

Replace `public/social-preview.png` with a 1200×630 image. Do not add Chemist Warehouse branding.

## Vite base path and GitHub Pages

`vite.config.ts` sets `base: '/chemwarehouse/'`.

Pushes to `main` run `.github/workflows/deploy.yml` (lint, typecheck, build, Pages deploy).

Pages source: Repository Settings → Pages → Build and deployment → Source → GitHub Actions

## Accessibility

- Skip link, landmarks and heading hierarchy
- Keyboard-accessible navigation, tabs and accordions
- Visible focus styles and suitable touch targets
- Decorative canvas marked `aria-hidden`
- Architecture layers and journeys have text equivalents
- Reduced-motion and WebGL fallbacks

## Content accuracy reminder

- Public Chemist Warehouse details are labelled verified
- Merck capability architecture is illustrative unless validated
- HCP commerce and raw-material procurement are separate value streams
- 200+ dataflows are not “200+ APIs”
- Outcomes remain limited to the stated 90% and 35% figures
