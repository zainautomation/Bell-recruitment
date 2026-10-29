# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm install
npm run dev      # next dev --webpack (webpack, not Turbopack), http://localhost:3000
npm run build    # production build; also the only type-check (TypeScript, no separate script)
npm start
```

There is no linter and no test suite configured. Requires Node.js 20+.

## Architecture

Marketing site for Bell Recruitment (FMCG recruitment, Belfast): Next.js 16 App Router, React 19, TypeScript, one plain CSS file (`app/globals.css`). No database, no UI/animation libraries. See [README.md](README.md) for the full developer guide (animations, forms, styling); some of its page/component lists predate the current restructure, so trust the filesystem over it.

- **Content lives in [lib/content.ts](lib/content.ts)** (contact details, `NAV_LINKS`, partners, testimonials, blog posts, etc.). Copy changes usually don't touch page files. Page headings and intros are in each `page.tsx`.
- **Routes** are in `app/`: `employers/how-we-hire`, `services`, `faqs`, `about-us`, `blogs`, `contact-us`, `cv-upload`, `locations`, `privacy-policy`.
- **URLs use trailing slashes** (`trailingSlash: true` in [next.config.ts](next.config.ts)) to match the original site. `/employer/` permanently redirects to `/services/`; `/jobs/` and `/jobs/sales-roles-northern-ireland/` are temporary redirects to an external jobs board, to be removed as real pages are added under `app/jobs/`.
- **Every page starts with a burgundy banner** (home hero or `PageHero`) because the header is transparent at the top and overlaps it. New pages should start with `PageHero`.
- **Forms**: The `app/api/cv-upload` route handler uses [lib/submissions.ts](lib/submissions.ts) to validate, save CVs to `uploads/` and append JSON lines to `data/*.jsonl` (both git-ignored). This relies on a persistent disk; on hosts like Vercel, replace `logSubmission`/`saveCv` only. When `RESEND_API_KEY` and `RESEND_TO_EMAIL` are set (see `.env.example`), the CV is also emailed via Resend ([lib/email.ts](lib/email.ts)); with Resend's shared sender it can only be delivered to the Resend account's own email until a domain is verified.

- **SEO / AEO**: `/robots.txt` and `/sitemap.xml` are generated (`app/robots.ts`, `app/sitemap.ts`, pages listed in `SITE_PAGES` in [lib/site.ts](lib/site.ts)); `public/llms.txt` is static. JSON-LD comes from [lib/schema.ts](lib/schema.ts) via `components/JsonLd.tsx`; each page sets a canonical link. Add new pages to `SITE_PAGES` and `llms.txt`.

- **Blog articles**: the cards (`BLOG_POSTS` in `lib/content.ts`) link to `/blogs/<slug>/`, built by `app/blogs/[slug]/page.tsx` from the text in [lib/articles.ts](lib/articles.ts) (SEO title, description, takeaways, sections, optional `faqs` which also emit FAQPage schema, optional CTA buttons; `[text](/path/)` makes a link and `**text**` bold). Blog cards are listed newest first and the home page shows the first three. To add an article, add it to both, then to `SITE_PAGES` in `lib/site.ts` and `public/llms.txt`.

- **Blog author** is Julie Bell: the byline, the author box at the end of each article and the BlogPosting schema (`author` = the Person node, `JULIE_ID` in `lib/schema.ts`) all use her.
- **Locations** page is written per region (Northern Ireland, Ireland, UK), with the `LOCATIONS` places listed under each region, not one near-identical card per city.
- **Icons** are inline SVGs from [components/Icon.tsx](components/Icon.tsx) (paths in `components/icon-paths.ts`, Font Awesome Free, CC BY 4.0); there is no Font Awesome stylesheet. To add one, copy its SVG path into `icon-paths.ts` and use `<Icon name="..." />`. The tick and certificate list bullets in `globals.css` are CSS masks built from the same paths.
- **Sitemap dates**: each entry in `SITE_PAGES` has a hand-set `lastModified` (YYYY-MM-DD); update it when that page's text changes. Page titles should stay under about 60 characters including " | Bell Recruitment".

## Gotchas

- **Scroll-reveal selectors are duplicated**: `REVEAL` in [components/ScrollReveal.tsx](components/ScrollReveal.tsx) and the `html.js :is(...)` rule in `globals.css`. Add new animated element types to both.
- The vetting `ProcessSteps` are deliberately excluded from general scroll reveal; their timing is driven by `--seq` / `--loop-start` on `.process-grid` in `globals.css`.
- Colours are CSS variables at the top of `globals.css`. Breakpoints: 1080px (hamburger), 900px (single column), 560px (phone, `mobile-swipe` grids).
- The repo has two remotes: `origin` (zainautomation/Bellrecruitment) and `ayan` (SyedAyan15/Bell-Recruitment). Saved Git credentials on the dev machine may belong to the latter and be denied on `origin`.
