<template><div><p>Les routes permettent d'exposer les fonctionnalites d'une application via des chemins exactes,
et la mise en place de ces chemins ainsi que les regles de correspondance est ce qu'on appelle la definition de routes.</p>
<h2 id="type-de-definition" tabindex="-1"><a class="header-anchor" href="#type-de-definition"><span>Type de définition</span></a></h2>
<p>Les routes peuvent etre definies de trois manieres:</p>
<ul>
<li><a href="#definition-implicite">Definition implicite</a></li>
<li><a href="#definition-explicite">Definition explicite</a></li>
<li><a href="#definition-implicite-via-decorateur">Definition implicite via decorateur</a></li>
</ul>
<p>Libre à vous de choisir celle qui convient le mieux à votre projet.</p>
<h3 id="definition-implicite" tabindex="-1"><a class="header-anchor" href="#definition-implicite"><span>Définition implicite</span></a></h3>
<p>On les definit directement depuis le router en utilisant les méthodes appropriées.
Chaque méthode prend en parametre tout ou une partie des options de <a href="#l-objet-definition">définition</a> de route.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">patch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Des fois on a besoin de definir des routes pour plusieurs verbes HTTP ou pour tous les verbes à la fois.
On peut utiliser les methode <code v-pre>match</code> pour plusieurs et <code v-pre>any</code> pour tous.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>les proprietes <code v-pre>method</code> et <code v-pre>methods</code> n'ont aucun effet sur <code v-pre>any</code>, ce qui est evident parce qu'il repond a tous les verbes HTTP</li>
<li>la propriete <code v-pre>methods</code> doit etre utilisée pour <code v-pre>match</code> afin d'indiquer les verbes HTTP.</li>
</ul>
<p>Pour definir une route de fallback pour intercepter tout ce que les autres routes n'ont pas pu intercepter,
on utilise la methode <code v-pre>fallback</code> qui prend uniquement l'action à executer en parametre.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">fallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'Je suis un fallback'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="definition-explicite" tabindex="-1"><a class="header-anchor" href="#definition-explicite"><span>Définition explicite</span></a></h3>
<p>On les définit depuis un tableau d'objet literal,
ce type de définition est plus flexible que les autres,
ce qui nous donne plus de controle sur la manière de les définir, d'ou son appelation.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Definition des routes</span></span>
<span class="line"><span class="token keyword">const</span> routeDefinitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/v1/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token constant">GET</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/v1/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token constant">POST</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">create</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/v1/users/:id(\\d+)'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">PUT</span><span class="token punctuation">,</span> <span class="token constant">PATCH</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">update</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/v1/users/:id(\\d+)'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token constant">DELETE</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">remove</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pour definir une route comme fallback il suffit juste d'ajouter <code v-pre>fallback: true</code> dans la definition.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">...</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/v1/:fallback*'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fallback</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">...</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Seules les options <code v-pre>fallback</code>, <code v-pre>path</code> et <code v-pre>action</code> peuvent etre indiquees pour un fallback.</li>
</ul>
<h3 id="definition-implicite-via-decorateur" tabindex="-1"><a class="header-anchor" href="#definition-implicite-via-decorateur"><span>Définition implicite via decorateur</span></a></h3>
<p>On les définit depuis des decorateurs JavaScript,
utile pour garder les routes plus pret des controlleurs.
Chaque decorateur prend en parametre tout ou une partie des options de <a href="#l-objet-definition">définition</a> de route.</p>
<div class="hint-container tip">
<p class="hint-container-title">Babel</p>
<p>Il faudra utiliser un transcompilateur comme <a href="https://babeljs.io" target="_blank" rel="noopener noreferrer">babel</a> afin de pouvoir utiliser les decorateurs JavaScript.</p>
</div>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">Put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">Patch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pour definir des <code v-pre>match</code> et des <code v-pre>any</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">Any</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">@<span class="token function">Match</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>Pour definir une route comme fallback on utilise le decorateur <code v-pre>@Fallback</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">Fallback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Les decorateurs peuvent etre utilise uniquement au niveau des classes</li>
</ul>
<p>Un simple exemple d'utilisation des decorateurs au niveau d'une classe.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">list</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Post</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> payload <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">show</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">update</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Delete</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">remove</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Fallback</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:fallback*'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">fallback</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="l-objet-definition" tabindex="-1"><a class="header-anchor" href="#l-objet-definition"><span>L'objet definition</span></a></h3>
<p>Voici la liste exhaustive des options utilisées pour definir des routes.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:user@username(\\.+)?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">throttle</span><span class="token operator">:</span> <span class="token punctuation">[</span>LoginRateLimiter<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'GET'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">'http'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">'{subDomain(\\(auth|api))}.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">defaults</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">subDomain</span><span class="token operator">:</span> <span class="token string">'api'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users.list_show'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">bindings</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">user</span><span class="token operator">:</span> User</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">excludeMiddleware</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">listOrShow</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">subDomain</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(auth|api)</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/people'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'/people/:user@username(\\.+)?'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li><code v-pre>path</code> le chemin vers l'application, cette propriete est obligatoire</li>
<li><code v-pre>method</code> ou <code v-pre>methods</code> le verbe http, les verbes supportés sont: <code v-pre>[GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD]</code></li>
<li><code v-pre>actions</code> l'action a executer, cette propriete est obligatoire</li>
<li>Les autres seront abordé dans leur sections respective.</li>
</ul>
<h2 id="regrouper-les-definitions-de-routes" tabindex="-1"><a class="header-anchor" href="#regrouper-les-definitions-de-routes"><span>Regrouper les definitions de routes</span></a></h2>
<p>Pour regrouper les definitions de routes on utilise la propriete <code v-pre>children</code> prenant comme valeur
un tableau de definitions de routes.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">defaults</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/:id?'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>CORSMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">"Liste d'utilisateurs"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resultat:</p>
<ul>
<li><code v-pre>path</code> =&gt; <code v-pre>/users/:id?</code></li>
<li><code v-pre>rules</code> =&gt; <code v-pre>{ id: /.+/ }</code></li>
<li><code v-pre>defaults</code> =&gt; <code v-pre>{ id: 1 }</code></li>
<li><code v-pre>middleware</code> =&gt; <code v-pre>[AuthMiddleware, CORSMiddleware]</code></li>
</ul>
<p>Notes:</p>
<ul>
<li>la propriete <code v-pre>path</code> est obligatoire meme pour les enfants</li>
<li>Si aucune methode <code v-pre>method</code> n'est definie la methode <code v-pre>GET</code> sera utilisée par defaut.</li>
<li>Toutes les autres propriétes definies dans le parent se propageront et seront fusionnées avec celles des enfants</li>
<li>Si les memes valeurs existent tant qu'au niveau du parent que des enfants, les valeurs des enfants seront preservées et ceci sans doublons.</li>
</ul>
<h3 id="regrouper-les-actions" tabindex="-1"><a class="header-anchor" href="#regrouper-les-actions"><span>Regrouper les actions</span></a></h3>
<p>On peut definir la classe contenant toutes les methodes dans la definition parent et les methodes dans leurs enfants respectifs.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> UserController</span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span></span>
<span class="line">        <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'list'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Seule les action de type classe peuvent etre regroupées.</li>
<li>la propriete <code v-pre>action</code> n'est pas obligatoire pour le parent mais l'est pour les enfants</li>
</ul>
<h3 id="regrouper-les-noms" tabindex="-1"><a class="header-anchor" href="#regrouper-les-noms"><span>Regrouper les noms</span></a></h3>
<p>Toutes les definitions enfant seront prefixées du nom du parent si defini et sera delimité par un <code v-pre>.</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'users'</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'list'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Resultat:</p>
<ul>
<li>Le nom sera <code v-pre>users.list</code></li>
</ul>
<p>Notes:</p>
<ul>
<li>Les noms ne sont pas obligatoires.</li>
</ul>
<h3 id="le-niveau-de-profondeur" tabindex="-1"><a class="header-anchor" href="#le-niveau-de-profondeur"><span>Le niveau de profondeur</span></a></h3>
<p>Par defaut le niveau de profondeur des defintions de routes enfants est de 5,
toutefois on peut changer cette valeur depuis le routeur.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">setMaxDepth</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Quand les definitions depassent la limite définie une exception est lancée.</p>
<h3 id="regrouper-les-definitions-implicite-via-decorateur" tabindex="-1"><a class="header-anchor" href="#regrouper-les-definitions-implicite-via-decorateur"><span>Regrouper les definitions implicite via decorateur</span></a></h3>
<p>Pour mieux organiser les routes definies au niveau des classes, on utilise le decorateur <code v-pre>@Group</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">Group</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Tous les decorators sont des decorateurs de methodes, sauf <code v-pre>@Group</code> qui lui est l'unique decorateur de classe.</li>
</ul>
<h2 id="enregistrer-les-routes" tabindex="-1"><a class="header-anchor" href="#enregistrer-les-routes"><span>Enregistrer les routes</span></a></h2>
<p>Il faut d'abord enregistrer les definitions
de routes(<a href="#definition-explicite">explicites</a> et <a href="#definition-implicite-via-decorateur">implicites via decorateur</a>)
depuis la methode <code v-pre>register</code> du routeur afin de les rendre disponible au sein de notre application.
Cette methode prend en parametre un tableau de <a href="#l-objet-definition">définition</a> ou un tableau de classes.</p>
<h3 id="definitions-explicites" tabindex="-1"><a class="header-anchor" href="#definitions-explicites"><span>Definitions explicites</span></a></h3>
<p>Un exemple de comment enregistrer les routes depuis un tableau de <a href="#definition-explicite">definitions explicites</a>.</p>
<p><code v-pre>routes.mjs</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>app.mjs</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> definitions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./routes.mjs'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>definitions<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Les definitions sont declarees et exportees depuis le module <code v-pre>routes.mjs</code></li>
<li>Ensuite les definitions sont importées et enregistrees avec la methode <code v-pre>register</code> du routeur.</li>
</ul>
<h3 id="definitions-implicites-via-decorateurs" tabindex="-1"><a class="header-anchor" href="#definitions-implicites-via-decorateurs"><span>Definitions implicites via decorateurs</span></a></h3>
<p>Un exemple de comment charger les routes depuis les definitions implicites avec decorateurs.</p>
<p><code v-pre>UserController.mjs</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">Group</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">list</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>ArticleController.mjs</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">@<span class="token function">Group</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/articles'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ArticleController</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">  @<span class="token function">Get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">list</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>app.mjs</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> UserController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./UserController.mjs'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ArticleController <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./ArticleController.mjs'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span>UserController<span class="token punctuation">,</span> ArticleController<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>definitions<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>Les definitions sont declarees au niveau des classes</li>
<li>Les classes sont exportees</li>
<li>Ensuite les classes sont importées et enregistrees avec la methode <code v-pre>register</code> du routeur.</li>
</ul>
</div></template>


