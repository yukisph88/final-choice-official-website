// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are set by the GitHub Actions workflow.
// GitHub Pages project site:  SITE_URL=https://yukisph88.github.io  BASE_PATH=/final-choice-official-website
// Custom domain launch:       SITE_URL=https://www.your-domain.com   BASE_PATH=/
const site = process.env.SITE_URL || 'https://yukisph88.github.io';
const base = process.env.BASE_PATH || '/final-choice-official-website';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  compressHTML: true,
});
