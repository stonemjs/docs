<template><div><p>Les matchers permettent de verifier la correspondance des requetes aux routes.</p>
<p>Jusqu'a date Stone Router utlise les matchers suivants pour verifier la correspondance des requetes aux routes:</p>
<ul>
<li><code v-pre>HostMatcher</code> verifie la correspondance du <code v-pre>host</code> de la requete avec le <code v-pre>domain</code> definie dans la route</li>
<li><code v-pre>MethodMatcher</code> verifie la correspondance des <code v-pre>method</code></li>
<li><code v-pre>ProtocolMatcher</code> verifie la correspondance des <code v-pre>protocol</code></li>
<li><code v-pre>UriMatcher</code> verifie la correspondance des <code v-pre>path</code></li>
</ul>
<h2 id="matchers-personnalises" tabindex="-1"><a class="header-anchor" href="#matchers-personnalises"><span>Matchers personnalisés</span></a></h2>
<p>Un matcher n'est autre qu'une classe Javascript ayant une methode <code v-pre>matches</code> avec comme arguments <code v-pre>route</code> et <code v-pre>request</code>.</p>
<h3 id="creation" tabindex="-1"><a class="header-anchor" href="#creation"><span>Creation</span></a></h3>
<p>Voici le <code v-pre>MethodMatcher</code>, il peut servir d'exemple afin de creer un matcher personnalisé.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MethodMatcher</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * matches.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>Route<span class="token punctuation">}</span></span>   <span class="token parameter">route</span></span>
<span class="line">   * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>Request<span class="token punctuation">}</span></span> <span class="token parameter">request</span> - StoneRequest instance</span>
<span class="line">   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span></span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">matches</span> <span class="token punctuation">(</span><span class="token parameter">route<span class="token punctuation">,</span> request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> route<span class="token punctuation">.</span>methods<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>method<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>La methode <code v-pre>matches</code> doit retourner un boolean</li>
<li>On a aussi accès aux <code v-pre>meta</code> dans les matchers depuis la route, <code v-pre>route.get('...')</code></li>
<li>On peut aussi utiliser les <code v-pre>meta</code> pour faire une validation de correspondance</li>
<li>Un matcher ne peut pas etre asynchrone</li>
<li>L'echec d'un matcher provoque le rejet de la correspondance meme quand tous les autres ont reussis</li>
</ul>
<h3 id="enregistrement" tabindex="-1"><a class="header-anchor" href="#enregistrement"><span>Enregistrement</span></a></h3>
<p>Les matchers doivent etre enregistrer au niveau du routeur afin de les utiliser.</p>
<p>On utilise la methode <code v-pre>setMatchers</code> afin d'enregistrer nos matchers.</p>
<p>Voici la liste des methodes du <code v-pre>Router</code> permettant de gerer les matchers:</p>
<ul>
<li><code v-pre>getMatchers (orDefault = true)</code> retourne la liste des matchers enrgistrer par l'utilisateur ou les matchers par defaut quand <code v-pre>orDefault</code>est a <code v-pre>true</code></li>
<li><code v-pre>hasMatchers()</code> verifie si des matchers ont ete enrgistrer par l'utilisateur</li>
<li><code v-pre>setMatchers (matchers, mergeWithDefault = true)</code> enregistrer nos matchers et les fusionnés avec les matchers par defaut quand <code v-pre>mergeWithDefault</code> est a <code v-pre>true</code></li>
</ul>
</div></template>


