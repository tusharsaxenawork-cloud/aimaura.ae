# Aimaura Vite Site

This repository is set up as a Vite app for GitHub Pages.

## Local development

1. Install dependencies with `npm install`.
2. Start the dev server with `npm run dev`.
3. Build production files with `npm run build`.

The production build statically generates the complete HTML for the homepage
and every service route. JavaScript enhances those documents with navigation,
forms, sliders, and other interactions; it is not required for search engines
to read the page content or discover links.

## GitHub Pages

1. Push the repository to GitHub.
2. Enable GitHub Pages from the branch that contains your built site.
3. Keep the custom domain set to `aimaura.ae`.
4. GitHub Pages will pick up `public/CNAME` during the build.

## DNS

Point your domain to GitHub Pages using GitHub's custom-domain DNS records.
If you want `www.aimaura.ae` too, add the matching `www` record in your DNS provider.

## Editing the site

Update `src/main.js` and `src/style.css` to change the content and layout.
