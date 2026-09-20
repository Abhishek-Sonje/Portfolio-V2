# Portfolio design system

## Direction

User-pinned reference direction: a centered, restrained engineering portfolio. The skill's direction seed ran in degraded mode; the explicit reference brief overrides random concept assignment. Build from the existing real assets and reference structure.

## Layout

One 48rem outer column, with 1.25rem mobile and 2rem desktop gutters. Continuous 1px vertical borders frame the page, and horizontal section rules meet those borders. Navigation, introduction, sections, and footer share the same alignment. Text stays left aligned. Section padding is 32px mobile and 40px desktop, reduced from 48/64px after the user's density feedback. Project previews form two columns at sm and one below it. Cards show short summaries with native expandable details. Technology marks replace repeated text tags, retaining accessible names and tooltip labels.

## Typography and color

Geist for readable interface and body text. Lora only for the closing literary quote. Neutral paper light theme and charcoal dark theme, with a restrained green accent for actionable links and contribution evidence. All colors are semantic CSS variables mapped through Tailwind's inline theme. No component-level hex colors.

## Interaction

Buttons move one pixel on press, focus rings remain visible, and link arrows translate subtly on hover. Experience details use Radix accordion semantics. Theme change uses a short circular reveal originating at the pressed button when supported, and immediate switching under reduced motion. A quiet 180ms synthesized droplet plays only on theme interaction. A footer sound control persists mute preference; audio failure never blocks the theme. No scroll gates, artificial loader, or hidden-on-load content.

## Content

Identity and contact, work experience, selected projects, open source, grouped stack, contact invitation, then an attributed quote. Content and destinations belong to src/lib/data.ts; the technology logo registry lives in src/lib/technologies.ts. Keep factual details and project screenshots; remove banner from presentation only.
