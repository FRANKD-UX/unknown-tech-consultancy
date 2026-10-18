# CODEX HANDOFF — READ BEFORE EDITING

## Source of truth

The current homepage implementation and the files in `public/assets/reference/` represent the approved design direction.

Do not redesign the hero or replace the visual system unless explicitly requested.

## Non-negotiable design constraints

1. Hero stays orange / black / warm white.
2. Hero image remains the supplied orange cinematic fibre visual.
3. Warm Bone floating navbar remains visually light.
4. Forest is the main corporate colour outside the hero.
5. Hero capability icons remain bold white outline icons with no cards or icon backgrounds.
6. "What We Do" remains an editorial four-pillar layout: Build, Automate, Secure, Scale.
7. Avoid generic SaaS/AI styling, purple/blue gradients, excessive glassmorphism and giant rounded cards.
8. Do not add Selected Work / case studies yet.
9. Do not invent testimonials, clients, metrics, awards, certifications or business history.
10. The final CTA immediately above the footer must retain an ORANGE fibre/light image. Do not recolour that visual green.

## Existing implementation

The starter already contains:

- production-oriented component split
- semantic design tokens
- responsive hero/navbar
- interactive capability carousel
- services section
- why-us section
- process section
- supporting services section
- orange closing CTA
- footer
- route scaffolds
- SVG asset pack
- design reference images

## Recommended next Codex tasks

1. Run `npm install`.
2. Run `npm run typecheck`.
3. Run `npm run build`.
4. Fix any environment/version issues without redesigning the UI.
5. Compare the homepage against `public/assets/reference/approved-hero-figma.png`.
6. Refine spacing/typography toward the approved Figma proportions.
7. Add browser smoke tests if the repository/testing environment supports them.
8. Only after the homepage is stable, expand the secondary routes.

## Asset rules

Prefer assets already under `public/assets/`.
Do not replace them with stock images.
Do not add a third-party icon library unless explicitly requested.
SVGs are intended to remain lightweight, editable and visually consistent.

## Content rules

The company offers:
- website design and web development
- custom software and systems from scratch
- UX/UI and e-commerce
- APIs and integrations
- DevOps, CI/CD, infrastructure and automation
- cloud and data pipelines
- cybersecurity and application security
- IAM, hardening, monitoring and vulnerability management
- backup/recovery
- MSP / managed IT
- hosting and support
- SEO, analytics and digital marketing

Maintain this breadth without making the company feel like an unfocused "does everything" agency. The Build / Automate / Secure / Scale architecture is the organizing framework.
