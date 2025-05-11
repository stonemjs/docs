<template><div><p><RouteLink to="/api/service-container/"><strong>Service Container Documentation v0.0.41</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/service-container/modules.html">Service Container Documentation v0.0.41</RouteLink> / <RouteLink to="/api/service-container/declarations/">declarations</RouteLink> / BindingKey</p>
<h1 id="type-alias-bindingkey" tabindex="-1"><a class="header-anchor" href="#type-alias-bindingkey"><span>Type Alias: BindingKey</span></a></h1>
<blockquote>
<p><strong>BindingKey</strong>: <code v-pre>number</code> | <code v-pre>boolean</code> | <code v-pre>string</code> | <code v-pre>Function</code> | <code v-pre>object</code> | <code v-pre>symbol</code></p>
</blockquote>
<p>A union type representing the possible keys that can be used to bind values in the container.</p>
<p>Binding keys can be of various types, such as numbers, booleans, strings, functions, objects, or symbols.
These types are used because they provide a broad range of ways to uniquely identify a binding.</p>
<ul>
<li><code v-pre>number</code>, <code v-pre>boolean</code>, <code v-pre>string</code>: These are basic types that are easy to use and uniquely identify a binding.</li>
<li><code v-pre>Function</code>: Useful for identifying bindings by constructor or other functions.</li>
<li><code v-pre>object</code>: Allows more complex key types, like instances of classes.</li>
<li><code v-pre>symbol</code>: Guarantees a unique identifier, which can prevent conflicts.</li>
</ul>
<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> key1<span class="token operator">:</span> BindingKey <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// Using a number as a key</span></span>
<span class="line"><span class="token keyword">const</span> key2<span class="token operator">:</span> BindingKey <span class="token operator">=</span> <span class="token string">'serviceName'</span><span class="token punctuation">;</span> <span class="token comment">// Using a string as a key</span></span>
<span class="line"><span class="token keyword">const</span> key3<span class="token operator">:</span> BindingKey <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">'uniqueKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Using a symbol for uniqueness</span></span>
<span class="line"><span class="token keyword">const</span> key4<span class="token operator">:</span> BindingKey <span class="token operator">=</span> MyServiceClass<span class="token punctuation">;</span> <span class="token comment">// Using a function (constructor) as a key</span></span>
<span class="line"><span class="token keyword">const</span> key5<span class="token operator">:</span> BindingKey <span class="token operator">=</span> <span class="token punctuation">{</span> custom<span class="token operator">:</span> <span class="token string">'objectKey'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Using an object as a key</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h2>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/declarations.ts#L40" target="_blank" rel="noopener noreferrer">declarations.ts:40</a></p>
</div></template>


