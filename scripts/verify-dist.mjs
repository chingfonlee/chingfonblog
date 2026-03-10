import fs from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const siteEnv = process.env.SITE_ENV || 'production';
const enableIndexing = process.env.ENABLE_INDEXING !== 'false';
const distDir = path.join(cwd, 'dist');
const headersPath = path.join(distDir, '_headers');
const postsContentDir = path.join(cwd, 'src', 'content', 'posts');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function parseDraftPostSlugs() {
  if (!fs.existsSync(postsContentDir)) {
    return [];
  }

  const files = fs.readdirSync(postsContentDir).filter((file) => file.endsWith('.md'));
  const draftSlugs = [];

  for (const file of files) {
    const text = fs.readFileSync(path.join(postsContentDir, file), 'utf8');
    const frontmatterMatch = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const frontmatter = frontmatterMatch ? frontmatterMatch[1] : '';

    const draftMatch = frontmatter.match(/^draft:\s*(.+)\r?$/m);
    const slugMatch = frontmatter.match(/^slug:\s*(.+)\r?$/m);

    // Schema default is draft=true when omitted, keep verifier aligned with runtime behavior.
    const draftValue = draftMatch ? draftMatch[1].trim().toLowerCase() : 'true';
    const isDraft = draftValue === 'true';

    if (!isDraft) continue;

    const slug = slugMatch
      ? slugMatch[1].trim().replace(/^['"]|['"]$/g, '')
      : file.replace(/\.md$/, '');

    draftSlugs.push(slug);
  }

  return draftSlugs;
}

assert(fs.existsSync(path.join(distDir, 'index.html')), 'dist/index.html is missing');
assert(fs.existsSync(path.join(distDir, 'posts', 'index.html')), 'dist/posts/index.html is missing');
assert(fs.existsSync(path.join(distDir, 'rss.xml')), 'dist/rss.xml is missing');
assert(fs.existsSync(path.join(distDir, 'sitemap-index.xml')), 'dist/sitemap-index.xml is missing');
assert(fs.existsSync(headersPath), 'dist/_headers is missing');

const headers = fs.readFileSync(headersPath, 'utf8');
assert(headers.includes('/admin/*'), 'admin security headers are missing');

const draftPostSlugs = parseDraftPostSlugs();
const draftPostPaths = draftPostSlugs.map((slug) => path.join(distDir, 'posts', slug, 'index.html'));

if (enableIndexing) {
  assert(!headers.includes('X-Robots-Tag: noindex, nofollow'), 'production build should not include sitewide noindex header');
  for (const draftPath of draftPostPaths) {
    assert(!fs.existsSync(draftPath), `draft post page should not exist in production build: ${draftPath}`);
  }
} else {
  assert(headers.includes('X-Robots-Tag: noindex, nofollow'), 'preview build should include sitewide noindex header');
  for (const draftPath of draftPostPaths) {
    assert(fs.existsSync(draftPath), `draft post page should exist in preview build: ${draftPath}`);
  }
}

console.log(`dist verification passed for SITE_ENV=${siteEnv}, ENABLE_INDEXING=${String(enableIndexing)}`);

