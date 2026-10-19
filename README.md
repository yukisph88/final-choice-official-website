# Final Choice: Official Website

Official website of **Agensi Pekerjaan Final Choice Sdn Bhd** (Co. No. 201201028954 (1013441-H), licence JTKSM 483 Category C):
foreign worker recruitment services for employers and domestic helper (maid) services for households, in one bilingual site.

- English (`/en/`) and Bahasa Melayu (`/bm/`), one page registry, correct hreflang.
- Static site built with [Astro](https://astro.build), vanilla JavaScript only for menu, form and scroll reveal, hosted free on GitHub Pages.
- No database, no server, no secrets in the code. Enquiries go to WhatsApp (and optionally a free form endpoint).
- **Status: built and tested locally. Not yet published. `noindex` is ON** until the final domain is confirmed (`src/data/site.ts` → `seo.indexing`).

## Commands

```bash
npm install
npm run dev          # http://localhost:4321/final-choice-official-website/
npm run build        # production build into dist/
npm run test:site    # checks dist/ (run after build)
npm run preview      # serve dist/ locally
```

Requires Node.js 22 or later.

## Structure

```
src/
  data/site.ts        company facts, two WhatsApp lines, switches (indexing, form endpoint)
  i18n/routes.ts      every page URL in English and Malay (single source of truth)
  i18n/ui.ts          buttons, labels, forms, WhatsApp messages in both languages
  content/            page content: fw.ts (foreign workers), maid.ts (domestic helpers), main.ts (about, contact, privacy)
  views/              Home.astro and ContentPage.astro (one template for all other pages)
  components/         Header (contact strip + nav), Footer, EnquiryForm, CtaBand, Icon, ...
  layouts/BaseLayout  SEO head: title, description, canonical, hreflang, Open Graph, JSON-LD
  pages/              [lang]/[...slug].astro builds all pages; sitemap.xml, robots.txt, 404, language entry
public/images/        logo (official, unchanged), hero and sector photos, og-image.jpg
scripts/check-site.mjs  post-build checks
.github/workflows/deploy.yml
docs/                 audit, deployment, SEO migration, database recommendation, assets, testing report
```

## Editing content

- Company details, phone numbers, hours, switches: `src/data/site.ts`.
- Page text: `src/content/*.ts`. Each page has `en` and (for priority pages) `bm`. A page without `bm` is English only.
- Add a page: add its key and slugs in `src/i18n/routes.ts`, add content, add a footer label in `src/i18n/labels.ts`.
- Push to `main`: GitHub Actions builds, checks and deploys. A failed check keeps the previous live version.

## Documentation

| File | Purpose |
|---|---|
| [docs/AUDIT-AND-PLAN.md](docs/AUDIT-AND-PLAN.md) | What was inspected, findings, implementation plan |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | GitHub Pages, custom domain, Search Console |
| [docs/SEO-AND-MIGRATION.md](docs/SEO-AND-MIGRATION.md) | Keyword map, canonical and migration strategy, Google Business Profile checklist |
| [docs/DATABASE-RECOMMENDATION.md](docs/DATABASE-RECOMMENDATION.md) | Version 2: Supabase architecture and PDPA notes |
| [docs/ASSETS-AND-CONFIRMATIONS.md](docs/ASSETS-AND-CONFIRMATIONS.md) | Images to supply and facts management must confirm |
| [docs/TESTING-REPORT.md](docs/TESTING-REPORT.md) | What was tested, results, what was not |
