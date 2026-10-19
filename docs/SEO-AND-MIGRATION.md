# SEO plan, migration strategy and Google Business Profile

## Keyword-to-page map (one primary intent per page)

| Intent | Page |
|---|---|
| foreign worker agency / recruitment Malaysia | `/en/foreign-worker-recruitment/` |
| foreign worker quota application | `/en/foreign-worker-quota-application/` |
| Section 60K application Malaysia | `/en/section-60k-application/` |
| FWCMS application, FWe Approval | `/en/fwcms-fwe-approval/` |
| foreign worker permit renewal | `/en/foreign-worker-permit-renewal/` |
| foreign worker documentation | `/en/foreign-worker-documentation/` |
| manufacturing / construction / services / plantation / agriculture workers | one page each under `/en/foreign-workers-.../` |
| maid agency Malaysia (KL, Selangor) | `/en/maid-agency-malaysia/` |
| Indonesian maid / Filipino maid | `/en/indonesian-maid-malaysia/`, `/en/filipino-maid-malaysia/` |
| maid biodata | `/en/maid-biodata/` (links to the existing directory) |
| maid permit renewal, childcare, elderly care, hiring process | one page each |

Malay equivalents exist for: home, both landing pages, about, contact, FAQ, privacy, quota, Section 60K, FWCMS, Indonesian maid, Filipino maid, biodata, hiring process. Pages without a Malay version have no hreflang and no link from the Malay footer.

## Done in the build

Unique title and description per page (checked by `npm run test:site`), one H1, no skipped heading levels, self-referencing canonicals, reciprocal hreflang (en-MY, ms-MY, x-default), Open Graph and Twitter tags, `EmploymentAgency` + `WebSite` JSON-LD on the home page, `Service` on service pages, `BreadcrumbList` on all inner pages, sitemap with alternates, robots.txt, favicon, descriptive alt text, lazy-loaded below-the-fold images, preloaded fonts.

**FAQPage markup is intentionally not used.** Google restricts FAQ rich results to well-known government and health sites, so a commercial agency is not eligible; the visible FAQ is still useful to readers.

**Local SEO:** the office address is verified, and the stated service area is Kuala Lumpur and Selangor (maid site). No fake branch or city pages were created. The foreign worker site says "across Malaysia"; please confirm which wording is correct.

## Canonical and migration strategy (GitHub Pages limits)

GitHub Pages cannot issue server-side 301 redirects. Static HTML can only use `<link rel="canonical">` and a `<meta http-equiv="refresh">` page. Google treats canonicals as a hint, so migration is gradual.

**Recommended primary URLs (once the domain is confirmed):**

| Intent | Primary (new site) | Old page |
|---|---|---|
| Foreign worker recruitment | `/en/foreign-worker-recruitment/` | `final-choice-foreign-worker` home |
| Maid agency | `/en/maid-agency-malaysia/` | `final-choice-maid-agency/en/` |
| Maid biodata directory | **stays on the old maid site** (`/en/maids/`), linked from `/en/maid-biodata/` | n/a |

**Safe checklist (do not do early):**
1. Publish the new site on the final domain with `noindex` still on; verify every page (docs/TESTING-REPORT.md).
2. Switch indexing on and submit the sitemap in Search Console. Wait until the key pages are indexed (typically weeks).
3. **Only then**, and only with your approval, edit the old repositories: change each old page's `<link rel="canonical">` to the matching new URL, and add a visible "We have moved" link. Do not change old canonicals before the new domain is confirmed.
4. Keep old pages reachable (no deletion) so external links keep working. Keep the biodata directory self-canonical.
5. Do not duplicate old pages' wording on the new site; the new pages are original to avoid competing duplicates.
6. Update the old sites' WhatsApp/contact details consistently so the business name, address and phone (NAP) match everywhere.
7. Monitor Search Console (both properties) for coverage and duplicate-canonical warnings for 4-8 weeks.

## Google Business Profile checklist

- [ ] Name exactly: Agensi Pekerjaan Final Choice Sdn Bhd (or the brand "Final Choice" consistently)
- [ ] Address exactly as on the site: No. 58, Jalan Mutiara Barat 6, Taman Mutiara Barat, 56000 Kuala Lumpur
- [ ] Primary category: Employment agency (add related categories only if accurate)
- [ ] Phone: choose one primary number; add the other as additional (both appear on the site)
- [ ] Website: the new site home page; hours match (Mon-Fri 09:00-18:00, Sat 09:00-13:00)
- [ ] Service area: Kuala Lumpur and Selangor (confirm)
- [ ] Photos: real office exterior/interior, signboard, team (with consent); no stock photos
- [ ] Services list matches the site; description written in your own words
- [ ] Ask satisfied clients for genuine reviews; never buy or fabricate reviews
- [ ] Put the profile URL in `social.googleBusinessProfile` in `src/data/site.ts`
