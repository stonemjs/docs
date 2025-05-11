<template><div><p>Le plus souvent les valeurs des parametres de route sont utilisées pour aller chercher des modèles dans la base de données.
Avec la liaison des modeles, Stone Routeur peut aller chercher les modeles à votre place dans la base données et les injecter directement dans les routes.
En resume au lieu d'injecter l'Id d'un utilisateur le router injectera le modèle utilisateur récupéré depuis la base de données.</p>
<h2 id="liaison-locale" tabindex="-1"><a class="header-anchor" href="#liaison-locale"><span>Liaison locale</span></a></h2>
<p>Elle se fait au niveau des definitions de routes ce qui permet au router de faire la resolution automatique des modeles depuis la base de données.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">resolveRouteBinding</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findOneBy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> ArticleService <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">static</span> <span class="token function">resolveRouteBinding</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findOneBy</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">bindings</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> User<span class="token punctuation">,</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> ArticleService <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>id<span class="token punctuation">,</span> params<span class="token punctuation">.</span>slug<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Les classes <code v-pre>User</code> et <code v-pre>ArticleService</code> sont des exemples de modeles et services avec la methode <code v-pre>resolveRouteBinding</code> qui fait la resolution du modele.
ensuite on a accès à nos modeles depuis la propriete params(<code v-pre>params.id</code>, <code v-pre>params.slug</code>) du <code v-pre>RequestContext</code> injecté à notre action.</p>
<p>Notes:</p>
<ul>
<li>on utilise l'option <code v-pre>bindings</code> pour lier nos modeles ou services aux valeurs des parametres.</li>
<li>l'option <code v-pre>bindings</code> prend un objet literal comme valeur, les clés correspondent aux valeurs des parametres et le modele ou service comme valeur</li>
<li>la valeur des clés des <code v-pre>bindings</code> doivent des etre des classes</li>
<li>la methode <code v-pre>resolveRouteBinding</code> doit etre present dans le modele ou service et peut etre une methode de classe <code v-pre>statique</code> ou d'instance</li>
<li>la logique de recuperation du modele doit etre implementer au niveau de cette meme methode <code v-pre>resolveRouteBinding</code></li>
<li>elle doit retourner le modele ou null quand aucun modele n'est trouvé</li>
</ul>
<h3 id="cle-personnalisee" tabindex="-1"><a class="header-anchor" href="#cle-personnalisee"><span>Clé personnalisée</span></a></h3>
<p>On peut utiliser un <code v-pre>@</code> afin de distinguer la clé du parametre de celle qu'on veut utiliser pour aller chercher le modele dans la base de données.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:user@id(\\d+)/articles/:article@slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">bindings</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> User<span class="token punctuation">,</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> ArticleService <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">action</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> params <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>user<span class="token punctuation">,</span> params<span class="token punctuation">.</span>article<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dans cet exemple <code v-pre>user@id(\\d+)</code>, le model sera injecté dans <code v-pre>params.user</code>
et <code v-pre>id</code> sera injecté comme clé de la methode <code v-pre>resolveRouteBinding</code> afin de faire la resolution du modele.</p>
<h3 id="parametre-optionel" tabindex="-1"><a class="header-anchor" href="#parametre-optionel"><span>Parametre optionel</span></a></h3>
<p>Pour tous les parametres de route obligatoire, une exception sera lancée quand le modele n'est pas trouvé.
Par contre la valeur <code v-pre>null</code> sera retournée pour les parametres optionnels.</p>
<p>Pour ce path <code v-pre>/users/:user@id(\\d+)/articles/:article@slug?</code> si le dernier segment est vide lors de la correspondance avec la requete,
alors <code v-pre>params.article</code> contiendra <code v-pre>null</code> comme valeur.</p>
<h2 id="liaison-globale" tabindex="-1"><a class="header-anchor" href="#liaison-globale"><span>Liaison globale</span></a></h2>
<p>Pour definir des liaisons globales communes a toutes les routes on utilise les methodes <code v-pre>addBinding</code> et <code v-pre>setBindings</code> depuis le router.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">addBinding</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> User<span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">setBindings</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> UserService <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


