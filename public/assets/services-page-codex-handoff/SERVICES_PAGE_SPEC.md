# Services Page Implementation Spec

## Purpose

This pack is the visual and interaction handoff for the `/services` page.

The homepage already answers **what the consultancy does**.
The Services page should answer **what each capability delivers, what problems it solves, and how the client explores it**.

Do not duplicate the homepage layout.

---

## Approved visual direction

Use `assets/services-page-reference.png` as the visual target.

Design language:

- premium technology consultancy
- editorial / architectural
- Forest brand palette
- Warm Bone light surfaces
- restrained technical illustrations
- no blue/purple AI gradients
- no generic SaaS cards
- no excessive glassmorphism
- no fake case studies, client logos, testimonials, metrics or results

Core palette:

- Deep Forest `#10251F`
- Forest `#18362F`
- Moss `#556B57`
- Warm Bone `#F4F0E8`
- Warm White `#FBF8F3`
- Charcoal `#171717`
- Orange `#FF6A2A` for restrained accent only

---

# Page structure

1. Services hero
2. Compact pillar navigation
3. Sticky-scroll service experience
   - BUILD
   - AUTOMATE
   - SECURE
   - SCALE
4. Process summary
5. Engagement models
6. Final CTA
7. Existing footer

---

# 1. Services hero

Use `assets/services-hero-visual.svg`.

Suggested copy:

Eyebrow:
`SERVICES`

Heading:
`Technology services built for what's next.`

Supporting copy:
`From digital products to cloud infrastructure, automation and security, we deliver end-to-end technology services designed around real business goals.`

Primary CTA:
`Discuss your project`

Secondary CTA:
`Explore our services`

The hero should use Deep Forest / near-black green with the abstract orange glow and terrain visual on the right.

Keep the page's existing navbar component. Do not create a second navigation system.

---

# 2. Pillar navigation

Immediately below the hero, use a compact sticky or normal anchor navigation:

`01 Build | 02 Automate | 03 Secure | 04 Scale`

Each item anchors to the corresponding sticky chapter.

Keep it minimal and editorial.

---

# 3. Sticky-scroll service experience

This is the core of the page.

The effect should feel similar to a polished Framer site:

- each service pillar/chapter creates a full-screen visual environment
- the left/pillar background remains sticky
- the service cards on the right continue scrolling vertically
- as cards pass through the focal region, they sharpen/brighten subtly
- the background illustration and colour remain fixed for the duration of that chapter
- when the chapter ends, the sticky region releases and the next chapter takes over

## Technical intent

Each chapter should have:

- a scrolling wrapper tall enough for its service cards
- a `position: sticky` inner visual panel
- sticky panel height around `100svh`
- the left visual/pillar content pinned
- the right service card rail moving through it

Avoid scroll-jacking.
The browser's normal scroll position remains the source of truth.

No forced wheel interception.

### Suggested desktop structure

```
<section class="service-chapter">
  <div class="service-chapter__sticky">
    <div class="service-chapter__visual">
      pillar number
      pillar title
      pillar description
      short capability summary
      decorative artwork
    </div>
  </div>

  <div class="service-chapter__cards">
    service card
    service card
    service card
    ...
  </div>
</section>
```

Equivalent React componentization is encouraged.

---

## BUILD

Theme:
Warm Bone / light architectural surface.

Decorative asset:
`assets/build-gear.svg`

Left side:
- 01
- BUILD
- description
- compact list of grouped capability labels if useful

The gear should be very large, low-opacity and partially cropped.

Right-side cards should use a very light Warm Bone / Warm White surface with Forest text.

Representative detailed cards should include services such as:
- Website Design
- Web Development
- Custom Software Development
- Web Applications
- Business Portals
- APIs & Integrations

All BUILD services from `services-page-content.json` must still be represented somewhere in the chapter.

---

## AUTOMATE

Theme:
Moss / muted Forest.

Decorative asset:
`assets/automate-flow.svg`

Optional lower texture:
`assets/forest-terrain-texture.svg`

Sticky left visual:
- 02
- AUTOMATE
- description

Cards:
- DevOps
- CI/CD
- Cloud Infrastructure
- Infrastructure Automation
- Workflow Automation
- Business Process Automation
- Systems Integration
- Data Pipelines
- Monitoring & Observability

