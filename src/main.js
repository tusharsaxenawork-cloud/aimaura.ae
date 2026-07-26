import "./style.css";

/* Newsletter signups are emailed here via formsubmit.co */
const NEWSLETTER_TO = "aisha@aimaura.ae";

/* Brand mark: arch with inner line + two offset bars */
const LOGO = `
  <svg class="mark" viewBox="0 0 320 460" role="img" aria-hidden="true" focusable="false">
    <g fill="none" stroke="var(--terra)" stroke-width="16">
      <path d="M22 460 V120 A95 95 0 0 1 212 120 V460" />
      <path d="M44 460 V120 A73 73 0 0 1 190 120 V460" stroke-width="7" />
      <path d="M258 150 V460" />
      <path d="M303 196 V460" stroke-width="14" />
    </g>
  </svg>`;

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const hero = [
  {
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=2400&q=80",
    place: "Casa Arco",
    country: "Alentejo, Portugal",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
    place: "Riverside House",
    country: "Lisbon",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80",
    place: "The Bakehouse",
    country: "Studio Project",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=80",
    place: "Quinta Nova",
    country: "Douro Valley",
  },
];

const prologueImages = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
];

const longTalks = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    kicker: "The Long Talk",
    title: "Dialogues in presence — designing for stillness",
    desc: "A conversation on how a building can slow a body down, and why the threshold matters more than the façade.",
  },
  {
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
    kicker: "The Long Talk",
    title: "On concrete, light and restraint",
    desc: "With a master of the raw and the elemental, on letting material speak and leaving what is unnecessary unbuilt.",
  },
  {
    src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1400&q=80",
    kicker: "The Long Talk",
    title: "Building a modern retreat, one season at a time",
    desc: "How a house grows with the land it sits on, and the patience required to build something that lasts.",
  },
];

const places = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    title: "Casa Arco",
    sub: "Alentejo, Portugal",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    title: "Quinta Nova",
    sub: "Douro Valley, Portugal",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    title: "Riverside House",
    sub: "Lisbon, Portugal",
  },
];

const mosaic = [
  "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1000&q=80",
];

const stats = [
  { n: "15", label: "Years designing & building" },
  { n: "120+", label: "Projects completed" },
  { n: "1", label: "Team, from sketch to keys" },
];

