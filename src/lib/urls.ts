import { site } from '../data/site';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // '' or '/final-choice-official-website'

/** Site-relative link that respects the GitHub Pages base path. Pass paths like '/en/about/'. */
export function href(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${p}`;
}

/** Absolute URL for canonical tags, hreflang, sitemap and structured data. */
export function absUrl(path: string): string {
  return new URL(href(path), import.meta.env.SITE).toString();
}

/** Asset inside /public, e.g. asset('images/logo.png'). */
export function asset(path: string): string {
  return href(path.replace(/^\//, ''));
}

export type Line = 'fw' | 'maid';
export const lineInfo = (line: Line) => site.contact[line];
export const whatsappLink = (line: Line, message: string) => `https://wa.me/${site.contact[line].wa}?text=${encodeURIComponent(message)}`;
export const telLink = (line: Line) => `tel:+${site.contact[line].wa}`;
