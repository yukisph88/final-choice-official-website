// Bilingual sitemap generated from the real page registry. Only canonical URLs are listed, each with hreflang
// alternates (en-MY, ms-MY, x-default) when the page exists in both languages. The privacy page is listed only once approved.
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { absUrl } from '../lib/urls';
import { LANGS, HTML_LANG, PAGE_KEYS, hasLang, path, alternatesFor } from '../i18n/routes';

export const GET: APIRoute = () => {
  const urls: string[] = [];
  for (const key of PAGE_KEYS) {
    if (key === 'privacy' && !site.seo.privacyPolicyApproved) continue;
    const alts = alternatesFor(key);
    const both = LANGS.every((l) => alts[l]);
    for (const lang of LANGS) {
      if (!hasLang(key, lang)) continue;
      const links = both
        ? LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${HTML_LANG[l]}" href="${absUrl(alts[l]!)}"/>`).join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${absUrl(alts.en!)}"/>`
        : '';
      urls.push(`  <url><loc>${absUrl(path(lang, key))}</loc>${links}</url>`);
    }
  }
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