/* Service pages — content inspired by Zen Interiors, styled like Slowness */
const SERVICES = {
  "interior-design": {
    title: "Interior Design & Fit-Out",
    tagline: "Timeless interiors, designed and fitted by one team.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80",
    intro:
      "We design interiors that tell a story of purpose, beauty and craftsmanship — then fit them out ourselves, so the finished room matches the drawing that promised it.",
    body: "From a single room to a whole villa, we begin with how you actually live: where morning light lands, where long dinners happen, where the day winds down. Concept, materials, joinery and finishes are carried through by one team, with every detail delivered with precision and care.",
    points: [
      "Bespoke residential & commercial interiors",
      "Complete fit-out & finishing",
      "Material, colour & lighting palettes",
      "Custom furniture & joinery design",
      "Art, objects & styling",
    ],
  },
  "turnkey-design-build": {
    title: "Turnkey Design & Build Solutions",
    tagline: "One hand carries the project through, start to finish.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
    intro:
      "The gap between a beautiful drawing and a beautiful space is the build. We close it by building what we design ourselves — one team, one contract, one point of responsibility.",
    body: "Turnkey means you hand us a key at the start and we hand it back at the end. Design, approvals, structure, MEP, finishes, joinery, furniture, the last door handle — sequenced by one team, priced transparently, and finished to the standard the drawings promised.",
    points: [
      "Complete design & build delivery",
      "Villa construction & extension",
      "Authority approvals across the UAE",
      "Transparent costing & scheduling",
      "Snagging, handover & aftercare",
    ],
  },
  "landscape-design": {
    title: "Landscape Design & Outdoor Living",
    tagline: "Gardens and terraces made for the way you live outdoors.",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=2400&q=80",
    intro:
      "The life of a home doesn't stop at its walls. We design and build landscapes, gardens and outdoor rooms that extend the way you live, work and gather into the open air.",
    body: "From shaded courtyards to full villa gardens, we plan planting, shade, water and light as one composition — built by our own teams and chosen for the climate, so the garden looks better in its fifth summer than its first.",
    points: [
      "Landscape design & masterplanning",
      "Outdoor kitchens, pergolas & terraces",
      "Planting, irrigation & lighting",
      "Water features & shade structures",
      "Softscape & hardscape construction",
    ],
  },
  "swimming-pools": {
    title: "Swimming Pool Design & Construction",
    tagline: "Luxurious pools, engineered as carefully as they look.",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=2400&q=80",
    intro:
      "A pool is the centrepiece of outdoor living — and the least forgiving thing on a site to build. We design and construct pools where the engineering is as considered as the view across the water.",
    body: "From infinity edges to compact plunge pools, we handle structure, waterproofing, filtration, heating and finishes as one scope. The result is a pool that is beautiful on day one and effortless to live with for years after.",
    points: [
      "Bespoke pool design & engineering",
      "New construction & pool renovation",
      "Infinity, lap & plunge pools",
      "Filtration, heating & automation",
      "Decking, surrounds & landscaping",
    ],
  },
  "renovation-remodeling": {
    title: "Renovation & Remodeling",
    tagline: "Existing spaces, rethought and rebuilt with care.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80",
    intro:
      "Some of the best spaces already exist — they just need to be rethought. We renovate and remodel villas, apartments and workplaces, keeping what deserves to stay and rebuilding what doesn't.",
    body: "Renovation rewards experience: hidden services, structural surprises, the choreography of living through the works. We survey carefully, plan honestly, and run the site tightly — so the disruption is short and the transformation is lasting.",
    points: [
      "Full villa & apartment renovation",
      "Kitchen & bathroom remodeling",
      "Structural alterations & extensions",
      "MEP upgrades & replanning",
      "Phased works for occupied homes",
    ],
  },
  "project-management": {
    title: "Project Management & Consultancy",
    tagline: "Experienced eyes on your project, from concept to completion.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80",
    intro:
      "Great projects are managed, not hoped for. We act as your representative — coordinating designers, contractors and authorities so quality, cost and time are protected from concept to completion.",
    body: "Whether we're delivering the project or overseeing another team's work, the discipline is the same: clear scope, honest budgets, tight programmes and relentless attention to detail. You get one accountable partner and no surprises at handover.",
    points: [
      "End-to-end project management",
      "Design review & value engineering",
      "Tendering & contractor selection",
      "Cost, programme & quality control",
      "Owner representation & consultancy",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Shell (header + footer are persistent)                              */
/* ------------------------------------------------------------------ */

const serviceLinks = Object.entries(SERVICES)
  .map(([slug, s]) => `<a href="#/services/${slug}">${s.title}</a>`)
  .join("");

document.querySelector("#app").innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Aimaura — home">
      ${LOGO}
      <span class="wordmark">Aimaura</span>
    </a>
    <nav class="nav" aria-label="Primary">
      <div class="nav__drop">
        <button class="nav__drop-btn" aria-haspopup="true" aria-expanded="false">
          Services<span class="nav__caret" aria-hidden="true">▾</span>
        </button>
        <div class="dropdown">${serviceLinks}</div>
      </div>
      <a href="#places">Places</a>
      <a href="#about">About</a>
    </nav>
    <button class="theme-toggle" aria-label="Switch to light theme">
      <svg class="theme-toggle__sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4.4" />
        <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.55 1.55M17.15 17.15l1.55 1.55M18.7 5.3l-1.55 1.55M6.85 17.15L5.3 18.7" />
      </svg>
      <svg class="theme-toggle__moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M20.2 14.2A8.2 8.2 0 1 1 9.8 3.8a6.6 6.6 0 0 0 10.4 10.4Z" />
      </svg>
    </button>
    <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span>
    </button>
  </header>

  <div id="page"></div>

  <footer class="site-footer">
    <div class="site-footer__brand">
      ${LOGO}
      <span>Aimaura</span>
    </div>
    <p class="site-footer__tag">Design and Build</p>
    <nav class="site-footer__cols" aria-label="Footer">
      <div>
        <span>Discover</span>
        <a href="#places">Places</a>
        <a href="#about">About</a>
      </div>
      <div>
        <span>Services</span>
        ${serviceLinks}
      </div>
      <div>
        <span>Connect</span>
        <a href="#newsletter">Instagram</a>
        <a href="#newsletter">Newsletter</a>
        <a href="mailto:aisha@aimaura.ae">Contact</a>
      </div>
      <div>
        <span>Studio</span>
        <a href="mailto:aisha@aimaura.ae">aisha@aimaura.ae</a>
        <a href="mailto:press@aimaura.ae">press@aimaura.ae</a>
        <a href="mailto:careers@aimaura.ae">careers@aimaura.ae</a>
      </div>
    </nav>
    <div class="site-footer__base">
      <p class="site-footer__copy">Aimaura © 2026 — aimaura.ae</p>
      <p class="site-footer__addr">Design &amp; Build Studio · Dubai, United Arab Emirates</p>
    </div>
  </footer>
`;

const page = document.querySelector("#page");

/* ------------------------------------------------------------------ */
/* Home page                                                           */
/* ------------------------------------------------------------------ */

function homeHTML() {
  return `
  <main id="top">
    <section class="hero" aria-label="Featured projects">
      <div class="hero__stage">
        ${hero
          .map(
            (s, i) => `
          <figure class="slide ${i === 0 ? "is-active" : ""}" data-index="${i}">
            <img src="${s.src}" alt="${s.place}, ${s.country}" loading="${i === 0 ? "eager" : "lazy"}" />
            <figcaption>
              <span class="slide__place">${s.place}</span>
              <span class="slide__country">${s.country}</span>
            </figcaption>
          </figure>`,
          )
          .join("")}
      </div>
      <div class="hero__overlay">
        <h1 class="hero__headline">
          <span class="hero__kicker">Aimaura — Design and Build</span>
          <span>Built with Purpose</span>
          <span class="hero__headline-alt">Designed with <em>Aura</em></span>
        </h1>
      </div>
      <button class="hero__arrow hero__arrow--prev" aria-label="Previous slide">&#8592;</button>
      <button class="hero__arrow hero__arrow--next" aria-label="Next slide">&#8594;</button>
      <div class="hero__dots" role="tablist" aria-label="Choose slide">
        ${hero
          .map(
            (_, i) =>
              `<button class="dot ${i === 0 ? "is-active" : ""}" data-index="${i}" role="tab" aria-label="Slide ${i + 1}"></button>`,
          )
          .join("")}
      </div>
    </section>

    <section class="intention">
      <p class="intention__lead">
        Crafting spaces.<br />Creating <em>experiences.</em>
      </p>
      <p class="intention__body">
        Aimaura is a multidisciplinary design and build studio specializing in
        interiors, landscapes, swimming pools, and turnkey projects. Every
        project is carefully designed, expertly built, and thoughtfully
        finished to inspire the way people live, work, and connect.
      </p>
    </section>

    <!-- Pinned two-column: left freezes, right scrolls -->
    <section class="pinned" id="prologue">
      <div class="pinned__aside">
        <p class="pinned__label">The Foundation</p>
        <h2 class="pinned__title">Where Vision Becomes Reality</h2>
        <p class="pinned__text">
          Aimaura was built on one simple belief: every space should tell a
          story of purpose, beauty, and craftsmanship. We create timeless
          interiors, inspiring landscapes, luxurious swimming pools, and
          complete turnkey projects, delivering every detail with precision,
          creativity, and care. From concept to completion, we shape spaces
          that elevate everyday living and leave a lasting impression.
        </p>
        <a class="pinned__link" href="#about">Our Story</a>
      </div>
      <div class="pinned__scroll">
        ${prologueImages
          .map(
            (src, i) =>
              `<figure class="pinned__fig"><img src="${src}" alt="Aimaura foundation ${i + 1}" loading="lazy" /></figure>`,
          )
          .join("")}
      </div>
    </section>

    <!-- The Long Talk -->
    <section class="feature" id="long-talk">
      <div class="feature__head">
        <h2>The Long Talk</h2>
        <a href="#journal" class="more">All conversations</a>
      </div>
      ${longTalks
        .map(
          (t) => `
        <article class="talk">
          <a class="talk__media" href="#journal"><img src="${t.src}" alt="${t.title}" loading="lazy" /></a>
          <div class="talk__body">
            <p class="talk__kicker">${t.kicker}</p>
            <h3 class="talk__title">${t.title}</h3>
            <p class="talk__desc">${t.desc}</p>
            <a class="talk__link" href="#journal">Read the conversation</a>
          </div>
        </article>`,
        )
        .join("")}
    </section>

    <!-- Services overview -->
    <section class="services" id="services">
      <div class="services__head">
        <h2>What we do</h2>
        <p>
          A single studio for the whole arc of a home — designed, built and
          furnished by one team.
        </p>
      </div>
      <div class="services__grid">
        ${Object.entries(SERVICES)
          .map(
            ([slug, s], i) => `
          <a class="service" href="#/services/${slug}">
            <span class="service__num">0${i + 1}</span>
            <h3 class="service__title">${s.title}</h3>
            <p class="service__desc">${s.tagline}</p>
            <span class="service__go">Explore</span>
          </a>`,
          )
          .join("")}
      </div>
      <div class="stats">
        ${stats
          .map(
            (s) => `
          <div class="stat">
            <span class="stat__n">${s.n}</span>
            <span class="stat__label">${s.label}</span>
          </div>`,
          )
          .join("")}
      </div>
    </section>

    <!-- Before / After comparisons -->
    <section class="compare" id="transformations">
      <div class="grid-section__head">
        <h2>Before &amp; After</h2>
        <span class="more">Drag to compare</span>
      </div>
      <div class="compare__row">
        <div class="compare__frame" style="--pos: 50%">
          <img
            class="compare__img compare__img--after"
            src="/compare-after.jpeg"
            alt="After — the finished living room with travertine floor, staircase and chandelier"
            draggable="false"
          />
          <div class="compare__clip">
            <img
              class="compare__img"
              src="/compare-before.jpeg"
              alt="Before — the shell of the villa living room, bare drywall and concrete floor"
              draggable="false"
            />
          </div>
          <div class="compare__handle" aria-hidden="true">
            <span class="compare__grip"></span>
          </div>
          <input
            class="compare__range"
            type="range"
            min="0"
            max="100"
            value="50"
            step="0.1"
            aria-label="Slide to compare the living room before and after"
          />
          <span class="compare__tag compare__tag--before">Before</span>
          <span class="compare__tag compare__tag--after">After</span>
        </div>
        <div class="compare__frame" style="--pos: 50%">
          <img
            class="compare__img compare__img--after"
            src="/compare-2-after.jpeg"
            alt="After — the finished bedroom with cove lighting, upholstered bed and rug"
            draggable="false"
          />
          <div class="compare__clip">
            <img
              class="compare__img"
              src="/compare-2-before.jpeg"
              alt="Before — the bare concrete shell of the bedroom"
              draggable="false"
            />
          </div>
          <div class="compare__handle" aria-hidden="true">
            <span class="compare__grip"></span>
          </div>
          <input
            class="compare__range"
            type="range"
            min="0"
            max="100"
            value="50"
            step="0.1"
            aria-label="Slide to compare the bedroom before and after"
          />
          <span class="compare__tag compare__tag--before">Before</span>
          <span class="compare__tag compare__tag--after">After</span>
        </div>
      </div>
    </section>

    <section class="grid-section" id="places">
      <div class="grid-section__head">
        <h2>Places</h2>
        <a href="#places" class="more">All places</a>
      </div>
      <div class="cards cards--places">
        ${places
          .map(
            (p) => `
          <article class="card card--place">
            <a href="#places">
              <div class="card__media"><img src="${p.src}" alt="${p.title}" loading="lazy" /></div>
              <h3 class="card__title">${p.title}</h3>
              <p class="card__sub">${p.sub}</p>
            </a>
          </article>`,
          )
          .join("")}
      </div>
    </section>

    <section class="quote" aria-label="On slowness">
      <blockquote>
        Consider this utterly commonplace situation: a man is walking down the
        street. At a certain moment, he tries to recall something, but the
        recollection escapes him. Automatically, he slows down. Meanwhile, a
        person who wants to forget a disagreeable incident he has just lived
        through starts unconsciously to speed up his pace, as if he were trying
        to distance himself from a thing still too close to him in time. In
        existential mathematics, that experience takes the form of two basic
        equations: the degree of slowness is directly proportional to the
        intensity of memory; the degree of speed is directly proportional to
        the intensity of forgetting.
      </blockquote>
      <cite>— Milan Kundera, <span>Slowness</span></cite>
    </section>

    <section class="philosophy" id="about">
      <div class="philosophy__inner">
        <p class="philosophy__label">Living well</p>
        <p class="philosophy__text">
          At Aimaura, we believe exceptional spaces begin with thoughtful
          design and are brought to life through flawless execution. We
          specialise in architecture, interior design, landscaping, swimming
          pools and turnkey project delivery, creating timeless residential
          and commercial environments that balance beauty, functionality and
          lasting value.
        </p>
        <div class="philosophy__links">
          <a href="#places">Discover Places</a>
        </div>
      </div>
    </section>

    <section class="newsletter" id="newsletter">
      <div class="newsletter__inner">
        <h2>Get in touch.</h2>
        <form class="newsletter__form" novalidate>
          <div class="row">
            <input type="text" name="name" placeholder="Name" autocomplete="name" required />
            <input type="email" name="email" placeholder="Email" autocomplete="email" required />
          </div>
          <div class="row">
            <input type="text" name="location" placeholder="Location" autocomplete="address-level2" />
            <input type="tel" name="phone" placeholder="Phone number" autocomplete="tel" />
          </div>
          <textarea name="description" placeholder="Description, if any" rows="4"></textarea>
          <button type="submit">Send query</button>
          <p class="newsletter__note" hidden>Thank you — we'll be in touch.</p>
        </form>
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="cta" id="contact">
      <p class="cta__label">Begin</p>
      <h2 class="cta__title">Elevate your space, <em>slowly</em>.</h2>
      <p class="cta__text">
        Tell us about the place you have — or the one you imagine — and we will
        walk you through how we would design and build it.
      </p>
      <a class="cta__button" href="mailto:aisha@aimaura.ae">Book a consultation</a>
    </section>

    <!-- Closing image mosaic -->
    <section class="mosaic" aria-label="Gallery">
      ${mosaic
        .map(
          (src, i) =>
            `<figure class="mosaic__item mosaic__item--${i + 1}"><img src="${src}" alt="Aimaura gallery ${i + 1}" loading="lazy" /></figure>`,
        )
        .join("")}
    </section>
  </main>`;
}

/* ------------------------------------------------------------------ */
/* Service page                                                        */
/* ------------------------------------------------------------------ */

function serviceHTML(slug) {
  const s = SERVICES[slug];
  const others = Object.entries(SERVICES).filter(([k]) => k !== slug);
  return `
  <main id="top">
    <section class="svc-hero">
      <img src="${s.image}" alt="${s.title}" />
      <div class="svc-hero__overlay">
        <p class="svc-hero__kicker">Services</p>
        <h1 class="svc-hero__title">${s.title}</h1>
        <p class="svc-hero__tagline">${s.tagline}</p>
      </div>
    </section>

    <section class="intention">
      <p class="intention__label">The approach</p>
      <p class="intention__lead">${s.intro}</p>
    </section>

    <section class="pinned">
      <div class="pinned__aside">
        <p class="pinned__label">In practice</p>
        <h2 class="pinned__title">How we work</h2>
        <p class="pinned__text">${s.body}</p>
        <a class="pinned__link" href="mailto:aisha@aimaura.ae">Start a conversation</a>
      </div>
      <div class="pinned__scroll">
        <ul class="svc-list">
          ${s.points.map((p) => `<li>${p}</li>`).join("")}
        </ul>
        <figure class="pinned__fig"><img src="${s.image}" alt="" loading="lazy" /></figure>
      </div>
    </section>

    <section class="cta">
      <p class="cta__label">Begin</p>
      <h2 class="cta__title">Elevate your space, <em>slowly</em>.</h2>
      <p class="cta__text">
        Tell us about the place you have — or the one you imagine — and we will
        walk you through how we would design and build it.
      </p>
      <a class="cta__button" href="mailto:aisha@aimaura.ae">Book a consultation</a>
    </section>

    <section class="feature svc-others">
      <div class="feature__head">
        <h2>More of what we do</h2>
      </div>
      <div class="cards svc-others__cards">
        ${others
          .map(
            ([k, o]) => `
          <article class="card">
            <a href="#/services/${k}">
              <div class="card__media"><img src="${o.image}" alt="${o.title}" loading="lazy" /></div>
              <p class="card__kicker">Services</p>
              <h3 class="card__title">${o.title}</h3>
            </a>
          </article>`,
          )
          .join("")}
      </div>
    </section>
  </main>`;
}

/* ------------------------------------------------------------------ */
/* Interactions                                                        */
/* ------------------------------------------------------------------ */

let timer = null;

function bindPage() {
  /* Hero carousel (home only) — dots, arrows, swipe/drag and keyboard */
  clearInterval(timer);
  const slides = [...page.querySelectorAll(".slide")];
  const dots = [...page.querySelectorAll(".dot")];
  if (slides.length) {
    let current = 0;
    const go = (next) => {
      current = (next + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("is-active", i === current));
      dots.forEach((d, i) => d.classList.toggle("is-active", i === current));
    };
    const autoplay = () => {
      clearInterval(timer);
      timer = setInterval(() => go(current + 1), 6000);
    };
    dots.forEach((dot) =>
      dot.addEventListener("click", () => {
        go(Number(dot.dataset.index));
        autoplay();
      }),
    );

    page.querySelector(".hero__arrow--prev").addEventListener("click", () => {
      go(current - 1);
      autoplay();
    });
    page.querySelector(".hero__arrow--next").addEventListener("click", () => {
      go(current + 1);
      autoplay();
    });

    /* Swipe / drag anywhere on the hero */
    const stage = page.querySelector(".hero");
    let startX = null;
    stage.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button")) return;
      startX = e.clientX;
    });
    stage.addEventListener("pointerup", (e) => {
      if (startX === null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) {
        go(dx < 0 ? current + 1 : current - 1);
        autoplay();
      }
    });
    stage.addEventListener("pointercancel", () => (startX = null));

    /* Keyboard arrows */
    window.onkeydown = (e) => {
      if (e.key === "ArrowLeft") (go(current - 1), autoplay());
      if (e.key === "ArrowRight") (go(current + 1), autoplay());
    };

    autoplay();
  } else {
    window.onkeydown = null;
  }

  /* Before / After comparison sliders (home only) */
  page.querySelectorAll(".compare__frame").forEach((frame) => {
    const range = frame.querySelector(".compare__range");
    range.addEventListener("input", () => {
      frame.style.setProperty("--pos", `${range.value}%`);
    });
  });

  /* Newsletter (home only) — relays submissions to aisha@aimaura.ae */
  const form = page.querySelector(".newsletter__form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const note = form.querySelector(".newsletter__note");
      const button = form.querySelector("button");
      const data = Object.fromEntries(new FormData(form));

      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        note.textContent = "Please enter a valid email address.";
        note.hidden = false;
        return;
      }

      button.disabled = true;
      button.textContent = "Sending…";
      try {
        const res = await fetch(`https://formsubmit.co/ajax/${NEWSLETTER_TO}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "Aimaura newsletter signup",
            _template: "table",
            _captcha: "false",
            Name: data.name,
            Email: data.email,
            Location: data.location,
            "Phone number": data.phone,
            Description: data.description,
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        note.textContent = "Thank you — we'll be in touch.";
        note.hidden = false;
        form.reset();
      } catch {
        note.textContent =
          "Something went wrong — please email aisha@aimaura.ae instead.";
        note.hidden = false;
      } finally {
        button.disabled = false;
        button.textContent = "Subscribe";
      }
    });
  }

  /* Reveal on scroll */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  page
    .querySelectorAll(
      ".intention, .pinned, .feature, .services, .compare, .grid-section, .quote, .philosophy, .newsletter, .cta, .mosaic, .svc-hero",
    )
    .forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* Router: "#/services/<slug>" renders a page, "#<id>" scrolls home    */
