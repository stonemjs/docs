<template><div><p><strong>Config Documentation v0.0.0</strong> • <RouteLink to="/api/config/modules.html"><strong>Docs</strong></RouteLink></p>
<hr>
<h1 id="stone-js-config" tabindex="-1"><a class="header-anchor" href="#stone-js-config"><span>Stone.js: Config</span></a></h1>
<p><a href="https://opensource.org/licenses/Apache-2.0" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/l/@stone-js/config" alt="npm" loading="lazy"></a>
<a href="https://www.npmjs.com/package/@stone-js/config" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@stone-js/config" alt="npm" loading="lazy"></a>
<a href="https://www.npmjs.com/package/@stone-js/config" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dm/@stone-js/config" alt="npm" loading="lazy"></a>
<img src="https://img.shields.io/maintenance/yes/2024" alt="Maintenance" loading="lazy">
<a href="https://github.com/stonemjs/config/actions/workflows/release.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/stonemjs/config/actions/workflows/release.yml/badge.svg" alt="Publish Package to npmjs" loading="lazy"></a>
<a href="https://conventionalcommits.org" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Conventional Commits-1.0.0-yellow.svg" alt="Conventional Commits" loading="lazy"></a></p>
<p>Fluent and simple API with deep dot access to manage configurations in any JavaScript project.</p>
<hr>
<h2 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis"><span>Synopsis</span></a></h2>
<p><code v-pre>@stone-js/config</code> is a versatile configuration management library that supports both vanilla JavaScript and TypeScript. It allows developers to easily manage application settings with features like nested configuration access, default value management, and proxy-based custom behavior for configuration properties.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<p>To install the <code v-pre>Config</code> utility, you need to add it to your project. Assuming it’s part of a package you manage.</p>
<p>NPM:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i @stone-js/config</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Yarn:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> @stone-js/config</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>PNPM:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> @stone-js/config</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The <code v-pre>Config</code> module can only be imported via ESM import syntax:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Config <span class="token keyword">from</span> <span class="token string">'@stone-js/config'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h2>
<p>The <code v-pre>Config</code> library is designed to simplify configuration management in JavaScript and TypeScript projects. The library provides a <code v-pre>Config</code> class that allows you to create, access, modify, and clear configuration values, while also providing utility methods for managing defaults and nested properties.</p>
<p>The library is compatible with both vanilla JavaScript and TypeScript, providing strong type safety when used in TypeScript projects.</p>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<h3 id="importing-the-library" tabindex="-1"><a class="header-anchor" href="#importing-the-library"><span>Importing the Library</span></a></h3>
<p>To use the <code v-pre>Config</code> library, import the <code v-pre>Config</code> class from the installed package:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/config'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="creating-a-config-instance" tabindex="-1"><a class="header-anchor" href="#creating-a-config-instance"><span>Creating a Config Instance</span></a></h3>
<p>You can create a <code v-pre>Config</code> instance with an initial set of configuration values using the <code v-pre>Config.create()</code> method:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/config'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> Config<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  appName<span class="token operator">:</span> <span class="token string">'MyApp'</span><span class="token punctuation">,</span></span>
<span class="line">  settings<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    theme<span class="token operator">:</span> <span class="token string">'dark'</span><span class="token punctuation">,</span></span>
<span class="line">    notifications<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="accessing-configuration-values" tabindex="-1"><a class="header-anchor" href="#accessing-configuration-values"><span>Accessing Configuration Values</span></a></h3>
<p>You can access configuration values using the <code v-pre>get</code> method. The <code v-pre>get</code> method also allows you to specify a fallback value if the key does not exist:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'appName'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: 'MyApp'</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'settings.theme'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: 'dark'</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'settings.language'</span><span class="token punctuation">,</span> <span class="token string">'en'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: 'en' (fallback value)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setting-configuration-values" tabindex="-1"><a class="header-anchor" href="#setting-configuration-values"><span>Setting Configuration Values</span></a></h3>
<p>You can add or update configuration values using the <code v-pre>set</code> method:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'settings.theme'</span><span class="token punctuation">,</span> <span class="token string">'light'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'settings.theme'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: 'light'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also set multiple values at once by passing an object:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'settings.language'</span><span class="token operator">:</span> <span class="token string">'fr'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'settings.notifications'</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'settings.language'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: 'fr'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="checking-for-configuration-values" tabindex="-1"><a class="header-anchor" href="#checking-for-configuration-values"><span>Checking for Configuration Values</span></a></h3>
<p>To check if a particular configuration value exists, use the <code v-pre>has</code> method:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'settings.theme'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: true</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'settings.nonExistentKey'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="managing-default-values" tabindex="-1"><a class="header-anchor" href="#managing-default-values"><span>Managing Default Values</span></a></h3>
<p>The <code v-pre>defaults</code> method allows you to set default values for keys that do not already exist:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">defaults</span><span class="token punctuation">(</span><span class="token string">'settings.fontSize'</span><span class="token punctuation">,</span> <span class="token string">'medium'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'settings.fontSize'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: 'medium'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clearing-configuration" tabindex="-1"><a class="header-anchor" href="#clearing-configuration"><span>Clearing Configuration</span></a></h3>
<p>You can clear all configuration values using the <code v-pre>clear</code> method:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: {}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="working-with-nested-properties" tabindex="-1"><a class="header-anchor" href="#working-with-nested-properties"><span>Working with Nested Properties</span></a></h3>
<p>The <code v-pre>Config</code> class supports accessing and setting nested properties. You can use dot-notation strings to manage nested properties effectively:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'settings.theme'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: 'light'</span></span>
<span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'settings.newFeature.enabled'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'settings.newFeature.enabled'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Outputs: true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h3>
<p>The <code v-pre>@stone-js/config</code> library is a powerful and flexible solution for managing configuration in JavaScript and TypeScript applications. With support for nested properties, default value handling, and proxy-based custom behaviors, it provides a robust toolset for configuration management.</p>
<p>Key Features:</p>
<ul>
<li><strong>Simple API</strong>: Easy to use methods for creating, accessing, and modifying configuration values.</li>
<li><strong>TypeScript Compatibility</strong>: Full TypeScript support for type safety and better development experience.</li>
<li><strong>Nested Properties</strong>: Seamless handling of nested configuration values.</li>
<li><strong>Default Value Management</strong>: Easily set and manage default values for configuration keys.</li>
</ul>
<p>Start using <code v-pre>@stone-js/config</code> to simplify your application's configuration management and bring flexibility and robustness to your codebase.</p>
<h2 id="api-documentation" tabindex="-1"><a class="header-anchor" href="#api-documentation"><span>API documentation</span></a></h2>
<ul>
<li><a href="https://github.com/stonemjs/config/blob/main/docs/modules.md" target="_blank" rel="noopener noreferrer">API</a></li>
</ul>
<h2 id="contributing" tabindex="-1"><a class="header-anchor" href="#contributing"><span>Contributing</span></a></h2>
<p>See <a href="https://github.com/stonemjs/config/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing Guide</a>.</p>
<h2 id="credits" tabindex="-1"><a class="header-anchor" href="#credits"><span>Credits</span></a></h2>
<ul>
<li><a href="https://github.com/lodash/lodash" target="_blank" rel="noopener noreferrer">Lodash</a></li>
<li><a href="https://github.com/laravel/framework/blob/10.x/src/Illuminate/Config/Repository.php" target="_blank" rel="noopener noreferrer">Laravel Config</a></li>
</ul>
</div></template>


