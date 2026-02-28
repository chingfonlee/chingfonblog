# chingfonblog

AI-friendly blog architecture built with Astro + Decap CMS + Netlify.
This README is the primary entrypoint for humans and AI agents reading the repository on GitHub.

## Architecture At A Glance
- SSG: Astro (HTML-first output)
- CMS: Decap CMS (`/admin`) with PR review workflow
- Hosting: Netlify
- Auth: Netlify Identity (Invite only) + Git Gateway
- Content images: Cloudinary URL only (no CMS-uploaded images in repo)
- Fixed assets: `public/assets/` only
- AI discovery surfaces: `robots.txt`, `llms.txt`, sitemap, RSS/Atom

## Non-Negotiable Rules
- Decap must keep `publish_mode: editorial_workflow`.
- Git Gateway enable order: Identity first, then Git Gateway.
- Posts are managed by Astro Content Collections with schema validation.
- CMS content images must be Cloudinary URLs.
- Draft posts are visible in preview, hidden in production.

## Repository Map
- `src/content.config.ts`: content collection schema and validation rules
- `src/content/posts/`: markdown posts
- `src/pages/`: Astro routes (`/`, `/posts`, `/posts/[slug]`)
- `public/admin/`: Decap CMS app and config
- `public/assets/`: fixed assets only
- `public/robots.txt`: crawler policy
- `public/llms.txt`: AI crawler entrypoint
- `netlify.toml`: deploy context settings
- `scripts/`: local verification helpers
- `docs/`: contracts, runbooks, audits, and execution history

## Content And Release Flow
1. Editor logs in to `https://leechingfon.netlify.app/admin/`.
2. Save Draft -> In Review (Decap editorial workflow).
3. GitHub PR is created and Deploy Preview is generated.
4. CI runs `npm ci` + `npm run validate:local`.
5. Reviewer approves PR and merges to `main`.
6. Netlify production deploy is triggered.

## Local Verification Commands
- Install: `npm ci`
- Full local gate: `npm run validate:local`
- Dev server: `npm run dev`

## Governance And Protection
- Required check: `validate-local` (GitHub Actions)
- Branch protection applies on `main`
- PR review approval is required before merge

## AI Reading Order
- [PRD](docs/1001_PRD_AI_Friendly_Blog.md)
- [Repo Contract](docs/2001_REPO_CONTRACT.md)
- [Content Model](docs/2002_CONTENT_MODEL_SPEC.md)
- [Decap Contract](docs/3001_DECAP_CONTRACT.md)
- [Netlify Playbook](docs/4001_NETLIFY_PLAYBOOK.md)
- [Security Rules](docs/5001_SECURITY_RULES.md)
- [Runbook](docs/6001_RUNBOOK_TROUBLESHOOTING.md)
- [Execution Plan](docs/9001_EXECUTION_PLAN.md)
- [AI Architecture Overview](docs/9011_AI_ARCHITECTURE_OVERVIEW.md)
