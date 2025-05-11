<template><div><p><RouteLink to="/api/service-container/"><strong>Service Container Documentation v0.0.41</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/service-container/modules.html">Service Container Documentation v0.0.41</RouteLink> / <RouteLink to="/api/service-container/declarations/">declarations</RouteLink> / Resolver</p>
<h1 id="type-alias-resolver-v" tabindex="-1"><a class="header-anchor" href="#type-alias-resolver-v"><span>Type Alias: Resolver()&lt;V&gt;</span></a></h1>
<blockquote>
<p><strong>Resolver</strong>&lt;<code v-pre>V</code>&gt;: (<code v-pre>container</code>) =&gt; <code v-pre>V</code></p>
</blockquote>
<p>A resolver function that takes a container and returns a value of type V.</p>
<h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2>
<p>• <strong>V</strong></p>
<p>The type of value that the resolver returns.</p>
<h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2>
<p>• <strong>container</strong>: <RouteLink to="/api/service-container/Container/classes/Container.html"><code v-pre>Container</code></RouteLink></p>
<p>The container used to resolve dependencies.</p>
<h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2>
<p><code v-pre>V</code></p>
<p>The resolved value of type V.</p>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myResolver<span class="token operator">:</span> Resolver<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>container<span class="token operator">:</span> Container<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Use the container to resolve dependencies and return a number.</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h2>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/declarations.ts#L18" target="_blank" rel="noopener noreferrer">declarations.ts:18</a></p>
</div></template>


