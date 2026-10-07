# Sanjay Singh Rawat — Digital B2B eCommerce briefing

A personal microsite presenting Sanjay Singh Rawat’s comparable experience as a Senior Scrum Master for digital B2B eCommerce delivery. It is designed as an executive briefing and interactive case study, with a featured Merck/MSD example, a 30-60-90 day plan, and a pragmatic delivery approach.

Live site: https://sanjaypst1.github.io/chemwarehouse/

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
4. Merck/MSD featured case study
5. Transferable delivery patterns
6. Operating rhythm
7. Illustrative delivery metrics
8. Anticipated challenges and responses
9. 30-60-90 day plan
10. Practical artefacts
11. Leadership style
12. Experience snapshot
13. Why I can add value quickly
14. Contact

## File structure

```
/
├── public/          Favicon, social preview, robots, sitemap, manifest
├── src/components/  Navigation, canvas, footer, skip link
├── src/sections/    Page sections
├── src/animations/  GSAP motion
├── src/three/       Connected-delivery scene
├── src/data/        Professional content
├── src/hooks/       Motion, WebGL and active-section hooks
├── src/styles/      Design tokens, layout and print CSS
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

The production preview uses the GitHub Pages base path `/chemwarehouse/`.

## GitHub Pages deployment

Pushes to `main` run `.github/workflows/deploy.yml`. The workflow installs dependencies, lints, type-checks, builds and deploys the `dist` folder through GitHub Pages.

If Pages is not already using GitHub Actions:

Repository Settings → Pages → Build and deployment → Source → GitHub Actions

## Vite base path

`vite.config.ts` sets `base: '/chemwarehouse/'` because the published URL is:

https://sanjaypst1.github.io/chemwarehouse/

## How to update contact information

Edit `src/data/site.ts`.

## How to update professional content

Section copy lives in `src/data/`:

- `alignment.ts`
- `caseStudy.ts`
- `transfers.ts`
- `rhythm.ts`
- `metrics.ts`
- `challenges.ts`
- `plan.ts`
- `artefacts.ts`
- `experience.ts`

## How to add a PDF CV later

Place a real CV file in `public/`, for example `public/sanjay-singh-rawat-cv.pdf`, then add a link in `src/sections/Contact.tsx`. Do not add a download control until the file exists.

## How to update the social-preview image

Replace `public/social-preview.png` with a 1200×630 image using the same bright, restrained visual language. Keep Sanjay’s name and role. Do not add Chemist Warehouse branding.

## Accessibility

- Skip link, landmarks and heading hierarchy
- Keyboard-accessible navigation, tabs and accordions
- Visible focus styles and 44px-class touch targets
- Decorative canvas marked `aria-hidden`
- No hover-only content
- Printable 30-60-90 plan

## Performance

- Three.js is lazy-loaded and disposed on unmount
- Device pixel ratio is capped
- Rendering pauses when the tab is hidden or the canvas is off-screen
- Mobile uses fewer nodes
- Fonts are self-hosted through Fontsource

## Three.js fallback

If WebGL is unavailable, a CSS and SVG connected-systems graphic is shown. The page remains fully usable.

## Reduced motion

When `prefers-reduced-motion: reduce` is set, parallax and staggered movement are disabled, content appears immediately, and the canvas stays still.

## Content accuracy reminder

This site describes comparable and transferable delivery patterns. It does not claim that Merck/MSD and Chemist Warehouse used the same technology stack. Metrics from Merck/MSD are presented as team and environment outcomes. Dashboard figures are labelled as illustrative. Programme observations are based on the publicly shared role description only.
