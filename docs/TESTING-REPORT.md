# Testing report (19 Oct 2026)

Environment (first section, local): production build (`npm run build`) served by `astro preview` at `http://localhost:4321/final-choice-official-website/`, viewed in the Claude desktop built-in browser. **The site has not been deployed, so nothing here proves the live GitHub Pages site works.**

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

- **Screenshot review at 375, 768 and 1440 px of every page:** overflow was tested on all pages, but visual review covered only the pages listed above.
- **WhatsApp on a real phone:** the link format `wa.me/<number>?text=` was verified in the generated message only.
- **Real browsers other than the in-app one** (Safari, Firefox) and screen readers: not tested. Keyboard focus styles and skip link exist; a manual accessibility pass is still recommended.
- **Facts and regulatory wording:** not verified by operations staff (see ASSETS-AND-CONFIRMATIONS.md).

## Live deployment (20 Oct 2026)

URL: https://yukisph88.github.io/final-choice-official-website/en/ . GitHub Actions run green (build + test:site + deploy). `noindex` and `Disallow: /` confirmed live.

- Live crawl of all 38 sitemap and privacy URLs: every internal link returns 200; every image loads; no horizontal overflow at 375 and 1440 px; all WhatsApp links match `wa.me/60133773333` or `wa.me/60183773333`; the language switcher target exists on every page; the menu button is present on every page; no console errors.
- Maid form on the live site builds the correct WhatsApp hand-off and says WhatsApp was opened, not "received".
- Lighthouse 12 (headless Chrome, live URL, mobile unless noted): Performance 95-98 (home mobile 95, LCP 2.3 s; home desktop 97, LCP 0.8 s), Accessibility 100, Best Practices 100, SEO 66. CLS 0 everywhere. The only failing SEO audit is "page is blocked from indexing", which is the intentional `noindex`; it should reach about 100 once indexing is enabled. Lab results, not field Core Web Vitals.
- Fixed after first audit: generic "Learn more" link text; oversized hero images on mobile (added 480 px variants). Home mobile performance 84 -> 95.
- Still not tested: Safari/Firefox, screen readers, real-phone WhatsApp.

## Premium redesign audit (20 Oct 2026, live)

- **Responsive:** 38 pages at 375, 390, 768, 1024 and 1440 px: no horizontal overflow and no element past the viewport edge (local preview, per-element check).
- **Live crawl (390 px):** 38 pages, every internal link 200, every `wa.me` link matches the two numbers, exactly one H1 per page, `noindex` present on every page, menu button present everywhere. Real Chrome (Lighthouse network log): 0 failed requests and 0 console errors on all six audited pages; every image 200. (An in-app check that reported a few lazy images as "incomplete" was an artefact of the hidden browser pane and below-the-fold `content-visibility`; the same files load with the correct dimensions when requested directly.)
- **Lighthouse 12, live URL (lab):**

| Page | Device | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| Home | Mobile | 96 | 100 | 100 | 66* | 2.1 s | 150 ms | 0 |
| Home | Desktop | 100 | 100 | 100 | 66* | 0.5 s | 0 ms | 0 |
| Foreign workers | Mobile | 98 | 100 | 100 | 66* | 1.8 s | 150 ms | 0 |
| Foreign workers | Desktop | 98 | 100 | 100 | 66* | 0.8 s | 0 ms | 0 |
| Maid agency | Mobile | 93 | 100 | 100 | 66* | 2.4 s | 190 ms | 0 |
| Maid agency | Desktop | 100 | 100 | 100 | 66* | 0.4 s | 0 ms | 0 |

*SEO 66 is below 90 only because of the intentional `noindex` ("Page is blocked from indexing"); every other SEO audit passes. It reaches about 100 when indexing is enabled. The first redesign build scored 81 on home mobile (long style/layout tasks); removing the hero zoom animation and blur and deferring off-screen section rendering raised it to 96. Lab numbers, not field Core Web Vitals.
- **Regression:** `npm run test:site` passes (titles, descriptions, canonicals, hreflang, JSON-LD, sitemap). The two original repositories are unchanged: final-choice-maid-agency HEAD `3ae65a8` and final-choice-foreign-worker HEAD `bc85281` are the same commits as before this work.
- Screenshots (desktop 1440 px and mobile 390 px, top of page): `docs/screenshots/`.
