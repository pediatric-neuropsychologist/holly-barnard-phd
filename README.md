# holly-barnard-phd

Marketing site for Dr. Holly Barnard's pediatric neuropsychology practice, built with Astro.

## Requirements

- Node.js `22.12.0` or newer
- npm

## Getting started

```bash
npm install
npm run dev
```

The local dev server runs at `http://localhost:4321` by default.

## Scripts

- `npm run dev` starts the Astro dev server.
- `npm run lint` runs `astro check`.
- `npm run test` runs the project smoke tests with Node's built-in test runner.
- `npm run build` creates the production site in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run verify` runs lint, test, and build in sequence.

## Main routes

Primary public routes:

- `/`
- `/services/`
- `/evaluation-process`
- `/fees`
- `/faq`
- `/contact`

Additional content routes:

- `/services/[condition]`
- `/blog`
- `/locations/allen`
- `/locations/plano`
- `/locations/richardson`

## Project notes

- Shared layout and navigation live in `src/layouts/BaseLayout.astro`.
- Shared visual tokens and component surface styles live in `src/styles/global.css`.
- Reusable service condition content for generated service pages lives in `src/data/service-conditions.ts`.
- The smoke test lives at `tests/site-smoke.test.mjs`.

## Verification

Before shipping changes, run:

```bash
npm run verify
```

