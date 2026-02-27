import fs from 'node:fs';
import path from 'node:path';

const enableIndexing = process.env.ENABLE_INDEXING !== 'false';
const xRobotsTag = process.env.X_ROBOTS_TAG || 'noindex, nofollow';
const siteEnv = process.env.SITE_ENV || 'production';

const lines = [
  '/admin/*',
  '  X-Frame-Options: DENY',
  '  X-Content-Type-Options: nosniff',
  '  Referrer-Policy: same-origin',
  '',
];

if (!enableIndexing) {
  lines.push('/*');
  lines.push(`  X-Robots-Tag: ${xRobotsTag}`);
  lines.push('');
}

const output = `${lines.join('\n')}\n`;
const target = path.join(process.cwd(), 'public', '_headers');

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, output, 'utf8');

console.log(`Generated public/_headers for SITE_ENV=${siteEnv}, ENABLE_INDEXING=${String(enableIndexing)}`);
