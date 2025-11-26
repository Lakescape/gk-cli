# Testing Guide

This repository contains static dashboard assets and integration notes; it does not include an application runtime or automated test suite. Use these manual checks to verify the artifacts:

1. **Static dashboard preview**
   - Open `lakescaping-dashboard.html` in a modern browser, or serve the repo locally with `python -m http.server 8000` and visit `http://localhost:8000/lakescaping-dashboard.html`.
   - Confirm the dark glassmorphism theme renders, KPI cards display, and tables load sample data.

2. **Tailwind configuration sanity check**
   - Inspect `tailwind.config.js` to ensure the content globs and theme tokens match your project structure before running a Tailwind build.

3. **Component compilation check (if you integrate with Next.js/Vite)**
   - Create a temporary project and place `sample-components.tsx`, `globals.css`, and `tailwind.config.js` into it.
   - Run `npm install` followed by `npm run dev` (Next.js or Vite) to ensure the components compile with your bundler.

4. **API sample validation**
   - Use `api-samples.json` as a mock source; load it in your client to verify your UI wiring matches the documented response shapes.

Because no package.json or scripts are present in this repo, there are no built-in automated tests to execute. When a dev server is used for the static preview, you should see `HTTP/1.0 200 OK` when curling `lakescaping-dashboard.html` from the local server.
