# Poster Trends

A website that suggests trending poster design themes and walks you through
building each one, with a separate step-by-step guide for **Photoshop** and
**Canva** — pick whichever tool you use and every guide adapts to it.

## Features

- **Trending themes** — poster design directions ranked by a trend score
  (rising / steady / cooling), refreshed periodically as design trends shift.
- **Filterable gallery** — browse all themes by category (Event, Music &
  Film, Brand & Product, Typography, Motivational, Editorial) or mood tag.
- **Theme detail pages** — palette, fonts, mood tags, and a numbered
  step-by-step build guide.
- **Photoshop / Canva toggle** — your tool preference is remembered
  (`localStorage`) and every guide on the site defaults to it.

## Updating the trends

Themes live in [`src/data/themes.ts`](src/data/themes.ts) as a plain array —
add a new theme, tweak a `trend.score`/`trend.direction`, or bump
`updatedAt` to reflect the latest design-community signal. No backend or
build step beyond the normal dev/build commands is required.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run lint      # oxlint
```

Built with Vite, React, React Router, and Tailwind CSS.
