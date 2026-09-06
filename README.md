# Abhishek Sonje — Portfolio

A centered engineering portfolio built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, owned shadcn/Radix primitives, next-themes, and Motion. Reference analysis and design decisions are in [docs/redesign-research.md](docs/redesign-research.md) and [DESIGN.md](DESIGN.md).

## Development

Use Node.js 22.22.2+ or 24.15+ and Bun 1.3+ (or npm with the supplied lockfile).

```sh
bun install --frozen-lockfile
bun run dev
```

```sh
npm run lint
npm run test
npm run build
npm run format:check
```

After `npm run build`, start the production server with `npm run start -- --port 3100`, then run `node scripts/smoke.mjs`. Pass a different base URL as the script's first argument if needed.

## Content and components

- `src/lib/data.ts`: identity, contact destinations, resume link, navigation, projects, internships, contribution records, technology groups, and footer quote.
- `src/app/globals.css`: semantic light/dark color tokens, shared typography, reduced motion, and theme-transition layers.
- `src/components/ui`: reusable button, tooltip, accordion, theme toggle, and Rare UI-derived reading progress.
- `src/components/layout`: shared content width, gutters, and section rhythm.
- `src/components/hero`, `projects`, `experience`, `opensource`, `stack`, `footer`: page sections, mostly rendered on the server.

The theme follows the system initially and persists explicit changes through next-themes. Supported browsers reveal the next theme from the toggle; reduced-motion users and older browsers get an immediate change. Experience details are keyboard accessible. Clipboard failure exposes the actual email address. GitHub contribution counts fall back to the supplied record if the public API fails.

The original banner asset remains in `public`, but the new introduction does not render it. Replace the quote and its attribution together in `FOOTER_QUOTE`. No invented articles, testimonials, or extra metrics are added.

## Verification scope

Vitest covers theme direction, unavailable/rejected View Transitions, reduced motion, overlapping clicks, keyboard accordion operation, and clipboard success/failure. Production build checks server rendering and TypeScript. A real-browser visual review at desktop/mobile widths in both themes is still required when a browser connection is available; DOM tests do not establish pixel accuracy.

The existing `/api/github` calendar endpoint requires a server-side `GITHUB_TOKEN` if used by a future calendar section. The visible merged-PR count uses the public search API and does not require that token. Never expose tokens in client configuration.

## Credits

See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for shadcn/ui and Rare UI licensing. The footer quote is from Ralph Waldo Emerson's *Circles*, linked to its source in the page.
