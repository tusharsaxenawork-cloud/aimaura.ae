import { defineConfig } from "vite";

export default defineConfig({
  // Served at the domain root (aimaura.ae via CNAME). An absolute base keeps
  // /assets/* references valid on nested URLs like /services/<slug>, which a
  // relative "./" base would break (they'd resolve to /services/assets/*).
  base: "/",
});
