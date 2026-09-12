# web-app-workers

Standalone backend repository for a single Cloudflare Worker that will serve the web application's backend API.

The React + TypeScript frontend lives in a separate repository and is intentionally not included here.

## Current behavior

- `GET /health` returns `200 OK` with body `OK`.
- All other routes currently return `404 Not Found`.

## Tech stack

- Cloudflare Workers
- TypeScript
- Wrangler
- Cloudflare D1 (existing database, bound later)
- npm

## Project structure

```
web-app-workers/
├── src/
│   └── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── wrangler.jsonc
├── .gitignore
└── README.md
```

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then test:

```bash
curl http://127.0.0.1:8787/health
```

Expected response:

```
OK
```

Unknown route example:

```bash
curl -i http://127.0.0.1:8787/does-not-exist
```

Expected status and body:

```
404 Not Found
```

## Type check

```bash
npm run typecheck
```

## Deploy

```bash
npm run deploy
```

## D1 binding configuration

Configure the D1 binding in `wrangler.jsonc` under `d1_databases` once you are ready to connect the existing database.

Do not create tables here; existing tables already live in Cloudflare D1 (`users`, `user_identities`, `sessions`).

Authentication, sessions, user APIs, and D1-backed data access will be added in later steps.

## Secrets and sensitive values

- Never commit secrets, API keys, OAuth credentials, or database IDs to Git.
- Use Cloudflare environment bindings and secrets for sensitive values.
- For example, use `wrangler secret put <NAME>` for secrets.

## GitHub -> Cloudflare workflow

This repository is structured to be connected to Cloudflare Workers via GitHub-based deployment.

```
Developer
   |
   | git push
   v
GitHub repository
   |
   v
Cloudflare
   |
   v
Cloudflare Worker
   |
   v
D1
```