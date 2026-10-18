# TEAM MEMBER PROFILE SPEC

## Goal
Build one reusable individual team-member profile template.

References:
- `assets/references/frank-profile-forest-reference.png`
- `assets/references/bokamoso-profile-layout-reference.png`

The Frank reference defines the approved Forest visual treatment.
The Bokamoso reference shows the preferred information architecture and client-benefit story.

## Routes
- `/team/frank-ndlovu`
- `/team/bokamoso-jadian-motlopi`
- `/team/sophie`
- `/team/matthew`

## Visual direction
Individual profiles use full Forest treatment:
- Deep Forest / very dark green page canvas
- Warm White / Warm Bone text
- Moss accents
- restrained Orange only where appropriate
- editorial, premium, technical
- no blue/purple gradients
- no glassmorphism
- no excessive cards

## Structure
1. Existing navbar
2. Back to Team link
3. Portrait block
4. Member identity
5. Client-facing value headline
6. Short biography
7. Capabilities / expertise
8. Five-step client-benefit journey
9. Client Outcome statement
10. CTA / footer

## Desktop composition
Use a three-column editorial layout where practical.

LEFT
- large portrait
- faint oversized member number
- optional short quote/value statement

CENTER
- discipline
- name
- role
- value headline
- short biography
- expertise

RIGHT
- five-step client-benefit journey
- connected vertical line
- final Client Outcome panel

## Frank
Role:
`Lead Software Engineer & Technical Architect`

Frank is the consultancy's primary technical person.

His remit includes:
- custom software
- business applications
- .NET / C#
- APIs
- databases
- integrations
- system architecture
- cloud infrastructure
- DevOps
- automation
- identity and security
- technically complex web systems

Core client story:
`Understand -> Architect -> Build -> Integrate & Automate -> Make Dependable`

Outcome:
`Technology that fits the business rather than forcing the business to fit the technology.`

## Bokamoso
Role:
`Head of Sales & Revenue Growth`

Lead with client benefit.

Core client story:
`Clarity -> Acquisition -> Conversion -> Systems -> Sustainable Growth`

Outcome:
`A clearer path to measurable and sustainable growth.`

## Sophie
Use supplied portrait.
All profile content is intentionally Lorem Ipsum placeholder data.
Do not infer a real role or biography.

## Matthew
Confirmed role:
`Web Designer & Framer Developer`

Use supplied portrait.
Body content is intentionally Lorem Ipsum placeholder data.

Technical boundary:
Matthew handles visual web design and Framer-based website delivery.

Do not position him as responsible for:
- backend engineering
- custom software
- APIs
- databases
- DevOps
- cloud infrastructure
- cybersecurity
- technical architecture

## Client journey
This is the primary storytelling device.

It should answer:
`What improves for the client because this person is involved?`

Do not treat it as a generic skills list.

## No fake metrics
Do not implement generated-reference values such as:
`5+ years`, `20+ projects`, `100% client commitment`
unless verified data is later supplied.

## Motion
Keep it restrained:
- fade/translate on entrance
- journey nodes may activate on scroll
- no scroll-jacking
- no forced snapping

Respect `prefers-reduced-motion`.

## Responsive
Desktop: 3-column editorial profile.
Tablet: portrait + content with journey beneath or alongside.
Mobile: normal document flow; no horizontal overflow.

## Verification
- shared profile template is used
- actual team data is canonical
- all four routes render
- Frank and Bokamoso use supplied real content
- Sophie and Matthew keep placeholders
- no fake credentials or stats
- responsive and keyboard behaviour work
- `npm run typecheck`
- `npm run build`
- do not commit, push or deploy
