---
version: alpha
name: "Warm Serif Portfolio"
description: "A personal portfolio site with a deeply editorial, coffee-warm aesthetic. The design uses Lora serif throughout for both headings and body, set against a warm parchment background (#f1ede6). A deep burgundy (#5d0e0f) serves as the sole accent color for CTAs, links, and borders. The layout is single-column and centered, generously spaced, and deliberately unhurried — the same 'slow media' feel carried over from the source newsletter theme. Typography is the primary design vehicle, with minimal UI chrome and no decorative illustration. The page opens with a Twitter/X-style hero: a banner strip with a circular profile photo overlapping its bottom edge, and the name/tagline placed beside the photo below the banner."
colors:
  linen: "#e3dfd8"
  parchment: "#f1ede6"
  ash: "#81807d"
  ink: "#4e4a43"
  near-black: "#363737"
  white: "#ffffff"
  burgundy: "#5d0e0f"
  hairline: "#d9d5cf"
typography:
  article-body:
    fontFamily: "Lora, sans-serif"
    fontSize: "20px"
    fontWeight: "400"
    lineHeight: "32px"
  post-title:
    fontFamily: "Lora, sans-serif"
    fontSize: "32px"
    fontWeight: "600"
    lineHeight: "36px"
  section-heading:
    fontFamily: "Lora, sans-serif"
    fontSize: "27.5px"
    fontWeight: "600"
    lineHeight: "31.9px"
  subtitle-deck:
    fontFamily: "Lora, sans-serif"
    fontSize: "18px"
    fontWeight: "400"
    lineHeight: "28.8px"
  bold-body:
    fontFamily: "Lora, sans-serif"
    fontSize: "20px"
    fontWeight: "700"
    lineHeight: "32px"
  ui-label:
    fontFamily: "system-ui"
    fontSize: "15px"
    fontWeight: "600"
    lineHeight: "20px"
  meta-byline:
    fontFamily: "system-ui"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "20px"
  caption-tag:
    fontFamily: "system-ui"
    fontSize: "12px"
    fontWeight: "400"
    lineHeight: "20px"
rounded:
  radius-sm: "4px"
  radius-md: "8px"
  radius-lg: "20px"
  radius-pill: "9999px"
spacing:
  space-1: "4px"
  space-2: "6px"
  space-3: "8px"
  space-4: "12px"
  space-5: "16px"
  space-6: "20px"
  space-7: "24px"
  space-8: "32px"
  space-9: "48px"
  space-10: "50px"
---

## Overview

A personal portfolio site carrying over the coffee-warm, editorial feel of the original newsletter theme: Lora serif everywhere, a parchment page background, and a single burgundy accent used sparingly. The page is single-column and centered, with generous whitespace so it reads like a slow, considered piece of writing rather than a dashboard.

The page opens with a hero block:
- A wide **banner** strip at the top of the page (background image or solid/gradient fill, edge-to-edge within the centered column).
- A **circular profile photo** that overlaps the bottom edge of the banner (classic Twitter/X-style avatar placement).
- The **name and tagline** sit beside the photo, just below the banner line.

Below the hero, the page continues as stacked sections: Tech Stack, Projects, and Work Experience, each following the same spacing rhythm and typographic hierarchy as the source theme.

**Signature traits (carried over):**
- Dual typeface system: Lora for all headings/body, system-ui for small UI labels (nav, tags, meta text).
- Soft, rounded geometry: corner rounding up to 9999px, used for the avatar and pill-shaped tags.
- Layered elevation: subtle shadow tokens for cards (project cards, experience items).
- Single burgundy accent, reserved for the one primary action per view (e.g. "Contact me" / resume download / social links).

## Colors

Same 8 validated tokens as the source theme — no new colors introduced. Roles are remapped to portfolio contexts below.

- **parchment** `#f1ede6` — page background.
- **ink** `#4e4a43` — primary body text (bio, project descriptions, experience copy).
- **near-black** `#363737` — hero name / heading text, highest-emphasis text.
- **ash** `#81807d` — secondary/muted text: role titles, dates, meta labels under the name, project tech tags.
- **white** `#ffffff` — text on burgundy surfaces (primary CTA button label).
- **burgundy** `#5d0e0f` — the single accent: primary CTA button, link hover/underline, avatar ring border, active nav state.
- **linen** `#e3dfd8` — elevated secondary surface: project card background, tech-stack pill fill.
- **hairline** `#d9d5cf` — dividers between sections (e.g. under the hero, between experience entries).

## Typography

Unchanged from the source theme. Reuse these roles directly for portfolio content instead of inventing new sizes.

| Role | Token | Portfolio usage |
|------|-------|------------------|
| Hero name | `post-title` (32px/600/36px, Lora) | Your name, beside the avatar |
| Section heading | `section-heading` (27.5px/600/31.9px, Lora) | "Projects", "Work Experience", "Tech Stack" |
| Tagline / role | `subtitle-deck` (18px/400/28.8px, Lora) | One-line tagline under/beside your name (e.g. "Frontend Engineer & Builder") |
| Body copy | `article-body` (20px/400/32px, Lora) | Bio paragraph, project descriptions, experience descriptions |
| Emphasis in body | `bold-body` (20px/700/32px, Lora) | Bold inline emphasis inside bio or descriptions |
| Buttons / nav | `ui-label` (15px/600/20px, system-ui) | CTA button label, nav links |
| Meta text | `meta-byline` (13px/400/20px, system-ui) | Dates, company names, "2023 — Present" style ranges |
| Tags / captions | `caption-tag` (12px/400/20px, system-ui) | Tech-stack pill labels, project tags |

