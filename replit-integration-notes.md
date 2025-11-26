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

## How to move this back into Replit
Pick whichever import path matches your workflow:

- **From GitHub:** push this repo to GitHub, open Replit → “Create Repl” → “Import from GitHub”, paste the repo URL, then select the main branch. Replit will clone everything (including `tailwind.config.js`, `globals.css`, `sample-components.tsx`, `api-samples.json`, and `lakescaping-dashboard.html`).
- **Via ZIP upload:** run `git archive -o lakescapes-dashboard.zip HEAD` locally, download the ZIP, then in Replit use the Files panel “Upload file” option to drop the ZIP. Extract it in Replit (right-click → “Unzip”) so the files land in the project root.

Once the files are in Replit:

1. **Install dependencies** (if this is a fresh Next.js Repl):
   ```bash
   npm install
   ```
2. **Start the dev server** (App Router):
   ```bash
   npm run dev -- --hostname 0.0.0.0 --port 3000
   ```
3. **Preview** via the Replit webview at `https://<your-repl-subdomain>.replit.app` or the Ports panel on 3000.
4. **Static HTML fallback:** If you only need the standalone demo, place `lakescaping-dashboard.html` in `/public` (or keep it at root) and serve with `npx http-server .` from Replit’s shell.
5. **Build check (optional):**
   ```bash
   npm run build
   ```

This keeps the existing dark glassmorphism theme, Riyal-aware formatting, and API sample shapes ready for wiring to your backend at `http://localhost:5000/api` inside Replit.
