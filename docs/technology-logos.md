# Technology logos

Project and stack logos use the installed React Icons collection (Simple Icons and Font Awesome for Java), rendered as inline vectors. They require no CDN requests and use the page's foreground color for both themes. Names remain available to screen readers and in hover/focus tooltips.

## Optional assets to supply

These exact marks are not in the installed collection; readable text remains until a suitable asset is supplied:

| Technology | Suggested local path |
| --- | --- |
| Framer Motion / Motion | `public/logos/tech/motion.svg` |
| Zustand | `public/logos/tech/zustand.svg` |
| Vercel AI SDK | `public/logos/tech/ai-sdk.svg` |

After adding a file, set its `logoSrc` in `src/lib/technologies.ts`, for example `Zustand: { logoSrc: "/logos/tech/zustand.svg" }`. The shared renderer prefers local assets over bundled icons. No missing image URLs are rendered in the meantime.

RESTful APIs, WebSocket, and PTY describe concepts/protocols, not individual brands. They intentionally retain short text labels; no invented logos are used.
