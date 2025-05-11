<template><div><p>Les metas servent à definir des options personnalisés lors de la definition des routes.
En un mot toutes options non standard presentes dans une definition de routes est appelé <code v-pre>mata</code>.</p>
<p>Ces options permettent d'etendre les fonctionnalités du routeur,
prenons par exemple l'option <code v-pre>validators</code> est une meta definition par la librairie Stone Validator
qui permet de valider les données des utilisateurs.</p>
<p>Les possibilité sont infinies lorsque les metas et les middlewares sont utilisés ensemble.</p>
<h2 id="definition" tabindex="-1"><a class="header-anchor" href="#definition"><span>Definition</span></a></h2>
<p>Les metas peuvent etre definis au meme niveau que les options de definition standard.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">usernameValidator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">body</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>body<span class="token punctuation">.</span>username<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">'`username` ne doit pas etre vide.'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">validators</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      usernameValidator</span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ici <code v-pre>validators</code> est une meta et c'est un simple exemple qui valide les données en entrée, plus precisement le <code v-pre>username</code>.</p>
<p>On peut definir autant de metas que possible et les valeurs peuvent etre de n'importe quel type.</p>
<h2 id="recuperation" tabindex="-1"><a class="header-anchor" href="#recuperation"><span>Recuperation</span></a></h2>
<p>Tout les metas sont recuperables depuis la methode <code v-pre>get</code> de la route courante,
et on peut les recuperer depuis les actions ou les middlewares, en un mot partout ou l'on a accès a la route courante.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> validators <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'validators'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Ici on recupere la meta <code v-pre>validators</code> defini plus haut depuis la methode <code v-pre>current</code> du routeur qui retourne la route courante,
ensuite on recupere la meta depuis la methode <code v-pre>get</code> de la route.</p>
<p>Notes:</p>
<ul>
<li>La methode <code v-pre>get</code> sert pas seulement a recuperer les meta mais toutes les options presentes dans une definitions de route.</li>
<li>Le second parametre de la methode <code v-pre>get</code> est la valeur par defaut a retourner quand une option n'est pas definie.</li>
</ul>
<h3 id="depuis-les-actions" tabindex="-1"><a class="header-anchor" href="#depuis-les-actions"><span>Depuis les actions</span></a></h3>
<p>Exemple de recuperation d'une meta depuis une action.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">create</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> route <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> validators <span class="token operator">=</span> route<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'validators'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ici on a acces a la route courante par de composition de l'objet <code v-pre>RequestContext</code>,
ensuite on recupere notre meta.</p>
<h3 id="depuis-un-middleware" tabindex="-1"><a class="header-anchor" href="#depuis-un-middleware"><span>Depuis un middleware</span></a></h3>
<p>Exemple de recuperation d'une meta depuis un middleware.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ValidatorMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> validators <span class="token operator">=</span> request<span class="token punctuation">.</span>route<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'validators'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ici on accede a la route courante depuis l'objet request, ensuite on recupere notre meta.</p>
<h2 id="un-exemple" tabindex="-1"><a class="header-anchor" href="#un-exemple"><span>Un exemple</span></a></h2>
<p>Nous allons completer notre simple petit exemple de validation de username avec les metas.</p>
<h3 id="le-middlewra" tabindex="-1"><a class="header-anchor" href="#le-middlewra"><span>Le middlewra</span></a></h3>
<p>On va creer un middleware pour intercepter toutes les requetes,
ensuite recuperer la meta <code v-pre>validators</code> depuis la route,
efin executer toutes les fonction de validation.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ValidatorMiddleware</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> validators <span class="token operator">=</span> request<span class="token punctuation">.</span>route<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'validators'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    validators<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">validator</span> <span class="token operator">=></span> <span class="token function">validators</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Le middleware ne fait qu'executer toutes les fonctions de validation.</p>
<h3 id="la-fonction-de-validation" tabindex="-1"><a class="header-anchor" href="#la-fonction-de-validation"><span>La fonction de validation</span></a></h3>
<p>On va creer notre fonction qui va verifier la validiter la donnée <code v-pre>username</code> fournit par l'utilisateur.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">usernameValidator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">body</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>body<span class="token punctuation">.</span>username<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">'`username` doit etre present.'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>body<span class="token punctuation">.</span>username<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpException</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">'`username` doit avoir au minimum deux caracteres.'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>On verifie si <code v-pre>username</code> est present et si son nombre de caractere est superieur a 1,
le cas contraire une exception est lancée.</p>
<h3 id="le-controlleur" tabindex="-1"><a class="header-anchor" href="#le-controlleur"><span>Le controlleur</span></a></h3>
<p>On va juste definir un controlleur pour notre route qui va juste enregistrer l'utilisateur.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">userService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> userService</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">create</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> body <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="la-definition-des-routes" tabindex="-1"><a class="header-anchor" href="#la-definition-des-routes"><span>La definition des routes</span></a></h3>
<p>Maintenant qu'on a tout on peut denifir la route qui va pointer vers notre controller <code v-pre>create</code> de la classe <code v-pre>UserController</code>.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> definitions <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">create</span><span class="token operator">:</span> UserController <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">validators</span><span class="token operator">:</span> <span class="token punctuation">[</span> usernameValidator <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>La meta <code v-pre>validators</code> contient notre <code v-pre>usernameValidator</code> qui va valider notre <code v-pre>username</code>
avant meme que la requete parvient a notre controller <code v-pre>create</code>.</p>
<h3 id="integration" tabindex="-1"><a class="header-anchor" href="#integration"><span>Integration</span></a></h3>
<p>On va creer une instance du <code v-pre>Router</code> et une representation de l'objet <code v-pre>StoneRequest</code> afin d'executer le tout.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  definitions</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span> <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>On importe nos defintions de routes via la syntaxe shorthand property,
ensuite on cree une instance <code v-pre>Router</code> avec notre <code v-pre>options</code> en parametres,
apres on cree une representation de l'objet <code v-pre>StoneRequest</code>,
enfin on envoie notre requete a la route.</p>
<h3 id="resume" tabindex="-1"><a class="header-anchor" href="#resume"><span>Resume</span></a></h3>
<p>Dans ce petit exemple:</p>
<ul>
<li>On cree un middleware qui va intercepter toutes les requetes et verifier si la meta <code v-pre>validators</code> est presente</li>
<li>Si la meta <code v-pre>validators</code> est presente il va executer toutes les fonctions presente dans <code v-pre>validators</code></li>
<li>On cree une fonction <code v-pre>usernameValidator</code> pour valider le <code v-pre>username</code> fournit par l'utlisateur</li>
<li>On cree un controlleur pour enregistrer les infos validés</li>
<li>On definit nos routes avec notre meta <code v-pre>validators</code> qui contient un tableau de validateurs</li>
<li>Enfin on creer une instance du <code v-pre>Router</code> et envoie notre requete a la route.</li>
</ul>
</div></template>


