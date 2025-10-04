// Simple image compression/resizing script using sharp
// Generates responsive widths for images in public/images/projects and public/images/team
// Output files: name-400w.ext, name-800w.ext, name-1200w.ext

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const roots = [
  path.resolve('public', 'images', 'projects'),
  path.resolve('public', 'images', 'team')
];

const widths = [400, 800, 1200];

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  const dir = path.dirname(file);
  const base = path.basename(file, ext);

  for (const w of widths) {
    const out = path.join(dir, `${base}-${w}w${ext}`);
    if (fs.existsSync(out)) continue;
    await sharp(file)
      .resize({ width: w, withoutEnlargement: true })
      .toFile(out);
    console.log('Wrote', out);
  }
}

async function run() {
  for (const root of roots) {
    if (!fs.existsSync(root)) {
      console.log('Skip missing directory:', root);
      continue;
    }
    const entries = fs.readdirSync(root);
    for (const entry of entries) {
      const full = path.join(root, entry);
      const stat = fs.statSync(full);
      if (stat.isFile()) {
        await processImage(full);
      }
    }
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

