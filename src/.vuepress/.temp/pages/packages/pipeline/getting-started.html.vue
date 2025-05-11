<template><div><p>To get started with the <code v-pre>Pipeline</code> library, you need to create an instance of the <code v-pre>Pipeline</code> class.</p>
<p>You can then configure the pipeline with the pipes you want to use and the data you want to pass through it.</p>
<ol>
<li>Create your pipes/middlewares</li>
</ol>
<CodeTabs id="13" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Your first pipe</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">pipe1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'pipe1'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Your second pipe</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">pipe2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'pipe2'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Your first pipe</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">pipe1</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'pipe1'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Your second pipe</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">pipe2</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'pipe2'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<ol start="2">
<li>Create an instance of the <code v-pre>Pipeline</code> and process your data</li>
</ol>
<CodeTabs id="28" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Pipeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/pipeline'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Your initial data</span></span>
<span class="line"><span class="token keyword">const</span> initalData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'initial data'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Configure the pipeline</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> Pipeline</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>initalData<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pipe1<span class="token punctuation">,</span> pipe2<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// Output: ['initial data', 'pipe1', 'pipe2']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Pipeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/pipeline'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Your initial data</span></span>
<span class="line"><span class="token keyword">const</span> initalData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'initial data'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Configure the pipeline</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> Pipeline</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>initalData<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">through</span><span class="token punctuation">(</span><span class="token punctuation">[</span>pipe1<span class="token punctuation">,</span> pipe2<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">thenReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// Output: ['initial data', 'pipe1', 'pipe2']</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</div></template>


