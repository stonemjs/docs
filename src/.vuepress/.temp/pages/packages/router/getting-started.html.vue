<template><div><p>Stone Router permet de definir des routes(avec des regles) afin d'exposer les differentes fonctionnalites de notre application.
Il y a des routers backend et frontend, pour l'instant Stone Router est un router backend.</p>
<p>Stone Router est concu pour etre simple, leger, developper friendly, facile d'integration et plateforme agnostique.
C'est une librairie dite standalone, c'est à dire qu'il peut etre integre facilement dans des projets autre que Stone.js framework.
Il met a votre disposition une API elegante avec des methodes chainables
prenant en compte presque tous les cas d'utilisations necessaires au bon fonctionnement d'une application.</p>
<h2 id="sous-le-capot" tabindex="-1"><a class="header-anchor" href="#sous-le-capot"><span>Sous le capot</span></a></h2>
<p>Afin de comprendre les differentes fonctionnalités de Stone Router, levons le capot et examinons ce qui se cache par dessous.
Pour ce faire on va creer un CRUD de gestion d'utlisateurs qui servira d'exemple durant toute la documentation.</p>
<h3 id="definition-des-routes" tabindex="-1"><a class="header-anchor" href="#definition-des-routes"><span>Definition des routes</span></a></h3>
<p>Les routes peuvent etre definies de trois manieres:</p>
<ul>
<li><RouteLink to="/packages/router/definitions.html#definition-implicite">Implicite</RouteLink></li>
<li><RouteLink to="/packages/router/definitions.html#definition-explicite">Explicite</RouteLink></li>
<li><RouteLink to="/packages/router/definitions.html#definition-implicite-via-decorateur">Implicite avec decorateur</RouteLink></li>
</ul>
<p>Dans cet exemple nous allons utiliser uniquement la definition implicite, les autres seront obordés par la suite dans leur section respective.</p>
<p>Pour definir des routes implicite il faut juste importer le router, en créer une instance et les definir.</p>
<h4 id="avec-des-callbacks" tabindex="-1"><a class="header-anchor" href="#avec-des-callbacks"><span>Avec des callbacks</span></a></h4>
<p>Dans cet exemple l'action sera une simple fonction javascript qui retourne la reponse.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'Liste des utilisateurs...'</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> payload <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'Sauevgarder un utilisateur'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Un instance du <code v-pre>Router</code> est créée <code v-pre>const router = new Router()</code>
ensuite les methode <code v-pre>router.get()</code> et <code v-pre>router.post()</code> sont utiliser pour definir des routes relatives aux verbes http,
ensuite les methodes prennent en parametres le path <code v-pre>router.get('/users')</code> vers la fonctionnalité
et un callback <code v-pre>({ request }) =&gt; 'Liste des utilisateurs...'</code> qui retourne la reponse relative a la route,
enfin le <code v-pre>callback</code> prend en parametre l'objet <code v-pre>RequestContext</code>.</p>
<p>Ici on utilise la syntaxe de decomposition <code v-pre>{ request, payload }</code> dans les parametres de la methode afin d'avoir un accès direct à ses propriétés.
Le <code v-pre>RequestContext</code> sera abordé plus en details plus tard.</p>
<h4 id="avec-des-controlleurs" tabindex="-1"><a class="header-anchor" href="#avec-des-controlleurs"><span>Avec des controlleurs</span></a></h4>
<p>Par soucis de simplicité on va juste definir les methodes du controlleur sans implementation.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> UserController <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">list</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> payload <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">list</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">create</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>C'est toujours le meme scenario que dans l'exemple precendant avec la seule difference
qu'on utilise un objet literal comme action à la place d'une fonction.</p>
<p>Penchons nous un peu sur la syntaxe de l'action a savoir l'objet literal <code v-pre>{ list: UserController }</code>, la cle de l'objet <code v-pre>list</code> doit etre le nom de la methode
a executer et la valeur <code v-pre>UserController</code> doit etre la classe hebergeant la methode.</p>
<h3 id="avec-un-serveur-node" tabindex="-1"><a class="header-anchor" href="#avec-un-serveur-node"><span>Avec un serveur node</span></a></h3>
<p>Comme vous pouvez le remarquer le router est très simple d'utilisation,
maintenant nous allons implementer le tout avec un serveur node afin d'avoir un exemple complet</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> http <span class="token keyword">from</span> <span class="token string">'node:http'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/router'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHTTPMapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'Liste des utilisateurs...'</span><span class="token punctuation">)</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> request<span class="token punctuation">,</span> payload <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'Sauevgarder un utilisateur'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">http</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> stoneRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NodeHTTPMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> res <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>stoneRequest<span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> response <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dans cet exemple:</p>
<ol>
<li>on definit nos routes comme dans les examples anterieurs</li>
<li>on crée un serveur node <code v-pre>http.createServer(async (req, res) =&gt; {...})</code> qui ecoute sur le port 8080 <code v-pre>http.listen(8080)</code></li>
<li>on crée une instance de StoneRequest <code v-pre>const stoneRequest = new NodeHTTPMapper().request({ res })</code></li>
<li>on envoie la requete au routeur <code v-pre>const response = await router.dispatch(stoneRequest)</code></li>
<li>le router va se charger de faire le matching, executer l'action de la route et de retourner la reponse</li>
<li>Enfin on envoie la reponse à l'utilisateur <code v-pre>res.end(response)</code></li>
</ol>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p><code v-pre>Stone Router</code> fonctionne uniquement avec une instance de <code v-pre>StoneRequest</code>.</p>
</div>
<p>En resumé l'utilisation du routeur consiste a:</p>
<ol>
<li>Creer une instance du router <code v-pre>const router = new Router()</code></li>
<li>Definir les routes <code v-pre>router.get('/users', ({ request }) =&gt; 'Liste des utilisateurs...')</code></li>
<li>Créer une instance de <code v-pre>StoneRequest</code> <code v-pre>const stoneRequest = new NodeHTTPMapper().request({ res })</code></li>
<li>Enfin envoyer la requete aux routes <code v-pre>const response = await router.dispatch(stoneRequest)</code></li>
</ol>
<h2 id="prochaine-etape" tabindex="-1"><a class="header-anchor" href="#prochaine-etape"><span>Prochaine etape</span></a></h2>
<p>Dans cet exemple beaucoup de concepts ont ete developpés, mais ne vous inquietez pas on va tous les decouvrir.</p>
</div></template>


