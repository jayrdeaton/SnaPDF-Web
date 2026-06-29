<template>
  <div class="space-y-4">
    <div class="grid sm:grid-cols-2 gap-4">
      <div>
        <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Install</p>
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-violet-600 dark:text-violet-400 shadow-sm dark:shadow-none">npm install -g snapdf</div>
      </div>
      <div>
        <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Usage</p>
        <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-4 py-3 font-mono text-sm text-violet-600 dark:text-violet-400 shadow-sm dark:shadow-none">snapdf &lt;url&gt; [options]</div>
      </div>
    </div>
    <div>
      <p class="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Options</p>
      <div class="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-5 font-mono text-sm text-gray-700 dark:text-zinc-300 leading-7 shadow-sm dark:shadow-none">
        <p><span class="text-violet-500 dark:text-violet-400">--format</span> <span class="text-gray-400 dark:text-zinc-500">pdf|txt</span> Output format (default: pdf)</p>
        <p><span class="text-violet-500 dark:text-violet-400">--page-size</span> <span class="text-gray-400 dark:text-zinc-500">letter|a4</span> Paper size (default: letter)</p>
        <p><span class="text-violet-500 dark:text-violet-400">--landscape</span> Landscape orientation</p>
        <p><span class="text-violet-500 dark:text-violet-400">--selector</span> <span class="text-gray-400 dark:text-zinc-500">css</span> CSS selector for content nodes</p>
        <p><span class="text-violet-500 dark:text-violet-400">--hide-user-input</span> Omit user messages from output</p>
        <p><span class="text-violet-500 dark:text-violet-400">--hide-assistant-output</span> Omit assistant messages from output</p>
        <p><span class="text-violet-500 dark:text-violet-400">--timeout</span> <span class="text-gray-400 dark:text-zinc-500">ms</span> Navigation timeout (default: 60000)</p>
      </div>
    </div>
  </div>
</template>
