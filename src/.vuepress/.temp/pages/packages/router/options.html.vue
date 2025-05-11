<template><div><p>Le constructor du <code v-pre>Router</code> prend en parametres un objet d'options, un containeur de service et un emetteur d'evenement,
mais on va mettre le focus sur l'objet <code v-pre>options</code>.</p>
<h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations"><span>Configurations</span></a></h2>
<p>L'objet options sert definir des configurations globales au moment de la creation du router.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">max_depth</span><span class="token operator">:</span> number<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">bindings</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">defaults</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">strict</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">dispatchers</span><span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">matchers</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Function<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">middleware</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>Function<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">definitions</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>definition<span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">middleware_disabled</span><span class="token operator">:</span> boolean</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cet objet est composé de:</p>
<ul>
<li><code v-pre>rules</code> les regles globales pour tous les parametres de routes</li>
<li><code v-pre>max_depth</code> le niveau de profondeur pour les groupes de routes</li>
<li><code v-pre>bindings</code> les liaisons globales pour tous les parametres de routes</li>
<li><code v-pre>defaults</code> les valeurs par defaut pour tous les parametres de routes</li>
<li><code v-pre>strict</code> pour la correspondance stricte incluant la sensibilite a la case et la barre oblique finale</li>
<li><code v-pre>dispatchers</code> definir ses propres dispatchers</li>
<li><code v-pre>matchers</code> definir ses propres matchers</li>
<li><code v-pre>middleware</code> definir des middlewares globaux</li>
<li><code v-pre>definitions</code> un tableau contenant la liste de definition de routes à enregistrer</li>
<li><code v-pre>middleware_disabled</code> desactiver tous les middlewares</li>
</ul>
<p>Un exemple d'utilisation.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">defaults</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'unknown'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">definitions</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users.get'</span></span>
<span class="line">      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id/profile/:username'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=></span> ctx<span class="token punctuation">.</span>params<span class="token punctuation">.</span>username</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/12/profile'</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> url <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users.get'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">45</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token comment">// /users/45/profile/unknown</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token comment">// unknown</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


