# Premium Portfolio

Next.js portfolio configured for static deployment on GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## GitHub Pages Deployment

This repo includes an automated workflow at [.github/workflows/deploy-gh-pages.yml](.github/workflows/deploy-gh-pages.yml).

### One-time GitHub setup

1. Push this project to GitHub.
2. Open your repository on GitHub.
3. Go to `Settings -> Pages`.
4. In `Build and deployment`, set:
	- `Source`: `GitHub Actions`

### Deploy

1. Push to `main`.
2. GitHub Actions will:
	- install dependencies
	- build static files with Next.js (`out/`)
	- deploy to GitHub Pages

### URL behavior

- If your repo is `username.github.io`, the site is served at root.
- If your repo is `premium-portfolio`, the site is served at `/premium-portfolio`.

This is handled automatically by [next.config.ts](next.config.ts) using the repository name.

## Build Commands

```bash
npm run lint
npm run build
```
