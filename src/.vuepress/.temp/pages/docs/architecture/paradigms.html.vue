<template><div><p>In software, a paradigm is a way of thinking about and organizing code. It’s like choosing between building LEGO models by following the instructions (<strong>declarative</strong>) or by creating your own design from scratch (<strong>imperative</strong>).</p>
<p><strong>Why does Stone.js support both?</strong><br>
Because developers are like Jedi: some prefer the light side (structured, opinionated), others the dark side (raw power and freedom). Stone.js embraces both — so you can build apps the way <em>you</em> want.</p>
<h2 id="declarative-api" tabindex="-1"><a class="header-anchor" href="#declarative-api"><span>Declarative API</span></a></h2>
<p><strong>Short definition</strong><br>
You <em>describe what</em> you want, not <em>how</em> to do it.</p>
<p><strong>Philosophy</strong><br>
Let the framework do the heavy lifting through annotations and metadata by introspecting your code. You declare your intent — Stone.js figures out the structure.</p>
<p><strong>Core idea</strong><br>
Use <strong>decorators</strong> to tag your classes, methods, and properties.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Get <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventHandler<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">EventHandler</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">WelcomeEventHandler</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Get</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">welcome</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>event<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'World'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Feels like magic 🪄 — but it’s really just metadata and reflection behind the scenes.</p>
<h2 id="imperative-api" tabindex="-1"><a class="header-anchor" href="#imperative-api"><span>Imperative API</span></a></h2>
<p><strong>Short definition</strong><br>
You <em>explicitly define</em> how to wire up the app, step by step.</p>
<p><strong>Philosophy</strong><br>
Clarity and control. You compose your app like functions in math: input → transform → output.</p>
<p><strong>Core idea</strong><br>
Use <strong>functions</strong> like <code v-pre>defineBlueprintConfig</code>, <code v-pre>defineFactoryEventHandler</code>, etc., and assemble them into blueprints.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineBlueprintConfig<span class="token punctuation">,</span> defineFactoryEventHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">"Hello world!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> mainBlueprint <span class="token operator">=</span> <span class="token function">defineBlueprintConfig</span><span class="token punctuation">(</span><span class="token punctuation">(</span>blueprint<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  blueprint<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'stone.kernel.eventHandler'</span><span class="token punctuation">,</span> <span class="token function">defineFactoryEventHandler</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Feels like assembling an engine from scratch — but it's clean, testable, and no magic.</p>
<h2 id="declarative-vs-imperative-comparison" tabindex="-1"><a class="header-anchor" href="#declarative-vs-imperative-comparison"><span>Declarative vs Imperative: Comparison</span></a></h2>
<table>
<thead>
<tr>
<th>Feature</th>
<th>Declarative API</th>
<th>Imperative API</th>
</tr>
</thead>
<tbody>
<tr>
<td>Syntax</td>
<td>Class + Decorators</td>
<td>Pure functions</td>
</tr>
<tr>
<td>Flexibility</td>
<td>Convention-friendly</td>
<td>Fully customizable</td>
</tr>
<tr>
<td>Testability</td>
<td>Moderate</td>
<td>High</td>
</tr>
<tr>
<td>IDE support</td>
<td>Good (with decorator support)</td>
<td>Excellent</td>
</tr>
<tr>
<td>Composition</td>
<td>Implicit via metadata</td>
<td>Explicit via function calls</td>
</tr>
<tr>
<td>Learning curve</td>
<td>Lower</td>
<td>Slightly higher</td>
</tr>
</tbody>
</table>
<h2 id="when-to-use-which" tabindex="-1"><a class="header-anchor" href="#when-to-use-which"><span>When to Use Which?</span></a></h2>
<p>Stone.js supports <strong>both declarative and imperative</strong> styles — and both work great for <strong>frontend</strong> and <strong>backend</strong> development.</p>
<p>So… which one should you pick?</p>
<p><strong>Use <em>Declarative</em> when:</strong></p>
<ul>
<li>You prefer using <strong>decorators</strong> to describe structure</li>
<li>You want faster DX and cleaner syntax</li>
<li>You enjoy a more <strong>magical, convention-based</strong> approach</li>
<li>You're building apps where simplicity and readability matter</li>
</ul>
<p><strong>Use <em>Imperative</em> when:</strong></p>
<ul>
<li>You want full <strong>transparency and control</strong></li>
<li>You prefer functional composition over metadata</li>
<li>You need maximum <strong>testability, flexibility, or configurability</strong></li>
<li>You're building systems where explicit logic is key (like CLIs, or complex flows)</li>
</ul>
<h2 id="final-thoughts" tabindex="-1"><a class="header-anchor" href="#final-thoughts"><span>Final Thoughts</span></a></h2>
<p>Stone.js gives you both power and flexibility — declarative for speed and elegance, imperative for control and composition.</p>
<p>Use the paradigm that fits your brain <em>and</em> your context.<br>
Stone.js doesn’t force your hand — it extends it. 🤝</p>
</div></template>


