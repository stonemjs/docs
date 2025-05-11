<template><div><p>Les evenements nous informent quand une action pertinente ou importante se produit au sein de notre application.</p>
<p>Pour s'abonner a un evenement on utilise la methode <code v-pre>on</code> du router,
qui prend en parametre le nom de l'evenement et un callback avec l'objet <code v-pre>Event</code> comme argument.</p>
<p>L'objet <code v-pre>Event</code> contient trois proprietes:</p>
<ul>
<li><code v-pre>name</code> le nom de l'evenement declenché</li>
<li><code v-pre>data</code> contient les données passées à l'evenement</li>
<li><code v-pre>context</code> le contexte dans lequel l'evenement est declenché, en l'occurance l'objet router.</li>
</ul>
<p>Deux evenements peuvent etre lancés lorsqu'une requete est transmise au routeur:</p>
<ul>
<li><a href="#routing">Routing</a></li>
<li><a href="#route-matched">Route Matched</a></li>
</ul>
<h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing"><span>Routing</span></a></h2>
<p>L'evenement <code v-pre>Event.ROUTING</code> est declenché juste avant que la requete corresponde a une route.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>Event<span class="token punctuation">.</span><span class="token constant">ROUTING</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> data<span class="token punctuation">,</span> context <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>On accede au propriete de l'evenement par decomposition et la propriete <code v-pre>data</code> contient la requete courante.</p>
<h2 id="route-matched" tabindex="-1"><a class="header-anchor" href="#route-matched"><span>Route Matched</span></a></h2>
<p>L'evenement <code v-pre>Event.ROUTE_MATCHED</code> est declenché après que la requete corresponde a une route,
et juste avant de rouler les middlewares et d'executer l'action.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>Event<span class="token punctuation">.</span><span class="token constant">ROUTE_MATCHED</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">.</span>route<span class="token punctuation">,</span> event<span class="token punctuation">.</span>data<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>La propriete <code v-pre>data</code> contient la requete et la route courantes.</p>
</div></template>


