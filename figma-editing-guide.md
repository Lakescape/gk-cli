# Editing the Lakescaping Dashboard in Figma

Use this guide to turn the shipped Next.js + Tailwind dashboard into an editable Figma design so you can iterate visually before shipping to Replit.

## 1) Prep assets to import
- Export the latest static preview from `lakescaping-dashboard.html` via your browser as a full-page PNG or SVG (File → Print → Save as PDF, then export frames to PNG/SVG).
- Keep `globals.css` and `tailwind.config.js` open: we will translate the tokens into Figma styles.
- Collect logos/screenshots from `/images` so you can place them on the canvas.

## 2) Create Figma tokens from Tailwind
Map the Tailwind theme to Figma styles so the design and code stay in sync:
- **Colors:** add solid styles for `primary 500 (#667eea)`, `primary dark (#764ba2)`, and dark surfaces (`#1a1a2e`, `#16213e`, `#0f3460`).
- **Gradients:** add a linear gradient style `Primary Gradient` set to `#667eea → #764ba2` at 135°; add `Glass Gradient` using `rgba(255,255,255,0.1 → 0.05)`.
- **Effects:** create drop-shadow styles that mirror `shadow-glass` and `shadow-neon-primary` (soft blur, slight spread) from the Tailwind config.
- **Radius & Blur:** set corner radii to 16px and 24px options; add background blur effects (16px/24px) to match the glassmorphism cards.
- **Typography:** define text styles that mirror the sans stack in `globals.css` (SF/Inter/Segoe UI fallback) with weights 500–700.

## 3) Rebuild the layout in Figma
- Create a desktop frame (1440×900). Set background to the dark mesh (`#1a1a2e` plus the radial gradients from `globals.css`).
- Drop in components: glass sidebar (64–280px), KPI cards (grid 3–6 cols), tables (Recent Bids, Jobs, Invoices), and the layout generator form.
- Apply the gradient accent to primary buttons and active nav items; use glass cards for content blocks with 1px strokes at 10% white.
- Use status badges with the status color palette (`emerald`, `red`, `amber`, `blue`).

## 4) Preserve spacing & grids
- Use an 8px spacing system (consistent with the Tailwind padding/margin scale).
- KPI cards: 20px padding, 4px left accent bar; Tables: 16px cell padding, 48px header height.
- Sidebar nav: 12–16px vertical padding, 8–12px icon gap; keep rounded corners at 12–16px.

## 5) Prototype interactions (optional)
- Add hover states: lighten glass backgrounds and increase shadow blur.
- Sidebar collapse prototype: animate width from 256px to 72px while showing only icons.
- Include a modal for the layout generator, using 16px blur + 24px radius.

## 6) Exporting back to code
- Use the Figma Tailwind Tokens plugin (or Variables) to export color/gradient/effect tokens.
- Hand off specs: use the Inspect panel to grab pixel-perfect spacing; ensure gradients match the Tailwind values.
- When updating visuals, sync the changes into `globals.css` and `tailwind.config.js` so Replit stays aligned.

## 7) Quick checklist
- [ ] Colors/gradients defined as Figma styles matching Tailwind tokens
- [ ] Shadows/blur/radii match glassmorphism values
- [ ] Typography styles aligned to sans stack and weights
- [ ] Components rebuilt: sidebar, KPI cards, data tables, layout modal
- [ ] Interaction notes for hover/collapse/modal
- [ ] Exported PNG/SVG preview for QA

Following these steps lets you iterate visually in Figma while keeping fidelity with the live Tailwind implementation you’ll deploy on Replit.
