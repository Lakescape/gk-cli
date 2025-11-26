# Replit Integration Notes for Lakescaping Dashboard

## Answers to the current questions
- **Preferred React framework:** Next.js App Router (14+) — keeps routing/file structure clean, supports hybrid SSR/ISR for when you later add authenticated or data-driven views, and can still export static if you need a flat bundle.
- **CSS approach:** Tailwind CSS with a small `globals.css` layer for glassmorphism tokens (blur, shadows, gradients). This keeps the existing premium dark/riyals aesthetic consistent while making components portable. If you want stricter scoping, pair Tailwind utilities with per-component CSS Modules for one-off effects (e.g., background mesh/particles).
- **Responsiveness target:** Mobile-responsive by default (breakpoints at `sm`, `md`, `lg`). Sidebar collapses to a top app bar on small screens; cards and tables stack vertically. Desktop-first refinements are preserved (glass depth, hover states) without breaking touch usability.

## What to share from Replit for a fast drop-in
- Repo zip or link that includes `package.json`, any existing Tailwind or design tokens, and your `public` assets (logos, favicons).
- Any API stubs or sample JSON for the dashboard data (metrics, tables, activity feed) so components render real shapes.
- Whether you already have authentication or want placeholders for now (e.g., mocked user/session provider).

## Packaging targets
- **Static export:** `next export` works if all data is static/mock; good for a quick Replit drop.
- **App route page:** ship as `/app/dashboard/page.tsx` with colocated `page.module.css` for bespoke effects and `globals.css` for shared tokens.
- **Pure static HTML fallback:** keep `lakescaping-dashboard.html` for environments without Node — drop in `/public` so you can serve it directly if needed.

## Minimal setup commands (Next.js + Tailwind on Replit)
1. Install deps (assuming a fresh Replit):
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev -- --hostname 0.0.0.0 --port 3000
   ```
3. Build check:
   ```bash
   npm run build
   ```
4. (Optional) Static export:
   ```bash
   npm run export
   ```

## Next steps you can take now
- Share the Replit repo or zip so I can align file paths and wire data providers.
- Confirm if you want the Next.js App Router version pre-wired with Tailwind tokens and the existing Riyal-first, offline-first cues.
- Provide any brand palette updates or revised logo assets; I’ll bake them into the theme tokens and gradients.
