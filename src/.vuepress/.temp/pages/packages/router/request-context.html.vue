<template><div><p>Le <code v-pre>RequestContext</code> est le fameux objet qui est passé en paramtre a toutes les actions des routes.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">route</span><span class="token operator">:</span> Route<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">params</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">request</span><span class="token operator">:</span> Request<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">parameters</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">body</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">query</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">payload</span><span class="token operator">:</span> Object</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cet objet est composé de:</p>
<ul>
<li><code v-pre>route</code> la route actuelle</li>
<li><code v-pre>params</code> les parametres de la route</li>
<li><code v-pre>request</code> la requete courante</li>
<li><code v-pre>parameters</code> un alias de <code v-pre>params</code></li>
<li><code v-pre>query</code> les parametres de la requete</li>
<li><code v-pre>body</code> le corps de la requete s'il est present</li>
<li><code v-pre>payload</code> un alias de <code v-pre>body</code></li>
</ul>
<p>Exemple d'acces au niveau d'un callback comme action.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>payload<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Exemple d'acces par decomposition au niveau d'un controlleur.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> routes<span class="token punctuation">,</span> params<span class="token punctuation">,</span> query<span class="token punctuation">,</span> payload <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


