# Lakescaping Dashboard Packaging & Integration Checklist

To package and deploy the lakescaping dashboard to Replit (or another host) with real data, collect the following items. This keeps the UI drop-in ready and reduces rework once your repo is available.

## What to Share
- **Repo link or zip**: Current project folder tree and build tooling (static HTML, React, Next.js, etc.).
- **Design tokens**: Tailwind config (if any), color palette, font choices, spacing scale, and icon set.
- **Brand assets**: Logo files (SVG/PNG), favicons, and any background textures to embed.
- **Data samples**: JSON or API responses for metrics, timeline, tables, and cards (include USD values with units).
- **Runtime requirements**: Auth expectations, environment variables, and base URLs for APIs (mock endpoints if needed).
- **Offline expectations**: What must persist locally (IndexedDB/localforage) vs. what can fetch on load; sync cadence if applicable.

## Packaging Targets
- **Static bundle**: A single `index.html` + `styles.css` + `app.js` ready to drop into Replit static hosting.
- **React drop-in**: A self-contained component with scoped styles (CSS modules or styled-components) if your stack uses React.
- **Next.js page**: An `app/` route with colocated styling, compatible with App Router, if using Next.js.

## Deployment Notes for Replit
- For static hosting, place assets under `public/` (or root) and ensure relative paths (e.g., `./images/logo.svg`).
- If using React/Vite, confirm build scripts (`npm run build`/`npm run dev`) and output directory (usually `dist/`).
- If environment variables are needed, document them in a `.env.example` without secrets.
- Enable HTTPS-only asset calls and avoid absolute `http://` URLs to prevent mixed content warnings.

## Data & Localization
- Provide sample payloads for: metrics, activity feed, task/operations list, and timeline; include **$** formatting and units.
- Confirm language toggle behavior (English default, Arabic RTL optional) and any Arabic copy to preload.
- Note any date/number formatting preferences (Gregorian vs Hijri display, Arabic numerals for RTL mode).

## Performance & Accessibility
- Target light asset weight (sub-1MB initial load) and defer heavy effects for mobile.
- Include keyboard navigation and focus states; respect `prefers-reduced-motion`.
- Preload hero fonts and use `font-display: swap`.

## Next Action
Once you supply the repo snapshot and data samples, I’ll wire the dashboard to your structure, finalize packaging for Replit, and keep the premium lakescaping aesthetic intact.
