/*
 * Single source of truth for SEO metadata.
 *
 * This module is intentionally DOM-free so it can be imported both by the
 * browser bundle (src/main.js, to keep <title>/description correct during
 * client-side navigation) AND by the Node build step (scripts/prerender.mjs,
 * to bake real per-page HTML + JSON-LD at build time). Never touch `document`
 * or `window` here.
 */

export const SITE = {
  origin: "https://aimaura.ae",
  name: "Aimaura",
  logo: "https://aimaura.ae/aimaura-primary.png",
  ogImage: "https://aimaura.ae/aimaura-brand.jpeg",
  ogImageAlt: "Aimaura — design-and-build studio in Dubai",
  ogImageWidth: 983,
  ogImageHeight: 556,
  locale: "en_US",
};

/* Default social-share image (homepage + any route without its own).
   Every route carries a full `image` object so prerender.mjs can emit the
   og:image:width/height that let platforms render the large card on first
   scrape. Service pages use a distinct Unsplash photo (different from the
   page's on-site hero) cropped to the 1200x630 social ratio. */
export const DEFAULT_OG_IMAGE = {
  url: SITE.ogImage,
  alt: SITE.ogImageAlt,
  width: SITE.ogImageWidth,
  height: SITE.ogImageHeight,
};

const ogImage = (id, alt) => ({
  url: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&h=630&q=80`,
  alt,
  width: 1200,
  height: 630,
});

/* Organization schema — referenced by every Service via @id so the graph
   ties back to one business entity. */
export const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE.origin}/#organization`,
  name: "Aimaura",
  description:
    "One of the leading interior design and fit-out companies in Dubai, offering interior design, turnkey design-build, landscape architecture, swimming pool construction, renovation, and project management services.",
  image: SITE.ogImage,
  logo: SITE.logo,
  url: `${SITE.origin}/`,
  telephone: "+971566908754",
  email: "info@aimaura.ae",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  areaServed: { "@type": "City", name: "Dubai" },
  priceRange: "$$$",
  sameAs: ["https://www.instagram.com/aimauradesignbuild"],
};

/* Small helper so every Service block stays consistent and points back to the
   Organization above. */
const service = (slug, serviceType, name, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType,
  name,
  description,
  provider: { "@id": `${SITE.origin}/#organization` },
  areaServed: { "@type": "City", name: "Dubai" },
  url: `${SITE.origin}/services/${slug}`,
});

/*
 * Every crawlable route. `path` is the clean URL, used for the router,
 * canonical tags, the sitemap and the prerendered file location.
 */
export const ROUTES = [
  {
    path: "/",
    title: "AIMAURA | Best Interior Design Company in Dubai",
    description:
      "Top-rated interior companies in Dubai offering interior design, architecture consultant & landscape architecture design services for stunning, modern spaces",
    image: DEFAULT_OG_IMAGE,
    jsonld: ORG_JSONLD,
  },
  {
    path: "/services/interior-design",
    title: "Interior Design & Fit Out Companies in Dubai | Villa, Office",
    description:
      "Leading interior design company in Dubai offering luxury villa, apartment, commercial & office interior design, plus trusted interior fit out companies citywide",
    image: ogImage(
      "1616486338812-3dadae4b4ace",
      "A softly lit, styled living room interior by Aimaura",
    ),
    jsonld: service(
      "interior-design",
      "Interior Design",
      "Interior Design Services in Dubai",
      "Luxury interior design and fit-out services for villas, apartments, offices, and commercial spaces in Dubai.",
    ),
  },
  {
    path: "/services/turnkey-design-build",
    title: "Turnkey Interior Design | Interior Fit Out Solutions Dubai",
    description:
      "AIMAURA delivers turnkey interior design services, turnkey interior fit out and complete turnkey solutions in Dubai, from concept to handover for your space",
    image: ogImage(
      "1600566753190-17f0baa2a6c3",
      "A modern timber-clad home built by Aimaura in Dubai",
    ),
    jsonld: service(
      "turnkey-design-build",
      "Turnkey Design & Build",
      "Turnkey Interior Design & Build Solutions",
      "Turnkey interior fit-out solutions in Dubai, delivering design and construction under one contract from concept to final handover.",
    ),
  },
  {
    path: "/services/landscape-design",
    title: "Landscaping Companies | Landscape & Garden Design in Dubai",
    description:
      "AIMAURA is a top landscape design and garden design company offering villa landscaping, landscaping services and garden landscaping solutions across Dubai",
    image: ogImage(
      "1585320806297-9794b3e4eeae",
      "A landscaped garden path with flowering borders by Aimaura",
    ),
    jsonld: service(
      "landscape-design",
      "Landscape Design",
      "Landscape Design Services in Dubai",
      "Landscape and garden design services for villas and commercial properties across Dubai.",
    ),
  },
  {
    path: "/services/swimming-pools",
    title: "Swimming Pool Construction Company | Pool Builders Dubai",
    description:
      "AIMAURA is a trusted swimming pool construction company offering pool design and construction, pool renovation and swimming pool contractor services in Dubai",
    image: ogImage(
      "1576013551627-0cc20b96c2a7",
      "A villa swimming pool with stone surround by Aimaura",
    ),
    jsonld: service(
      "swimming-pools",
      "Swimming Pool Construction",
      "Swimming Pool Design & Construction",
      "Swimming pool construction, custom pool builds, and pool renovation services in Dubai.",
    ),
  },
  {
    path: "/services/renovation-remodeling",
    title: "Villa & Apartment Renovation Company | Remodeling Dubai",
    description:
      "AIMAURA is a trusted renovation company in Dubai offering villa renovation, apartment renovation, interior renovation and home remodeling contractor services",
    image: ogImage(
      "1581858726788-75bc0f6a952d",
      "A minimalist renovated interior with a walnut sideboard by Aimaura",
    ),
    jsonld: service(
      "renovation-remodeling",
      "Renovation & Remodeling",
      "Villa & Apartment Renovation Services",
      "Villa and apartment renovation, remodeling, and interior renovation services in Dubai.",
    ),
  },
  {
    path: "/services/project-management",
    title: "Interior Design Consultation | Project Management Dubai",
    description:
      "AIMAURA offers interior design consultation services, construction project management and architectural consultancy for interior design consultants in Dubai",
    image: ogImage(
      "1503387837-b154d5074bd2",
      "Architectural plans being drawn during a project consultancy",
    ),
    jsonld: service(
      "project-management",
      "Project Management",
      "Construction Project Management & Consultancy",
      "Construction project management and interior design consultancy, acting as an architectural consultant from planning through delivery.",
    ),
  },
];

/* Fast lookup by path — used by the client router's applyMeta(). */
export const ROUTE_BY_PATH = Object.fromEntries(ROUTES.map((r) => [r.path, r]));
