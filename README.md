# Sanity CMS Project

This workspace contains two repositories that work together:

- `studio-hello-world`: Sanity Studio (content management)
- `my-app`: Next.js frontend (content display)

## Repository Structure

```text
sanityProject/
  studio-hello-world/   # Sanity Studio
  my-app/               # Next.js app
```

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- Yarn or npm

## Sanity Project Details

From the current config:

- `projectId`: `hduvm314`
- `dataset`: `production`

## 1) Start Sanity Studio (`studio-hello-world`)

```bash
cd /studio-hello-world
yarn install
yarn dev
```

Studio runs on:

- `http://localhost:3333`

Useful commands:

```bash 
## it will update real sanity.io (similar)
yarn deploy
```

## 2) Start Frontend (`my-app`)

Create environment file:

```bash
cd /my-app
```

Add this to `.env`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=hduvm314
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

Install and run:

```bash
yarn install
yarn dev
```

Frontend runs on:

- `http://localhost:3000`

Useful commands:

```bash
yarn build
yarn start
```

## Run Both Repositories (Two Terminals)

Terminal 1:

```bash
cd /studio-hello-world
yarn dev
```

Terminal 2:

```bash
cd /my-app
yarn dev
```

Then open:

- Studio: `http://localhost:3333`
- Frontend: `http://localhost:3000`

## Common Troubleshooting

- If packages fail to install, delete `node_modules` and reinstall.
- If Sanity data does not appear in frontend, verify `.env` values.
