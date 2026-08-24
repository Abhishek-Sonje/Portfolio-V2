# Abhishek Sonje — Portfolio V2

A personal portfolio crafted with a **Warm Serif / Editorial Minimalist** design aesthetic. Built using Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## ✨ Features

- **Warm Serif Aesthetic**: Editorial coffee-warm palette (`#f1ede6` parchment, `#5d0e0f` burgundy accent, `#e3dfd8` linen) powered by Lora serif typography.
- **Dynamic Open Source Section**: Real-time GitHub API integration that queries and displays live merged pull requests (e.g. contributions to **Sugar Labs — Music Blocks**).
- **Featured Projects & Modals**: Interactive modal dialogs with project previews, tech stack badges, GitHub source, and live site links.
- **Work Experience**: Expandable experience timeline with smooth fade overlays.
- **Categorized Tech Stack**: Clean grouped layout covering Frontend, Backend, Databases, AI/Cloud, and Tools.
- **Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports with fluid animations and keyboard navigation.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
- **Analytics**: [@vercel/analytics](https://vercel.com/analytics)
- **Visitor Counter**: [Upstash Redis](https://upstash.com/docs/redis/quickstarts/nextjs-app-router)

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── globals.css          # Design tokens, typography utilities & variables
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main single-page portfolio layout
├── components/
│   ├── experience/          # Work experience cards
│   ├── hero/                # Twitter-style banner, avatar & bio
│   ├── layout/              # ContentColumn, Section & ScrollReveal wrappers
│   ├── navbar/              # Fixed glassmorphic navigation bar
│   ├── opensource/          # Open Source contribution showcase & live PR counter
│   ├── projects/            # Project cards & detail dialogs
│   └── stack/               # Categorized skill tags
├── lib/
│   └── data.ts              # Portfolio content, projects, OSS & work history
└── types/
    └── index.ts             # TypeScript interfaces & types
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- `npm`, `pnpm`, `yarn`, or `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Abhishek-Sonje/portfolio_v2.git
   cd portfolio_v2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   To enable the anonymous footer visitor counter, copy `.env.example` to
   `.env.local` and add the REST URL and token from an Upstash Redis database.
   Without these variables the portfolio still runs normally and hides the
   optional counter.

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the local development server |
| `npm run build` | Builds the production bundle |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint for code analysis |

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
