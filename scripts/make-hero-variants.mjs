// Creates the 480 px hero variants used by the home page srcset (run once; output is committed).
import sharp from 'sharp';
const jobs = [
  ['public/images/hero-foreign-workers-1200.webp', 'public/images/hero-foreign-workers-480.webp'],
  ['public/images/home-helper-housekeeping-1024.webp', 'public/images/home-helper-housekeeping-480.webp'],
];
for (const [src, out] of jobs) await sharp(src).resize({ width: 480 }).webp({ quality: 78 }).toFile(out);
console.log('done');
