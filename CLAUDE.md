# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

Marketing site for **Aimaura**, a Dubai-based design-and-build studio (interiors, landscape, pools, turnkey construction). It is a single-page **vanilla JavaScript** app built with **Vite 6**, no framework, no dependencies beyond Vite itself. It ships to **GitHub Pages** at the custom domain `aimaura.ae`.

The entire site is three source files: `src/main.js` (markup + behaviour), `src/style.css` (all styling), and `index.html` (document shell). There is no build step beyond Vite bundling.

## Commands

```bash
npm install      # install (only Vite)
npm run dev      # Vite dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the built dist/ locally
```

There are no tests, no linter, and no type checking configured. `npm run build` is the only correctness gate before deploy.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `dist/` to GitHub Pages. `public/CNAME` pins the custom domain; `vite.config.js` sets `base: "./"` so assets resolve on Pages regardless of path. **Any push to `main` is a live deploy** — treat it accordingly.

## Architecture

Everything of substance lives in `src/main.js` (~940 lines), organised top-to-bottom as: config constants → content data → persistent shell → page renderers → interaction bindings → router. Read it in that order.

- **Content is data, not markup.** Page copy and imagery live in plain JS objects/arrays near the top: `SERVICES` (the six service pages, keyed by slug), `hero`, `prologueImages`, `longTalks`, `mosaic`. Renderers map over these — **to change site content, edit the data, not the template strings.** Adding a key to `SERVICES` automatically creates its nav dropdown entry, footer link, home-page grid card, and routable `#/services/<slug>` page.

- **Rendering is template-literal strings assigned to `innerHTML`.** No virtual DOM, no reactivity. The persistent shell (header, footer, floating contact widget) is injected once into `#app`. Page bodies are swapped into the inner `#page` element by the router.

- **Hash router** (`route()`, bottom of file). `#/services/<slug>` renders a service page; anything else renders home and treats the hash as a scroll target (`#about`, `#newsletter`, …). `currentView` guards against needless re-renders. On each route change, `bindPage()` re-attaches all page-scoped event listeners — **listeners inside `bindPage()` must be idempotent** because the DOM they bind to is thrown away and rebuilt.

- **Two listener scopes.** `bindPage()` binds things that live inside `#page` and get recreated on navigation (hero carousel, before/after compare sliders, newsletter form, `IntersectionObserver` reveal). Everything below the router binds to the persistent shell **once** (menu toggle, theme toggle, services dropdown, contact FAB, scroll shrink). Put new behaviour in the correct scope.

- **Theming** is CSS-variable driven. `src/style.css` defines tokens under `:root` (dark, the default) and overrides them under `:root[data-theme="light"]`. `applyTheme()` in `main.js` sets `data-theme` on `<html>`, persists to `localStorage` (`aimaura-theme`), and updates the `theme-color` meta. `index.html` has an inline pre-paint script that applies the saved theme before first render to avoid a flash — keep that in sync if theme logic changes.

## Conventions specific to this repo

- **CSS classes follow BEM** (`block__element--modifier`), e.g. `hero__overlay`, `contact-fab__toggle`. Match this when adding markup.
- **Local images** live in `public/` and are referenced with root-absolute paths (`/cta-living-room.jpeg`); they are served as-is. **Most gallery/hero imagery is remote Unsplash URLs** hard-coded in the data arrays — swapping to owned assets means replacing those URLs.
- The newsletter/contact form posts to **formsubmit.co** (`NEWSLETTER_TO = info@aimaura.ae`) — there is no backend. Contact details (WhatsApp, phone, email) are constants at the top of `main.js`.
- Accessibility is deliberate throughout (ARIA roles/labels, `prefers-reduced-motion` guards in CSS, keyboard nav on the carousel). Preserve it when editing.
