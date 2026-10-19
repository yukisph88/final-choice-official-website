// Short page names for breadcrumbs and footer links (the page H1s are too long for those places).
import type { Lang, PageKey } from './routes';

export const SHORT: Record<PageKey, { en: string; bm: string }> = {
  home: { en: 'Home', bm: 'Utama' },
  fw: { en: 'Foreign worker recruitment', bm: 'Pengambilan pekerja asing' },
  fwQuota: { en: 'Quota application', bm: 'Permohonan kuota' },
  fw60k: { en: 'Section 60K application', bm: 'Permohonan Seksyen 60K' },
  fwcms: { en: 'FWCMS / FWe Approval', bm: 'FWCMS / Kelulusan FWe' },
  fwRenewal: { en: 'Permit renewal', bm: 'Pembaharuan permit' },
  fwDocs: { en: 'Documentation', bm: 'Dokumentasi' },
  fwManufacturing: { en: 'Manufacturing', bm: 'Pembuatan' },
  fwConstruction: { en: 'Construction', bm: 'Pembinaan' },
  fwServices: { en: 'Services sector', bm: 'Perkhidmatan' },
  fwPlantation: { en: 'Plantation', bm: 'Perladangan' },
  fwAgriculture: { en: 'Agriculture', bm: 'Pertanian' },
  maid: { en: 'Maid agency Malaysia', bm: 'Agensi pembantu rumah' },
  maidIndonesian: { en: 'Indonesian maid', bm: 'Pembantu Indonesia' },
  maidFilipino: { en: 'Filipino maid', bm: 'Pembantu Filipina' },
  maidBiodata: { en: 'Maid biodata', bm: 'Biodata pembantu' },
  maidRenewal: { en: 'Maid permit renewal', bm: 'Pembaharuan permit' },
  maidChildcare: { en: 'Childcare helper', bm: 'Pembantu jaga anak' },
  maidElderly: { en: 'Elderly care helper', bm: 'Pembantu jaga warga emas' },
  maidProcess: { en: 'Hiring process', bm: 'Proses pengambilan' },
  about: { en: 'About us', bm: 'Tentang kami' },
  faq: { en: 'FAQ', bm: 'Soalan lazim' },
  contact: { en: 'Contact', bm: 'Hubungi' },
  privacy: { en: 'Privacy policy', bm: 'Dasar privasi' },
};

export const shortLabel = (key: PageKey, lang: Lang) => SHORT[key][lang];
