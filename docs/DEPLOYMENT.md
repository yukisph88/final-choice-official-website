# Deployment, custom domain and Search Console

The site has **not** been published yet. Nothing below has been run against GitHub.

## 1. First publish (preview on GitHub Pages)

1. Create an empty repository `final-choice-official-website` under the `yukisph88` account (public repositories are free for Pages).
2. In this folder:
   ```bash
   git remote add origin https://github.com/yukisph88/final-choice-official-website.git
   git push -u origin main
   ```
3. Repository **Settings > Pages > Build and deployment > Source: GitHub Actions**.
4. The workflow `.github/workflows/deploy.yml` builds, runs `npm run test:site` and deploys.
5. Open `https://yukisph88.github.io/final-choice-official-website/en/` and verify the live pages (the workflow run must be green first).

While `seo.indexing` is `false` every page carries `noindex` and `robots.txt` blocks crawlers, so the preview will not compete with the existing sites.

## 2. Custom domain later (no rebuild needed)

1. Buy/choose the domain (for example `finalchoice.com.my`) and decide the primary host (`www.` recommended).
2. Repository variables (Settings > Secrets and variables > Actions > Variables): `SITE_URL=https://www.example.com.my`, `BASE_PATH=/`.
3. Add `public/CNAME` containing `www.example.com.my`.
4. DNS: `CNAME www -> yukisph88.github.io`; for the apex use GitHub's four A records (185.199.108.153, .109.153, .110.153, .111.153) and redirect apex to `www` at the registrar.
5. Settings > Pages > Custom domain, tick **Enforce HTTPS** once the certificate is ready.
6. In `src/data/site.ts` set `seo.indexing: true` (and `privacyPolicyApproved: true` once approved), push, and confirm `robots.txt` now allows crawling and the sitemap URLs use the new domain.

## 3. Google Search Console

1. Add a **Domain property** (DNS TXT verification) so both `www` and apex are covered. A URL-prefix property with the HTML tag also works: put the content value in `seo.googleSiteVerification`.
2. Submit `https://www.example.com.my/sitemap.xml`.
3. Use URL Inspection on the home page, `/en/foreign-worker-recruitment/` and `/en/maid-agency-malaysia/`; Request Indexing.
4. After 1-2 weeks check Pages (indexing), Performance (queries for the keyword themes), and Core Web Vitals.

## 4. Analytics

None is installed. If you add Google Analytics 4, load it only after consent and update the privacy policy first. The site already pushes click events to `window.dataLayer` if one exists.

## 5. Optional free form endpoint

Set `forms.endpoint` and `forms.accessKey` in `src/data/site.ts` (for example a Web3Forms key, which is designed to be public). The form then shows "received" only when the service confirms. Check the service's free quota and terms before enabling; this is a decision for you.
