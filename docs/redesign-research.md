# Portfolio redesign research

## References

- [Ashutosh](https://www.ashutoshx7.me/) / [source](https://github.com/Ashutoshx7/Portfoliov1): identity, experience, projects, contributions, skills, and a closing quote. Borrow the clear progression and compact work summaries, not another person's accomplishments.
- [Ram](https://ramx.in/) / [source](https://github.com/ramxcodes/sleek-portfolio): restrained personal introduction, short experience rows, and focused navigation. The published source composes distinct sections within a shared Container. Borrow the single-column reading flow and economical controls.
- [Chanh Dai](https://chanhdai.com/) / [source](https://github.com/ncdai/chanhdai.com): carefully grouped profile metadata, modular sections, explicit technology categories, and reusable shadcn registry components. Borrow systematic boundaries and component ownership.

Reference pages and public repository content were inspected. Browser runtime reported no available browser; reference screenshots and computed pixel measurements could not be obtained. Layout decisions below are interpretations, not claimed measurements of those sites.

## Applied direction

Centered content column with left-aligned reading text; consistent horizontal gutters; quiet neutral surfaces; clear section rules; compact sans-serif headings; generous separation between sections and tighter spacing within related content. Keep the avatar personal and place project evidence early. Project previews use the actual supplied assets.

The supplied references are the user's pinned direction. Do not introduce an unrelated visual identity. The banner is omitted from the rendered page because it consumes the first viewport without adding engineering evidence; keep the original asset. Use the existing content rather than adding empty writing, testimonial, or award sections.

## Components and motion

Use shadcn-style owned primitives backed by Radix for buttons, tooltips, and experience accordions. Theme preference uses next-themes; the theme button supplies a progressive View Transition with a reduced-motion fallback. Motion stays local to actions. Evaluate Rare UI's scroll progress as a small useful enhancement rather than adding decorative widgets.

## Optional future content

The most useful addition is a short Archie case study: problem, dependency-graph decisions, an actual terminal demonstration, and measured results. A second article on ObserveKit's event pipeline could demonstrate backend reasoning. Add only after real content is supplied; no placeholder blog.
