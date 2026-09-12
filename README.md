# web-app-workers

A minimal monorepo scaffold for a full-stack web application with a React + TypeScript frontend and a Cloudflare Worker backend.

## Repository structure

```text
.
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── worker/
│   ├── src/
│   │   ├── auth/
│   │   ├── users/
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── wrangler.jsonc
├── .gitignore
└── README.md
```

## Purpose of each directory

- `frontend/`: the browser application built with React, TypeScript, and Vite.
- `worker/`: the single Cloudflare Worker that will eventually contain authentication, user APIs, session management, account management, and other backend functionality.

The Worker entry point remains `worker/src/index.ts`, and feature code can grow into directories such as `worker/src/auth/` and `worker/src/users/` without splitting into multiple Workers.

## Install dependencies

Install each package separately:

```bash
cd frontend && npm install
cd ../worker && npm install
```

## Run the frontend locally

```bash
cd frontend
npm run dev
```

Vite will start the React development server.

## Run the Worker locally

```bash
cd worker
npm run dev
```

Wrangler will start the local Worker runtime. The initial endpoint returns `Hello World`.

## Deploy the Worker with Wrangler

```bash
cd worker
npm run deploy
```

This deploys the single Worker defined in `worker/wrangler.jsonc`.

## Cloudflare D1 binding location

The Worker is intentionally not connected to D1 yet. When you are ready to attach the existing Cloudflare D1 database, add the `d1_databases` binding in `worker/wrangler.jsonc`.

No D1 tables are created or modified by this scaffold.
