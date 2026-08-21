# Agent Notes

This repository is the main portfolio hub for `https://dwlee.github.io/`.

## Purpose

- Keep the portfolio as the top-level navigation hub.
- Keep section names consistent across navigation, page titles, and archive cards.
- Internal portfolio shells live here: `About`, `Notes`, `Reviews`, and `Diary`.
- External archives live in separate repositories and are linked from this site:
  - `research-notes`: `https://dwlee.github.io/research-notes/`
  - `math-archive`: `https://dwlee.github.io/math-archive/`
  - `projects`: `https://dwlee.github.io/projects/`

## Structure

- `src/data/site.js`: canonical site metadata, nav labels, archive links, social links, and stack data.
- `src/components/SiteLayout.js`: shared header, metadata, page shell, and footer.
- `src/components/SectionPage.js`: reusable shell for empty or early-stage sections.
- `src/pages/index.js`: portfolio home.
- `src/pages/about.js`, `notes.js`, `reviews.js`, `diary.js`: accessible section shells.

## Editing Rules

- Update labels in `src/data/site.js` first so navigation and archive cards stay aligned.
- Keep links as directory URLs with trailing slashes, such as `/about/` and `/notes/`.
- Do not point placeholder links to `#`; create an accessible shell page instead.
- Keep the visual style quiet and dense: panels, thin borders, compact headings, no marketing hero layout.
- Preserve `output: 'export'` and `trailingSlash: true` in `next.config.js` for GitHub Pages.

## Checks

Run before commit:

```bash
npm run build
git diff --check
```

After pushing, verify the important public URLs return 200.

