<template><div><p>To get started with <code v-pre>Config</code>, you need to create an instance of the <code v-pre>Config</code> class.
This instance will hold all your configuration options and provide methods to manage them effectively.</p>
<p>You can then configure the instance with the initial configuration options you need.
Once your instance is ready, you can use various methods to set, get, and manage your configuration values using <strong>deep string dot notation</strong>.</p>
<ol>
<li>Create an instance of <code v-pre>Config</code> with your initial configuration options:</li>
</ol>
<CodeTabs id="13" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/config'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Your config options</span></span>
<span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Stone.js'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'1.0.0'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create your config instance</span></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> Config<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Config <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/config'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Your config options</span></span>
<span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    name<span class="token operator">:</span> <span class="token string">'Stone.js'</span><span class="token punctuation">,</span></span>
<span class="line">    version<span class="token operator">:</span> <span class="token string">'1.0.0'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Create your config instance</span></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> Config<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="2">
<li>Getting Configuration Values</li>
</ol>
<CodeTabs id="28" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Get your config using deep string dot notation</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'app.name'</span><span class="token punctuation">,</span> <span class="token string">'MyApp'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Print name</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appName<span class="token punctuation">)</span> <span class="token comment">// Output: Stone.js</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Get your config using deep string dot notation</span></span>
<span class="line"><span class="token keyword">const</span> appName <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'app.name'</span><span class="token punctuation">,</span> <span class="token string">'MyApp'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Print name</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>appName<span class="token punctuation">)</span> <span class="token comment">// Output: Stone.js</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>


