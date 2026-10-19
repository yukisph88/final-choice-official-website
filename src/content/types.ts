import type { PageKey } from '../i18n/routes';

export interface QA { q: string; a: string }

export interface Block {
  h2: string;
  id?: string;
  paras?: string[];
  bullets?: string[];
  steps?: { t: string; d: string }[];
  cards?: { icon: string; t: string; d: string; to?: PageKey }[];
  /** Cautionary note (limits, "requirements change"). */
  note?: string;
  sources?: { label: string; url: string }[];
  /** Alternate background for rhythm. */
  tint?: boolean;
}

export interface PageContent {
  title: string; // <title>, ≤ ~60 chars
  description: string; // meta description, ≤ ~160 chars
  h1: string;
  eyebrow: string;
  lead: string;
  blocks: Block[];
  faq?: QA[];
  related?: PageKey[];
  /** Pre-filled WhatsApp message for this page. */
  wa: string;
  /** Page hero image (WebP in /public/images, with a 2× variant). */
  image?: { src: string; src2: string; alt: string; w: number; h: number };
  /** Show the enquiry form for this page's line (foreign workers / maids) at the end. */
  form?: boolean;
}

export type PageSet = Partial<Record<PageKey, { en: PageContent; bm?: PageContent }>>;

/** Shared official sources (government websites). Requirements change: always link, never copy rules. */
export const SRC = {
  jtksm: { label: 'Labour Department Peninsular Malaysia (JTKSM)', url: 'https://jtksm.mohr.gov.my' },
  imi: { label: 'Immigration Department of Malaysia', url: 'https://www.imi.gov.my' },
  mohr: { label: 'Ministry of Human Resources', url: 'https://www.mohr.gov.my' },
  fomema: { label: 'FOMEMA (foreign worker medical examination)', url: 'https://www.fomema.com.my' },
  perkeso: { label: 'PERKESO / SOCSO', url: 'https://www.perkeso.gov.my' },
  myfuture: { label: 'MyFutureJobs', url: 'https://www.myfuturejobs.gov.my' },
} as const;

export const SRC_BM = {
  jtksm: { label: 'Jabatan Tenaga Kerja Semenanjung Malaysia (JTKSM)', url: 'https://jtksm.mohr.gov.my' },
  imi: { label: 'Jabatan Imigresen Malaysia', url: 'https://www.imi.gov.my' },
  mohr: { label: 'Kementerian Sumber Manusia', url: 'https://www.mohr.gov.my' },
  fomema: { label: 'FOMEMA (pemeriksaan kesihatan pekerja asing)', url: 'https://www.fomema.com.my' },
  perkeso: { label: 'PERKESO / SOCSO', url: 'https://www.perkeso.gov.my' },
  myfuture: { label: 'MyFutureJobs', url: 'https://www.myfuturejobs.gov.my' },
} as const;
