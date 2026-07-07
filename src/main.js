import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>Aimaura</span>
      </div>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <p class="eyebrow">New domain, fresh start</p>
        <h1>Welcome to Aimaura.</h1>
        <p class="lede">
          A clean static site ready for GitHub Pages, built to give your new
          domain a polished first impression.
        </p>

        <div class="actions">
          <a class="button primary" href="#about">Learn more</a>
          <a class="button secondary" href="#contact">Get in touch</a>
        </div>
      </section>

      <section id="about" class="card-grid">
        <article class="card">
          <h2>Fast and simple</h2>
          <p>
            No framework required. This site is pure HTML and CSS, which keeps
            it lightweight and easy to maintain.
          </p>
        </article>
        <article class="card">
          <h2>GitHub Pages ready</h2>
          <p>
            The repository includes the files GitHub Pages expects, including a
            custom domain configuration.
          </p>
        </article>
        <article class="card">
          <h2>Easy to extend</h2>
          <p>
            Replace this landing page with portfolio content, a product site,
            or anything else you want your domain to become.
          </p>
        </article>
      </section>

      <section id="contact" class="contact">
        <p class="eyebrow">Contact</p>
        <h2>Ready for your next step.</h2>
        <p>
          Add your email, socials, or a newsletter link here once the domain
          is live.
        </p>
        <a class="email-link" href="mailto:hello@aimaura.ae">hello@aimaura.ae</a>
      </section>
    </main>
  </div>
`;
