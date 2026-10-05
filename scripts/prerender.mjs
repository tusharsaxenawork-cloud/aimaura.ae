/*
 * Post-build prerender.
 *
 * Vite emits a single dist/index.html shell. This script clones that shell once
 * per route, adds route-specific metadata, and injects the complete header,
 * navigation, page content, and footer. The result is a real HTML document per
 * URL that remains meaningful without JavaScript. It also generates sitemap.xml
 * from the same route list and validates each generated page before deployment.
 *
 * Run automatically via `npm run build` (vite build && node scripts/prerender.mjs).
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE, DEFAULT_OG_IMAGE } from "../src/seo.js";
import {
  SERVICES,
  homeHTML,
  serviceHTML,
  shellHTML,
} from "../src/main.js";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const START = "<!-- seo:start -->";
const END = "<!-- seo:end -->";
const EMPTY_APP = '<div id="app"></div>';

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
  const image = route.image || DEFAULT_OG_IMAGE;
  return [
    START,
    `<title>${attr(route.title)}</title>`,
    `<meta name="description" content="${attr(route.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="Aimaura" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:title" content="${attr(route.title)}" />`,
    `<meta property="og:description" content="${attr(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${attr(image.url)}" />`,
    `<meta property="og:image:width" content="${image.width}" />`,
    `<meta property="og:image:height" content="${image.height}" />`,
    `<meta property="og:image:alt" content="${attr(image.alt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${attr(route.title)}" />`,
    `<meta name="twitter:description" content="${attr(route.description)}" />`,
    `<meta name="twitter:image" content="${attr(image.url)}" />`,
    `<meta name="twitter:image:alt" content="${attr(image.alt)}" />`,
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

function pageHTML(route) {
  if (route.path === "/") return homeHTML();
  const slug = route.path.split("/").filter(Boolean).at(-1);
  if (!SERVICES[slug]) {
    throw new Error(`No service content found for ${route.path}`);
  }
  return serviceHTML(slug);
}

function validate(route, html) {
  const h1Count = (html.match(/<h1\b/g) || []).length;
  const canonical = canonicalFor(route.path);
  const checks = [
    [h1Count === 1, `expected one <h1>, found ${h1Count}`],
    [html.includes("<main"), "missing <main> content"],
    [html.includes('href="/services/'), "missing crawlable service links"],
    [html.includes(`<link rel="canonical" href="${canonical}"`), "wrong canonical"],
    [!html.includes(EMPTY_APP), "empty app shell remains"],
  ];
  const failures = checks.filter(([ok]) => !ok).map(([, message]) => message);
  if (failures.length) {
    throw new Error(`Invalid static page ${route.path}: ${failures.join(", ")}`);
  }
}

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
  if (!shell.includes(EMPTY_APP)) {
    throw new Error("Empty #app mount not found in dist/index.html");
  }

  for (const route of ROUTES) {
    const documentShell = before + seoBlock(route) + after;
    const app = `<div id="app">${shellHTML(pageHTML(route))}</div>`;
    const html = documentShell.replace(EMPTY_APP, app);
    validate(route, html);
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
