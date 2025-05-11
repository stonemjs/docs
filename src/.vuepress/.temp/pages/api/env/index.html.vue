<template><div><p><strong>Env Documentation v0.0.2</strong> • <RouteLink to="/api/env/modules.html"><strong>Docs</strong></RouteLink></p>
<hr>
<h1 id="stonejs-env" tabindex="-1"><a class="header-anchor" href="#stonejs-env"><span>StoneJS: env</span></a></h1>
<p><a href="https://opensource.org/licenses/Apache-2.0" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/l/@stone-js/env" alt="npm" loading="lazy"></a>
<a href="https://www.npmjs.com/package/@stone-js/env" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/@stone-js/env" alt="npm" loading="lazy"></a>
<a href="https://www.npmjs.com/package/@stone-js/env" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dm/@stone-js/env" alt="npm" loading="lazy"></a>
<img src="https://img.shields.io/maintenance/yes/2024" alt="Maintenance" loading="lazy">
<a href="https://github.com/stonemjs/env/actions/workflows/release.yml" target="_blank" rel="noopener noreferrer"><img src="https://github.com/stonemjs/env/actions/workflows/release.yml/badge.svg" alt="Publish Package to npmjs" loading="lazy"></a>
<a href="https://conventionalcommits.org" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Conventional Commits-1.0.0-yellow.svg" alt="Conventional Commits" loading="lazy"></a></p>
<p>Fluent and simple API to deal with .env file and env variables for both browser and node.js.</p>
<hr>
<h2 id="synopsis" tabindex="-1"><a class="header-anchor" href="#synopsis"><span>Synopsis</span></a></h2>
<p>The <code v-pre>@stone-js/env</code> library provides utility functions for managing environment variables in JavaScript and TypeScript applications. It helps developers retrieve, validate, and transform environment variables, supporting different data types such as strings, numbers, booleans, arrays, objects, and more. This ensures that the environment configuration is reliable and meets the expected requirements. This library is compatible with both vanilla JavaScript and TypeScript.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<p>To install the <code v-pre>Env</code> utility, you need to add it to your project. Assuming it’s part of a package you manage.</p>
<p>NPM:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i @stone-js/env</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Yarn:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> @stone-js/env</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>PNPM:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> @stone-js/env</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>The <code v-pre>Env</code> module can only be imported via ESM import syntax:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Env <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h2>
<p>To start using the <code v-pre>@stone-js/env</code> library, you need to import the functions you want to use in your project. Below is a simple example of how to use the library to retrieve environment variables and ensure they meet the necessary validation requirements.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> get<span class="token punctuation">,</span> getString<span class="token punctuation">,</span> getNumber<span class="token punctuation">,</span> getBoolean <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an environment variable as a string</span></span>
<span class="line"><span class="token keyword">const</span> apiUrl <span class="token operator">=</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an environment variable as a number</span></span>
<span class="line"><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token string">'PORT'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a boolean environment variable</span></span>
<span class="line"><span class="token keyword">const</span> isProduction <span class="token operator">=</span> <span class="token function">getBoolean</span><span class="token punctuation">(</span><span class="token string">'IS_PRODUCTION'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>The <code v-pre>@stone-js/env</code> library provides multiple functions to retrieve environment variables in different formats, allowing for strong validation and type safety. Below are the available functions and their descriptions:</p>
<h3 id="options-interface" tabindex="-1"><a class="header-anchor" href="#options-interface"><span>Options Interface</span></a></h3>
<p>The <code v-pre>Options</code> interface provides configuration options for retrieving environment variables. Below are the properties available in the <code v-pre>Options</code> interface:</p>
<ul>
<li><strong><code v-pre>type</code></strong> (<code v-pre>'number' | 'boolean' | 'array' | 'object' | 'json' | 'enum' | 'email' | 'host' | 'url' | 'string'</code>): Specifies the expected type of the environment variable.</li>
<li><strong><code v-pre>format</code></strong> (<code v-pre>'url' | 'host' | 'email'</code>): Specifies the format of the value if it is a string.</li>
<li><strong><code v-pre>enums</code></strong> (<code v-pre>string[]</code>): An array of possible values for enum validation.</li>
<li><strong><code v-pre>optional</code></strong> (<code v-pre>boolean</code>): Indicates if the environment variable is optional.</li>
<li><strong><code v-pre>default</code></strong> (<code v-pre>any</code>): The default value if the environment variable is not set.</li>
<li><strong><code v-pre>separator</code></strong> (<code v-pre>string</code>): Separator for parsing array or object values (default is <code v-pre>','</code>).</li>
<li><strong><code v-pre>tld</code></strong> (<code v-pre>boolean</code>): Indicates if a top-level domain is required for URLs or emails.</li>
<li><strong><code v-pre>protocol</code></strong> (<code v-pre>boolean</code>): Indicates if a protocol is required for URLs.</li>
<li><strong><code v-pre>version</code></strong> (<code v-pre>IPVersion</code>): Specifies the IP version if the type is <code v-pre>'host'</code>.</li>
</ul>
<h3 id="get-t-key-string-options-options-any-t" tabindex="-1"><a class="header-anchor" href="#get-t-key-string-options-options-any-t"><span><code v-pre>get&lt;T&gt;(key: string, options?: Options | any): T</code></span></a></h3>
<p>Retrieves the value of a specified environment variable.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options | any): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value of the environment variable, with the expected type <code v-pre>T</code>.</li>
</ul>
<h3 id="getstring-key-string-options-options-string-string" tabindex="-1"><a class="header-anchor" href="#getstring-key-string-options-options-string-string"><span><code v-pre>getString(key: string, options?: Options | string): string</code></span></a></h3>
<p>Retrieves the specified environment variable value as a string.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options | string): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as a string.</li>
</ul>
<h3 id="getnumber-key-string-options-options-number" tabindex="-1"><a class="header-anchor" href="#getnumber-key-string-options-options-number"><span><code v-pre>getNumber(key: string, options?: Options): number</code></span></a></h3>
<p>Retrieves the specified environment variable value as a number.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as a number.</li>
</ul>
<h3 id="getboolean-key-string-options-options-boolean" tabindex="-1"><a class="header-anchor" href="#getboolean-key-string-options-options-boolean"><span><code v-pre>getBoolean(key: string, options?: Options): boolean</code></span></a></h3>
<p>Retrieves the specified environment variable value as a boolean.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as a boolean.</li>
</ul>
<h3 id="getarray-key-string-options-options-string" tabindex="-1"><a class="header-anchor" href="#getarray-key-string-options-options-string"><span><code v-pre>getArray(key: string, options?: Options): string[]</code></span></a></h3>
<p>Retrieves the specified environment variable value as an array of strings.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as an array of strings.</li>
</ul>
<h3 id="getobject-key-string-options-options-record-string-any" tabindex="-1"><a class="header-anchor" href="#getobject-key-string-options-options-record-string-any"><span><code v-pre>getObject(key: string, options?: Options): Record&lt;string, any&gt;</code></span></a></h3>
<p>Retrieves the specified environment variable value as an object.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as an object.</li>
</ul>
<h3 id="getjson-key-string-options-options-unknown" tabindex="-1"><a class="header-anchor" href="#getjson-key-string-options-options-unknown"><span><code v-pre>getJson(key: string, options?: Options): unknown</code></span></a></h3>
<p>Retrieves the specified environment variable value as a JSON object.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as a JSON object.</li>
</ul>
<h3 id="getenum-key-string-enums-string-options-defaultvalue-string-options-options-string" tabindex="-1"><a class="header-anchor" href="#getenum-key-string-enums-string-options-defaultvalue-string-options-options-string"><span><code v-pre>getEnum(key: string, enums: string[] | Options = [], defaultValue?: string, options?: Options): string</code></span></a></h3>
<p>Retrieves the specified environment variable value as an enum.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>enums</code> (string[] | Options): Array of possible enum values or options.</li>
<li><code v-pre>defaultValue</code> (string, optional): Default value if not set.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as an enum.</li>
</ul>
<h3 id="getemail-key-string-options-options-string" tabindex="-1"><a class="header-anchor" href="#getemail-key-string-options-options-string"><span><code v-pre>getEmail(key: string, options?: Options): string</code></span></a></h3>
<p>Retrieves the specified environment variable value as an email address.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as an email address.</li>
</ul>
<h3 id="geturl-key-string-options-options-string" tabindex="-1"><a class="header-anchor" href="#geturl-key-string-options-options-string"><span><code v-pre>getUrl(key: string, options?: Options): string</code></span></a></h3>
<p>Retrieves the specified environment variable value as a URL.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as a URL.</li>
</ul>
<h3 id="gethost-key-string-options-options-string" tabindex="-1"><a class="header-anchor" href="#gethost-key-string-options-options-string"><span><code v-pre>getHost(key: string, options?: Options): string</code></span></a></h3>
<p>Retrieves the specified environment variable value as a host (IP or URL).</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>options</code> (Options): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value as a host.</li>
</ul>
<h3 id="custom-key-string-validator-key-string-value-any-options-options-any-options-options-any-any" tabindex="-1"><a class="header-anchor" href="#custom-key-string-validator-key-string-value-any-options-options-any-options-options-any-any"><span><code v-pre>custom(key: string, validator: (key: string, value: any, options: Options) =&gt; any, options?: Options | any): any</code></span></a></h3>
<p>Retrieves and validates the value of the specified environment variable using a custom validator function.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
<li><code v-pre>validator</code> (function): A custom validation function.</li>
<li><code v-pre>options</code> (Options | any): Options for retrieving the value.</li>
</ul>
</li>
<li><strong>Returns</strong>: The validated value of the environment variable.</li>
</ul>
<h3 id="clearcache-void" tabindex="-1"><a class="header-anchor" href="#clearcache-void"><span><code v-pre>clearCache(): void</code></span></a></h3>
<p>Clears the environment variable cache.</p>
<ul>
<li><strong>Returns</strong>: Nothing.</li>
</ul>
<h3 id="is-env-string-boolean" tabindex="-1"><a class="header-anchor" href="#is-env-string-boolean"><span><code v-pre>is(env: string): boolean</code></span></a></h3>
<p>Determines if the current environment matches the given value.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>env</code> (string): The environment to check.</li>
</ul>
</li>
<li><strong>Returns</strong>: <code v-pre>true</code> if the current environment matches the given value, otherwise <code v-pre>false</code>.</li>
</ul>
<h3 id="isproduction-boolean" tabindex="-1"><a class="header-anchor" href="#isproduction-boolean"><span><code v-pre>isProduction(): boolean</code></span></a></h3>
<p>Determines if the current environment is production.</p>
<ul>
<li><strong>Returns</strong>: <code v-pre>true</code> if in a production environment, otherwise <code v-pre>false</code>.</li>
</ul>
<h3 id="isnotproduction-boolean" tabindex="-1"><a class="header-anchor" href="#isnotproduction-boolean"><span><code v-pre>isNotProduction(): boolean</code></span></a></h3>
<p>Determines if the current environment is not production.</p>
<ul>
<li><strong>Returns</strong>: <code v-pre>true</code> if not in a production environment, otherwise <code v-pre>false</code>.</li>
</ul>
<h3 id="isprod-boolean" tabindex="-1"><a class="header-anchor" href="#isprod-boolean"><span><code v-pre>isProd(): boolean</code></span></a></h3>
<p>Determines if the current environment is prod.</p>
<ul>
<li><strong>Returns</strong>: <code v-pre>true</code> if in a prod environment, otherwise <code v-pre>false</code>.</li>
</ul>
<h3 id="isnotprod-boolean" tabindex="-1"><a class="header-anchor" href="#isnotprod-boolean"><span><code v-pre>isNotProd(): boolean</code></span></a></h3>
<p>Determines if the current environment is not prod.</p>
<ul>
<li><strong>Returns</strong>: <code v-pre>true</code> if not in a prod environment, otherwise <code v-pre>false</code>.</li>
</ul>
<h3 id="istesting-boolean" tabindex="-1"><a class="header-anchor" href="#istesting-boolean"><span><code v-pre>isTesting(): boolean</code></span></a></h3>
<p>Determines if the current environment is testing.</p>
<ul>
<li><strong>Returns</strong>: <code v-pre>true</code> if in a testing environment, otherwise <code v-pre>false</code>.</li>
</ul>
<h3 id="getenv-key-string-string-undefined" tabindex="-1"><a class="header-anchor" href="#getenv-key-string-string-undefined"><span><code v-pre>getEnv(key: string): string | undefined</code></span></a></h3>
<p>Retrieves the value of a system environment variable. Works for both Node.js and browser environments.</p>
<ul>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>key</code> (string): The environment variable key.</li>
</ul>
</li>
<li><strong>Returns</strong>: The value of the environment variable or <code v-pre>undefined</code> if not found.</li>
</ul>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>The <code v-pre>@stone-js/env</code> library is a versatile tool for managing environment variables in both JavaScript and TypeScript projects. It provides robust validation and transformation capabilities for different data types, making it easy to ensure that environment configuration values are reliable and properly formatted. With support for custom validation, caching, and multiple data formats, this library simplifies environment management for modern web and server-side applications.</p>
<h2 id="api-documentation" tabindex="-1"><a class="header-anchor" href="#api-documentation"><span>API documentation</span></a></h2>
<ul>
<li><a href="https://github.com/stonemjs/env/blob/main/docs/modules.md" target="_blank" rel="noopener noreferrer">API</a></li>
</ul>
<h2 id="contributing" tabindex="-1"><a class="header-anchor" href="#contributing"><span>Contributing</span></a></h2>
<p>See <a href="https://github.com/stonemjs/env/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing Guide</a>.</p>
</div></template>


