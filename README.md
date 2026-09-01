# Global Security Solutions — Website

Production implementation of the GSS website, built from the approved Claude Design mockup
(`../project/GSS Website Mockups v2.dc.html`) and the rebuild brief in `../chats/chat1.md`.

**Start here:** [`docs/content-audit.md`](./docs/content-audit.md) — the governance document for
every fact, override, and content-safety rule this site follows. Read it before editing copy.

## Stack

- [Astro](https://astro.build) (static output by default; the contact form's API route runs on
  Node via `@astrojs/node`, everything else prerenders)
- Content collections (`src/content.config.ts`) for the ~45 capability pages and Insights
  articles — content lives as data (JSON), not hardcoded in templates
- No UI framework — interactivity (mega menu, reveal-on-scroll, method-toggle, globe, contact
  form) is written as small vanilla TypeScript islands, kept deliberately minimal for performance
- `d3-geo` + `topojson-client` + the `world-atlas` npm package for the Global Experience globe —
  bundled locally, no runtime CDN dependency

## Running it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-checks (astro check) then builds to dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  lib/site.ts              Single source of truth: site facts, nav/IA, approved claims
  content.config.ts         Zod schema for the capabilities & insights collections
  content/capabilities/     One JSON file per capability page, grouped by family
  content/insights/         One JSON file per Insights article
  layouts/                  Layout.astro (site chrome + SEO), CapabilityLayout.astro,
                             FamilyOverviewLayout.astro
  components/               Header (mega menu + mobile nav), Footer, Globe, ConsultationForm,
                             CTASection, ImagePlaceholder, FAQAccordion, Breadcrumbs, RevealScript
  pages/                    Route tree — mirrors docs/content-audit.md §7
docs/content-audit.md       Governance doc — read this first
```

## Email delivery (Resend)

`src/pages/api/contact.ts` sends consultation-request submissions via
[Resend](https://resend.com) to `contact@gsscorporate.com`, with the submitter's address set as
`reply_to`. Configure it via `.env` (copy `.env.example`):

- `RESEND_API_KEY` — required. Requests fail loudly (HTTP 500, logged server-side) if unset,
  rather than silently pretending to send.
- `CONTACT_FROM_EMAIL` — the verified sending address/domain in your Resend account. Resend
  rejects sends from a domain it hasn't verified, so this can't be `contact@gsscorporate.com`
  itself until that domain is verified with Resend — use a Resend-verified sender until then.

This integration could not be tested end-to-end from the build environment (its outbound network
policy blocks `api.resend.com`), so verify a real submission end-to-end once deployed somewhere
with normal network access, before relying on it.

**The API key was shared in this conversation in plaintext.** It's stored only in the
gitignored `.env` (never commit it), but since it passed through chat, consider rotating it in
the Resend dashboard once the current one is confirmed working.

## Known gaps (tracked, not silent)

These are called out explicitly in `docs/content-audit.md` §9–10 as well:

- **Photography.** See `docs/content-audit.md` §9 for current status — check there before
  assuming placeholders are still in use.
- **Wade Wilson's full biography and LinkedIn URL** are not yet supplied — the homepage and
  `/leadership/` page say so explicitly rather than inventing detail.
- **Insights** ships with 5 full sample articles at the approved voice/depth. The source
  transcript references eight drafted articles pending technical review; once approved, add them
  as additional `src/content/insights/*.json` files following the existing shape.

## Before deploying

- Point `astro.config.mjs`'s `site` at the real domain if it ever changes from
  `https://gsscorporate.com`.
- Re-run the QA checklist in `docs/content-audit.md` §12 after any content edit.
- Deploy target: `@astrojs/node` (`mode: 'standalone'`) is configured, which runs anywhere Node
  runs. Swap the adapter (e.g. `@astrojs/vercel`, `@astrojs/netlify`) if deploying to a platform
  with its own adapter — only `astro.config.mjs` needs to change.
