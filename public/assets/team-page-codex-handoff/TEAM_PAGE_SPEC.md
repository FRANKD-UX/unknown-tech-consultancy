# TEAM PAGE SPEC

## Goal
Replace the current `Our Approach` navigation destination with a new `Our Team` experience.

Use `assets/references/team-landing-reference.png` as the visual target. It is a reference only; do not render the PNG as the website.

## Brand
Preserve the existing site:
- Deep Forest `#10251F`
- Forest `#18362F`
- Moss `#556B57`
- Warm Bone `#F4F0E8`
- Warm White `#FBF8F3`
- Charcoal `#171717`
- Orange `#FF6A2A`

The Team landing page should be light: Warm Bone / Warm White with Forest typography. Do not make the landing page full-Forest.

## Navigation
Change:
`Our Approach` -> `Our Team`

Route:
`/approach` -> `/team`

If `/approach` already exists and is linked elsewhere, redirect it to `/team`.

## Landing page structure
1. Existing main navbar
2. Editorial Team introduction
3. Four team-member cards
4. `How we work together` client-value flow
5. Closing CTA
6. Existing footer

## Opening copy
Eyebrow: `OUR TEAM`

Headline:
`Different expertise. A shared purpose.`

Supporting copy:
`We combine commercial thinking, design and technical engineering to help businesses identify opportunities, build the right solutions and achieve measurable growth.`

Secondary eyebrow:
`PEOPLE BEHIND THE WORK`

Secondary headline:
`Real people. Real experience. Real results for our clients.`

Secondary copy:
`Each team member plays a specific role in helping clients move from idea to impact. Select a profile to see how they contribute and how their work benefits the client.`

## Team cards
Use the actual portraits under `assets/team/`.

Order:
1. Bokamoso Jadian Motlopi
2. Frank Ndlovu
3. Sophie
4. Matthew

Each card contains:
- member index
- portrait
- name
- role
- one concise client-value statement
- circular arrow affordance

Use routes from `team-data.json`.

Cards should feel editorial, not like HR profile cards.

Desktop:
- subtle image scale on hover
- arrow gains emphasis
- restrained border/contrast change
- no 3D tilt
- no large shadow
- no bounce

## How we work together
This is a client-facing story:
1. Understand the opportunity
2. Define the solution
3. Design and build
4. Deliver the outcome

Horizontal connected flow on desktop, vertical on mobile.

## Content principle
The page must answer:
`How does this team benefit the client?`

Do not turn it into a staff CV page.

## Placeholders
Sophie and Matthew intentionally use Lorem Ipsum body content in `team-data.json`.

Do not invent real facts for them.

Matthew's confirmed role remains:
`Web Designer & Framer Developer`

Do not broaden Matthew into backend, custom software, cloud, DevOps, security or systems architecture.

## No fabricated proof
Do not invent:
- years of experience
- project counts
- customer counts
- percentages
- awards
- certifications
- testimonials
- client logos
- revenue figures

Ignore any such decorative text visible in generated reference images.

## Responsive
Desktop: 4 cards in one row when space permits.
Tablet: 2x2.
Mobile: 1 column.

## Accessibility
- semantic headings
- real profile links
- descriptive alt text
- visible focus states
- reduced-motion support
- no text embedded in images

## Verification
- `/team` renders
- nav says `Our Team`
- each card routes correctly
- supplied portraits are used
- no fake content is introduced
- Home unchanged
- Services unchanged
- `npm run typecheck`
- `npm run build`
- do not commit, push or deploy
