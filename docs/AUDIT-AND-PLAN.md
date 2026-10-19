# Audit and implementation plan (19 Oct 2026)

## What was inspected

| Reference | Method | Result |
|---|---|---|
| Existing foreign worker site (`yukisph88.github.io/final-choice-foreign-worker/`) | Page fetched **and** repository cloned (read-only) | Fully inspected: content, JSON-LD, images, launch checklist |
| Existing maid agency site (`.../final-choice-maid-agency/en/`) | Page fetched and local repository (this machine) read | Fully inspected |
| innovedge.com.my | Page fetched (text extraction only) | Layout patterns only; colours, fonts and motion could **not** be confirmed |
| jaya-baru.com/services/ | Page fetched (text extraction only) | Layout patterns only |
| foreignworkers.com.my/maid-agency-malaysia/ | Page fetched (text extraction only) | Topic and heading structure only |

No competitor wording, images, logos or designs were copied. Visual rendering of the three inspiration sites was not seen.

## Brand and identity (verified)

- Company: Agensi Pekerjaan Final Choice Sdn Bhd. Company No. 201201028954 (1013441-H). Licence JTKSM 483 (Category C).
- Office: No. 58, Jalan Mutiara Barat 6, Taman Mutiara Barat, 56000 Kuala Lumpur. Hours Mon-Fri 09:00-18:00, Sat 09:00-13:00.
- Email apfinalchoice@gmail.com. Logo and favicon reused **unchanged** from the existing sites. Palette taken from the logo: navy `#0a1a5c`, blue `#0162c7`, sky `#30aced`. An amber accent (`#b45309`) was added to tell the maid pathway apart from the foreign worker pathway.
- Fonts: Montserrat (headings) and IBM Plex Sans (body), self-hosted through Fontsource (no Google Fonts request).

## Findings on the existing sites

Foreign worker site: strong, cautious wording and a good process; but single page (no pages for quota, 60K, FWCMS or sectors), enquiry form said both "not sent yet" and "received", no consent checkbox, contact form late on the page, no breadcrumbs.
Maid site: complete bilingual Astro site; but the WhatsApp-only form, prices shown as final although marked provisional, a public "Staff Login" link, and some empty image alt text.
Both: GitHub Pages cannot do server redirects; two sites target overlapping brand queries.

Contact numbers differ: foreign worker site **013-377 3333**, maid site **018-377 3333**, logo mascot 011-1852 3311, and the foreign worker repo's own checklist lists three more. The new site uses 013-377 3333 for foreign workers and 018-377 3333 for maids (your instruction); please confirm.

## Reuse decisions

| Item | Decision |
|---|---|
| Maid biodata directory | **Linked** (not rebuilt). Existing site stays the single source. |
| Existing foreign worker landing page | Linked from docs; not needed in navigation as its content is now covered by dedicated pages. |
| Staff portal / Supabase | **Not copied.** Not part of version 1. Real maid records and photos never copied. |
| Client logos on the foreign worker site | **Not reused**: permission to show each logo is not documented. |
| Stock photos (hero, 5 sectors, maid hero) | Reused from your existing sites. They are licensed stock; replace with your own when available. |

## Plan carried out

1. New project in a **separate folder** (`final-choice-official-website`), existing repositories untouched.
2. Page registry with English and Malay URLs; one template; content in typed files.
3. 24 English pages and 14 Malay pages (priority pages); sitemap, robots, hreflang, canonicals, JSON-LD.
4. Separate foreign worker and maid enquiry forms (WhatsApp hand-off, honest status, consent, honeypot, duplicate guard).
5. Post-build checks, GitHub Actions workflow, documentation.
6. **Not done (needs your approval):** creating the GitHub repository, enabling Pages, publishing.
