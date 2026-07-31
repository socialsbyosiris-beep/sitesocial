# Socials by Osiris — pricing site

Astro site for the Socials by Osiris pricing page.

## Run it

```bash
cd astro-site
npm install
npm run dev
```

Then open the local URL Astro prints (usually http://localhost:4321).

```bash
npm run build     # outputs static files to dist/
npm run preview   # preview the production build
```

## Where things live

- `src/data/site.ts` — **all pricing, features, add-ons, terms, and contact info.** Edit prices and bullets here; the page rebuilds itself. No markup to touch.
- `src/pages/index.astro` — page composition and section layout.
- `src/components/` — `PricingCard`, `AddOnCard`, `PageHeader`, `ContactCta`.
- `src/styles/global.css` — brand colors and fonts as CSS variables (cream `#f8f1eb`, steel blue `#467390`, peach `#e8b98c`).

## Adding a page

Drop a new `.astro` file in `src/pages/` — the filename becomes the URL. For example `src/pages/about.astro` serves at `/about`.

## Deploying

The build output in `dist/` is plain static files. Netlify, Vercel, and Cloudflare Pages all deploy it with build command `npm run build` and publish directory `dist`.
