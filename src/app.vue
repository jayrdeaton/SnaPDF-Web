<template>
  <div>
    <div class="fixed inset-x-0 top-0 z-50 bg-white dark:bg-zinc-900" style="height: env(safe-area-inset-top)" aria-hidden="true" />
    <div class="fixed inset-x-0 z-30 bg-gray-200 dark:bg-zinc-800" style="top: env(safe-area-inset-top); height: 1px" aria-hidden="true" />
    <div class="fixed inset-x-0 bottom-0 z-30 bg-gray-200 dark:bg-zinc-800" style="height: 1px" aria-hidden="true" />
    <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-zinc-100 flex flex-col" :class="{ 'transition-colors duration-200': mounted }">
      <!-- Header -->
      <header class="relative z-40 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 px-6 shrink-0" style="padding-top: calc(1rem + env(safe-area-inset-top)); padding-bottom: 1rem">
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
      <main class="flex-1 max-w-3xl mx-auto w-full px-6 pt-10 pb-14">
        <!-- Hero -->
        <div class="mb-10 text-center">
          <h1 class="text-4xl font-bold tracking-tight mb-3">Save any web page as PDF or text</h1>
          <p class="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed">Paste a ChatGPT or Claude share link, choose your settings, and download in seconds.<br />Works with any JavaScript-rendered page.</p>
        </div>

        <!-- Converter card -->
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 mb-6 shadow-sm dark:shadow-none">
          <!-- URL -->
          <div class="mb-5">
            <label for="url-input" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Share link</label>
            <div class="relative">
              <input id="url-input" v-model="url" :type="hideUrl ? 'password' : 'url'" autocomplete="off" placeholder="https://chatgpt.com/share/..." :disabled="converting" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-4 py-2.5 pr-10 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-violet-500 disabled:opacity-50 transition-colors" />
              <button type="button" :aria-label="hideUrl ? 'Show URL' : 'Hide URL'" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors" @click="hideUrl = !hideUrl">
                <!-- Eye: URL visible, click to hide -->
                <svg v-if="!hideUrl" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <!-- Eye-off: URL hidden, click to show -->
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Settings row -->
          <div class="flex flex-wrap gap-5 mb-6 items-end">
            <!-- Format -->
            <div>
              <p class="text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Format</p>
              <div class="flex gap-1.5">
                <button v-for="f in ['pdf', 'txt']" :key="f" :disabled="converting" :class="format === f ? 'bg-violet-500 text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700'" class="px-4 py-2 rounded-lg text-sm font-medium uppercase transition-colors disabled:opacity-50" @click="format = f as 'pdf' | 'txt'">
                  {{ f }}
                </button>
              </div>
            </div>

            <!-- Page size — PDF only -->
            <div v-if="format === 'pdf'">
              <label for="page-size" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Page size</label>
              <select id="page-size" v-model="pageSize" :disabled="converting" class="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500">
                <option value="letter">Letter</option>
                <option value="a4">A4</option>
              </select>
            </div>

            <!-- Margin — PDF only -->
            <div v-if="format === 'pdf'">
              <label for="margin" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">Margin <span class="font-normal text-gray-400 dark:text-zinc-500">(pt)</span></label>
              <input id="margin" v-model.number="margin" type="number" min="0" max="144" :disabled="converting" class="w-20 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 disabled:opacity-50 focus:outline-none focus:border-violet-500" />
            </div>

            <!-- Landscape — PDF only -->
            <div v-if="format === 'pdf'" class="flex items-center pb-0.5">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input v-model="landscape" type="checkbox" :disabled="converting" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
                <span class="text-sm text-gray-700 dark:text-zinc-300">Landscape</span>
              </label>
            </div>

            <!-- Hide prompts -->
            <div class="flex items-center pb-0.5">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input v-model="hideUserInput" type="checkbox" :disabled="converting" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
                <span class="text-sm text-gray-700 dark:text-zinc-300">Hide prompts</span>
              </label>
            </div>

            <!-- Hide responses -->
            <div class="flex items-center pb-0.5">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input v-model="hideAssistantOutput" type="checkbox" :disabled="converting" class="w-4 h-4 accent-violet-500 disabled:opacity-50" />
                <span class="text-sm text-gray-700 dark:text-zinc-300">Hide responses</span>
              </label>
            </div>

            <!-- Auto-download -->
            <div class="flex items-center pb-0.5">
              <label class="flex items-center gap-2 cursor-pointer select-none">
                <input v-model="autoDownload" type="checkbox" class="w-4 h-4 accent-violet-500" />
                <span class="text-sm text-gray-700 dark:text-zinc-300">Auto-download</span>
              </label>
            </div>

            <!-- Advanced toggle -->
            <div class="flex items-center pb-0.5">
              <button :disabled="converting" class="flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 disabled:opacity-50 transition-colors" @click="showAdvanced = !showAdvanced">
                Advanced
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" :class="showAdvanced ? 'rotate-180' : ''" class="transition-transform">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Advanced options -->
          <div v-if="showAdvanced" class="pt-4 border-t border-gray-100 dark:border-zinc-800 mb-6">
            <div>
              <label for="selector" class="block text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1.5">CSS selector</label>
              <input id="selector" v-model="selector" type="text" placeholder='e.g. [data-testid="human-turn"], [data-testid="ai-turn"]' :disabled="converting" class="w-full bg-gray-50 dark:bg-zinc-950 border border-gray-300 dark:border-zinc-700 rounded-lg px-3 py-2 text-sm placeholder-gray-400 dark:placeholder-zinc-600 focus:outline-none focus:border-violet-500 disabled:opacity-50 transition-colors" />
              <p class="mt-1 text-xs text-gray-400 dark:text-zinc-500">Targets the repeating content nodes. Leave empty for the ChatGPT default.</p>
            </div>
          </div>

          <!-- Submit / Cancel -->
          <button v-if="!converting" :disabled="!url.trim()" class="w-full bg-violet-500 hover:bg-violet-400 disabled:bg-gray-100 dark:disabled:bg-zinc-800 disabled:text-gray-400 dark:disabled:text-zinc-600 text-white font-semibold rounded-lg py-3 text-sm transition-colors" @click="convert">Convert to {{ format.toUpperCase() }}</button>
          <button v-else class="w-full bg-red-500 hover:bg-red-400 text-white font-semibold rounded-lg py-3 text-sm transition-colors" @click="cancel">Cancel</button>
        </div>

        <!-- Progress terminal — always dark, intentionally -->
        <div v-if="progress.length > 0 || error" ref="progressContainer" class="bg-black border border-zinc-800 rounded-2xl p-5 mb-6 font-mono text-sm leading-relaxed overflow-auto max-h-64">
          <p v-for="(msg, i) in progress" :key="i" class="text-violet-400"><span class="text-zinc-600 select-none">› </span>{{ msg }}</p>
          <p v-if="error" class="text-red-400"><span class="text-zinc-600 select-none">✗ </span>{{ error }}</p>
          <span v-if="converting" class="text-zinc-500 animate-pulse">▌</span>
        </div>

        <!-- Preview -->
        <div v-if="activeItem" ref="previewContainer" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden mb-4 shadow-sm dark:shadow-none">
          <div class="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 dark:border-zinc-800">
            <span class="text-sm font-medium text-gray-700 dark:text-zinc-300 truncate">{{ activeItem.filename }}</span>
            <div class="flex items-center gap-4 shrink-0 ml-4">
              <a :href="activeItem.blobUrl" :download="activeItem.filename" class="text-xs font-semibold text-violet-500 hover:text-violet-400 transition-colors">↓ Download</a>
              <button type="button" aria-label="Clear" class="text-gray-400 dark:text-zinc-500 hover:text-red-400 transition-colors" @click="clearHistory">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <iframe v-if="activeItem.mimeType === 'application/pdf'" :src="activeItem.blobUrl" class="w-full border-0" style="height: 600px" title="PDF preview" />
          <pre v-else class="p-5 text-sm font-mono text-gray-700 dark:text-zinc-300 overflow-auto max-h-96 whitespace-pre-wrap wrap-break-word">{{ activeItem.textContent }}</pre>
        </div>

        <!-- Session history -->
        <div v-if="history.length > 0" class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl mb-6 shadow-sm dark:shadow-none overflow-hidden">
          <div class="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 dark:border-zinc-800">
            <span class="text-sm font-medium text-gray-500 dark:text-zinc-400">History</span>
            <button class="text-xs text-gray-400 dark:text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors" @click="clearHistory">Clear all</button>
          </div>
          <div v-for="(item, index) in history" :key="item.id" :class="['flex items-center gap-3 px-5 py-3 cursor-pointer transition-colors', index < history.length - 1 ? 'border-b border-gray-100 dark:border-zinc-800' : '', activeItem?.id === item.id ? 'bg-violet-50 dark:bg-violet-950/30' : 'hover:bg-gray-50 dark:hover:bg-zinc-800/50']" @click="activeItem = item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-gray-400 dark:text-zinc-500">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <div class="flex-1 min-w-0">
              <div class="flex items-baseline gap-2">
                <p class="text-sm font-medium truncate">{{ item.filename }}</p>
                <span class="shrink-0 text-xs text-gray-400 dark:text-zinc-500">{{ formatSize(item.size) }}</span>
              </div>
              <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                <span v-for="badge in settingBadges(item.settings)" :key="badge" class="inline-block text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400">{{ badge }}</span>
                <p v-if="settingBadges(item.settings).length === 0" class="text-xs text-gray-400 dark:text-zinc-500 truncate">{{ item.sourceUrl }}</p>
              </div>
            </div>
            <span class="shrink-0 text-xs text-gray-400 dark:text-zinc-500">{{ formatTime(item.timestamp) }}</span>
            <a :href="item.blobUrl" :download="item.filename" class="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black transition-colors" title="Download" @click.stop>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Divider -->
        <div v-if="!isPwa" class="mt-24 pt-12 border-t border-gray-200 dark:border-zinc-800">
          <h2 class="text-2xl font-semibold mb-8 text-center">Also available as a CLI</h2>

          <!-- Install + Usage -->
          <div class="grid sm:grid-cols-2 gap-4 mb-8">
            <div>
              <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Install</p>
              <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-violet-600 dark:text-violet-400 shadow-sm dark:shadow-none">npm install -g snapdf</div>
            </div>
            <div>
              <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Usage</p>
              <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-violet-600 dark:text-violet-400 shadow-sm dark:shadow-none">snapdf &lt;url&gt; [options]</div>
            </div>
          </div>

          <!-- Options -->
          <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 mb-10 font-mono text-sm text-gray-700 dark:text-zinc-300 leading-7 shadow-sm dark:shadow-none">
            <p><span class="text-violet-500 dark:text-violet-400">--format</span> <span class="text-gray-400 dark:text-zinc-500">pdf|txt</span> Output format (default: pdf)</p>
            <p><span class="text-violet-500 dark:text-violet-400">--page-size</span> <span class="text-gray-400 dark:text-zinc-500">letter|a4</span> Paper size (default: letter)</p>
            <p><span class="text-violet-500 dark:text-violet-400">--landscape</span> Landscape orientation</p>
            <p><span class="text-violet-500 dark:text-violet-400">--selector</span> <span class="text-gray-400 dark:text-zinc-500">css</span> CSS selector for content nodes</p>
            <p><span class="text-violet-500 dark:text-violet-400">--hide-user-input</span> Omit user messages from output</p>
            <p><span class="text-violet-500 dark:text-violet-400">--hide-assistant-output</span> Omit assistant messages from output</p>
            <p><span class="text-violet-500 dark:text-violet-400">--timeout</span> <span class="text-gray-400 dark:text-zinc-500">ms</span> Navigation timeout (default: 60000)</p>
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
      <footer v-if="!isPwa" class="relative z-40 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800 py-6 text-center text-sm text-gray-400 dark:text-zinc-500 shrink-0">
        Powered by
        <a href="https://infinitetoken.com" target="_blank" rel="noopener" class="text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 underline underline-offset-2 ml-1 transition-colors">Infinite Token</a>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const AUTO_SCROLL_THRESHOLD_PX = 24

