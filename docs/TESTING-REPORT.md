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
