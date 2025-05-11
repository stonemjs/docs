<template><div><p><code v-pre>Stone Env</code> offers a fluent API to retrieve, format, and validate your environment variables.
The available methods are listed below:</p>
<h3 id="_1-env-get-key-options" tabindex="-1"><a class="header-anchor" href="#_1-env-get-key-options"><span>1. <code v-pre>Env.get(key, options)</code></span></a></h3>
<p>Retrieves the environment variable specified by key with optional validation and formatting defined by <code v-pre>options</code>.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>options</code> (object|any): Optional settings or a default value.
<ul>
<li><code v-pre>type</code> (string): The type of data to return, possible values are: <code v-pre>number</code>, <code v-pre>boolean</code>, <code v-pre>array</code>, <code v-pre>object</code>, <code v-pre>json</code>, <code v-pre>enum</code>, <code v-pre>email</code>, <code v-pre>host</code>, <code v-pre>url</code>, <code v-pre>string</code></li>
<li><code v-pre>format</code> (string): Only applied to string type. Validate the string against those values: <code v-pre>url</code>, <code v-pre>email</code>, <code v-pre>host</code></li>
<li><code v-pre>default</code> (any): The default value when variable is falsy</li>
</ul>
</li>
</ul>
<p><strong>Example:</strong></p>
<CodeTabs id="44" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving variables as mandatory when there is no default value</span></span>
<span class="line"><span class="token keyword">const</span> appKey <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'APP_KEY'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'object'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> apiUrl <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'url'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving variables as optional because of the default value</span></span>
<span class="line"><span class="token keyword">const</span> envList <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'ENV_LIST'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'array'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> isDev <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'IS_DEV'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'boolean'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appKey <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'APP_KEY'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1234566</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving variables as mandatory when there is no default value</span></span>
<span class="line"><span class="token keyword">const</span> appKey <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'APP_KEY'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'number'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'string'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'object'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> apiUrl <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span> format<span class="token operator">:</span> <span class="token string">'url'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving variables as optional because of the default value</span></span>
<span class="line"><span class="token keyword">const</span> envList <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'ENV_LIST'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'array'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> isDev <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'IS_DEV'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'boolean'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appKey <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'APP_KEY'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1234566</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'string'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_2-env-string-key-options" tabindex="-1"><a class="header-anchor" href="#_2-env-string-key-options"><span>2. <code v-pre>Env.string(key, options)</code></span></a></h3>
<p>Retrieves the environment variable as a string.
If the variable does not exist or is not a string, an exception is thrown unless a default value is provided.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>options</code> (object|any): Optional settings or a default value.</li>
</ul>
<p><strong>Example:</strong></p>
<CodeTabs id="76" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> apiURL <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'url'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appHost <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_HOST'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'host'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appEmail <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'CONTACT_EMAIL'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'email'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">,</span> <span class="token string">'Stone.js'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appHost <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_HOST'</span><span class="token punctuation">,</span> <span class="token string">'localhost'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appEmail <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'CONTACT_EMAIL'</span><span class="token punctuation">,</span> <span class="token string">'username@domain.ext'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> apiURL <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'url'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'http://localhost'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> apiURL <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> format<span class="token operator">:</span> <span class="token string">'url'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appHost <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_HOST'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> format<span class="token operator">:</span> <span class="token string">'host'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appEmail <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'CONTACT_EMAIL'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> format<span class="token operator">:</span> <span class="token string">'email'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_NAME'</span><span class="token punctuation">,</span> <span class="token string">'Stone.js'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appHost <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'APP_HOST'</span><span class="token punctuation">,</span> <span class="token string">'localhost'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> appEmail <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'CONTACT_EMAIL'</span><span class="token punctuation">,</span> <span class="token string">'username@domain.ext'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> apiURL <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> format<span class="token operator">:</span> <span class="token string">'url'</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'http://localhost'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_3-env-number-key-options" tabindex="-1"><a class="header-anchor" href="#_3-env-number-key-options"><span>3. <code v-pre>Env.number(key, options)</code></span></a></h3>
<p>Retrieves the environment variable as a number.
If the variable does not exist or is not a number, an exception is thrown unless a default value is provided.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>options</code> (object|any): Optional settings or a default value.</li>
</ul>
<p><strong>Example:</strong></p>
<CodeTabs id="108" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> maxUsers <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token string">'MAX_USERS'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> maxUsers <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token string">'MAX_USERS'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> maxUsers <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token string">'MAX_USERS'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> maxUsers <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token string">'MAX_USERS'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_4-env-boolean-key-options" tabindex="-1"><a class="header-anchor" href="#_4-env-boolean-key-options"><span>4. <code v-pre>Env.boolean(key, options)</code></span></a></h3>
<p>Retrieves the environment variable as a boolean.
If the variable does not exist or is not a boolean, an exception is thrown unless a default value is provided.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>options</code> (object|any): Optional settings or a default value.</li>
</ul>
<p><strong>Example:</strong></p>
<CodeTabs id="140" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> isDev <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token string">'IS_DEV'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> isDev <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token string">'IS_DEV'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> isDev <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token string">'IS_DEV'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> isDev <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token string">'IS_DEV'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_5-env-array-key-options" tabindex="-1"><a class="header-anchor" href="#_5-env-array-key-options"><span>5. <code v-pre>Env.array(key, options)</code></span></a></h3>
<p>Retrieves the environment variable as an array.
If the variable does not exist or is not a valid array, an exception is thrown unless a default value is provided.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>options</code> (object|any): Optional settings or a default value.
<ul>
<li><code v-pre>separator</code> (string): The separator to split values into array, default is: <code v-pre>,</code></li>
</ul>
</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env</span></span>
<span class="line"><span class="token assign-left variable">LANGS</span><span class="token operator">=</span>en,fr,es</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><CodeTabs id="180" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> langs <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'LANGS'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> langs <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'LANGS'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">separator</span><span class="token operator">:</span> <span class="token string">'-'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> langs <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'LANGS'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token string">'fr'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> langs <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'LANGS'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token string">'fr'</span><span class="token punctuation">]</span>  separator<span class="token operator">:</span> <span class="token string">','</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> langs <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'LANGS'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> langs <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'LANGS'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> separator<span class="token operator">:</span> <span class="token string">'-'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> langs <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'LANGS'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token string">'fr'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> langs <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token string">'LANGS'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'en'</span><span class="token punctuation">,</span> <span class="token string">'fr'</span><span class="token punctuation">]</span>  separator<span class="token operator">:</span> <span class="token string">','</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_6-env-object-key-options" tabindex="-1"><a class="header-anchor" href="#_6-env-object-key-options"><span>6. <code v-pre>Env.object(key, options)</code></span></a></h3>
<p>Retrieves the environment variable as an object.
If the variable does not exist or is not a valid object, an exception is thrown unless a default value is provided.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>options</code> (object|any): Optional settings.
<ul>
<li><code v-pre>separator</code> (string): The separator to split values into object, default is: <code v-pre>,</code></li>
</ul>
</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env</span></span>
<span class="line"><span class="token assign-left variable">DB_CONFIG</span><span class="token operator">=</span>dbName:name,dbPass:****</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><CodeTabs id="220" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">separator</span><span class="token operator">:</span> <span class="token string">','</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token comment">// Default must be used here to return a default value</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">dbName</span><span class="token operator">:</span> <span class="token string">'name'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> separator<span class="token operator">:</span> <span class="token string">','</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token comment">// Default must be used here to return a default value</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span> dbName<span class="token operator">:</span> <span class="token string">'name'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_7-env-json-key-options" tabindex="-1"><a class="header-anchor" href="#_7-env-json-key-options"><span>7. <code v-pre>Env.json(key, options)</code></span></a></h3>
<p>Retrieves the environment variable as a json.
If the variable does not exist or is not a valid json, an exception is thrown unless a default value is provided.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>options</code> (object|any): Optional settings.</li>
</ul>
<p><strong>Example:</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token comment"># .env</span></span>
<span class="line"><span class="token assign-left variable">DB_CONFIG</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"dbName"</span><span class="token builtin class-name">:</span><span class="token string">"name"</span>,<span class="token string">"dbPass"</span><span class="token builtin class-name">:</span><span class="token string">"****"</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><CodeTabs id="253" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token comment">// Default must be used here to return a default value</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">dbName</span><span class="token operator">:</span> <span class="token string">'name'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token comment">// Default must be used here to return a default value</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token string">'DB_CONFIG'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">{</span> dbName<span class="token operator">:</span> <span class="token string">'name'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_8-env-enum-key-enums-defaultvalue" tabindex="-1"><a class="header-anchor" href="#_8-env-enum-key-enums-defaultvalue"><span>8. <code v-pre>Env.enum(key, enums, defaultValue)</code></span></a></h3>
<p>Retrieves the environment variable as an enum.
If the variable does not exist or is not a valid enum, an exception is thrown unless a default value is provided.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>enums</code> (array): Array of valid enum values.</li>
<li><code v-pre>defaultValue</code> (any): Default value if the variable is not set.</li>
</ul>
<p><strong>Example:</strong></p>
<CodeTabs id="290" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> logLevel <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">enum</span><span class="token punctuation">(</span><span class="token string">'LOG_LEVEL'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'debug'</span><span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">,</span> <span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token string">'error'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> logLevel <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">enum</span><span class="token punctuation">(</span><span class="token string">'LOG_LEVEL'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'debug'</span><span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">,</span> <span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token string">'error'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Retrieving a mandatory variable</span></span>
<span class="line"><span class="token keyword">const</span> logLevel <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">enum</span><span class="token punctuation">(</span><span class="token string">'LOG_LEVEL'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'debug'</span><span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">,</span> <span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token string">'error'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Retrieving an optional variable with a default value</span></span>
<span class="line"><span class="token keyword">const</span> logLevel <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">enum</span><span class="token punctuation">(</span><span class="token string">'LOG_LEVEL'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'debug'</span><span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">,</span> <span class="token string">'warn'</span><span class="token punctuation">,</span> <span class="token string">'error'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'info'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_10-env-custom-key-validator-options" tabindex="-1"><a class="header-anchor" href="#_10-env-custom-key-validator-options"><span>10. <code v-pre>Env.custom(key, validator, options)</code></span></a></h3>
<p>Retrieves the environment variable with a custom validator function.</p>
<p><strong>Parameters:</strong></p>
<ul>
<li><code v-pre>key</code> (string): The name of the environment variable.</li>
<li><code v-pre>validator</code> (Function): Custom validation function.</li>
<li><code v-pre>options</code> (object|any): Optional settings, including a default value.</li>
</ul>
<p><strong>Example:</strong></p>
<CodeTabs id="327" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> customValue <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">custom</span><span class="token punctuation">(</span><span class="token string">'CUSTOM_KEY'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Custom validation logic</span></span>
<span class="line">  <span class="token keyword">return</span> value <span class="token operator">?</span> <span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> options<span class="token punctuation">.</span>default<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'defaultValue'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Env<span class="token punctuation">,</span> Options <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/env'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> customValue <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">custom</span><span class="token punctuation">(</span><span class="token string">'CUSTOM_KEY'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">,</span> options<span class="token operator">:</span> Options<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Custom validation logic</span></span>
<span class="line">  <span class="token keyword">return</span> value <span class="token operator">?</span> <span class="token function">String</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> options<span class="token punctuation">.</span>default<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'defaultValue'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="_11-other-useful-methods" tabindex="-1"><a class="header-anchor" href="#_11-other-useful-methods"><span>11. Other useful methods</span></a></h3>
<p>Other useful string methods.</p>
<CodeTabs id="341" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Email</span></span>
<span class="line"><span class="token keyword">const</span> adminEmail <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token string">'ADMIN_EMAIL'</span><span class="token punctuation">,</span> <span class="token string">'admin@example.com'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// URL</span></span>
<span class="line"><span class="token keyword">const</span> apiUrl <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">,</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// Host</span></span>
<span class="line"><span class="token keyword">const</span> dbHost <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">host</span><span class="token punctuation">(</span><span class="token string">'DB_HOST'</span><span class="token punctuation">,</span> <span class="token string">'localhost'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Email</span></span>
<span class="line"><span class="token keyword">const</span> adminEmail <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token string">'ADMIN_EMAIL'</span><span class="token punctuation">,</span> <span class="token string">'admin@example.com'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// URL</span></span>
<span class="line"><span class="token keyword">const</span> apiUrl <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">'API_URL'</span><span class="token punctuation">,</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// Host</span></span>
<span class="line"><span class="token keyword">const</span> dbHost <span class="token operator">=</span> Env<span class="token punctuation">.</span><span class="token function">host</span><span class="token punctuation">(</span><span class="token string">'DB_HOST'</span><span class="token punctuation">,</span> <span class="token string">'localhost'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Check against <code v-pre>NODE_ENV</code> variable value</p>
<CodeTabs id="352" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Assert against `NODE_ENV` variable value</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">'production'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV === 'production'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV === 'prod'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isProd</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV !== 'production'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isNotProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV !== 'prod'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isNotProd</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV === 'test' || NODE_ENV === 'testing'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isTesting</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Assert against `NODE_ENV` variable value</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token keyword">is</span><span class="token punctuation">(</span><span class="token string">'production'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV === 'production'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV === 'prod'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isProd</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV !== 'production'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isNotProduction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV !== 'prod'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isNotProd</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check if NODE_ENV === 'test' || NODE_ENV === 'testing'</span></span>
<span class="line">Env<span class="token punctuation">.</span><span class="token function">isTesting</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>Clears the cached environment variables.</p>
<CodeTabs id="363" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">Env<span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">Env<span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h3>
<p>Stone Env is a powerful and flexible library for managing environment variables in JavaScript applications.
With its comprehensive API, you can easily retrieve and validate configuration values,
ensuring that your application runs smoothly and reliably in any environment.</p>
</div></template>


