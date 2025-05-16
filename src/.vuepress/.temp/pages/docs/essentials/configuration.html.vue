<template><div><p>In Stone.js, configuration is context-aware, and the best place to store contextual settings is outside your code.
While most logic-level configuration lives inside your application’s <a href="../architecture/blueprint"><strong>Blueprint</strong></a>,
this page focuses on <strong>environment configuration</strong>: the values that change between development, staging, and production, like API keys, ports, feature flags, and secrets.
Environment variables are the recommended way to supply those values.</p>
<p>Stone.js embraces externalized configuration as a first-class concept in the Continuum Architecture. Configuration is not something you “import”, it’s something you <strong>adapt</strong> from your environment.</p>
<p>To help you do that, Stone.js provides:</p>
<ul>
<li>Support for <code v-pre>.env</code> files (private and public)</li>
<li>Full type-safe access through the <code v-pre>Env</code> module</li>
<li>Public env bundling for frontend deployment</li>
<li>CI/CD-friendly design for artifact reuse</li>
</ul>
<p>In short: configuration belongs in your environment, not in your logic, and Stone.js makes that easy to manage.</p>
<p>In this page, we’ll cover:</p>
<ul>
<li>How <code v-pre>.env</code> and <code v-pre>.env.public</code> files work</li>
<li>How variables are loaded and bundled</li>
<li>How to use the <code v-pre>Env</code> API to access them safely</li>
<li>How to customize env behavior via <code v-pre>stone.config.mjs</code></li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p><code v-pre>@stone-js/env</code> is not bundled with Stone.js by default.</p>
</div>
<p>To use environment configuration, install it with:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @stone-js/env</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="the-role-of-env-in-the-continuum" tabindex="-1"><a class="header-anchor" href="#the-role-of-env-in-the-continuum"><span>The Role of Env in the Continuum</span></a></h2>
<p>In the Continuum Architecture, configuration is part of the <strong>external context</strong>, it’s unpredictable, environment-specific, and often unknown until runtime.
That’s why Stone.js doesn’t treat configuration as just a static object, but as a <strong>relationship</strong> between your application and its deployment environment.</p>
<p>Your application doesn’t <strong>own</strong> its configuration, it <strong>adapts</strong> to it.</p>
<p>This means:</p>
<ul>
<li>You should avoid hardcoding values directly into your application.</li>
<li>Your application logic should ask the environment what it needs to know.</li>
<li>The system should validate and normalize that input before using it.</li>
</ul>
<p>The <code v-pre>Env</code> module acts as the <strong>bridge</strong> between external configuration and internal behavior. It gives your application a reliable and type-safe way to retrieve environment variables, enforce defaults, and catch invalid input early, without leaking domain concerns into the environment.</p>
<p>This aligns perfectly with the core principle of the Continuum:</p>
<blockquote>
<p><em>The domain must not depend directly on its context, but it must be aware that the context is uncertain.</em></p>
</blockquote>
<p>Environment configuration lets you <strong>embrace that uncertainty</strong>, with structure.</p>
<p>In serverless environments like <strong>AWS Lambda</strong>, environment variables are typically defined in the platform settings (e.g., Lambda console, deployment manifest).</p>
<p>The <code v-pre>Env</code> module abstracts <em>where</em> they come from, whether from <code v-pre>.env</code> files, runtime process variables, or injected by your FaaS provider, so you can write universal configuration code that works <strong>anywhere</strong>.</p>
<h2 id="working-with-environment-variables" tabindex="-1"><a class="header-anchor" href="#working-with-environment-variables"><span>Working with Environment Variables</span></a></h2>
<p>Stone.js supports two kinds of environment variable files:</p>
<h3 id="env-private-environment" tabindex="-1"><a class="header-anchor" href="#env-private-environment"><span><code v-pre>.env</code>, Private Environment</span></a></h3>
<p>Used for <strong>server-side only</strong> variables. These are sensitive values like database URLs, API keys, or internal feature flags.<br>
They are <strong>never bundled</strong>, <strong>never exposed</strong>, and only available in the Node.js runtime.</p>
<p>You can define variants like:</p>
<ul>
<li><code v-pre>.env</code> (default)</li>
<li><code v-pre>.env.development</code></li>
<li><code v-pre>.env.production</code></li>
<li><code v-pre>.env.staging</code></li>
</ul>
<p>By default, <strong>only <code v-pre>.env</code> is loaded</strong>, but you can customize this in <code v-pre>stone.config.mjs</code>.</p>
<h3 id="env-public-public-environment" tabindex="-1"><a class="header-anchor" href="#env-public-public-environment"><span><code v-pre>.env.public</code>, Public Environment</span></a></h3>
<p>Used for <strong>frontend-safe</strong> variables. These can be shipped to the client or included in your SPA/SSR bundle.</p>
<p>You can define:</p>
<ul>
<li><code v-pre>.env.public</code></li>
<li><code v-pre>.env.public.development</code></li>
<li><code v-pre>.env.public.production</code>, etc.</li>
</ul>
<p>These are automatically transformed into JavaScript files during build time, placed inside the <code v-pre>dist/env</code> folder:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">dist/</span>
<span class="line">├── env/</span>
<span class="line">│   ├── enviroments.js</span>
<span class="line">│   ├── enviroments.development.js</span>
<span class="line">│   └── enviroments.production.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At runtime, <strong>only <code v-pre>enviroments.js</code> is loaded</strong>. This lets you create <strong>a single build artifact</strong> and override just that file during deployment, no rebuild required.</p>
<p>This is perfect for CI/CD pipelines where you deploy the same code to multiple environments and just swap out configuration files.</p>
<h3 id="example-one-artifact-many-environments" tabindex="-1"><a class="header-anchor" href="#example-one-artifact-many-environments"><span>Example: One Artifact, Many Environments</span></a></h3>
<ol>
<li>Build your frontend app once.</li>
<li>Deploy the artifact to all environments.</li>
<li>In your pipeline, overwrite <code v-pre>dist/env/enviroments.js</code> with:
<ul>
<li><code v-pre>enviroments.development.js</code> on staging</li>
<li><code v-pre>enviroments.production.js</code> in prod</li>
</ul>
</li>
</ol>
<p>Your frontend will behave accordingly, without touching your code or rebuilding.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Stone.js works seamlessly in FaaS environments like Lambda, you can define your variables in the function settings and access them via the <code v-pre>Env</code> module just like local <code v-pre>.env</code> files.</p>
</div>
<h2 id="using-the-env-api" tabindex="-1"><a class="header-anchor" href="#using-the-env-api"><span>Using the <code v-pre>Env</code> API</span></a></h2>
<p>The <code v-pre>Env</code> module provides a rich set of utilities to retrieve and validate environment variables.<br>
However, <strong>you should never call <code v-pre>Env</code> utilities directly inside your application logic.</strong></p>
<Mermaid id="mermaid-239" code="eJyNjrFug0AMQHe+wrroNpBSNV0YKgWSTp2K1AUxXIIpVp07dDgNLeLfe7ks3Rovlt57sqz1TJYkh1lJjydUOaiDGVGlcAPvxpM5MI7BzAmA6pyVin5i+bAZJpVeKZPF0rHzV7xqH58267VKlmXROunYXY698QKvb6EF2Nb7SdBbw3AM13CSBrLsGYp6b7+amBQRlHWFch6gpRPakZy9yTLKXV3wGQdPVppEa6jkO3zxAZ3zYJjBuhbH2I/BIGzD9u4Tswu10ufh9bQj5nz1EudPWdxdlneXu3/KX9zJeP8="></Mermaid><p>Instead, you should use <code v-pre>Env</code> utilities <strong>only at configuration time</strong>, to pass validated values into the system via the <strong>Blueprint</strong>.</p>
<p>This guarantees a clean separation of concerns:</p>
<ul>
<li><code v-pre>Env</code> reads from the <strong>external context</strong></li>
<li>The <code v-pre>Blueprint</code> defines the <strong>internal context</strong></li>
<li>Your domain stays free of environmental assumptions</li>
</ul>
<h3 id="accessing-env-variables-via-blueprint" tabindex="-1"><a class="header-anchor" href="#accessing-env-variables-via-blueprint"><span>Accessing Env Variables via Blueprint</span></a></h3>
<p>Here’s how you inject a secret from your <code v-pre>.env</code> file into the system:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.secret'</span><span class="token punctuation">,</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">'APP_SECRET'</span><span class="token punctuation">,</span> <span class="token string">'no-secret'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This ensures:</p>
<ul>
<li>The value is loaded from the external context</li>
<li>It is validated (or fallback is used)</li>
<li>It is injected once, during initialization</li>
<li>Your domain code never touches the <code v-pre>Env</code> module</li>
</ul>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>This is the <strong>only supported way</strong> to use environment variables in a Stone.js app.</p>
</div>
<h3 id="api-overview" tabindex="-1"><a class="header-anchor" href="#api-overview"><span>API Overview</span></a></h3>
<p>The main function is <code v-pre>get()</code>, but Stone.js provides specialized helpers for many types:</p>
<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>getString</code></td>
<td>Get a string, with optional format (<code v-pre>url</code>, <code v-pre>host</code>, <code v-pre>email</code>)</td>
</tr>
<tr>
<td><code v-pre>getNumber</code></td>
<td>Get a number</td>
</tr>
<tr>
<td><code v-pre>getBoolean</code></td>
<td>Get a boolean (<code v-pre>true</code>, <code v-pre>false</code>, <code v-pre>1</code>, <code v-pre>0</code>)</td>
</tr>
<tr>
<td><code v-pre>getArray</code></td>
<td>Parse a comma-separated list (<code v-pre>value,value2</code>)</td>
</tr>
<tr>
<td><code v-pre>getObject</code></td>
<td>Parse a <code v-pre>key:value,key2:value2</code> pair list</td>
</tr>
<tr>
<td><code v-pre>getJson</code></td>
<td>Parse JSON string (<code v-pre>{ &quot;key&quot;: &quot;value&quot; }</code>)</td>
</tr>
<tr>
<td><code v-pre>getEmail</code></td>
<td>Validate email format</td>
</tr>
<tr>
<td><code v-pre>getUrl</code></td>
<td>Validate URL format</td>
</tr>
<tr>
<td><code v-pre>getHost</code></td>
<td>Validate IP or URL</td>
</tr>
<tr>
<td><code v-pre>getEnum</code></td>
<td>Ensure value is one of a list</td>
</tr>
<tr>
<td><code v-pre>custom()</code></td>
<td>Provide your own validation logic</td>
</tr>
</tbody>
</table>
<p>You can read more about the specific functions in the <a href="https://www.npmjs.com/package/@stone-js/env" target="_blank" rel="noopener noreferrer">API Reference</a>.</p>
<h3 id="required-by-default" tabindex="-1"><a class="header-anchor" href="#required-by-default"><span>Required by Default</span></a></h3>
<p>All <code v-pre>Env</code> functions throw an error if:</p>
<ul>
<li>The variable is <strong>missing</strong></li>
<li>The value is <strong>invalid</strong> for its type</li>
</ul>
<p>To avoid this, you must provide a default:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getString<span class="token punctuation">,</span> getNumber <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">,</span> <span class="token string">'StoneApp'</span><span class="token punctuation">)</span>   <span class="token comment">// Safe: fallback provided</span></span>
<span class="line"><span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token string">'PORT'</span><span class="token punctuation">)</span>                   <span class="token comment">// Unsafe: throws if PORT is missing or invalid</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This fail-fast behavior helps catch misconfiguration <strong>before your app starts</strong>, which is exactly what you want.</p>
<h3 id="env-helpers" tabindex="-1"><a class="header-anchor" href="#env-helpers"><span>Env Helpers</span></a></h3>
<p>Stone.js provides helper functions to inspect the current environment:</p>
<table>
<thead>
<tr>
<th>Helper</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>isProduction()</code></td>
<td>Returns <code v-pre>true</code> if the current env is <code v-pre>production</code> or <code v-pre>prod</code> according to <code v-pre>NODE_ENV</code> variable</td>
</tr>
<tr>
<td><code v-pre>isNotProduction()</code></td>
<td>Returns <code v-pre>true</code> if not in production</td>
</tr>
<tr>
<td><code v-pre>isTesting()</code></td>
<td>Returns <code v-pre>true</code> if in <code v-pre>test</code> or <code v-pre>testing</code> mode</td>
</tr>
<tr>
<td><code v-pre>isBrowser()</code></td>
<td>Returns <code v-pre>true</code> if the code is running in the browser</td>
</tr>
</tbody>
</table>
<p>These can help you set defaults conditionally:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">?</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">'DB_PROD_URL'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">:</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">'DB_DEV_URL'</span><span class="token punctuation">,</span> <span class="token string">'mongodb://localhost/dev'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'db.url'</span><span class="token punctuation">,</span> db<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clearing-cached-env-values" tabindex="-1"><a class="header-anchor" href="#clearing-cached-env-values"><span>Clearing Cached Env Values</span></a></h3>
<p>The <code v-pre>Env</code> module caches resolved values for performance.<br>
In test environments, you may need to reset it to avoid contamination:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> clearCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customizing-env-file-loading" tabindex="-1"><a class="header-anchor" href="#customizing-env-file-loading"><span>Customizing Env File Loading</span></a></h2>
<p>Stone.js gives you full control over how <code v-pre>.env</code> and <code v-pre>.env.public</code> files are loaded and expanded.<br>
This is done through the <code v-pre>dotenv</code> configuration inside your <code v-pre>stone.config.mjs</code> file.</p>
<p>This setup lets you:</p>
<ul>
<li>Specify multiple env file paths</li>
<li>Expand variable references like <code v-pre>${API_HOST}</code></li>
<li>Override values programmatically</li>
<li>Ignore system-level environment values</li>
</ul>
<h3 id="where-to-configure" tabindex="-1"><a class="header-anchor" href="#where-to-configure"><span>Where to Configure</span></a></h3>
<p>Edit your <code v-pre>stone.config.mjs</code> file and update the <code v-pre>dotenv</code> section:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// stone.config.mjs</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/cli'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">dotenv</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">expand</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">override</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">ignoreProcessEnv</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">private</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'.env.production'</span><span class="token punctuation">,</span> <span class="token string">'.env'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">override</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">public</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">production</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'.env.public.production'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">override</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">staging</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'.env.public.staging'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuration-options" tabindex="-1"><a class="header-anchor" href="#configuration-options"><span>Configuration Options</span></a></h3>
<h4 id="options-applies-to-all-files" tabindex="-1"><a class="header-anchor" href="#options-applies-to-all-files"><span><code v-pre>options</code> (applies to all files)</span></a></h4>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>expand</code></td>
<td>Enable <code v-pre>${VAR}</code> expansion</td>
</tr>
<tr>
<td><code v-pre>override</code></td>
<td>Allow file values to override existing env vars</td>
</tr>
<tr>
<td><code v-pre>ignoreProcessEnv</code></td>
<td>Ignore system <code v-pre>process.env</code> entirely</td>
</tr>
</tbody>
</table>
<h4 id="private" tabindex="-1"><a class="header-anchor" href="#private"><span><code v-pre>private</code></span></a></h4>
<p>Specify how <code v-pre>.env</code> files are loaded for the server. You can provide:</p>
<ul>
<li>A string path or array of paths</li>
<li><code v-pre>default: true</code> to use this config by default</li>
<li><code v-pre>override: true</code> to overwrite existing values</li>
</ul>
<h4 id="public" tabindex="-1"><a class="header-anchor" href="#public"><span><code v-pre>public</code></span></a></h4>
<p>This is a mapping per environment (<code v-pre>development</code>, <code v-pre>production</code>, etc.).</p>
<p>Each entry must point to a <code v-pre>.env.public.*</code> file that will be bundled and transformed into <code v-pre>enviroments.&lt;env&gt;.js</code>.</p>
<h3 id="best-practices" tabindex="-1"><a class="header-anchor" href="#best-practices"><span>Best Practices</span></a></h3>
<h4 id="use-the-blueprint-not-direct-env-access" tabindex="-1"><a class="header-anchor" href="#use-the-blueprint-not-direct-env-access"><span>Use the Blueprint, Not Direct Env Access</span></a></h4>
<p>Never call <code v-pre>getString()</code> or <code v-pre>getNumber()</code> directly inside your domain or handler logic.<br>
All configuration should go through the <code v-pre>Blueprint</code>:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Good</span></span>
<span class="line">blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'db.host'</span><span class="token punctuation">,</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">'DB_HOST'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Bad</span></span>
<span class="line"><span class="token keyword">const</span> dbClient <span class="token operator">=</span> <span class="token function">createClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token function">getString</span><span class="token punctuation">(</span><span class="token string">'DB_HOST'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This ensures a clean separation between external context and internal behavior, as encouraged by the Continuum Architecture.
And a single source of truth for your configuration, the <code v-pre>Blueprint</code>.</p>
<h4 id="validate-and-fail-fast" tabindex="-1"><a class="header-anchor" href="#validate-and-fail-fast"><span>Validate and Fail Fast</span></a></h4>
<p>All <code v-pre>Env</code> functions throw an error when a required variable is missing or invalid, <strong>unless you provide a fallback</strong>.</p>
<p>Always validate on startup:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token string">'MAX_RETRIES'</span><span class="token punctuation">)</span>         <span class="token comment">// throws if invalid or missing</span></span>
<span class="line"><span class="token function">getNumber</span><span class="token punctuation">(</span><span class="token string">'MAX_RETRIES'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>      <span class="token comment">// safe fallback</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>This guarantees your app won’t start with an invalid configuration.</p>
<h4 id="never-hardcode-configuration" tabindex="-1"><a class="header-anchor" href="#never-hardcode-configuration"><span>Never Hardcode Configuration</span></a></h4>
<p>Avoid hardcoded strings or numbers for things like ports, credentials, feature flags, or URLs.<br>
Use <code v-pre>.env</code> or <code v-pre>.env.public</code> instead.</p>
<p>Hardcoding breaks portability, testability, and surprises future-you 😄.</p>
<h4 id="use-env-public-sparingly-and-deliberately" tabindex="-1"><a class="header-anchor" href="#use-env-public-sparingly-and-deliberately"><span>Use <code v-pre>.env.public</code> Sparingly and Deliberately</span></a></h4>
<p>Only put values in <code v-pre>.env.public</code> that are:</p>
<ul>
<li>Safe to expose to the browser</li>
<li>Needed by your frontend (e.g. public API URL, brand name, etc.)</li>
</ul>
<p>Never include secrets, internal paths, or server-only settings.</p>
<h4 id="reuse-build-artifacts-with-enviroments-js" tabindex="-1"><a class="header-anchor" href="#reuse-build-artifacts-with-enviroments-js"><span>Reuse Build Artifacts with <code v-pre>enviroments.js</code></span></a></h4>
<p>Take advantage of the Stone.js bundling mechanism:</p>
<ul>
<li>Build once</li>
<li>Deploy anywhere</li>
<li>Just replace <code v-pre>dist/env/enviroments.js</code> in CI/CD</li>
</ul>
<p>This approach improves deployment speed and consistency across environments.</p>
<h4 id="reset-env-cache-in-tests" tabindex="-1"><a class="header-anchor" href="#reset-env-cache-in-tests"><span>Reset Env Cache in Tests</span></a></h4>
<p>If you're mocking environment variables during tests, make sure to reset the cache:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> clearCache <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<p>Stone.js embraces configuration as an external, mutable part of the system, something that should be adapted, not hardcoded.</p>
<p>Here’s what you need to remember:</p>
<ul>
<li>Use <strong><code v-pre>.env</code></strong> for private, backend-only variables, not bundled, not exposed</li>
<li>Use <strong><code v-pre>.env.public</code></strong> for safe-to-share variables needed in the frontend, bundled into <code v-pre>enviroments.js</code></li>
<li>Never access <code v-pre>Env</code> directly in your domain code, always inject values through the <strong>Blueprint</strong></li>
<li>All <code v-pre>Env</code> functions validate and fail fast unless you provide a default</li>
<li>You can customize how <code v-pre>.env</code> files are loaded via <code v-pre>stone.config.mjs</code></li>
<li>Public env files enable <strong>single-artifact CI/CD</strong> by allowing runtime config replacement</li>
<li>Works out-of-the-box in <strong>FaaS environments</strong> like AWS Lambda, no need for extra setup</li>
</ul>
<p>In the Continuum, configuration is just another expression of <strong>context</strong>,<br>
and <code v-pre>Env</code> is the clean, structured way to bind that context into your application.</p>
</div></template>