interface HistorySettings {
  format: 'pdf' | 'txt'
  pageSize: 'letter' | 'a4'
  margin: number
  landscape: boolean
  hideUserInput: boolean
  hideAssistantOutput: boolean
  selector: string
}

interface HistoryItem {
  id: string
  filename: string
  mimeType: string
  blobUrl: string
  textContent: string | null
  size: number
  timestamp: Date
  sourceUrl: string
  settings: HistorySettings
}

const colorMode = useColorMode()

const cycleColorMode = () => {
  const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (colorMode.preference === 'system') colorMode.preference = systemIsDark ? 'light' : 'dark'
  else if (colorMode.preference === 'dark') colorMode.preference = systemIsDark ? 'system' : 'light'
  else colorMode.preference = systemIsDark ? 'dark' : 'system'
}

const url = ref('')
const hideUrl = ref(false)
const format = ref<'pdf' | 'txt'>('pdf')
const letterRegions = new Set(['US', 'CA', 'MX', 'PH', 'CO', 'VE', 'GT', 'HN', 'SV', 'NI', 'CR', 'PA', 'CU', 'DO', 'PR'])
const detectedRegion = import.meta.client ? (new Intl.Locale(navigator.language).region ?? '') : ''
const pageSize = ref<'letter' | 'a4'>(letterRegions.has(detectedRegion) ? 'letter' : 'a4')
const margin = ref(36)
const landscape = ref(false)
const hideUserInput = ref(false)
const hideAssistantOutput = ref(false)
const autoDownload = ref(true)
const { isPwa } = usePwa()
const showAdvanced = ref(false)
const selector = ref('')
const converting = ref(false)
const progress = ref<string[]>([])
const progressContainer = ref<HTMLElement | null>(null)
const error = ref<string | null>(null)
const history = ref<HistoryItem[]>([])
const activeItem = ref<HistoryItem | null>(null)
const previewContainer = ref<HTMLElement | null>(null)

