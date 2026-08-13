# Socials by Osiris — website

Astro site for Socials by Osiris: a home page (hero, services, portfolio, and contact) and a pricing page.

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

- `/` — home page: hero, services overview, portfolio section (`#portfolio`, scroll target from the nav), and full contact section.
- `/pricing` — packages, add-ons, and onboarding note.

## Where things live

- `src/data/site.ts` — site name, contact info, nav links, home page services, pricing packages/add-ons. Edit copy and prices here; the page rebuilds itself. No markup to touch.
- `src/data/caseStudies.ts` — the 2 client case-study blocks on the home page (goals, skills, tools, tasks, results). Currently placeholder content — swap in real client details, photos, and stats as they're ready.
- `src/data/portfolio.ts` — the smaller icon-tile grid ("A Few More") on the home page. Swap in real projects and photos here as they're ready.
- `src/pages/` — one file per route (`index.astro`, `pricing.astro`).
- `src/components/` — `Nav`, `Footer`, `Hero` (home hero), `PageIntro` (interior page headers), `ServiceTile`, `CaseStudyCard`, `PortfolioCard`, `ContactFull` (home contact section), `ContactCta` (compact CTA reused on Pricing), `PricingCard`, `AddOnCard`.
- `src/layouts/Base.astro` — shared HTML shell, fonts, nav, and footer.
- `src/styles/global.css` — brand colors and fonts as CSS variables (cream `#f8f1eb`, steel blue `#467390`, peach `#e8b98c`, plus sage and rose accents).

## Adding a page

Drop a new `.astro` file in `src/pages/` — the filename becomes the URL. For example `src/pages/about.astro` serves at `/about`. Add it to the `nav` array in `src/data/site.ts` to show it in the top bar.

## Deploying

The build output in `dist/` is plain static files. This repo includes `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages on every push to `main` (requires Pages source set to "GitHub Actions" in repo settings). `public/CNAME` carries the custom domain through the build. Netlify, Vercel, and Cloudflare Pages can also deploy it with build command `npm run build` and publish directory `dist`.