/* ------------------------------------------------------------------ */

let currentView = "";

function route() {
  const h = location.hash;
  const svcMatch = h.match(/^#\/services\/([\w-]+)$/);

  if (svcMatch && SERVICES[svcMatch[1]]) {
    const view = `service:${svcMatch[1]}`;
    if (currentView !== view) {
      currentView = view;
      page.innerHTML = serviceHTML(svcMatch[1]);
      bindPage();
    }
    window.scrollTo(0, 0);
  } else {
    if (currentView !== "home") {
      currentView = "home";
      page.innerHTML = homeHTML();
      bindPage();
    }
    const id = h.replace(/^#\/?/, "");
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }

  header.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  document.querySelector(".nav__drop")?.classList.remove("is-open");
}

/* ---- Header interactions (bound once) ---- */
const toggle = document.querySelector(".menu-toggle");
const header = document.querySelector(".site-header");

toggle.addEventListener("click", () => {
  const open = header.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

/* Theme toggle: dark (default) ↔ light, persisted across visits */
const themeBtn = document.querySelector(".theme-toggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeMeta.setAttribute("content", theme === "light" ? "#f3eee6" : "#1c1c1c");
  themeBtn.setAttribute(
    "aria-label",
    theme === "light" ? "Switch to dark theme" : "Switch to light theme",
  );
}

applyTheme(localStorage.getItem("aimaura-theme") || "dark");

themeBtn.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
  try {
    localStorage.setItem("aimaura-theme", next);
  } catch (e) {}
  applyTheme(next);
});

/* Services dropdown: click toggles (works for touch), outside click closes */
const drop = document.querySelector(".nav__drop");
const dropBtn = document.querySelector(".nav__drop-btn");
dropBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = drop.classList.toggle("is-open");
  dropBtn.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", () => drop.classList.remove("is-open"));

/* Header shrink + logo slide on scroll */
const onScroll = () =>
  header.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

window.addEventListener("hashchange", route);
route();
