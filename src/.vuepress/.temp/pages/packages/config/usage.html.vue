<template><div><p>To effectively utilize the <code v-pre>Config</code> library, you can take advantage of its flexible
API to manage your application's configuration settings seamlessly.
The methods provided allow you to set, get, and manipulate configuration values efficiently,
ensuring that your configuration management is both robust and adaptable.</p>
<p>The available methods are listed below:</p>
<h2 id="creating-a-config" tabindex="-1"><a class="header-anchor" href="#creating-a-config"><span>Creating a Config</span></a></h2>
<p>This can be done by calling the <code v-pre>create</code> static factory method with an optional object of initial configuration options.</p>
<CodeTabs id="12" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> Config<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyApp'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'1.0.0'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> Config<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  app<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'MyApp'</span><span class="token punctuation">,</span></span>
<span class="line">    version<span class="token operator">:</span> <span class="token string">'1.0.0'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="setting-configuration-values" tabindex="-1"><a class="header-anchor" href="#setting-configuration-values"><span>Setting Configuration Values</span></a></h2>
<p>You can set configuration values using the <code v-pre>set</code> method. This method allows setting values using <strong>deep string dot notation</strong>.</p>
<CodeTabs id="26" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'app.name'</span><span class="token punctuation">,</span> <span class="token string">'MyUpdatedApp'</span><span class="token punctuation">)</span></span>
<span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'database.host'</span><span class="token punctuation">,</span> <span class="token string">'localhost'</span><span class="token punctuation">)</span></span>
<span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'api.url'</span><span class="token operator">:</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'api.timeout'</span><span class="token operator">:</span> <span class="token number">5000</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'app.name'</span><span class="token punctuation">,</span> <span class="token string">'MyUpdatedApp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'database.host'</span><span class="token punctuation">,</span> <span class="token string">'localhost'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'api.url'</span><span class="token operator">:</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'api.timeout'</span><span class="token operator">:</span> <span class="token number">5000</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="getting-configuration-values" tabindex="-1"><a class="header-anchor" href="#getting-configuration-values"><span>Getting Configuration Values</span></a></h2>
<p>To retrieve configuration values, use the <code v-pre>get</code> method.
If the key does not exist, it returns the default value that you provide as second parameter.
This method also supports <strong>deep string dot notation</strong>.</p>
<CodeTabs id="40" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'app.name'</span><span class="token punctuation">,</span> <span class="token string">'MyApp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> apiTimeout <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'api.timeout'</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'app.name'</span><span class="token punctuation">,</span> <span class="token string">'MyApp'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> apiTimeout <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'api.timeout'</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="proxied-retrieving" tabindex="-1"><a class="header-anchor" href="#proxied-retrieving"><span>Proxied Retrieving</span></a></h3>
<p>The <code v-pre>Config</code> class supports proxied retrieving, allowing you to access top-level configuration values
directly as properties of the Config instance.
This feature leverages JavaScript proxies to provide a more intuitive way to access top-level configuration values.</p>
<CodeTabs id="54" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Direct property access (top-level only)</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> config<span class="token punctuation">.</span>database</span>
<span class="line"></span>
<span class="line"><span class="token comment">// Note: For nested levels, use the `get` method</span></span>
<span class="line"><span class="token keyword">const</span> nestedValue <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'database.host'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Direct property access (top-level only)</span></span>
<span class="line"><span class="token keyword">const</span> dbConfig <span class="token operator">=</span> config<span class="token punctuation">.</span>database<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Note: For nested levels, use the `get` method</span></span>
<span class="line"><span class="token keyword">const</span> nestedValue <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'database.host'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="firstmatch" tabindex="-1"><a class="header-anchor" href="#firstmatch"><span>FirstMatch</span></a></h3>
<p>The <code v-pre>firstMatch</code> method retrieves the first matching configuration value from a list of keys.
If none of the keys exist, it returns the default value that you provide as second parameter.</p>
<CodeTabs id="68" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> dbHost <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">firstMatch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'database.host'</span><span class="token punctuation">,</span> <span class="token string">'database.url'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'localhost'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> dbHost <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">firstMatch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'database.host'</span><span class="token punctuation">,</span> <span class="token string">'database.url'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">'localhost'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="getmany" tabindex="-1"><a class="header-anchor" href="#getmany"><span>GetMany</span></a></h3>
<p>The <code v-pre>getMany</code> method retrieves multiple configuration values at once.
It accepts either an array of keys or an object with keys and their default values.</p>
<CodeTabs id="82" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Get both name and host</span></span>
<span class="line"><span class="token keyword">const</span> multipleValues <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'app.name'</span><span class="token punctuation">,</span> <span class="token string">'database.host'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// or with default values</span></span>
<span class="line"><span class="token keyword">const</span> multipleValuesWithDefaults <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'app.name'</span><span class="token operator">:</span> <span class="token string">'DefaultAppName'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'database.host'</span><span class="token operator">:</span> <span class="token string">'DefaultHost'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Get both name and host</span></span>
<span class="line"><span class="token keyword">const</span> multipleValues <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'app.name'</span><span class="token punctuation">,</span> <span class="token string">'database.host'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// or with default values</span></span>
<span class="line"><span class="token keyword">const</span> multipleValuesWithDefaults <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'app.name'</span><span class="token operator">:</span> <span class="token string">'DefaultAppName'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'database.host'</span><span class="token operator">:</span> <span class="token string">'DefaultHost'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="checking-if-a-configuration-value-exists" tabindex="-1"><a class="header-anchor" href="#checking-if-a-configuration-value-exists"><span>Checking if a Configuration Value Exists</span></a></h2>
<p>The <code v-pre>has</code> method allows you to check if a specific configuration value exists.</p>
<CodeTabs id="96" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> hasDatabaseHost <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'database.host'</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> hasDatabaseHost <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'database.host'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="setting-default-configuration-values" tabindex="-1"><a class="header-anchor" href="#setting-default-configuration-values"><span>Setting Default Configuration Values</span></a></h2>
<p>The <code v-pre>defaults</code> method allows providers to define default configuration values.
If a key already exists, it merges the new value with the existing one.</p>
<CodeTabs id="110" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">defaults</span><span class="token punctuation">(</span><span class="token string">'api.url'</span><span class="token punctuation">,</span> <span class="token string">'https://default-api.example.com'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">defaults</span><span class="token punctuation">(</span><span class="token string">'api.url'</span><span class="token punctuation">,</span> <span class="token string">'https://default-api.example.com'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="retrieving-all-configuration-items" tabindex="-1"><a class="header-anchor" href="#retrieving-all-configuration-items"><span>Retrieving All Configuration Items</span></a></h2>
<p>The <code v-pre>all</code> method returns all the configuration items as a literal object.</p>
<CodeTabs id="124" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Get all config</span></span>
<span class="line"><span class="token keyword">const</span> allConfig <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Print</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allConfig<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Get all config</span></span>
<span class="line"><span class="token keyword">const</span> allConfig <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Print</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>allConfig<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="clearing-all-configuration-items" tabindex="-1"><a class="header-anchor" href="#clearing-all-configuration-items"><span>Clearing All Configuration Items</span></a></h2>
<p>The <code v-pre>clear</code> method clears all configuration items.</p>
<CodeTabs id="138" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">config<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>The <code v-pre>Config</code> library provides a simple yet powerful way to manage configuration options in your JavaScript/TypeScript applications.
With its support for <strong>deep string dot notation</strong> and flexible methods, you can easily set, get, and manage configuration values,
making it an essential tool for any developer looking to streamline their application's configuration management.</p>
</div></template>


