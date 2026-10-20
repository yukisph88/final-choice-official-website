import { fwPages } from './fw';
import { maidPages } from './maid';
import { mainPages } from './main';
import type { PageContent, QA } from './types';
import { PAGE_KEYS, hasLang, type Lang, type PageKey } from '../i18n/routes';

const all = { ...mainPages, ...fwPages, ...maidPages };

/** Content for a page in a language. Throws at build time if a page that should exist has no content. */
export function getPage(key: PageKey, lang: Lang): PageContent {
  const set = all[key];
  const page = set && (lang === 'en' ? set.en : set.bm);
  if (!page) throw new Error(`Missing ${lang} content for page "${key}"`);
  return page;
}

export function validateContent() {
  for (const key of PAGE_KEYS) {
    if (key === 'home') continue;
    getPage(key, 'en');
    if (hasLang(key, 'bm')) getPage(key, 'bm');
  }
}

/** FAQ page: general questions plus those from the two landing pages. */
export function faqGroups(lang: Lang): { title: string; items: QA[] }[] {
  const fw = getPage('fw', lang).faq ?? [];
  const maid = getPage('maid', lang).faq ?? [];
  const extra = lang === 'en'
    ? { fw: (getPage('fwQuota', 'en').faq ?? []).slice(0, 2).concat((getPage('fw60k', 'en').faq ?? []).slice(1, 2), getPage('fwcms', 'en').faq?.slice(0, 2) ?? []), maid: (getPage('maidProcess', 'en').faq ?? []).slice(0, 1) }
    : { fw: (getPage('fwQuota', 'bm').faq ?? []).slice(0, 2).concat(getPage('fwcms', 'bm').faq?.slice(0, 2) ?? []), maid: [] as QA[] };
  return [
    { title: lang === 'en' ? 'Foreign worker recruitment and applications' : 'Pengambilan dan permohonan pekerja asing', items: [...fw, ...extra.fw] },
    { title: lang === 'en' ? 'Maid services (domestic helpers)' : 'Pembantu rumah', items: [...maid, ...extra.maid] },
  ];
}
