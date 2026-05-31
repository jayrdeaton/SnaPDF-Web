import { fetchPdf, fetchTxt } from 'snapdf'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string
  const format = (query.format as string) || 'pdf'
  const pageSize = ((query.pageSize as string) || 'letter') as 'letter' | 'a4'
  const margin = parseInt((query.margin as string) || '36', 10)
  const landscape = query.landscape === 'true'

  if (!url) {
    throw createError({ statusCode: 400, message: 'url is required' })
  }

  setHeader(event, 'Content-Type', 'text/event-stream')
  setHeader(event, 'Cache-Control', 'no-cache')
  setHeader(event, 'Connection', 'keep-alive')
  setHeader(event, 'X-Accel-Buffering', 'no')

  const res = event.node.res

  const send = (data: Record<string, unknown>) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`)
  }

  const onProgress = (message: string) => send({ type: 'progress', message })

  // On Vercel, pass the @sparticuz/chromium executable so Puppeteer can run in
  // the serverless environment. Install it: npm i @sparticuz/chromium
  // Then set PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true in Vercel env vars.
  let executablePath: string | undefined = process.env.CHROME_EXECUTABLE_PATH

  if (process.env.VERCEL) {
    try {
      const chromium = await import('@sparticuz/chromium' as string)
      executablePath = await (chromium.default as { executablePath: () => Promise<string> }).executablePath()
    } catch {
      // @sparticuz/chromium not installed — Puppeteer will use its bundled Chrome
    }
  }

  try {
    if (format === 'txt') {
      const text = await fetchTxt(url, { onProgress, executablePath })
      send({ type: 'complete', data: Buffer.from(text).toString('base64'), filename: 'conversation.txt', mimeType: 'text/plain' })
    } else {
      const buffer = await fetchPdf(url, { onProgress, executablePath, pageSize, margin, landscape })
      send({ type: 'complete', data: buffer.toString('base64'), filename: 'conversation.pdf', mimeType: 'application/pdf' })
    }
  } catch (err) {
    send({ type: 'error', message: err instanceof Error ? err.message : 'Conversion failed' })
  }

  res.end()
})
