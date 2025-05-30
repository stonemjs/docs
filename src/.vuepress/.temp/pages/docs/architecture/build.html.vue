<template><div><p>Before a Stone.js system can run, it must be built.</p>
<p>Stone.js leverages the most recent ECMAScript features, including the <a href="https://github.com/tc39/proposal-decorators" target="_blank" rel="noopener noreferrer">2023-11 decorators proposal</a>, to provide a modern, expressive, and powerful developer experience. However, these features are not yet natively supported across all JavaScript runtimes, which makes the build step essential.</p>
<p>This phase is not part of the Continuum Architecture itself, it’s the preparation step that ensures your code is compatible, optimized, and ready to run <em>anywhere</em>.</p>
<p>The build process transforms your source files into deployable artifacts:</p>
<ul>
<li><code v-pre>dist/index.mjs</code>, the universal entry point for your server or backend app</li>
<li><code v-pre>dist/index.html</code>, the HTML entry point for your frontend (SPA)</li>
</ul>
<p>Whether you're targeting Node.js, the browser, or serverless platforms, this phase ensures you ship a lightweight and fully functional artifact, with no need for <code v-pre>node_modules</code> or runtime compilation.</p>
<p>Let’s explore how it works.</p>
<h2 id="build-commands" tabindex="-1"><a class="header-anchor" href="#build-commands"><span>Build Commands</span></a></h2>
<p>Stone.js projects come with built-in scripts that simplify development and production workflows. These commands are designed to help you iterate quickly in development and produce clean, optimized builds for deployment, with zero runtime dependencies.</p>
<h3 id="npm-run-dev-or-npm-run-serve" tabindex="-1"><a class="header-anchor" href="#npm-run-dev-or-npm-run-serve"><span><code v-pre>npm run dev</code> or <code v-pre>npm run serve</code></span></a></h3>
<p>Launches your system in <strong>development mode</strong> with file watching and automatic restarts.<br>
This is your go-to command while building your app.</p>
<ul>
<li>Rebuilds on code changes</li>
<li>Regenerates the bootstrap file automatically</li>
<li>Keeps everything hot and ready to go</li>
</ul>
<p>Great for local development, debugging, and rapid iteration.</p>
<h3 id="npm-run-build-or-npm-run-prod" tabindex="-1"><a class="header-anchor" href="#npm-run-build-or-npm-run-prod"><span><code v-pre>npm run build</code> or <code v-pre>npm run prod</code></span></a></h3>
<p>Generates the <strong>production build</strong> of your Stone.js system.</p>
<p>This command compiles your source files using:</p>
<ul>
<li><strong>Rollup + Babel</strong> for backend/server logic</li>
<li><strong>Vite + Babel</strong> for frontend/client code</li>
</ul>
<p>It outputs the following in the <code v-pre>dist/</code> folder:</p>
<ul>
<li><code v-pre>index.mjs</code>, the production-ready server entry point</li>
<li><code v-pre>index.html</code>, the frontend entry point (for SPAs, SSR, etc.)</li>
</ul>
<p>These are standalone, tree-shaken artifacts, <strong>no <code v-pre>node_modules</code>, no <code v-pre>package.json</code> required</strong>. Just deploy and run.</p>
<h3 id="npm-run-preview" tabindex="-1"><a class="header-anchor" href="#npm-run-preview"><span><code v-pre>npm run preview</code></span></a></h3>
<p>Serves the production build locally, exactly as it will behave in your deployment environment.</p>
<p>Use this to:</p>
<ul>
<li>Confirm that everything is working after build</li>
<li>Test your SSR/SPA output before deploying</li>
<li>Catch environment-specific issues early</li>
</ul>
<p>Each of these commands plays a distinct role in the Stone.js workflow, but they all lead to the same outcome: a modern system ready to deploy anywhere.</p>
<h2 id="rollup-babel-backend" tabindex="-1"><a class="header-anchor" href="#rollup-babel-backend"><span>Rollup + Babel (Backend)</span></a></h2>
<p>To support modern JavaScript features while producing lightweight, portable artifacts, Stone.js uses <a href="https://rollupjs.org" target="_blank" rel="noopener noreferrer">Rollup</a> and <a href="https://babeljs.io" target="_blank" rel="noopener noreferrer">Babel</a> under the hood to build and bundle backend applications.</p>
<p>By default, everything is preconfigured for you, no setup required. But when you need more control, the system is fully extensible.</p>
<h3 id="built-in-configuration" tabindex="-1"><a class="header-anchor" href="#built-in-configuration"><span>Built-in Configuration</span></a></h3>
<p>Stone.js includes an internal preset configuration that:</p>
<ul>
<li>Transpiles your code using Babel (e.g., for decorators, top-level <code v-pre>await</code>, etc.)</li>
<li>Bundles everything into a deployable artifact (<code v-pre>dist/index.mjs</code>)</li>
<li>Optimizes the output for serverless and universal runtimes</li>
</ul>
<p>You don’t need to configure Rollup manually unless you have specific needs.</p>
<h3 id="full-customization" tabindex="-1"><a class="header-anchor" href="#full-customization"><span>Full Customization</span></a></h3>
<p>If you want full access to the underlying Rollup config, you can export the internal setup:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx stone <span class="token builtin class-name">export</span> rollup</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This will generate a file named <code v-pre>rollup.config.mjs</code> at the root of your project. From there, you can modify the config as needed, just keep in mind that <strong>you’re taking full responsibility</strong> for the changes.</p>
<p>This file exposes two named exports:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> rollupBuildConfig<span class="token punctuation">,</span> rollupBundleConfig <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>rollupBuildConfig</code>: Used to compile the source files</li>
<li><code v-pre>rollupBundleConfig</code>: Used to create the final artifact</li>
</ul>
<p>If you're overriding this file, be cautious. You’re replacing an engine part, not just tweaking a UI color.</p>
<h3 id="light-customization-via-stone-config-mjs" tabindex="-1"><a class="header-anchor" href="#light-customization-via-stone-config-mjs"><span>Light Customization via <code v-pre>stone.config.mjs</code></span></a></h3>
<p>If you only need to tweak or extend the config (e.g. to add a Rollup or Babel plugin), you don’t have to override the entire config file. Instead, use the <code v-pre>rollup</code> key in <code v-pre>stone.config.mjs</code>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// stone.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/cli'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">rollup</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token comment">/* Add Rollup plugins for build */</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">bundle</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token comment">/* Add Rollup plugins for bundling */</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This approach <strong>extends or overrides</strong> the built-in config without replacing it entirely, giving you control <strong>without sacrificing stability</strong>.</p>
<p>This dual-level customization, presets by default, escape hatch when needed, is part of Stone.js’s commitment to flexibility without complexity.</p>
<h2 id="vite-babel-frontend" tabindex="-1"><a class="header-anchor" href="#vite-babel-frontend"><span>Vite + Babel (Frontend)</span></a></h2>
<p>For frontend applications, Stone.js uses <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">Vite</a> and <a href="https://babeljs.io" target="_blank" rel="noopener noreferrer">Babel</a> to provide a fast, modern development experience while supporting the latest JavaScript features, including decorators, top-level <code v-pre>await</code>, and more.</p>
<p>Vite handles your client-side code with lightning-fast hot module replacement in dev mode and optimized bundling for production. Babel ensures compatibility with cutting-edge ECMAScript syntax.</p>
<p>Like the backend build process, everything is configured out of the box, but fully customizable when needed.</p>
<h3 id="built-in-configuration-1" tabindex="-1"><a class="header-anchor" href="#built-in-configuration-1"><span>Built-in Configuration</span></a></h3>
<p>Stone.js ships with an internal Vite configuration that:</p>
<ul>
<li>Supports the latest ECMAScript features</li>
<li>Automatically integrates with the rest of your Stone.js project</li>
<li>Bundles the frontend into <code v-pre>dist/index.html</code> (and associated assets) for SPA or SSR deployment</li>
</ul>
<p>No manual setup is required, just run <code v-pre>npm run dev</code> or <code v-pre>npm run build</code> and you're good to go.</p>
<h3 id="full-customization-1" tabindex="-1"><a class="header-anchor" href="#full-customization-1"><span>Full Customization</span></a></h3>
<p>If you need to take full control over the Vite configuration, you can export it:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx stone <span class="token builtin class-name">export</span> vite</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This command creates a <code v-pre>vite.config.js</code> file at the root of your project.</p>
<p>It exposes a single named export:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> viteConfig <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>From there, you can customize your Vite setup however you like, but remember: <strong>you’re bypassing the built-in safety net</strong>, so proceed only if you know what you're doing.</p>
<h3 id="light-customization-via-stone-config-mjs-1" tabindex="-1"><a class="header-anchor" href="#light-customization-via-stone-config-mjs-1"><span>Light Customization via <code v-pre>stone.config.mjs</code></span></a></h3>
<p>For most use cases, you don’t need to override the entire Vite config. Instead, you can extend it safely from your <code v-pre>stone.config.mjs</code> file using the <code v-pre>vite</code> key:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// stone.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/cli'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">vite</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">/* Add your custom Vite plugins here */</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method lets you plug into the system without replacing it, a clean way to extend functionality while preserving the Stone.js defaults.</p>
<p>This flexible system, one command to eject, one config to extend, is designed to meet you where you are, whether you're building a simple SPA or pushing the boundaries of SSR and edge rendering.</p>
<h2 id="stone-config-file-stone-config-mjs" tabindex="-1"><a class="header-anchor" href="#stone-config-file-stone-config-mjs"><span>Stone Config File (<code v-pre>stone.config.mjs</code>)</span></a></h2>
<p>In Stone.js, the <code v-pre>stone.config.mjs</code> file defines how your <strong>system</strong> is built and bundled, across all dimensions of your continuum.</p>
<p>This configuration exists <strong>only at build-time</strong>. It does not affect runtime behavior, middleware, lifecycle hooks, or any runtime execution flow. Its sole job is to shape your application artifact: what is included, how it is bundled, and how it is optimized for deployment.</p>
<h3 id="why-it-matters" tabindex="-1"><a class="header-anchor" href="#why-it-matters"><span>Why it matters</span></a></h3>
<p>Stone.js applications are continuum-native, designed to be deployed anywhere. To achieve this, the build system must:</p>
<ul>
<li>Support both frontend and backend targets</li>
<li>Handle multiple module types and application types</li>
<li>Strip away unnecessary context (e.g. Node-only modules from the browser build)</li>
<li>Output a clean, deployable artifact (<code v-pre>dist/index.mjs</code>, <code v-pre>dist/index.html</code>)</li>
</ul>
<p>This file is where you configure <em>how</em> that happens.</p>
<h3 id="extending-the-default-builder" tabindex="-1"><a class="header-anchor" href="#extending-the-default-builder"><span>Extending the Default Builder</span></a></h3>
<p>Stone.js comes with a powerful default builder, but you can override or extend it by modifying <code v-pre>stone.config.mjs</code> at the root of your project.</p>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>This file is optional and does not exist by default in your project. You can create it when you need to customize the build process.</p>
</div>
<p>Here’s a simple example:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// stone.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/cli'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'typescript'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">appType</span><span class="token operator">:</span> <span class="token string">'react'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">all</span><span class="token operator">:</span> <span class="token string">'src/**/*.ts'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">views</span><span class="token operator">:</span> <span class="token string">'src/views/**/*.tsx'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mainCSS</span><span class="token operator">:</span> <span class="token string">'src/styles/main.css'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rollup</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">bundle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">vite</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="main-configuration-options" tabindex="-1"><a class="header-anchor" href="#main-configuration-options"><span>Main Configuration Options</span></a></h3>
<p>Below is a breakdown of the most important options in the <code v-pre>BuilderConfig</code> interface.</p>
<h4 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span><code v-pre>type</code></span></a></h4>
<p>Specify whether you're using <code v-pre>javascript</code> or <code v-pre>typescript</code>.</p>
<h4 id="apptype" tabindex="-1"><a class="header-anchor" href="#apptype"><span><code v-pre>appType</code></span></a></h4>
<p>Defines what kind of application you're building:</p>
<ul>
<li><code v-pre>react</code> (SPA/SSR frontend)</li>
<li><code v-pre>vue</code></li>
<li><code v-pre>service</code> (backend or microservice)</li>
</ul>
<p>This helps Stone.js infer how to optimize your bundles.</p>
<h4 id="imperative" tabindex="-1"><a class="header-anchor" href="#imperative"><span><code v-pre>imperative</code></span></a></h4>
<p>Set to <code v-pre>true</code> if your system uses the <strong>imperative API style</strong>. This helps Stone.js make optimizations based on code introspection strategies.</p>
<h4 id="dotenv" tabindex="-1"><a class="header-anchor" href="#dotenv"><span><code v-pre>dotenv</code></span></a></h4>
<p>Customize how environment variables are loaded using the dotenv strategy.</p>
<h4 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span><code v-pre>input</code></span></a></h4>
<p>Control what gets included and how modules are grouped during build:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">input<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  all<span class="token operator">:</span> <span class="token string">'src/**/*.ts'</span><span class="token punctuation">,</span>    <span class="token comment">// All modules</span></span>
<span class="line">  app<span class="token operator">:</span> <span class="token string">'src/**/*.ts'</span><span class="token punctuation">,</span>   <span class="token comment">// Business logic (excluding views)</span></span>
<span class="line">  views<span class="token operator">:</span> <span class="token string">'src/**/*.tsx'</span><span class="token punctuation">,</span>   <span class="token comment">// Lazy-loadable views</span></span>
<span class="line">  mainCSS<span class="token operator">:</span> <span class="token string">'assets/styles.css'</span>     <span class="token comment">// Main stylesheet</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span><code v-pre>output</code></span></a></h4>
<p>Specify a custom output path for the final artifact (<code v-pre>index.mjs</code>, <code v-pre>index.html</code>).</p>
<h4 id="watcher" tabindex="-1"><a class="header-anchor" href="#watcher"><span><code v-pre>watcher</code></span></a></h4>
<p>Ignore paths during development watching (e.g., <code v-pre>node_modules</code>, <code v-pre>dist</code>).</p>
<h4 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup"><span><code v-pre>rollup</code></span></a></h4>
<p>Customize Rollup’s build and bundle options individually:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">rollup<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  build<span class="token operator">:</span> <span class="token punctuation">{</span> plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">// Used to transpile the code</span></span>
<span class="line">  bundle<span class="token operator">:</span> <span class="token punctuation">{</span> plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>   <span class="token comment">// Used to bundle the final output</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Use this to extend or override internal presets, without replacing them entirely.</p>
<h4 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span><code v-pre>vite</code></span></a></h4>
<p>Extend the frontend bundling process for SPA/SSR apps by injecting plugins or custom settings into the internal Vite config:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">vite<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stone.js gives you control where you need it, and safety where you don't.<br>
The <code v-pre>stone.config.mjs</code> is your <strong>build-time command center</strong>, shaping how your application continuum turns into a portable artifact, ready for any platform.</p>
<h2 id="custom-bootstrap-file" tabindex="-1"><a class="header-anchor" href="#custom-bootstrap-file"><span>Custom Bootstrap File</span></a></h2>
<p>Every Stone.js system begins with a <strong>bootstrap file</strong>, a special entry point used during the build to assemble and initialize your continuum system.</p>
<p>This file isn't created manually and doesn’t appear in your project by default. Instead, it's auto-generated internally when you run dev or build commands. Each environment (server, client, console) has its own dedicated bootstrap file.</p>
<h3 id="default-bootstrap-targets" tabindex="-1"><a class="header-anchor" href="#default-bootstrap-targets"><span>Default Bootstrap Targets</span></a></h3>
<table>
<thead>
<tr>
<th>Environment</th>
<th>Bootstrap File</th>
</tr>
</thead>
<tbody>
<tr>
<td>Server-side apps</td>
<td><code v-pre>.stone/server.mjs</code> or <code v-pre>.ts</code></td>
</tr>
<tr>
<td>Console apps</td>
<td><code v-pre>.stone/console.mjs</code> or <code v-pre>.ts</code></td>
</tr>
<tr>
<td>Frontend apps</td>
<td><code v-pre>.stone/index.html</code> and <code v-pre>.stone/client.mjs</code> or <code v-pre>.ts</code></td>
</tr>
</tbody>
</table>
<p>These files are generated automatically and used to:</p>
<ul>
<li>Wire together your system's configuration</li>
<li>Import modules in the correct order</li>
<li>Instantiate and launch your system</li>
</ul>
<h3 id="customization" tabindex="-1"><a class="header-anchor" href="#customization"><span>Customization</span></a></h3>
<p>Need to inject a global script? Set up analytics? Override the launch logic?</p>
<p>You can export and customize your bootstrap file using:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx stone <span class="token builtin class-name">export</span> app</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Stone.js will intelligently detect whether your project is a <strong>frontend</strong> or <strong>backend</strong> project and generate the appropriate bootstrap file(s) at the root.
e.g., <code v-pre>index.html</code>, <code v-pre>client.mjs</code>, and <code v-pre>server.mjs</code> (or <code v-pre>.ts</code> if your project uses TypeScript).</p>
<p>If want to export the <strong>console</strong> bootstrap file, you can do so with:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx stone <span class="token builtin class-name">export</span> console</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This will export the console-specific bootstrap logic as <code v-pre>console.mjs</code> (or <code v-pre>.ts</code> if your project uses TypeScript).</p>
<p>Once exported, these files become your responsibility, but also your canvas. Stone.js will now use <em>your custom bootstrap file</em> instead of the internal one.</p>
<h3 id="why-it-matters-1" tabindex="-1"><a class="header-anchor" href="#why-it-matters-1"><span>Why It Matters</span></a></h3>
<p>Sometimes you need to:</p>
<ul>
<li>Import global polyfills or third-party scripts</li>
<li>Execute logic before the system runs</li>
<li>Inject global context variables</li>
<li>Set up loggers, monitors, or debug tools</li>
</ul>
<p>This is where the bootstrap file shines.<br>
It’s your one and only <strong>entry point to the system</strong>, and it runs <strong>before anything else</strong> in the continuum.</p>
<h3 id="caution" tabindex="-1"><a class="header-anchor" href="#caution"><span>Caution</span></a></h3>
<p>The exported bootstrap file is <strong>not regenerated automatically</strong>.<br>
Once exported, it becomes a persistent part of your project.<br>
<strong>Do not modify internal <code v-pre>.stone</code> bootstrap files directly</strong>, use the exported versions instead, as they are auto-generated and overwritten on every build.</p>
<p>In short, the bootstrap file is the <strong>top-level trigger of your system</strong>.<br>
It’s where the continuum awakens, and yes, you can customize it.</p>
<h2 id="summary-best-practices" tabindex="-1"><a class="header-anchor" href="#summary-best-practices"><span>Summary &amp; Best Practices</span></a></h2>
<p>The build phase in Stone.js is simple by design, but powerful under the hood. It ensures your <strong>continuum system</strong> is transformed into a clean, portable artifact that’s ready to run in any context: browser, server, or function-as-a-service.</p>
<p>Here’s what to remember:</p>
<h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h3>
<ul>
<li>
<p><strong>Why build?</strong><br>
To use the latest ECMAScript features (e.g., <a href="https://github.com/tc39/proposal-decorators" target="_blank" rel="noopener noreferrer">decorators 2023-11</a>) and produce a universal, context-free deployment artifact.</p>
</li>
<li>
<p><strong>What does it produce?</strong></p>
<ul>
<li><code v-pre>dist/index.mjs</code> for server-side and backend systems</li>
<li><code v-pre>dist/index.html</code> (+ assets) for frontend apps</li>
</ul>
</li>
<li>
<p><strong>How does it work?</strong></p>
<ul>
<li>Uses <strong>Rollup + Babel</strong> for backend</li>
<li>Uses <strong>Vite + Babel</strong> for frontend</li>
<li>Controlled by <code v-pre>stone.config.mjs</code> and optional custom bootstrap files</li>
</ul>
</li>
</ul>
<h3 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h3>
<ul>
<li>Use <code v-pre>stone.config.mjs</code> <strong>only for build configuration</strong>, not runtime logic.</li>
<li>Do not use it to inject runtime logic, that’s what middleware, decorators, and lifecycle hooks are for</li>
<li>Keep your <code v-pre>input</code> patterns clean and modular, this helps the system split views from core logic (useful for lazy loading and nano apps)</li>
<li>Be mindful of exclusions, especially in browser builds, to avoid bundling server-only modules</li>
<li>Extend internal configs (Rollup/Vite) via <code v-pre>stone.config.mjs</code> instead of overriding them when possible.</li>
<li>Only export full configs with <code v-pre>npx stone export rollup/vite</code> if you have advanced needs.</li>
<li>Export your bootstrap file with <code v-pre>npx stone export app</code> or <code v-pre>npx stone export console</code> <strong>only if you need</strong> top-level control.</li>
<li>Never edit files inside <code v-pre>.stone/</code> manually, they’re overwritten during each build.</li>
</ul>
<p>Stone.js gives you full control over how your system is built, but only when you need it.<br>
Stick with the defaults to move fast, and customize only when your use case demands it.</p>
<p>Now that your system is built…<br>
Let’s see what happens when it runs.</p>
</div></template>


