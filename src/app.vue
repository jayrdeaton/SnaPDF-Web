<template>
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 flex flex-col transition-colors duration-200">
    <!-- Header -->
    <header class="border-b border-gray-200 dark:border-zinc-800 px-6 py-4 flex-shrink-0">
      <div class="max-w-3xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/icon.svg" alt="SnaPDF" class="w-6 h-6" />
          <span class="text-base font-semibold tracking-tight">SnaPDF</span>
        </div>
        <div class="flex items-center gap-3">
          <button :aria-label="colorMode.preference === 'system' ? 'System mode' : colorMode.preference === 'light' ? 'Light mode' : 'Dark mode'" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors" @click="cycleColorMode">
            <!-- Monitor: auto/system -->
            <svg v-if="colorMode.preference === 'system'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <!-- Sun: light mode -->
            <svg v-else-if="colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <!-- Moon: dark mode -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <a href="https://www.npmjs.com/package/snapdf" target="_blank" rel="noopener" aria-label="npm" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
              <path d="M0 0v18h18V0H0zm14.5 14.5H9V5H5.5v9.5H3.5V3.5h11v11z" />
            </svg>
          </a>
          <a href="https://github.com/jayrdeaton/snapdf" target="_blank" rel="noopener" aria-label="GitHub" class="p-1.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main class="flex-1 max-w-3xl mx-auto w-full px-6 py-14">
      <!-- Hero -->
      <div class="mb-10 text-center">
        <h1 class="text-4xl font-bold tracking-tight mb-3">Save any web page as PDF or text.</h1>
        <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed">Paste a ChatGPT or Claude share link, choose your settings, and download in seconds.<br />Works with any JavaScript-rendered page.</p>
      </div>

      <!-- Converter card -->
      <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 mb-6 shadow-sm dark:shadow-none">
        <!-- URL -->
        <div class="mb-5">
          <label for="url-input" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Share link</label>
          <input id="url-input" v-model="url" type="url" placeholder="https://chatgpt.com/share/..." :disabled="converting" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-4 py-2.5 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-sky-500 disabled:opacity-50 transition-colors" />
        </div>

        <!-- Settings row -->
        <div class="flex flex-wrap gap-5 mb-6 items-end">
          <!-- Format -->
          <div>
            <p class="text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Format</p>
            <div class="flex gap-1.5">
              <button v-for="f in ['pdf', 'txt']" :key="f" :disabled="converting" :class="format === f ? 'bg-sky-500 text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700'" class="px-4 py-2 rounded-lg text-sm font-medium uppercase transition-colors disabled:opacity-50" @click="format = f as 'pdf' | 'txt'">
                {{ f }}
              </button>
            </div>
          </div>

          <!-- Page size — PDF only -->
          <div v-if="format === 'pdf'">
            <label for="page-size" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Page size</label>
            <select id="page-size" v-model="pageSize" :disabled="converting" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-sky-500">
              <option value="letter">Letter</option>
              <option value="a4">A4</option>
            </select>
          </div>

          <!-- Margin — PDF only -->
          <div v-if="format === 'pdf'">
            <label for="margin" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Margin <span class="font-normal text-gray-400 dark:text-zinc-500">(pt)</span></label>
            <input id="margin" v-model.number="margin" type="number" min="0" max="144" :disabled="converting" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-sky-500" />
          </div>

          <!-- Landscape — PDF only -->
          <div v-if="format === 'pdf'" class="flex items-center pb-0.5">
            <label class="flex items-center gap-2 cursor-pointer select-none">
              <input v-model="landscape" type="checkbox" :disabled="converting" class="w-4 h-4 accent-sky-500 disabled:opacity-50" />
              <span class="text-sm text-gray-700 dark:text-zinc-300">Landscape</span>
            </label>
          </div>
        </div>

        <!-- Submit -->
        <button :disabled="!url.trim() || converting" class="w-full bg-sky-500 hover:bg-sky-400 disabled:bg-gray-100 dark:disabled:bg-zinc-800 disabled:text-gray-400 dark:disabled:text-zinc-600 text-white font-semibold rounded-lg py-3 text-sm transition-colors" @click="convert">
          {{ converting ? 'Converting…' : `Convert to ${format.toUpperCase()}` }}
        </button>
      </div>

      <!-- Progress terminal — always dark, intentionally -->
      <div v-if="progress.length > 0 || error" class="bg-black border border-zinc-800 rounded-2xl p-5 mb-6 font-mono text-sm leading-relaxed overflow-auto max-h-64">
        <p v-for="(msg, i) in progress" :key="i" class="text-emerald-400"><span class="text-zinc-600 select-none">› </span>{{ msg }}</p>
        <p v-if="error" class="text-red-400"><span class="text-zinc-600 select-none">✗ </span>{{ error }}</p>
        <span v-if="converting" class="text-zinc-500 animate-pulse">▌</span>
      </div>

      <!-- Download -->
      <div v-if="downloadUrl" class="flex justify-center">
        <a :href="downloadUrl" :download="downloadFilename" class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg px-7 py-3 text-sm transition-colors"> ↓ Download {{ downloadFilename }} </a>
      </div>

      <!-- Divider -->
      <div class="mt-24 pt-12 border-t border-gray-200 dark:border-zinc-800">
        <h2 class="text-2xl font-semibold mb-8 text-center">Also available as a CLI</h2>

        <!-- Install + Usage -->
        <div class="grid sm:grid-cols-2 gap-4 mb-8">
          <div>
            <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Install</p>
            <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">npm install -g snapdf</div>
          </div>
          <div>
            <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Usage</p>
            <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-emerald-600 dark:text-emerald-400 shadow-sm dark:shadow-none">snapdf &lt;url&gt; [options]</div>
          </div>
        </div>

        <!-- Options -->
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 mb-10 font-mono text-sm text-gray-700 dark:text-zinc-300 leading-7 shadow-sm dark:shadow-none">
          <p><span class="text-sky-500 dark:text-sky-400">--format</span> <span class="text-gray-400 dark:text-zinc-500">pdf|txt</span> Output format (default: pdf)</p>
          <p><span class="text-sky-500 dark:text-sky-400">--page-size</span> <span class="text-gray-400 dark:text-zinc-500">letter|a4</span> Paper size (default: letter)</p>
          <p><span class="text-sky-500 dark:text-sky-400">--landscape</span> Landscape orientation</p>
          <p><span class="text-sky-500 dark:text-sky-400">--timeout</span> <span class="text-gray-400 dark:text-zinc-500">ms</span> Navigation timeout (default: 60000)</p>
        </div>

        <!-- Feature cards -->
        <div class="grid sm:grid-cols-3 gap-4">
          <div v-for="feature in features" :key="feature.title" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 shadow-sm dark:shadow-none">
            <h3 class="font-semibold mb-1.5">{{ feature.title }}</h3>
            <p class="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-zinc-800 py-6 text-center text-sm text-gray-400 dark:text-zinc-500 flex-shrink-0">
      Powered by
      <a href="https://infinitetoken.com" target="_blank" rel="noopener" class="text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 underline underline-offset-2 ml-1 transition-colors">Infinite Token</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const cycleColorMode = () => {
  const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (colorMode.preference === 'system') colorMode.preference = systemIsDark ? 'light' : 'dark'
  else if (colorMode.preference === 'dark') colorMode.preference = systemIsDark ? 'system' : 'light'
  else colorMode.preference = systemIsDark ? 'dark' : 'system'
}

