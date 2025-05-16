<template><div><p>Understanding how to organize a Stone.js project is like understanding the flow of time in the Continuum, it's not mandatory, but it makes everything smoother, clearer, and a lot more fun.</p>
<p>Stone.js follows a philosophy we call <strong>Adaptive Convention Configuration</strong>. That means we provide smart, flexible defaults to get you started quickly, but in the end, <strong>the convention is yours</strong>. You and your team own how things are structured, named, and organized. Follow our guide, rewrite it, remix it, either way, <strong>the context belongs to you</strong>.</p>
<p>Here’s a typical layout for a Stone.js project that balances backend, frontend, and fullstack needs while being ready for liftoff (Node? Lambda? Browser? All of the above?).</p>
<h2 id="root-directory" tabindex="-1"><a class="header-anchor" href="#root-directory"><span>Root Directory</span></a></h2>
<p>This is where your app declares its identity to the world (and to the build system). Some files are always present, others show up only when you need them.</p>
<table>
<thead>
<tr>
<th>File/Folder</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>stone.config.mjs</code></td>
<td>Optional Stone.js build config using <code v-pre>defineConfig</code>.</td>
</tr>
<tr>
<td><code v-pre>vite.config.js</code></td>
<td>Optional Vite config for frontend builds.</td>
</tr>
<tr>
<td><code v-pre>rollup.config.mjs</code></td>
<td>Optional Rollup config for custom server builds.</td>
</tr>
<tr>
<td><code v-pre>vitest.config.js</code></td>
<td>Optional Vitest config for test runners.</td>
</tr>
<tr>
<td><code v-pre>tsconfig.json</code></td>
<td>TypeScript configuration, required if you're using TypeScript.</td>
</tr>
<tr>
<td><code v-pre>.env</code></td>
<td>Local environment variables, we love <code v-pre>.env</code> like devs love coffee.</td>
</tr>
<tr>
<td><code v-pre>app/</code></td>
<td>Your domain logic lives here.</td>
</tr>
<tr>
<td><code v-pre>public/</code></td>
<td>Static files (images, fonts, etc.) for frontend apps.</td>
</tr>
<tr>
<td><code v-pre>assets/</code></td>
<td>Processed static assets, bundled, optimized, the works.</td>
</tr>
<tr>
<td><code v-pre>tests/</code></td>
<td>Your automated test suites. Vitest-friendly.</td>
</tr>
<tr>
<td><code v-pre>dist/</code></td>
<td>Output directory after build.</td>
</tr>
<tr>
<td><code v-pre>dist/server.mjs</code></td>
<td>Your production server (when deploying backend/fullstack/SSR).</td>
</tr>
<tr>
<td><code v-pre>dist/index.html</code></td>
<td>Your built frontend entrypoint (for SPA).</td>
</tr>
<tr>
<td><code v-pre>.stone/</code></td>
<td>Temporary dev artifacts and cache. You can ignore this one, we do.</td>
</tr>
</tbody>
</table>
<h2 id="stone-config-mjs-optional" tabindex="-1"><a class="header-anchor" href="#stone-config-mjs-optional"><span><code v-pre>stone.config.mjs</code> (Optional)</span></a></h2>
<p>This file lets you fully customize the build process of your Stone.js app, inputs, outputs, excluded modules, and more.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// stone.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/cli'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'typescript'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token string">'app/**/*.ts'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">views</span><span class="token operator">:</span> <span class="token string">'app/**/*.tsx'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token string">'server.mjs'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">excludedModules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@stone-js/node-http-adapter'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Not using custom builds yet? No worries. This file is optional. But when you're ready to deploy to multiple environments or exclude platform-specific code, it's your new best friend.</p>
<h2 id="app-directory" tabindex="-1"><a class="header-anchor" href="#app-directory"><span><code v-pre>app/</code> Directory</span></a></h2>
<p>This is where the magic happens, your domain's <strong>core logic</strong> lives here. Routes, services, views, handlers, whatever powers your app, it lives in <code v-pre>app/</code>.</p>
<p>Stone.js doesn’t force a rigid structure. Instead, it gives you <strong>freedom with intention</strong>. The only convention we suggest is this:</p>
<p>👉 You must define <strong>a single app entry point</strong>, name it however you want (<code v-pre>Application.ts</code>, <code v-pre>MainApp.ts</code>, <code v-pre>MyUnicornApp.ts</code>), as long as it does one of the following:</p>
<ul>
<li><strong>Declarative API</strong>: Export a class decorated with <code v-pre>@StoneApp()</code>.</li>
<li><strong>Imperative API</strong>: Export any value created using <code v-pre>defineBlueprintConfig()</code>.</li>
</ul>
<p>Even the folder name <code v-pre>app/</code> is just a suggestion, feel free to rename it to match your project’s domain or your team’s naming conventions. <em>You own the structure. You own the context.</em></p>
<p>After that? Organize your files, folders, and features however suits your domain. Stone.js adapts to your logic, not the other way around.</p>
<h3 id="example-structure" tabindex="-1"><a class="header-anchor" href="#example-structure"><span>Example structure:</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">app/</span>
<span class="line">└── Application.ts <span class="token punctuation">(</span>or .mjs, or whatever-you-want.ts<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="declarative-api-example" tabindex="-1"><a class="header-anchor" href="#declarative-api-example"><span>Declarative API Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// app/Application.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Start with something cool here.</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imperative-api-example" tabindex="-1"><a class="header-anchor" href="#imperative-api-example"><span>Imperative API Example</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// app/Application.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> stoneBlueprint<span class="token punctuation">,</span> defineBlueprintConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@stone-js/core"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> AppBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span>stoneBlueprint<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Define your app manually using functional composition</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js will detect the proper entrypoint automatically. You define the intent, we adapt to your context. That's the continuum in action.</p>
<h2 id="tests-directory" tabindex="-1"><a class="header-anchor" href="#tests-directory"><span><code v-pre>tests/</code> Directory</span></a></h2>
<p>Where all your brilliant ideas are <em>proven to work</em>. Organize your tests however you like, we recommend grouping by feature or module. Stone.js pairs nicely with <a href="https://vitest.dev/" target="_blank" rel="noopener noreferrer">Vitest</a>, and yes, 100% coverage is possible (and encouraged, be a testing hero).</p>
<h2 id="a-few-extra-notes" tabindex="-1"><a class="header-anchor" href="#a-few-extra-notes"><span>A Few Extra Notes</span></a></h2>
<ul>
<li>The <code v-pre>public/</code> and <code v-pre>assets/</code> folders are only used when you’re building frontend apps (SPA or SSR).</li>
<li>The <code v-pre>dist/</code> folder is the final artifact, the thing you deploy.</li>
<li>The <code v-pre>.stone/</code> folder? It’s where we hide our build cache, dev bundles, and a few secrets. You can safely ignore it.</li>
</ul>
<h2 id="customize-everything-because-context-changes" tabindex="-1"><a class="header-anchor" href="#customize-everything-because-context-changes"><span>Customize Everything (Because Context Changes)</span></a></h2>
<p>Stone.js doesn't lock you into any structure. The above layout is <strong>recommended</strong>, but you're free to adapt, remix, and reorganize based on your context, your app type, and your deployment target. Thanks to the <RouteLink to="/docs/architecture/continuum.html">Continuum Architecture</RouteLink>, everything stays consistent across environments.</p>
<p>So go ahead, <strong>declare your intentions</strong>, keep your contexts clear, and let your project evolve like a true continuum.</p>
</div></template>


