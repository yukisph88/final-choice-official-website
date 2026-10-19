// schema.org JSON-LD builders. Only facts that are also visible on the page are used.
// No Review/AggregateRating (no verified reviews), no JobPosting (these are not vacancies) and no
// FAQPage: Google limits FAQ rich results to well-known government and health sites, so it would not be eligible.
import { site } from '../data/site';
import { absUrl, asset } from './urls';
import { HTML_LANG, path, type Lang } from '../i18n/routes';

const ORG_ID = () => absUrl('/#organization');
const img = (p: string) => new URL(asset(p), import.meta.env.SITE).toString();

const DESCRIPTION: Record<Lang, string> = {
  en: 'Licensed private employment agency in Kuala Lumpur assisting employers with foreign worker recruitment and applications, and families with Indonesian and Filipino domestic helper placement.',
  bm: 'Agensi pekerjaan swasta berlesen di Kuala Lumpur yang membantu majikan dengan pengambilan dan permohonan pekerja asing, serta keluarga dengan penempatan pembantu rumah Indonesia dan Filipina.',
};

export function organizationSchema(lang: Lang) {
  const c = site.company;
  const sameAs = Object.values(site.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    '@id': ORG_ID(),
    name: c.brandName,
    legalName: c.legalName,
    url: absUrl(path(lang, 'home')),
    logo: img('images/logo-final-choice.png'),
    image: img(site.seo.defaultOgImage),
    description: DESCRIPTION[lang],
    telephone: `+${site.contact.fw.wa}`,
    email: c.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.address.street,
      postalCode: c.address.postcode,
      addressLocality: c.address.city,
      addressRegion: c.address.state,
      addressCountry: c.address.country,
    },
    areaServed: c.serviceAreas.map((a) => ({ '@type': 'AdministrativeArea', name: a })),
    openingHoursSpecification: c.hours.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: [...h.days], opens: h.opens, closes: h.closes })),
    identifier: [
      { '@type': 'PropertyValue', propertyID: 'SSM Company Registration No.', value: c.registrationNo },
      { '@type': 'PropertyValue', propertyID: 'JTKSM Private Employment Agency Licence', value: c.licence },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'foreign worker enquiries', telephone: `+${site.contact.fw.wa}`, areaServed: 'MY', availableLanguage: ['English', 'Malay'] },
      { '@type': 'ContactPoint', contactType: 'domestic helper enquiries', telephone: `+${site.contact.maid.wa}`, areaServed: 'MY', availableLanguage: ['English', 'Malay'] },
    ],
    knowsLanguage: ['en-MY', 'ms-MY'],
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absUrl('/#website'),
    name: site.company.brandName,
    url: absUrl(path(lang, 'home')),
    inLanguage: HTML_LANG[lang],
    publisher: { '@id': ORG_ID() },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: absUrl(c.path) })),
  };
}

export function serviceSchema(s: { name: string; description: string; path: string; lang: Lang }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: absUrl(s.path),
    inLanguage: HTML_LANG[s.lang],
    provider: { '@id': ORG_ID() },
    areaServed: { '@type': 'Country', name: 'Malaysia' },
  };
}
