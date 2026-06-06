# SnaPDF Web

Website for [SnaPDF](https://github.com/jayrdeaton/snapdf) — save any JavaScript-rendered page as a PDF or plain text file. Paste a ChatGPT or Claude share link, pick your settings, and download in seconds.

Built with [Nuxt 4](https://nuxt.com), deployed on [Vercel](https://vercel.com).

## Features

- Converts any JS-rendered page (ChatGPT, Claude, etc.) to PDF or plain text
- Handles virtual scroll and lazy-loaded content — every message captured
- PDF options: page size (Letter/A4), margin, landscape orientation
- Selectively hide user prompts or assistant responses
- CSS selector override for custom content targeting
- In-session history with inline preview and re-download
- Light/dark/system color mode
- Auto-detects Letter vs A4 based on browser locale

## API

`GET /api/convert` — streams progress over SSE, then delivers the file as a base64 payload.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `url` | string | — | Page URL to convert (required) |
| `format` | `pdf` \| `txt` | `pdf` | Output format |
| `pageSize` | `letter` \| `a4` | `letter` | PDF page size |
| `margin` | number | `36` | PDF margin in points |
| `landscape` | boolean | `false` | Landscape orientation |
| `hideUserInput` | boolean | `false` | Omit user messages |
| `hideAssistantOutput` | boolean | `false` | Omit assistant messages |
| `selector` | string | — | CSS selector for content nodes |

SSE event types: `progress` · `complete` · `error`

## Development

```bash
npm install
npm run dev        # nuxt dev
```

To test with Vercel Functions locally:

```bash
npm run build
vercel dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Lint with ESLint |
| `npm run fix` | Auto-fix lint issues |
| `npm test` | Run tests (Vitest) |
| `npm run typecheck` | Type-check with vue-tsc |
| `npm run release:patch` | Bump patch version and push tags |

## Deployment

Deploys automatically to Vercel on push to `main`. Functions are configured with a 300s max duration to accommodate long-running Puppeteer jobs.

On Vercel, `@sparticuz/chromium` provides a serverless-compatible Chromium binary. Set `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` in your Vercel environment variables.

## CLI

SnaPDF is also available as a standalone CLI tool:

```bash
npm install -g snapdf
snapdf <url> [options]
```

See [npmjs.com/package/snapdf](https://www.npmjs.com/package/snapdf) for full CLI docs.
