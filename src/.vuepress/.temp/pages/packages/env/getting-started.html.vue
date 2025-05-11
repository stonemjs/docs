<template><div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>All <code v-pre>Stone.js</code> modules are plug-and-play in a <strong>Stone</strong> context.</p>
</div>
<h2 id="stone-js" tabindex="-1"><a class="header-anchor" href="#stone-js"><span>Stone.js</span></a></h2>
<p>You can start using <code v-pre>Stone Env</code> in a <code v-pre>Stone.js</code> project with no configurations required.
However, you will need to create one or two <code v-pre>dotenv</code> files in the root of your project according to your needs.</p>
<ol>
<li>Create a <code v-pre>.env</code> file in the root of your project:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env</span></span>
<span class="line"><span class="token assign-left variable">PRIVATE_API_KEY</span><span class="token operator">=</span>*********</span>
<span class="line"><span class="token assign-left variable">PRIVATE_API_SECRET</span><span class="token operator">=</span>*********</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>You can also create a <code v-pre>.env.public</code> for public frontend variables:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env.public</span></span>
<span class="line"><span class="token assign-left variable">PUBLIC_API_KEY</span><span class="token operator">=</span><span class="token number">2436748999</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Both <code v-pre>.env</code> and <code v-pre>.env.public</code> variables will be merged in the backend context. In the frontend perspective, only the variables in <code v-pre>.env.public</code> will be included in the final bundle.</p>
<ol start="3">
<li>Now, you can import the library in your code and start using it:</li>
</ol>
<CodeTabs id="37" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p><strong>Explanation</strong></p>
<ul>
<li>We import the module using the ESM import syntax.</li>
<li>We retrieve a mandatory string variable <code v-pre>APP_NAME</code>. An exception will be thrown if <code v-pre>APP_NAME</code> does not exist, is not a string, or is falsy.</li>
<li>We retrieve an optional string variable <code v-pre>APP_VERSION</code> by passing a default value as the second parameter.
This makes the variable optional, and no exceptions will be thrown if it is falsy.</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>If you are using <code v-pre>Stone Env</code> in a <code v-pre>Stone</code> project, further reading is not necessary; you can skip to the next section.</p>
</div>
<h2 id="using-stone-env-with-node-js" tabindex="-1"><a class="header-anchor" href="#using-stone-env-with-node-js"><span>Using Stone Env with Node.js</span></a></h2>
<p>To use <code v-pre>Stone Env</code> in a Node.js project, ensure your <code v-pre>package.json</code> includes <code v-pre>&quot;type&quot;: &quot;module&quot;</code>:</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or your JavaScript files have <code v-pre>.mjs</code> extension, because Node.js will process those files as ESM.</p>
<ol>
<li>Install necessary dependencies:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> dotenv</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Create a <code v-pre>.env</code> file in the root of your project:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env</span></span>
<span class="line"><span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span>Stone.js</span>
<span class="line"><span class="token assign-left variable">APP_VERSION</span><span class="token operator">=</span><span class="token number">0.0</span>.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Now, you can import the library in your code and start using it:</li>
</ol>
<CodeTabs id="103" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env` to `process.env`</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env` to `process.env`</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>This setup ensures that your project is configured to use ECMAScript modules, allowing you to utilize <code v-pre>Stone Env</code> seamlessly.</p>
<h2 id="using-stone-env-with-bundlers" tabindex="-1"><a class="header-anchor" href="#using-stone-env-with-bundlers"><span>Using Stone Env with Bundlers</span></a></h2>
<p>You might need a bundler like <code v-pre>Vite</code>, <code v-pre>Rollup</code> or <code v-pre>Webpack</code>
to replace <code v-pre>window.__stone_env__</code> with the actual environment variables during bundling.</p>
<h3 id="vite" tabindex="-1"><a class="header-anchor" href="#vite"><span>Vite</span></a></h3>
<ol>
<li>Install necessary dependencies:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @rollup/plugin-replace dotenv</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Create a <code v-pre>.env.public</code> file in the root of your project:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env.public</span></span>
<span class="line"><span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span>Stone.js</span>
<span class="line"><span class="token assign-left variable">APP_VERSION</span><span class="token operator">=</span><span class="token number">0.0</span>.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Configure Vite to use <code v-pre>dotenv</code> and <code v-pre>@rollup/plugin-replace</code></li>
</ol>
<CodeTabs id="146" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.js</span></span>
<span class="line"><span class="token keyword">import</span> Dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> replace <span class="token keyword">from</span> <span class="token string">'@rollup/plugin-replace'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env.public` into `publicVars`</span></span>
<span class="line"><span class="token keyword">const</span> publicVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'.env.public'</span><span class="token punctuation">,</span> <span class="token literal-property property">processEnv</span><span class="token operator">:</span> publicVars <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Vite config</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">preventAssignment</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'window.__stone_env__'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>publicVars<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.js</span></span>
<span class="line"><span class="token keyword">import</span> Dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> replace <span class="token keyword">from</span> <span class="token string">'@rollup/plugin-replace'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env.public` into `publicVars`</span></span>
<span class="line"><span class="token keyword">const</span> publicVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'.env.public'</span><span class="token punctuation">,</span> processEnv<span class="token operator">:</span> publicVars <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Vite config</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      preventAssignment<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'window.__stone_env__'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>publicVars<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="4">
<li>Alternatively, you can use Vite's built-in environment variables feature:</li>
</ol>
<CodeTabs id="161" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.js</span></span>
<span class="line"><span class="token keyword">import</span> Dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env.public` into `publicVars`</span></span>
<span class="line"><span class="token keyword">const</span> publicVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'.env.public'</span><span class="token punctuation">,</span> <span class="token literal-property property">processEnv</span><span class="token operator">:</span> publicVars <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Vite config</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">define</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'window.__stone_env__'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>publicVars<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.js</span></span>
<span class="line"><span class="token keyword">import</span> Dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env.public` into `publicVars`</span></span>
<span class="line"><span class="token keyword">const</span> publicVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'.env.public'</span><span class="token punctuation">,</span> processEnv<span class="token operator">:</span> publicVars <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Vite config</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  define<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'window.__stone_env__'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>publicVars<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="5">
<li>Import and use <code v-pre>Stone Env</code> in your source code:</li>
</ol>
<CodeTabs id="176" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="rollup" tabindex="-1"><a class="header-anchor" href="#rollup"><span>Rollup</span></a></h3>
<ol>
<li>Install necessary dependencies:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @rollup/plugin-replace dotenv</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Create a <code v-pre>.env.public</code> file in the root of your project:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env.public</span></span>
<span class="line"><span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span>Stone.js</span>
<span class="line"><span class="token assign-left variable">APP_VERSION</span><span class="token operator">=</span><span class="token number">0.0</span>.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Configure Rollup to use <code v-pre>dotenv</code> and <code v-pre>replace</code>:</li>
</ol>
<CodeTabs id="210" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span></span>
<span class="line"><span class="token keyword">import</span> replace <span class="token keyword">from</span> <span class="token string">'@rollup/plugin-replace'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env.public` into `publicVars`</span></span>
<span class="line"><span class="token keyword">const</span> publicVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'.env.public'</span><span class="token punctuation">,</span> <span class="token literal-property property">processEnv</span><span class="token operator">:</span> publicVars <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Rollup config</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// other configuration settings...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">preventAssignment</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'window.__stone_env__'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>publicVars<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Dotenv <span class="token keyword">from</span> <span class="token string">'dotenv'</span></span>
<span class="line"><span class="token keyword">import</span> replace <span class="token keyword">from</span> <span class="token string">'@rollup/plugin-replace'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env.public` into `publicVars`</span></span>
<span class="line"><span class="token keyword">const</span> publicVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'.env.public'</span><span class="token punctuation">,</span> processEnv<span class="token operator">:</span> publicVars <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Rollup config</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// other configuration settings...</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      preventAssignment<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">'window.__stone_env__'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>publicVars<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="4">
<li>Import and use <code v-pre>Stone Env</code> in your source code:</li>
</ol>
<CodeTabs id="225" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="webpack" tabindex="-1"><a class="header-anchor" href="#webpack"><span>Webpack</span></a></h3>
<ol>
<li>Install necessary dependencies:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> dotenv</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Create a <code v-pre>.env.public</code> file in the root of your project:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env.public</span></span>
<span class="line"><span class="token assign-left variable">APP_NAME</span><span class="token operator">=</span>Stone.js</span>
<span class="line"><span class="token assign-left variable">APP_VERSION</span><span class="token operator">=</span><span class="token number">0.0</span>.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Configure Webpack to use <code v-pre>dotenv</code> and <code v-pre>DefinePlugin</code>:</li>
</ol>
<CodeTabs id="259" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token keyword">const</span> Dotenv <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'dotenv'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env.public` into `publicVars`</span></span>
<span class="line"><span class="token keyword">const</span> publicVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'.env.public'</span><span class="token punctuation">,</span> <span class="token literal-property property">processEnv</span><span class="token operator">:</span> publicVars <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// other configuration settings...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'window.__stone_env__'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>publicVars<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token keyword">const</span> Dotenv <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'dotenv'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'webpack'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load our variables from `.env.public` into `publicVars`</span></span>
<span class="line"><span class="token keyword">const</span> publicVars <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">Dotenv<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'.env.public'</span><span class="token punctuation">,</span> processEnv<span class="token operator">:</span> publicVars <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// other configuration settings...</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">webpack</span><span class="token punctuation">.</span><span class="token function">DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'window.__stone_env__'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>publicVars<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="4">
<li>Import and use <code v-pre>Stone Env</code> in your source code:</li>
</ol>
<CodeTabs id="274" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving a mandatory string variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional string variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appVersion <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_VERSION'</span><span class="token punctuation">,</span> <span class="token string">'1.0.0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2>
<ul>
<li>No configurations are required in the <code v-pre>Stone.js</code> context.</li>
<li>For <code v-pre>Node.js</code>, you'll need to install <code v-pre>dotenv</code> if you plan to use <code v-pre>.env</code> files.</li>
<li>Use a bundler to replace this value <code v-pre>window.__stone_env__</code> with your variables at build time.</li>
</ul>
<p>By following these steps, you ensure that <code v-pre>Stone Env</code> can access environment variables correctly in both backend and frontend environments.</p>
</div></template>


