import { fetchPdf, fetchTxt } from 'snapdf'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const url = query.url as string
  const format = (query.format as string) || 'pdf'
  const pageSize = ((query.pageSize as string) || 'letter') as 'letter' | 'a4'
  const margin = parseInt((query.margin as string) || '36', 10)
  const landscape = query.landscape === 'true'
  const hideUserInput = query.hideUserInput === 'true'
  const hideAssistantOutput = query.hideAssistantOutput === 'true'
  const selector = query.selector ? (query.selector as string) : undefined

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
  let args: string[] | undefined

  if (process.env.VERCEL && process.platform === 'linux') {
    try {
      const chromium = await import('@sparticuz/chromium' as string)
      const c = chromium.default as { executablePath: () => Promise<string>; args: string[] }
      executablePath = await c.executablePath()
      args = c.args
    } catch {
      // @sparticuz/chromium not installed — Puppeteer will use its bundled Chrome
    }
  }

  const hostname = new URL(url).hostname.replace(/^www\./, '').replaceAll('.', '-')
  const toKebab = (s: string) =>
    s
      .toLowerCase()
      .replace(/[/\\:*?"<>|]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/^-|-$/g, '')

  try {
    if (format === 'txt') {
      const text = await fetchTxt(url, { onProgress, executablePath, args, selector, hideUserInput, hideAssistantOutput })
      send({ type: 'complete', data: Buffer.from(text).toString('base64'), filename: `${hostname}.txt`, mimeType: 'text/plain' })
    } else {
      const { buffer, title } = await fetchPdf(url, { onProgress, executablePath, args, pageSize, margin, landscape, selector, hideUserInput, hideAssistantOutput })
      const safeName = title ? toKebab(title) || hostname : hostname
      send({ type: 'complete', data: buffer.toString('base64'), filename: `${safeName}.pdf`, mimeType: 'application/pdf' })
    }
  } catch (err) {
    send({ type: 'error', message: err instanceof Error ? err.message : 'Conversion failed' })
  }

  res.end()
})
