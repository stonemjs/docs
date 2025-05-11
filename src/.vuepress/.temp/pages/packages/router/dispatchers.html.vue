<template><div><p>Les dispatchers permettent de creer le <code v-pre>RequestContext</code> et d'executer les actions des routes.</p>
<p>Jusqu'a date Stone Router utlise les dispatchers suivants afin d'executer les diffents types d'action des routes.</p>
<ul>
<li><code v-pre>CallableDispatcher</code> execute les fonctions de callback definies comme actions</li>
<li><code v-pre>ControllerDispatcher</code> execute les methodes des classes definies comme actions</li>
</ul>
<h2 id="dispatchers-personnalises" tabindex="-1"><a class="header-anchor" href="#dispatchers-personnalises"><span>Dispatchers personnalisés</span></a></h2>
<p>Un dispatcher n'est autre qu'une classe Javascript ayant une methode <code v-pre>dispatch</code> avec comme arguments:</p>
<ul>
<li><code v-pre>dispatch (request, route, callable)</code> pour le dispatcher <code v-pre>CallableDispatcher</code></li>
<li><code v-pre>dispatch (request, route, controller, method)</code> pour le dispatcher <code v-pre>ControllerDispatcher</code></li>
</ul>
<h3 id="creation" tabindex="-1"><a class="header-anchor" href="#creation"><span>Creation</span></a></h3>
<p>Voici le <code v-pre>CallableDispatcher</code>, il peut servir d'exemple afin de creer un dispatcher personnalisé.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CallableDispatcher</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Dispatch.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Request<span class="token punctuation">}</span></span> <span class="token parameter">request</span> - StoneRequest instance</span>
<span class="line">   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Route<span class="token punctuation">}</span></span>    <span class="token parameter">route</span></span>
<span class="line">   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">callable</span></span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span></span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">dispatch</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> route<span class="token punctuation">,</span> callable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> params <span class="token operator">=</span> route<span class="token punctuation">.</span><span class="token function">parametersWithoutNulls</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      route<span class="token punctuation">,</span></span>
<span class="line">      params<span class="token punctuation">,</span></span>
<span class="line">      request<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">parameters</span><span class="token operator">:</span> params<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> request<span class="token punctuation">.</span>body <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">query</span><span class="token operator">:</span> request<span class="token punctuation">.</span>query <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">payload</span><span class="token operator">:</span> request<span class="token punctuation">.</span>body <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">callable</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notes:</p>
<ul>
<li>La methode <code v-pre>dispatch</code> peut retourner n'importe quel type de valeur</li>
<li>On a aussi accès aux <code v-pre>meta</code> dans les dispatchers depuis la route, <code v-pre>route.get('...')</code></li>
<li>On peut aussi ajouter les <code v-pre>meta</code> dans le <code v-pre>RequestContext</code></li>
<li>Un dispatcher peut etre synchrone ou asynchrone</li>
</ul>
<h3 id="enregistrement" tabindex="-1"><a class="header-anchor" href="#enregistrement"><span>Enregistrement</span></a></h3>
<p>Les dispatchers doivent etre enregistrer au niveau du routeur afin de les utiliser.</p>
<p>Contrairement au matchers on ne peut pas ajouter d'autres types dispatchers on peut juste les remplacer par types.</p>
<p>On utilise les methode <code v-pre>setCallableDispatcher</code> et <code v-pre>setControllerDispatcher</code> afin de les enregistrer.</p>
<p>Voici la liste des methodes du <code v-pre>Router</code> permettant de gerer les dispatchers:</p>
<ul>
<li><code v-pre>getDispatchers (orDefault = true)</code> retourne la liste des dispatchers enregistrer par l'utilisateur ou les dispatchers par defaut quand <code v-pre>orDefault</code>est a <code v-pre>true</code></li>
<li><code v-pre>hasDispatchers()</code> verifie si des dispatchers ont ete enrgistrer par l'utilisateur</li>
<li><code v-pre>setDispatchers(dispatchers)</code> remplace les dispatchers par type, le parametre est un objet de ce type <code v-pre>{ callable: DispatcherA, controller: DispatcherB }</code></li>
<li><code v-pre>addDispatcher(type, dispatcher)</code> remplace un type de dispatcher</li>
<li><code v-pre>setCallableDispatcher(dispatcher)</code> remplace le dispatcher de type <code v-pre>callable</code></li>
<li><code v-pre>setControllerDispatcher(dispatcher)</code> remplace le dispatcher de type <code v-pre>controller</code></li>
</ul>
<p>Les differents types de dispatchers sont <code v-pre>callable</code> et <code v-pre>controller</code>.</p>
</div></template>


