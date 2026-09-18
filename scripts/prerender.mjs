/*
 * Post-build prerender.
 *
 * Vite emits a single dist/index.html (the SPA shell). This script clones that
 * shell once per route and rewrites the block between the <!-- seo:start --> /
 * <!-- seo:end --> markers with route-specific <title>, description, canonical,
 * Open Graph tags and JSON-LD. The result is a real HTML file per URL, served
 * by GitHub Pages with a 200 status and correct metadata even to scrapers that
 * never run JavaScript. It also generates sitemap.xml from the same route list.
 *
 * Run automatically via `npm run build` (vite build && node scripts/prerender.mjs).
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE } from "../src/seo.js";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const START = "<!-- seo:start -->";
const END = "<!-- seo:end -->";

/* Escape a value for use inside an HTML attribute. */
const attr = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

/* JSON-LD embedded in HTML must not contain a literal "<" that could close
   the script element early. */
const jsonLd = (obj) =>
  JSON.stringify(obj, null, 2).replaceAll("<", "\\u003c");

const canonicalFor = (path) => `${SITE.origin}${path === "/" ? "/" : path}`;

function seoBlock(route) {
  const canonical = canonicalFor(route.path);
  const ogType = route.path === "/" ? "website" : "article";
  return [
    START,
    `<title>${attr(route.title)}</title>`,
    `<meta name="description" content="${attr(route.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="Aimaura" />`,
    `<meta property="og:title" content="${attr(route.title)}" />`,
    `<meta property="og:description" content="${attr(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${SITE.ogImage}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(route.title)}" />`,
    `<meta name="twitter:description" content="${attr(route.description)}" />`,
    `<script type="application/ld+json">\n${jsonLd(route.jsonld)}\n</script>`,
    END,
  ].join("\n    ");
}

/* Where a route's HTML lives on disk. Flat "<slug>.html" files are served by
   GitHub Pages at the extensionless, no-trailing-slash URL (200, no redirect),
   matching the canonical tags exactly. */
const outFileFor = (path) =>
  path === "/"
    ? join(dist, "index.html")
    : join(dist, `${path.replace(/^\//, "")}.html`);

async function main() {
  const shellPath = join(dist, "index.html");
  const shell = await readFile(shellPath, "utf8");

  const startAt = shell.indexOf(START);
  const endAt = shell.indexOf(END);
  if (startAt === -1 || endAt === -1) {
    throw new Error(
      "SEO markers not found in dist/index.html — did the build strip the comments?",
    );
  }
  const before = shell.slice(0, startAt);
  const after = shell.slice(endAt + END.length);

  for (const route of ROUTES) {
    const html = before + seoBlock(route) + after;
    const out = outFileFor(route.path);
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html);
    console.log(`prerendered ${route.path} → ${out.replace(dist, "dist")}`);
  }

  await writeFile(join(dist, "sitemap.xml"), sitemap());
  console.log(`wrote dist/sitemap.xml (${ROUTES.length} urls)`);
}

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map((r) => {
    const priority = r.path === "/" ? "1.0" : "0.8";
    return [
      "  <url>",
      `    <loc>${canonicalFor(r.path)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      "    <changefreq>monthly</changefreq>",
      `    <priority>${priority}</priority>`,
      "  </url>",
    ].join("\n");
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