## Layout

Single-column, centered layout — carried over directly from the source theme's editorial rhythm.

- Content sits in one centered column with a comfortable reading max-width (treat article body copy width as the ceiling for all sections — don't let cards or the hero stretch full browser width).
- The banner is the one element allowed to run edge-to-edge of that centered column (not full viewport width, just full column width), so it still visually anchors the hero without breaking the centered-column feel.
- Vertical rhythm between sections uses `space-9` (48px) or `space-10` (50px); rhythm within a section (e.g. between project cards, between experience entries) uses `space-7` (24px) or `space-8` (32px); tight internal spacing (badge padding, icon gaps) uses `space-2`–`space-4`.
- Same 4px base grid as the source theme: 4, 6, 8, 12, 16, 20, 24, 32, 48, 50.

### Hero anatomy (banner + photo + name)
1. **Banner**: full column width, fixed aspect ratio strip, `linen` as a fallback fill if no image is set.
2. **Avatar**: circular (`radius-pill`), sized so roughly half its height overlaps the banner's bottom edge and half sits below it — same as a Twitter/X profile header. Optional 2–3px `burgundy` ring border for definition against the parchment background below.
3. **Name + tagline block**: sits beside the avatar (not stacked under it), left-aligned, starting at the same baseline as the bottom of the avatar. Name uses `post-title`, tagline uses `subtitle-deck` in `ash`.
4. Below the hero row, leave `space-8`–`space-9` before the bio paragraph or the first section heading.

## Elevation & Depth

Same two validated shadow tokens as the source theme — don't invent new ones.

| Shadow Token | Layers | Details | Portfolio usage |
|--------------|--------|---------|------------------|
| shadow-subtle | 1 | `0px 1px 2px 0px rgba(0,0,0,0.05)` | Project cards, experience-item cards |
| shadow-inset-button | 2 | `inset 0px 1px 0px 0px rgba(255,255,255,0.2)` | Primary CTA button |

## Shapes

Same radius tokens, remapped:

| Token | Value | Portfolio usage |
|------|-------|------------------|
| radius-sm | 4px | Small inline elements (icon buttons) |
| radius-md | 8px | Buttons, input fields (e.g. contact form) |
| radius-lg | 20px | Project cards, experience cards |
| radius-pill | 9999px | Avatar, tech-stack tag pills |

## Components (portfolio-specific)

These are new component patterns for the portfolio use case — not present in the source theme, but built entirely from its existing tokens.

- **Hero / Banner block** — see "Hero anatomy" above. Banner fill in `linen` or an image; avatar overlapping in `radius-pill` with optional `burgundy` ring; name in `post-title`/`near-black`, tagline in `subtitle-deck`/`ash`.
- **Primary CTA button** — `burgundy` background, `white` text in `ui-label`, `radius-md` corners, `shadow-inset-button`. One per view (e.g. "Get in touch" or a resume link), matching the source theme's "single accent, single primary action" rule.
- **Tech Stack pill** — `linen` fill, `ink` or `ash` text in `caption-tag`, `radius-pill`, tight horizontal padding (`space-3`–`space-4`). Laid out as a wrapping row.
- **Project card** — `linen` or `white` surface, `radius-lg` corners, `shadow-subtle`, internal padding `space-6`–`space-7`. Title in `section-heading` (scaled down if needed) or `bold-body`, description in `article-body`, tech tags as a row of Tech Stack pills at the bottom.
- **Work Experience item** — no card surface required (can be a plain list row for a quieter feel), separated by `hairline` dividers. Role/title in `bold-body`, company + date range in `meta-byline`/`ash`, description in `article-body`.

## Do's and Don'ts

| Do | Don't |
|----|---------|
| Keep everything in one centered column, including the banner | Don't let the banner or cards stretch to full viewport width |
| Reuse the existing type scale for all new sections | Don't introduce new font sizes outside the extracted scale |
| Use `burgundy` for exactly one primary action at a time | Don't use burgundy for large fills or multiple competing CTAs |
| Let the avatar overlap the banner's bottom edge, per the hero anatomy above | Don't stack the name under the avatar — it sits beside it |
| Maintain WCAG AA contrast (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Keep spacing on the 4px base grid | Don't invent new shadow or radius values beyond the tokens above |

## Agent Prompt Guide

### Example Component Prompts
- Create the hero block: banner strip, circular avatar overlapping its bottom edge, name and tagline beside the avatar.
- Create a Project card using `radius-lg`, `shadow-subtle`, and Tech Stack pills for tags.
- Create a Work Experience list item with a `hairline` divider, role in `bold-body`, and company/date in `meta-byline`.
- Create the primary CTA button using `burgundy` fill, `white` `ui-label` text, and `shadow-inset-button`.

### Iteration Guide
1. Build the hero first (banner + avatar + name) since it anchors the whole page's centered-column width.
2. Add the bio paragraph in `article-body`, directly below the hero.
3. Build Tech Stack as a wrapping row of pills.
4. Build Projects as a stack of cards, spaced with `space-7`–`space-8`.
5. Build Work Experience as a divided list, spaced the same way.
6. Re-check that only the banner touches the column edges — everything else respects the centered max-width.
