# Academic site refresh implementation plan

> **For agentic workers:** Use superpowers:executing-plans to implement the tasks inline.

**Goal:** Improve the existing personal academic website using the facts already in the repository.

**Architecture:** Keep GitHub Pages, Jekyll and the current light/dark theme. Use publication collection metadata and shared includes for consistent homepage, list and detail views. Exclude unused template examples from publication without deleting source material.

**Tech stack:** Jekyll/Liquid, Markdown, SCSS, existing JavaScript build.

**Spec:** User requested direct implementation of the preceding eight-point website review.

## Constraints

- Preserve publication permalinks and existing personal facts; do not invent dates, metrics, awards or experimental imagery.
- Work in the requested checkout. After reviewing the preview, the user approved committing and publishing the changes to GitHub.
- Keep script source and its generated bundle consistent.
- Exclude planning documents, scripts and template examples from the generated site.

## Review focus

- Mobile widths: long affiliation and paper titles must wrap; contact links remain visible.
- Keyboard: theme and navigation buttons must have names and focus styles.
- Paper metadata: empty citations and venues must not create empty labels; preprints are distinct.
- Build output: no example CV, talks, teaching or portfolio pages; valid metadata and local links.
- Optional libraries: mathematical/diagram libraries load only on opted-in pages.

## Tasks

- [x] 1. Correct identity/SEO metadata and navigation; exclude unused template pages. Verify configuration parsing and generated URLs.
- [x] 2. Add shared publication cards/resources and curated metadata; refresh homepage/CV and responsive styles. Verify the Jekyll build and rendered HTML, including preprint/empty-citation cases.
- [x] 3. Improve keyboard/contact access and conditional libraries; rebuild JavaScript. Verify syntax, generated output, theme/nav interactions where browser tooling is available, and request a final review.

## Execution notes

- Baseline checkout was clean. Ruby and npm dependencies were missing; installing into temporary Ruby storage and ignored node_modules for build verification.
- The user explicitly asked for direct modification, so execution proceeds in place without another design approval round.

- Verification: Jekyll 3.10 build passed; rendered HTML checks passed (identity, nonempty single h1, JSON-LD, Open Graph image, internal resource resolution, 3 featured / 5 total papers, preprints, excluded templates/tooling).
- Theme checks passed for system/stored preferences, toggle aria-pressed, persistence and blocked localStorage.
- Chrome checks passed at 320, 375, 390, 768, 1024 and 1440px: no horizontal overflow, contacts visible, keyboard theme operation, overflow Escape and focus, paper detail pages and print CV; no browser errors.
- Browser regression caught and fixed: calculate available nav width after revealing the overflow trigger; otherwise it overlaps the persistent theme button.
- During the initial review the changes remained local. Blog Posts navigation and its archive were subsequently restored at the user's request; keep this entry visible even when there are no posts.
- Final independent review found no important/critical findings; mobile paper titles and dark-mode print were independently checked. Duplicate authors removed. Sitemap now uses the same publication cards; regression check passed.
