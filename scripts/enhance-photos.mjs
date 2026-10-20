// Regenerates the website photos from the untouched originals in photo-source/ with gentle, consistent
// corrections (brightness, contrast, colour, sharpness) so the set looks clean and uniform.
// Run: node scripts/enhance-photos.mjs   (safe to repeat: it always starts from photo-source/)
import sharp from 'sharp';
import { existsSync, mkdirSync, copyFileSync } from 'node:fs';

const sets = [
  { src: 'photo-source/training-table.webp', out: 'public/images/training/training-table', sizes: [1280, 800, 480], b: 1.06 },
  { src: 'photo-source/training-group.webp', out: 'public/images/training/training-group', sizes: [1080, 800, 480], b: 1.06 },
  { src: 'photo-source/training-bowls.webp', out: 'public/images/training/training-bowls', sizes: [1080, 800, 480], b: 1.06 },
  { src: 'photo-source/training-portrait.webp', out: 'public/images/training/training-portrait', sizes: [810, 600, 400], b: 1.06 },
  { src: 'photo-source/sector-manufacturing.webp', out: 'public/images/sector-manufacturing-photo', sizes: [1280, 960, 640], b: 1.1 },
  { src: 'photo-source/sector-agriculture.webp', out: 'public/images/sector-agriculture-photo', sizes: [1280, 640], b: 1.08 },
];

mkdirSync('photo-source', { recursive: true });
// first run: keep the current largest files as the originals
const seed = {
  'photo-source/training-table.webp': 'public/images/training/training-table-1280.webp',
  'photo-source/training-group.webp': 'public/images/training/training-group-1080.webp',
  'photo-source/training-bowls.webp': 'public/images/training/training-bowls-1080.webp',
  'photo-source/training-portrait.webp': 'public/images/training/training-portrait-810.webp',
  'photo-source/sector-manufacturing.webp': 'public/images/sector-manufacturing-photo-1280.webp',
  'photo-source/sector-agriculture.webp': 'public/images/sector-agriculture-photo-1280.webp',
};
for (const [dst, from] of Object.entries(seed)) if (!existsSync(dst)) copyFileSync(from, dst);

for (const s of sets) {
  for (const w of s.sizes) {
    await sharp(s.src)
      .resize({ width: w, withoutEnlargement: true })
      .modulate({ brightness: s.b, saturation: 1.07 })
      .linear(1.06, -5) // gentle contrast
      .sharpen({ sigma: 0.7, m1: 0.9, m2: 1.6 })
      .webp({ quality: 80 })
      .toFile(`${s.out}-${w}.webp`);
  }
}
console.log('photos regenerated');
