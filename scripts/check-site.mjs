// Post-build checks on dist/: titles, descriptions, headings, canonicals, hreflang, internal links,
// images, structured data, sitemap and privacy-sensitive patterns. Run after `npm run build`.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep, posix } from 'node:path';

const DIST = 'dist';
const BASE = (process.env.BASE_PATH || '/final-choice-official-website').replace(/\/$/, '');
const errors = [];
const warn = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
const files = walk(DIST);
const pages = files.filter((f) => f.endsWith('index.html') || f.endsWith('404.html'));
const rel = (f) => relative(DIST, f).split(sep).join('/');
const exists = (urlPath) => {
  let p = urlPath.split('#')[0].split('?')[0];
  if (BASE && p.startsWith(BASE)) p = p.slice(BASE.length);
  p = decodeURIComponent(p);
  if (!p.startsWith('/')) return true;
  const target = join(DIST, p);
  return existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
};

const titles = new Map();
const descs = new Map();
const canon = new Map();
const hreflangs = new Map();

for (const f of pages) {
  const name = rel(f);
  const html = readFileSync(f, 'utf8');
  if (name === '404.html') continue;
  const isRoot = name === 'index.html';

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) err(name, 'missing <title>');
  else {
    if (title.length > 70) warn.push(`${name}: title is ${title.length} characters`);
    if (!isRoot && titles.has(title)) err(name, `duplicate title also on ${titles.get(title)}`);
    titles.set(title, name);
  }
  if (!desc) err(name, 'missing meta description');
  else {
    if (desc.length > 175) warn.push(`${name}: description is ${desc.length} characters`);
    if (!isRoot && descs.has(desc)) err(name, `duplicate description also on ${descs.get(desc)}`);
    descs.set(desc, name);
  }

  const c = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!c) err(name, 'missing canonical');
  else canon.set(name, c);
  if (!/<meta name="robots" content="[^"]+"/.test(html)) err(name, 'missing robots meta');

  if (isRoot) continue;

  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (h1s.length !== 1) err(name, `${h1s.length} <h1> elements (expected 1)`);
  // heading order: no skipped levels
  const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  levels.forEach((l, i) => { if (i && l > levels[i - 1] + 1) err(name, `heading level jumps from h${levels[i - 1]} to h${l}`); });

  if (!/<html lang="(en-MY|ms-MY)"/.test(html)) err(name, 'missing html lang');
  for (const m of html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)) {
    (hreflangs.get(name) ?? hreflangs.set(name, []).get(name)).push([m[1], m[2]]);
  }
  for (const key of ['og:title', 'og:description', 'og:image', 'og:url']) if (!html.includes(`property="${key}"`)) err(name, `missing ${key}`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { err(name, 'invalid JSON-LD'); }
  }
  if (!html.includes('"BreadcrumbList"') && name !== 'en/index.html' && name !== 'bm/index.html') err(name, 'missing BreadcrumbList');
  if (html.includes('"FAQPage"')) err(name, 'FAQPage markup present (not eligible for this site)');

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    if (!/\salt="/.test(tag)) err(name, `image without alt: ${tag.slice(0, 80)}`);
    if (!/\swidth="/.test(tag) || !/\sheight="/.test(tag)) warn.push(`${name}: image without width/height ${tag.slice(0, 60)}`);
  }
  for (const m of html.matchAll(/(?:src|href|srcset)="([^"]+)"/g)) {
    for (const raw of m[1].split(',').map((s) => s.trim().split(' ')[0])) {
      if (!raw || /^(https?:|mailto:|tel:|#|data:)/.test(raw)) continue;
      if (!exists(raw)) err(name, `broken link/asset ${raw}`);
    }
  }
  // privacy: nothing that looks like a passport / IC number or personal data
  if (/\b\d{6}-\d{2}-\d{4}\b/.test(html)) err(name, 'looks like an IC number');
  if (/\b[A-Z]\d{7,8}\b/.test(html.replace(/<[^>]*>/g, ' ').replace(/\bJTKSM\b/g, ''))) warn.push(`${name}: contains a passport-like token`);
}

// canonical must point to its own page; hreflang must be reciprocal
for (const [name, url] of canon) {
  if (name === 'index.html') continue;
  const expected = name.replace(/index\.html$/, '');
  if (!url.endsWith(`${BASE}/${expected}`)) err(name, `canonical ${url} does not match the page path`);
}
for (const [name, links] of hreflangs) {
  const en = links.find(([l]) => l === 'en-MY')?.[1];
  const bm = links.find(([l]) => l === 'ms-MY')?.[1];
  if (!en || !bm || !links.some(([l]) => l === 'x-default')) { err(name, 'incomplete hreflang set'); continue; }
  const self = canon.get(name);
  if (self !== en && self !== bm) err(name, 'hreflang does not include itself');
  const other = self === en ? bm : en;
  const otherName = other.split(BASE + '/')[1];
  const back = hreflangs.get(`${otherName}index.html`.replace(/\/\/+/g, '/'));
  if (!back) err(name, `hreflang points to ${other}, which has no hreflang`);
}

// sitemap
const sm = readFileSync(join(DIST, 'sitemap.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const l of locs) if (!exists(new URL(l).pathname)) err('sitemap.xml', `lists a page that does not exist: ${l}`);
if (!existsSync(join(DIST, 'robots.txt'))) err('robots.txt', 'missing');

console.log(`${pages.length} pages checked, ${locs.length} sitemap URLs.`);
warn.forEach((w) => console.log(`warning: ${w}`));
if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n` + errors.map((e) => ` - ${e}`).join('\n'));
  process.exit(1);
}
console.log('All site checks passed.');
