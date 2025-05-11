<template><div><p>Les middlewares permettent d'intercepter les requetes afin de les inspecter, les filtrer, les modifier ou les rejeter
avant meme qu'elles atteignent les actions definies au niveau des routes.</p>
<p>Un middleware peut etre utilise afin de verifier qu'un utilisateur est authentifie,
s'il l'est on laisse passer la requete sinon on la rejete tout en l'informant qu'il n'est pas connecté.</p>
<h2 id="definir-un-middleware" tabindex="-1"><a class="header-anchor" href="#definir-un-middleware"><span>Definir un middleware</span></a></h2>
<p>Un middleware peut etre defini soit via une fonction ou une classe, on peut utiliser les deux au sein d'une application,
avec la seule difference que dans le cas d'une classe et dans un contexte d'une application Stone.js,
le containeur de service lui est injecté depuis son constructeur.</p>
<h3 id="fonction" tabindex="-1"><a class="header-anchor" href="#fonction"><span>Fonction</span></a></h3>
<p>Une fonction comme middleware prend en parametre la requete courante et un callback <code v-pre>next</code>,
la fonction peut etre synchrone ou asynchrone, elle doit appeler et retourner le callback <code v-pre>next</code> ou une reponse.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> authMiddleware <span class="token operator">=</span> <span class="token punctuation">(</span>request<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">,</span> <span class="token string">'Unauthorized'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dans la vie reelle un middleware d'authentification est beaucoup plus complexe que celui la,
mais c'est un bon exemple pour comprendre le sujet.</p>
<p>Ici on verifie si <code v-pre>Authorization</code> exsiste dans le header si oui on laisse passer la requete <code v-pre>return next(request)</code>,
sinon une exception est lancée.</p>
<h3 id="classe" tabindex="-1"><a class="header-anchor" href="#classe"><span>Classe</span></a></h3>
<p>Une classe comme middleware doit obligatoirement avoir la methode <code v-pre>handle</code>
qui prend en parametre la requete courante et un callback <code v-pre>next</code>,
la methode peut etre synchrone, elle doit appeler et retourner le callback <code v-pre>next</code> ou une reponse.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">,</span> <span class="token string">'Unauthorized'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dans la vie reelle un middleware d'authentification est beaucoup plus complexe que celui la,
mais c'est un bon exemple pour comprendre le sujet.</p>
<p>Ici on verifie si <code v-pre>Authorization</code> exsiste dans le header si oui on laisse passer la requete <code v-pre>return next(request)</code>,
sinon une exception est lancée.</p>
<h3 id="acceder-a-la-route" tabindex="-1"><a class="header-anchor" href="#acceder-a-la-route"><span>Acceder a la route</span></a></h3>
<p>Dans un middleware, on peut acceder à la route courante depuis la requete via la propriete <code v-pre>route</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AuthMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>route<span class="token punctuation">.</span>params<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="affecter-des-middlewares-aux-routes" tabindex="-1"><a class="header-anchor" href="#affecter-des-middlewares-aux-routes"><span>Affecter des middlewares aux routes</span></a></h2>
<p>On peut affecter les middleware aux routes de deux manieres:</p>
<ul>
<li><a href="#local">Local</a></li>
<li><a href="#global">Global</a></li>
</ul>
<h3 id="local" tabindex="-1"><a class="header-anchor" href="#local"><span>Local</span></a></h3>
<p>Pour affecter des middlewares directement aux routes on utilise la propriete <code v-pre>middleware</code>
qui prend comme valeur un tableau de middlewares.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">middleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">,</span> AdminMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Les middlewares peuvent etre definis tant au niveau des parents qu'au niveau des enfants pour les definitions de route regroupées.</p>
<h3 id="global" tabindex="-1"><a class="header-anchor" href="#global"><span>Global</span></a></h3>
<p>Pour affecter des middlewares à toutes les routes on utilise les methodes:</p>
<ul>
<li><code v-pre>setMiddleware</code> qui permet d'ajouter un tableau de middleware</li>
<li><code v-pre>addMiddleware</code> qui permet d'ajouter un seul middleware</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">addMiddleware</span><span class="token punctuation">(</span>AuthMiddleware<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">setMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">,</span> AdminMiddleware<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exclure-des-middleware" tabindex="-1"><a class="header-anchor" href="#exclure-des-middleware"><span>Exclure des middleware</span></a></h2>
<p>Pour exclure des middlewares globaux sur une route, on utilise la propriete <code v-pre>excludeMiddleware</code> lors de la definition de la route,
et elle prend comme valeur le tableau des middleware à exclure.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">excludeMiddleware</span><span class="token operator">:</span> <span class="token punctuation">[</span>AuthMiddleware<span class="token punctuation">,</span> AdminMiddleware<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="desactiver-tous-les-middleware" tabindex="-1"><a class="header-anchor" href="#desactiver-tous-les-middleware"><span>Desactiver tous les middleware</span></a></h3>
<p>On peut demander au router de desactiver tous les middlewares definis tant au niveau des routes qu'au niveau du router.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">skipMiddleware</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