Card surfaces should remain dark and restrained with Warm White text.

---

## SECURE

Theme:
Deep Forest.

Decorative asset:
`assets/secure-shield.svg`

Optional texture:
`assets/forest-terrain-texture.svg`

Sticky left visual:
- 03
- SECURE
- description

Cards:
- Cybersecurity
- Application Security
- Identity & Access Management
- Infrastructure Hardening
- Security Monitoring
- Vulnerability Management
- Backup & Recovery
- Security Assessments

Use slightly stronger contrast than AUTOMATE.

---

## SCALE

Theme:
Deepest Forest / near-black green.

Decorative asset:
`assets/scale-growth.svg`

Optional texture:
`assets/forest-terrain-texture.svg`

Sticky left visual:
- 04
- SCALE
- description

Cards:
- Managed IT / MSP Services
- IT Support
- Infrastructure Management
- Website Maintenance
- Application Maintenance
- Hosting
- Performance Optimisation
- SEO Optimisation
- Digital Marketing
- Analytics & Reporting
- Ongoing Technical Support

---

# Service cards

Service cards should feel like floating editorial modules moving through the sticky environment.

Each card may contain:

- small service icon
- service title
- concise 1–2 sentence description
- optional arrow affordance

Do not create huge card shadows.
Use subtle borders, restrained radii and high contrast.

For now, cards may link to `/contact` or remain non-linking if individual service routes do not exist.

Do not invent unsupported service URLs.

---

# Scroll animation

Use native browser scrolling.

Preferred implementation:

- CSS `position: sticky`
- CSS transitions for opacity/transform
- `IntersectionObserver` only where useful
- optional small React state hook

Avoid adding Framer Motion unless the existing repository already uses it or it materially simplifies the implementation.

Desired card state:

before focal zone:
- opacity around 0.55–0.7
- translateY around 12–20px

in focal zone:
- opacity 1
- translateY 0
- slightly stronger border/background

after focal zone:
- may fade gently, but remain readable

Do not blur text heavily.

Decorative backgrounds may shift/scale by 1–2% on chapter activation, but never continuously.

---

# Mobile/tablet

Do not force desktop sticky storytelling onto small devices.

Desktop:
sticky split experience.

Tablet:
either reduced sticky effect or 2-column chapter presentation.

Mobile:
stacked linear content.
Disable long pinned backgrounds if they harm usability.
Use chapter heading + artwork + service cards in normal document flow.

All services must remain accessible.

---

# Accessibility

- Respect `prefers-reduced-motion`
- Reduced-motion users should get static chapters
- Do not hide content behind animation
- Decorative SVGs are `aria-hidden`
- All text remains real HTML
- Keyboard navigation must work
- No scroll hijacking
- Maintain WCAG AA contrast

---

# 4. Process summary

Reuse the approved homepage process language:

- Discover
- Design
- Build
- Operate

Keep this section concise because the homepage already introduces the process.

---

# 5. Engagement models

Use three restrained cards/columns:

### Project-based
Ideal for defined projects with clear outcomes.

### Retainer
Ongoing support and development.

### Advisory
Strategy, architecture and technical leadership.

Do not invent pricing.

---

# 6. Final CTA

Deep Forest / near-black surface.

Headline direction:
`Let's turn your ideas into real-world impact.`

CTA:
`Let's Talk`

Secondary:
`View all services` or return to top.

Reuse existing site button language and footer.

---

# Data

The canonical service taxonomy is in:
`services-page-content.json`

When implementing inside the existing project, prefer the project's existing canonical `servicePillars` data if it already matches this file.

Do not maintain two independent service taxonomies.

---

# Verification

Before finishing:

1. All four sticky chapters exist.
2. Sticky background/left visual remains fixed while service cards scroll.
3. Transition between BUILD → AUTOMATE → SECURE → SCALE is smooth.
4. No scroll-jacking.
5. Reduced motion produces a usable static page.
6. All services remain represented.
7. Decorative assets load locally.
8. Desktop/tablet/mobile layouts work.
9. `npm run typecheck` passes.
10. `npm run build` passes.
11. No changes to the approved homepage unless required for shared data reuse.
12. No commit, push or deploy.
