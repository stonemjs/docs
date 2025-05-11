<template><div><p>Il se pourrait que vous ayez besoin d'url d'une des routes que vous aviez definie,
c'est la qu'intervient le generateur d'url, il te permet de gerer des urls pour vos routes.</p>
<p>Les routes definies doivent avoir l'option name car c'est grace a elle qu'on va pouvoir creer generer notre URL</p>
<p>Prenons par exemple cette definition de route:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pour generer une url on utilise la methode <code v-pre>generate</code> depuis le <code v-pre>router</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Ce qui donne ca <code v-pre>/users</code> comme resultat.</p>
<h3 id="ajouter-des-valeurs-aux-parametres" tabindex="-1"><a class="header-anchor" href="#ajouter-des-valeurs-aux-parametres"><span>Ajouter des valeurs aux parametres</span></a></h3>
<p>Jusqu'ici on a generer de simple url, prenons la definition ci dessous qui est beaucoup plus complexe.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/artticles/:slug?'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="indiquer-tous-les-champs" tabindex="-1"><a class="header-anchor" href="#indiquer-tous-les-champs"><span>Indiquer tous les champs</span></a></h4>
<p>Pour generer une url depuis cette definition il faut passer une valeur aux parametres,
pour ce faire la methode <code v-pre>generate</code> prend un objet literal comme second parametre.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> <span class="token string">'javascript'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>La valeur de l'url generer correspondera a <code v-pre>/users/12/artticles/javascript</code>.</p>
<p>Si aucune valeur n'est specifier pour les segements obligatoire ou des valeurs non conformes aux regex une exeception sera lancée.</p>
<h4 id="ignorer-les-champs-optionels" tabindex="-1"><a class="header-anchor" href="#ignorer-les-champs-optionels"><span>Ignorer les champs optionels</span></a></h4>
<p>Il suffit de ne pas indiquer de valeur pour les noms des parametres et l'url sera generer sans lance d'exception.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>La valeur de l'url generer correspondera a <code v-pre>/users/12/artticles</code>.</p>
<h4 id="ajouter-des-parametres-de-requete" tabindex="-1"><a class="header-anchor" href="#ajouter-des-parametres-de-requete"><span>Ajouter des parametres de requete</span></a></h4>
<p>Des fois on aimerait pouvoir ajouter des parametres de requete a nos urls,
pour ce faire on les definis au meme niveau que les paramtres,
Stone Router est assez intelligent pour faire la distinction en les parametres de la route et de la requete,
et va donc les ajouter comme paramtre de la requete.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">sort</span><span class="token operator">:</span> <span class="token string">'-created'</span><span class="token punctuation">,</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>La valeur de l'url generer correspondera a <code v-pre>/users/12/artticles?sort=-created&amp;limit=50</code>.</p>
<h3 id="generer-des-routes-avec-des-domaines" tabindex="-1"><a class="header-anchor" href="#generer-des-routes-avec-des-domaines"><span>Generer des routes avec des domaines</span></a></h3>
<p>Par defaut le domain n'est pas inclu dans une url generer, pour l'include il faut d'abord que le domaine soit defini
lors de la definition des route via l'option <code v-pre>domain</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/artticles/:slug?'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A ce moment la, le troisieme parametre de la methode <code v-pre>generate</code> sert a inclure le domaine.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">sort</span><span class="token operator">:</span> <span class="token string">'-created'</span><span class="token punctuation">,</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>La valeur de l'url generer correspondera a <code v-pre>http://example.com/users/12/artticles?sort=-created&amp;limit=50</code>.</p>
<h4 id="inclure-le-protocol" tabindex="-1"><a class="header-anchor" href="#inclure-le-protocol"><span>Inclure le protocol</span></a></h4>
<p>Par defaut l'url est generer avec le protocol <code v-pre>http</code>, lorsque l'option <code v-pre>protocol</code> est presente lors de la definition de route,
l'url est generer avec ce protocol la.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">'http'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/artticles/:slug?'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">sort</span><span class="token operator">:</span> <span class="token string">'-created'</span><span class="token punctuation">,</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>La valeur de l'url generer correspondera a <code v-pre>http://example.com/users/12/artticles?sort=-created&amp;limit=50</code>.</p>
<p>Notes:</p>
<ul>
<li>Le protocol est present uniquement quand le domaine est defini</li>
</ul>
<p>Pour indiquer un protcol specfique et ceci meme quand il a ete defini lors de la definition des routes,
alors le dernier parametre de la methode <code v-pre>generate</code> sert a ca.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/artticles/:slug?'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">'users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">sort</span><span class="token operator">:</span> <span class="token string">'-created'</span><span class="token punctuation">,</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">'https'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>La valeur de l'url generer correspondera a <code v-pre>https://example.com/users/12/artticles?sort=-created&amp;limit=50</code>.</p>
</div></template>


