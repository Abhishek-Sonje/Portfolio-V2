# Redesign verification

## Automated checks

- Production Next.js build: compiled and prerendered `/`; TypeScript passed.
- ESLint: passed after removing the retired loader and presentation wrappers.
- Prettier: passed across source and component/test configuration.
- Vitest: ten tests passed. Covers both theme directions without View Transitions, reduced motion, overlapping theme clicks, rejected transition fallback, keyboard accordion expansion/collapse, clipboard success/denial, interaction-only sound, and saved mute preference.
- Production HTTP smoke checks the homepage, six section targets, work-before-projects ordering, four collapsed project detail disclosures, accessible technology marks, internal anchor destinations, theme and sound controls, quote attribution, Open Graph image metadata, rendered image/CSS resources, and the missing-route 404 response.
- Impeccable mechanical detector: no findings on the redesigned surface.

## Visual verification limitation

The browser runtime returned `No browser is available`; its supported discovery returned an empty list. No desktop/mobile screenshots or real-browser theme animation inspection were possible. The tests simulate browser API behavior; they do not establish visual fidelity, actual animation smoothness, or browser-specific rendering. Review the running page at 375px and 1440px in both themes when a connection becomes available.

## Deliberate choices

The banner remains in the asset directory but is omitted from the page. Original project descriptions and work history remain available. No activity heatmap or blog is added without meaningful data. Rare UI's scroll tracking is adapted into a quiet progress line, sharing the installed Motion runtime; source attribution is in THIRD_PARTY_NOTICES.md. The footer quote is verified against Emerson's *Circles* and links to the original text.

## Existing dependency advisories

`npm audit` on 2026-09-06 reports three high-severity affected packages in the existing Next.js 16.2.1 dependency tree: Next.js itself, its nested PostCSS, and Sharp. The audit recommends Next.js 16.3.4. This redesign retains the existing framework version; an upgrade and corresponding regression review remain outstanding. No force/legacy-peer-deps audit fixes were applied. Representative advisories: [Next.js](https://github.com/advisories/GHSA-m99w-x7hq-7vfj), [PostCSS](https://github.com/advisories/GHSA-r28c-9q8g-f849), [Sharp](https://github.com/advisories/GHSA-f88m-g3jw-g9cj).
