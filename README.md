# Unknown Technology Consultancy — Next.js Design Starter

This repository is a coded head start for the approved technology consultancy design developed in the ChatGPT design session.

## Stack

- Next.js 16
- React 19
- TypeScript
- App Router
- Native CSS
- No UI framework
- No icon dependency

## Run

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

## Design direction

The homepage intentionally preserves the approved visual language:

- Orange/black cinematic hero
- Warm Bone floating navbar
- Forest primary corporate colour
- Bold white capability icons
- Editorial service layout instead of SaaS cards
- Deep Forest "Why Us" section
- Warm Bone process/support sections
- Orange fibre CTA image above footer
- No case studies, portfolio, testimonials, client logos or fabricated metrics

## Assets

- `public/assets/hero/hero-orange.webp`
- `public/assets/cta/cta-orange-fibres.webp`
- `public/assets/icons/*.svg`
- `public/assets/reference/approved-hero-figma.png`
- `public/assets/reference/homepage-concept.png`

The reference images are included for Codex/design comparison only; they are not rendered as page content.

## Routes

- `/`
- `/services`
- `/approach`
- `/about`
- `/insights`
- `/contact`
- `/team` and individual team profiles

The site exports every route as static HTML for GitHub Pages.

## Team content

`src/data/team-content.json` is the single source for the active team, profile
content, responsibilities, portrait paths, routes and display order. Components
consume it through `src/data/team.ts`. The former member's URL redirects to
`/team` using the same convention as `/approach`.

Historical team handoff documents and reference images are retained in
`docs/team-handoff/`, outside the public asset tree. They are superseded by the
current team data and must not be copied into the static export.

The enquiry address in `src/data/contact.ts` is currently unset. Until a verified
company or Sophie enquiry address is supplied, the contact form downloads a
project brief and does not send it. No personal booking or CRM assignment is
configured in this repository.

## Important

Before continuing implementation, read `CODEX_HANDOFF.md`.

## GitHub Pages

The `.github/workflows/pages.yml` workflow checks types, builds the static site,
and deploys `out/` on each push to `master`. In repository Settings → Pages,
select **GitHub Actions** as the publishing source.

The Pages configuration supplies the repository base path automatically. Public
assets and navigation support both project URLs and root/custom-domain URLs.
Next.js image optimisation is disabled because Pages serves static files.

To verify a project-path build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/unknown-tech-consultancy npm run build
npm run typecheck
```

For a root-domain export, run `npm run build` without that environment variable.
Use a static HTTP server to preview `out/`; `next start` does not serve exports.

Dependencies, build output, editor settings and environment files are excluded
from Git. Install dependencies with `npm ci` after cloning.
