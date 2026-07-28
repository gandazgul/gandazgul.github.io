# Carlos Ravelo Resume Portfolio

Static, resume portfolio for Carlos Ravelo, built with TypeScript, Next.js App
Router, React, WebTUI CSS, and Yarn/Node.js tooling.

- Vercel URL: `https://gandazgul-github-io.vercel.app/`
- GitHub Pages URL: `https://gandazgul.github.io`
- Resume PDF: `/CarlosRavelo.pdf`

## Built using RunWield

This portfolio was built using
[RunWield](https://github.com/gandazgul/runwield), Carlos's plan-by-default
coding harness for agentic software delivery. The site intentionally includes
visible RunWield attribution because the build process itself demonstrates
structured planning, implementation, validation, and repair workflows.

## Tech stack

- TypeScript
- Next.js App Router and React
- Node.js with Yarn scripts
- WebTUI CSS for the dark terminal interface aesthetic
- Static export for Vercel and GitHub Pages
- GitHub Actions Pages deployment

## Local development

```bash
yarn install
yarn dev
```

Open `http://localhost:3000`.

Useful checks:

```bash
yarn typecheck
yarn lint
yarn build
```

`yarn build` emits a static `out/` directory. The resume PDF is copied into
`public/CarlosRavelo.pdf`, so the exported site serves it at
`/CarlosRavelo.pdf`.

## Why Vercel

Vercel is a strong, user-friendly choice for this portfolio because it is the
first-class hosting platform for Next.js while staying simple enough for a
personal site. It provides zero-configuration deployments, Git-driven preview
URLs for every change, automatic production deployments from the production
branch, global content delivery, straightforward build settings, easy rollbacks,
and performance-minded defaults. The free Hobby plan is generous for a personal
resume portfolio and lets the same static Next.js codebase be presented
professionally without adding infrastructure overhead.

## Deploy to Vercel Hobby

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default framework detection for Next.js.
4. Build command: `yarn build`.
5. Output directory: `out` if Vercel asks for static output settings; otherwise
   the Next.js static export configuration handles it.
6. Set the production branch to match the repository production branch (`main`
   for `gandazgul.github.io`).
7. Deploy and verify the generated `.vercel.app` URL renders the same portfolio.

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy-github-pages.yml`, which:

1. Runs on pushes to `main`, the production/default branch.
2. Installs dependencies with Yarn.
3. Builds the static export with `yarn build`.
4. Runs `touch out/.nojekyll` so GitHub Pages does not process the output with
   Jekyll.
5. Uploads `out/` and deploys with GitHub Pages Actions.

In the GitHub repository settings, set Pages source to **GitHub Actions**. After
a successful run, `https://gandazgul.github.io` should serve this portfolio
instead of the old Jekyll/static blog.

## Static export notes

The app intentionally avoids API routes, server actions, middleware, dynamic
runtime fetching, and optimized image behavior that requires a Next.js server.
Curated project and resume content lives in `data/profile.ts`, making the same
build portable to Vercel and GitHub Pages.
