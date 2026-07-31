# Socials by Osiris — website

Astro site for Socials by Osiris: home/contact, portfolio, and pricing pages.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Astro prints (usually http://localhost:4321).

```bash
npm run build     # outputs static files to dist/
npm run preview   # preview the production build
```

## Pages

- `/` — home page, hero, services overview, and full contact section.
- `/portfolio` — project grid. Currently placeholder cards.
- `/pricing` — packages, add-ons, and terms.

## Where things live

- `src/data/site.ts` — site name, contact info, nav links, home page services, pricing packages/add-ons/terms. Edit copy and prices here; the page rebuilds itself. No markup to touch.
- `src/data/portfolio.ts` — portfolio project entries (title, category, description). Swap in real projects and photos here as they're ready.
- `src/pages/` — one file per route (`index.astro`, `portfolio.astro`, `pricing.astro`).
- `src/components/` — `Nav`, `Footer`, `Hero` (home hero), `PageIntro` (interior page headers), `ServiceTile`, `ContactFull` (home contact section), `ContactCta` (compact CTA reused on Portfolio/Pricing), `PricingCard`, `AddOnCard`, `PortfolioCard`.
- `src/layouts/Base.astro` — shared HTML shell, fonts, nav, and footer.
- `src/styles/global.css` — brand colors and fonts as CSS variables (cream `#f8f1eb`, steel blue `#467390`, peach `#e8b98c`).

## Adding a page

Drop a new `.astro` file in `src/pages/` — the filename becomes the URL. For example `src/pages/about.astro` serves at `/about`. Add it to the `nav` array in `src/data/site.ts` to show it in the top bar.

## Deploying

The build output in `dist/` is plain static files. This repo includes `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages on every push to `main` (requires Pages source set to "GitHub Actions" in repo settings). `public/CNAME` carries the custom domain through the build. Netlify, Vercel, and Cloudflare Pages can also deploy it with build command `npm run build` and publish directory `dist`.
