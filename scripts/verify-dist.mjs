import fs from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const siteEnv = process.env.SITE_ENV || 'production';
const enableIndexing = process.env.ENABLE_INDEXING !== 'false';
const distDir = path.join(cwd, 'dist');
const headersPath = path.join(distDir, '_headers');
const draftPostPath = path.join(distDir, 'posts', 'astro-decap-netlify-stack', 'index.html');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(fs.existsSync(path.join(distDir, 'index.html')), 'dist/index.html is missing');
assert(fs.existsSync(path.join(distDir, 'posts', 'index.html')), 'dist/posts/index.html is missing');
assert(fs.existsSync(headersPath), 'dist/_headers is missing');

const headers = fs.readFileSync(headersPath, 'utf8');
assert(headers.includes('/admin/*'), 'admin security headers are missing');

if (enableIndexing) {
  assert(!headers.includes('X-Robots-Tag: noindex, nofollow'), 'production build should not include sitewide noindex header');
  assert(!fs.existsSync(draftPostPath), 'draft post page should not exist in production build');
} else {
  assert(headers.includes('X-Robots-Tag: noindex, nofollow'), 'preview build should include sitewide noindex header');
  assert(fs.existsSync(draftPostPath), 'draft post page should exist in preview build');
}

console.log(`dist verification passed for SITE_ENV=${siteEnv}, ENABLE_INDEXING=${String(enableIndexing)}`);