const url = ref('')
const format = ref<'pdf' | 'txt'>('pdf')
const letterRegions = new Set(['US', 'CA', 'MX', 'PH', 'CO', 'VE', 'GT', 'HN', 'SV', 'NI', 'CR', 'PA', 'CU', 'DO', 'PR'])
const detectedRegion = import.meta.client ? (new Intl.Locale(navigator.language).region ?? '') : ''
const pageSize = ref<'letter' | 'a4'>(letterRegions.has(detectedRegion) ? 'letter' : 'a4')
const margin = ref(36)
const landscape = ref(false)
const converting = ref(false)
const progress = ref<string[]>([])
const error = ref<string | null>(null)
const downloadUrl = ref<string | null>(null)
const downloadFilename = ref('')

const features = [
  {
    title: 'Virtual scroll support',
    description: 'Handles lazy-loading and infinite scroll pages like ChatGPT and Claude.ai — every message captured.'
  },
  {
    title: 'PDF or plain text',
    description: 'Export full conversations as a formatted, printable PDF or searchable plain text file.'
  },
  {
    title: 'CLI + library',
    description: 'Use from the terminal or import fetchPdf / fetchTxt directly in your Node.js project.'
  }
]

let eventSource: EventSource | null = null

const convert = () => {
  if (!url.value.trim() || converting.value) return

  if (downloadUrl.value) {
    URL.revokeObjectURL(downloadUrl.value)
    downloadUrl.value = null
    downloadFilename.value = ''
  }

  converting.value = true
  progress.value = []
  error.value = null

  const params = new URLSearchParams({
    url: url.value.trim(),
    format: format.value,
    pageSize: pageSize.value,
    margin: String(margin.value),
    landscape: String(landscape.value)
  })

  eventSource?.close()
  eventSource = new EventSource(`/api/convert?${params.toString()}`)

  eventSource.onmessage = (event) => {
    type ConvertEvent = { type: 'progress'; message: string } | { type: 'complete'; data: string; filename: string; mimeType: string } | { type: 'error'; message: string }

    const msg = JSON.parse(event.data as string) as ConvertEvent

    if (msg.type === 'progress') {
      progress.value.push(msg.message)
    } else if (msg.type === 'complete') {
      const byteStr = atob(msg.data)
      const bytes = new Uint8Array(byteStr.length)
      for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i)
      const blob = new Blob([bytes], { type: msg.mimeType })
      downloadUrl.value = URL.createObjectURL(blob)
      downloadFilename.value = msg.filename
      converting.value = false
      eventSource?.close()
      const a = document.createElement('a')
      a.href = downloadUrl.value
      a.download = msg.filename
      a.click()
    } else if (msg.type === 'error') {
      error.value = msg.message
      converting.value = false
      eventSource?.close()
    }
  }

  eventSource.onerror = () => {
    if (converting.value) {
      error.value = 'Connection error — check the URL and try again.'
      converting.value = false
    }
    eventSource?.close()
  }
}

onUnmounted(() => {
  eventSource?.close()
  if (downloadUrl.value) URL.revokeObjectURL(downloadUrl.value)
})
</script>
