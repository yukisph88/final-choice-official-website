// Shared navigation data for the header dropdowns and the footer. Every entry points at an existing page
// in the route registry; entries without a Malay page are skipped automatically in Malay.
import { hasLang, path, type Lang, type PageKey } from './routes';

type L = { en: string; bm: string };
export interface NavItem { key: PageKey; label: L; hash?: string }
export interface NavSection { title: L; link?: NavItem; items: NavItem[] }
export interface NavGroup { id: 'fw' | 'maid'; hub: PageKey; sections: NavSection[]; all: { label: L; key: PageKey } }

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'fw',
    hub: 'fw',
    sections: [
      {
        title: { en: 'Services', bm: 'Perkhidmatan' },
        items: [
          { key: 'fw', label: { en: 'Foreign Worker Recruitment', bm: 'Pengambilan Pekerja Asing' } },
          { key: 'fwQuota', label: { en: 'Quota Application', bm: 'Permohonan Kuota' } },
          { key: 'fw60k', label: { en: 'Section 60K Application', bm: 'Permohonan Seksyen 60K' } },
          { key: 'fwcms', label: { en: 'FWCMS / FWe Approval', bm: 'FWCMS / Kelulusan FWe' } },
          { key: 'fwRenewal', label: { en: 'Permit Renewal', bm: 'Pembaharuan Permit' } },
          { key: 'fwDocs', label: { en: 'Documentation', bm: 'Dokumentasi' } },
        ],
      },
      {
        title: { en: 'Industries We Serve', bm: 'Sektor Yang Kami Layani' },
        link: { key: 'fw', hash: 'sectors', label: { en: 'Industries We Serve', bm: 'Sektor Yang Kami Layani' } },
        items: [
          { key: 'fwManufacturing', label: { en: 'Manufacturing', bm: 'Pembuatan' } },
          { key: 'fwConstruction', label: { en: 'Construction', bm: 'Pembinaan' } },
          { key: 'fwServices', label: { en: 'Services Sector', bm: 'Perkhidmatan' } },
          { key: 'fwPlantation', label: { en: 'Plantation', bm: 'Perladangan' } },
          { key: 'fwAgriculture', label: { en: 'Agriculture', bm: 'Pertanian' } },
        ],
      },
    ],
    all: { key: 'fw', label: { en: 'View All Foreign Worker Services', bm: 'Lihat Semua Perkhidmatan Pekerja Asing' } },
  },
  {
    id: 'maid',
    hub: 'maid',
    sections: [
      {
        title: { en: 'Maid Recruitment', bm: 'Pengambilan Pembantu Rumah' },
        items: [
          { key: 'maidIndonesian', label: { en: 'Indonesian Maid', bm: 'Pembantu Indonesia' } },
          { key: 'maidFilipino', label: { en: 'Filipino Maid', bm: 'Pembantu Filipina' } },
          { key: 'maidBiodata', label: { en: 'View Maid Biodata', bm: 'Lihat Biodata Pembantu' } },
        ],
      },
      {
        title: { en: 'Care & Support', bm: 'Penjagaan & Sokongan' },
        items: [
          { key: 'maidChildcare', label: { en: 'Childcare Maid', bm: 'Pembantu Jaga Anak' } },
          { key: 'maidElderly', label: { en: 'Elderly Care Maid', bm: 'Pembantu Jaga Warga Emas' } },
          { key: 'maidRenewal', label: { en: 'Maid Permit Renewal', bm: 'Pembaharuan Permit Pembantu' } },
          { key: 'maidProcess', label: { en: 'Hiring Process', bm: 'Proses Pengambilan' } },
        ],
      },
    ],
    all: { key: 'maid', label: { en: 'View All Maid Services', bm: 'Lihat Semua Perkhidmatan Pembantu Rumah' } },
  },
];

export interface ResolvedItem { href: string; label: string; key: PageKey; current: boolean }
export interface ResolvedSection { title: string; link: string | null; items: ResolvedItem[] }
export interface ResolvedGroup { id: 'fw' | 'maid'; hub: string; sections: ResolvedSection[]; all: { href: string; label: string } }

/** Resolve the nav data for one language: only pages that exist, with final site paths. */
export function resolveNav(lang: Lang, currentPath: string): ResolvedGroup[] {
  return NAV_GROUPS.map((g) => ({
    id: g.id,
    hub: path(lang, g.hub),
    sections: g.sections
      .map((s) => ({
        title: s.title[lang],
        link: s.link ? path(lang, s.link.key, s.link.hash) : null,
        items: s.items.filter((i) => hasLang(i.key, lang)).map((i) => ({ key: i.key, href: path(lang, i.key, i.hash), label: i.label[lang], current: path(lang, i.key) === currentPath })),
      }))
      .filter((s) => s.items.length > 0 || s.link),
    all: { href: path(lang, g.all.key), label: g.all.label[lang] },
  }));
}
