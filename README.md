# Vamshi Sandyala — Portfolio

A bold, blueprint/test-report themed personal site built with **React + Vite**.
Your impact metrics render as a passing test suite; the MCP server is the
featured project.

## Run locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server -> http://localhost:5173
```

## Edit the content

Almost everything you'll want to change lives in one file:

- **`src/data.js`** — your name, tagline, the hero metrics, the project,
  experience bullets, skills, education, certs, LinkedIn URL, and an optional
  email (set `EMAIL` to show an "Email me" button).

Other useful spots:

- **`src/index.css`** — all styling. The palette and fonts are CSS variables at
  the top (`:root`), so changing the accent color or fonts is a one-line edit.
- **`src/components/`** — one file per section (`Hero`, `Project`,
  `Experience`, `Skills`, `EduCerts`, `Footer`, `Nav`).
- **`index.html`** — page `<title>`, meta description, and the Google Fonts
  link.

Note: a few text fields use `<b>...</b>` for bold emphasis and are rendered as
HTML. Keep tags balanced if you edit them.

## Build for production

```bash
npm run build    # outputs a static site to ./dist
npm run preview  # preview the production build locally
```

## Deploy (all free)

The build output in `dist/` is a plain static site — host it anywhere:

- **Netlify** — drag the `dist` folder onto https://app.netlify.com/drop, or
  connect the repo and set build command `npm run build`, publish dir `dist`.
- **Vercel** — import the repo at https://vercel.com; it auto-detects Vite.
- **Cloudflare Pages** — build command `npm run build`, output dir `dist`.
- **GitHub Pages** — push to a repo and deploy the `dist` output (set
  `base: '/<repo-name>/'` in `vite.config.js` if not using a custom domain).

## Stack

React 18, Vite 5, hand-written CSS (no UI framework). Fonts: Space Grotesk,
Inter, JetBrains Mono via Google Fonts.
# portfolio
