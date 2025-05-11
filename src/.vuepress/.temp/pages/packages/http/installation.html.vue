<template><div><p><code v-pre>HTTP Core</code> is available from the <a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">npm registry</a> and can be installed as follows:</p>
<CodeTabs id="3" :data='[{"id":"npm"},{"id":"yarn"},{"id":"pnpm"}]' :active="0" tab-id="shell">
<template #title0="{ value, isActive }">npm</template>
<template #title1="{ value, isActive }">yarn</template>
<template #title2="{ value, isActive }">pnpm</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i @stone-js/http-core</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> @stone-js/http-core</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> @stone-js/http-core</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container info">
<p class="hint-container-title">Note</p>
<p>This package is <strong>Pure ESM</strong>. If you are unfamiliar with what that means or how to handle it in your project,
please refer to <a href="https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c" target="_blank" rel="noopener noreferrer">this guide on Pure ESM packages</a>.</p>
</div>
<p>Make sure your project setup is compatible with ESM. This might involve updating your <code v-pre>package.json</code> or using certain bundler configurations.</p>
<p>The <code v-pre>HTTP Core</code> module can only be imported via ESM import syntax:</p>
<CodeTabs id="25" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent<span class="token punctuation">,</span> OutgoingHttpResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/http-core'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>