if (import.meta.client) {
  const stored = localStorage.getItem('snapdf_auto_dl')
  if (stored !== null) autoDownload.value = stored !== '0'
}

watch(autoDownload, (v) => {
  if (import.meta.client) localStorage.setItem('snapdf_auto_dl', v ? '1' : '0')
})

const formatSize = (bytes: number): string => {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const formatTime = (date: Date): string => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

const settingBadges = (s: HistorySettings): string[] => {
  const badges: string[] = []
  if (s.format === 'txt') badges.push('text')
  if (s.pageSize === 'a4') badges.push('A4')
  if (s.pageSize === 'letter') badges.push('letter')
  if (s.landscape) badges.push('landscape')
  if (s.hideUserInput) badges.push('no prompts')
  if (s.hideAssistantOutput) badges.push('no responses')
  if (s.margin !== 36) badges.push(`${s.margin}pt margin`)
  if (s.selector) badges.push('custom selector')
  return badges
}

const cancel = () => {
  eventSource?.close()
  converting.value = false
  progress.value.push('Cancelled.')
}

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

watch(
  () => progress.value.length,
  async () => {
    if (!converting.value) return
    if (!progressContainer.value) return

    const distanceFromBottom = progressContainer.value.scrollHeight - progressContainer.value.scrollTop - progressContainer.value.clientHeight
    const shouldAutoScroll = distanceFromBottom <= AUTO_SCROLL_THRESHOLD_PX

    await nextTick()
    if (!progressContainer.value || !shouldAutoScroll) return
    progressContainer.value.scrollTop = progressContainer.value.scrollHeight
  }
)

const convert = () => {
  if (!url.value.trim() || converting.value) return

  converting.value = true
  progress.value = []
  error.value = null

  const params = new URLSearchParams({
    url: url.value.trim(),
    format: format.value,
    pageSize: pageSize.value,
    margin: String(margin.value),
    landscape: String(landscape.value),
    hideUserInput: String(hideUserInput.value),
    hideAssistantOutput: String(hideAssistantOutput.value)
  })
  if (selector.value.trim()) params.set('selector', selector.value.trim())

  eventSource?.close()
  eventSource = new EventSource(`/api/convert?${params.toString()}`)

  eventSource.onmessage = async (event) => {
    type ConvertEvent = { type: 'progress'; message: string } | { type: 'complete'; data: string; filename: string; mimeType: string } | { type: 'error'; message: string }

    const msg = JSON.parse(event.data as string) as ConvertEvent

    if (msg.type === 'progress') {
      progress.value.push(msg.message)
    } else if (msg.type === 'complete') {
      const byteStr = atob(msg.data)
      const bytes = new Uint8Array(byteStr.length)
      for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i)
      const blob = new Blob([bytes], { type: msg.mimeType })
      const blobUrl = URL.createObjectURL(blob)

      const item: HistoryItem = {
        id: crypto.randomUUID(),
        filename: msg.filename,
        mimeType: msg.mimeType,
        blobUrl,
        textContent: msg.mimeType === 'text/plain' ? new TextDecoder().decode(bytes) : null,
        size: blob.size,
        timestamp: new Date(),
        sourceUrl: url.value.trim(),
        settings: {
          format: format.value,
          pageSize: pageSize.value,
          margin: margin.value,
          landscape: landscape.value,
          hideUserInput: hideUserInput.value,
          hideAssistantOutput: hideAssistantOutput.value,
          selector: selector.value.trim()
        }
      }

      history.value.unshift(item)
      activeItem.value = item
      converting.value = false
      eventSource?.close()

      await nextTick()
      previewContainer.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })

      if (autoDownload.value) {
        const a = document.createElement('a')
        a.href = blobUrl
        a.download = msg.filename
        a.click()
      }
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

const clearHistory = () => {
  history.value.forEach((item) => URL.revokeObjectURL(item.blobUrl))
  history.value = []
  activeItem.value = null
}

const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

onUnmounted(() => {
  eventSource?.close()
  history.value.forEach((item) => URL.revokeObjectURL(item.blobUrl))
})
</script>
