// copies the repo's img/ folder into dist/img after build
import { cpSync } from 'fs';
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const src = resolve(process.cwd(), 'img');
const dest = resolve(process.cwd(), 'dist', 'img');

if (!existsSync(src)) {
  console.warn('No img/ folder found in repo root. Skipping copy.');
  process.exit(0);
}

if (!existsSync(dest)) {
  mkdirSync(dest, { recursive: true });
}

try {
  cpSync(src, dest, { recursive: true });
  console.log('Copied img/ -> dist/img');
} catch (err) {
  console.error('Failed to copy images:', err);
  process.exit(1);
}
