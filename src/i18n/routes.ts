// Single source of truth for every page URL. The language switcher, hreflang tags, sitemap and
// internal links are generated from this map. A page with no `bm` slug exists in English only:
// it gets no hreflang tags and the switcher sends Malay readers to the Malay homepage instead.

export const LANGS = ['en', 'bm'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';
export const HTML_LANG: Record<Lang, string> = { en: 'en-MY', bm: 'ms-MY' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_MY', bm: 'ms_MY' };
export const LANG_LABEL: Record<Lang, { short: string; long: string }> = {
  en: { short: 'EN', long: 'English' },
  bm: { short: 'BM', long: 'Bahasa Melayu' },
};

type Def = { en: string; bm?: string; group: 'main' | 'fw' | 'maid' };

/** Slugs have no leading or trailing slash; '' is the language homepage. */
export const PAGES = {
  home: { en: '', bm: '', group: 'main' },
  fw: { en: 'foreign-worker-recruitment', bm: 'pengambilan-pekerja-asing', group: 'fw' },
  maid: { en: 'maid-agency-malaysia', bm: 'agensi-pembantu-rumah-malaysia', group: 'maid' },
  about: { en: 'about', bm: 'tentang-kami', group: 'main' },
  contact: { en: 'contact', bm: 'hubungi-kami', group: 'main' },
  faq: { en: 'faq', bm: 'soalan-lazim', group: 'main' },
  privacy: { en: 'privacy-policy', bm: 'dasar-privasi', group: 'main' },

  fwQuota: { en: 'foreign-worker-quota-application', bm: 'permohonan-kuota-pekerja-asing', group: 'fw' },
  fw60k: { en: 'section-60k-application', bm: 'permohonan-seksyen-60k', group: 'fw' },
  fwcms: { en: 'fwcms-fwe-approval', bm: 'kelulusan-fwcms-fwe', group: 'fw' },
  fwRenewal: { en: 'foreign-worker-permit-renewal', group: 'fw' },
  fwDocs: { en: 'foreign-worker-documentation', group: 'fw' },
  fwManufacturing: { en: 'foreign-workers-manufacturing', group: 'fw' },
  fwConstruction: { en: 'foreign-workers-construction', group: 'fw' },
  fwServices: { en: 'foreign-workers-services-sector', group: 'fw' },
  fwPlantation: { en: 'foreign-workers-plantation', group: 'fw' },
  fwAgriculture: { en: 'foreign-workers-agriculture', group: 'fw' },

  maidIndonesian: { en: 'indonesian-maid-malaysia', bm: 'pembantu-rumah-indonesia', group: 'maid' },
  maidFilipino: { en: 'filipino-maid-malaysia', bm: 'pembantu-rumah-filipina', group: 'maid' },
  maidBiodata: { en: 'maid-biodata', bm: 'biodata-pembantu-rumah', group: 'maid' },
  maidRenewal: { en: 'maid-permit-renewal', group: 'maid' },
  maidChildcare: { en: 'maid-for-childcare', group: 'maid' },
  maidElderly: { en: 'maid-for-elderly-care', group: 'maid' },
  maidProcess: { en: 'maid-hiring-process', bm: 'proses-mengambil-pembantu-rumah', group: 'maid' },
} as const satisfies Record<string, Def>;

export type PageKey = keyof typeof PAGES;
export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

export const hasLang = (key: PageKey, lang: Lang): boolean => lang === 'en' || 'bm' in PAGES[key];
export const slugOf = (key: PageKey, lang: Lang): string => {
  const p = PAGES[key] as Def;
  return (lang === 'bm' ? p.bm : p.en) ?? p.en;
};

/** Site path including the language prefix, e.g. ('bm','fw') → '/bm/pengambilan-pekerja-asing/'. */
export function path(lang: Lang, key: PageKey, hash = ''): string {
  const s = slugOf(key, lang);
  return `/${lang}/${s ? `${s}/` : ''}${hash ? `#${hash}` : ''}`;
}

/** Path to the page in `lang`, or that language's homepage when no translation exists. */
export const pathOrHome = (lang: Lang, key: PageKey): string => (hasLang(key, lang) ? path(lang, key) : path(lang, 'home'));

export type Alternates = Partial<Record<Lang, string>>;
export const alternatesFor = (key: PageKey): Alternates => {
  const out: Alternates = {};
  for (const l of LANGS) if (hasLang(key, l)) out[l] = path(l, key);
  return out;
};

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'bm' : 'en');
