# Testing report (19 Oct 2026)

Environment: production build (`npm run build`) served by `astro preview` at `http://localhost:4321/final-choice-official-website/`, viewed in the Claude desktop built-in browser. **The site has not been deployed, so nothing here proves the live GitHub Pages site works.**

## Passed

| Check | Method | Result |
|---|---|---|
| Build | `npm run build` | 40 pages (24 English, 14 Malay, root entry, 404) in about 4 s, no errors |
| Metadata, structure | `npm run test:site` (scripts/check-site.mjs) | Unique title and description on every page; exactly one H1; no skipped heading levels; self-referencing canonical; reciprocal hreflang with x-default; Open Graph tags; valid JSON-LD; BreadcrumbList on inner pages; every image has alt; every internal link and asset exists; sitemap URLs all exist; robots.txt present; no FAQPage markup |
| Horizontal scroll | iframe test of 39 pages at 375, 390, 768, 1024, 1440 px (195 loads) | None. One real defect found (home hero badge overflowed at 375 px) and fixed |
| Element overflow, 375 and 768 px | per-element bounds check, all pages | clean after the fix |
| Mobile menu | scripted click and Escape key | opens (`aria-expanded=true`) and closes |
| Language switcher | page inspection | EN/BM link to the equivalent page; pages without a Malay version fall back to the Malay home |
| Enquiry forms | scripted submit (foreign worker) | empty submit shows 4 field errors; valid submit builds the WhatsApp message with all fields and states WhatsApp was opened, **not** "received"; button locks; an identical second submit is refused with a duplicate notice; honeypot field is ignored |
| FAQ | scripted | details elements toggle |
| Console | read after the above | no errors |
| Visual | screenshots: home at 1440 and 390 px, pathway cards, Malay maid landing at 1024 px | layouts as intended |

## Not tested or not verified

- **Lighthouse / PageSpeed and Core Web Vitals:** not run (no tool available here). Design choices support the targets (static HTML, self-hosted fonts, WebP, lazy images, fixed image dimensions) but the numbers are **unmeasured**. Run PageSpeed Insights on the deployed URL.
- **Screenshot review at 375, 768 and 1440 px of every page:** overflow was tested on all pages, but visual review covered only the pages listed above.
- **WhatsApp on a real phone:** the link format `wa.me/<number>?text=` was verified in the generated message only.
- **Real browsers other than the in-app one** (Safari, Firefox) and screen readers: not tested. Keyboard focus styles and skip link exist; a manual accessibility pass is still recommended.
- **Deployment, live URL, GitHub Actions run:** not done (awaiting your approval to create the repository).
- **Facts and regulatory wording:** not verified by operations staff (see ASSETS-AND-CONFIRMATIONS.md).
