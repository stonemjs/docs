<template><div><p>Les redirections et les alias offrent plus de flexibilite a nos routes.</p>
<h2 id="redirection" tabindex="-1"><a class="header-anchor" href="#redirection"><span>Redirection</span></a></h2>
<p>Pour definir une route qui redirige vers une autre on utilise l'option <code v-pre>redirect</code> lors de la definition de des routes.</p>
<p>Dison qu'on souhaite rediriger toutes les requetes entrant vers la route <code v-pre>/people</code> vers la route <code v-pre>/users</code>:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span></span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/people'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/users'</span></span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Par defaut le router fait une redirection temporaire avec le code status <code v-pre>302</code>
pour changer le code status on peut passer un object literal comme valeur a l'option <code v-pre>redirect</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/people'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token number">301</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ca pourrait etre une fonction aussi qui retourne soit une chaine de caractere ou l'objet literal.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/people'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">redirect</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token number">301</span><span class="token operator">:</span> <span class="token string">'/users'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>Alias</span></a></h2>
<p>Les alias permettent de definir des chemins alternatifs pour acceder a la meme ressource.
L'option <code v-pre>alias</code> peut etre utilise afin de definir des alias, elle prend comme valeur une chaine de caractere ou un tableau de chaine.</p>
<p>Pour la definition de route suivante</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'people'</span><span class="token punctuation">,</span> <span class="token string">'person'</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pour la meme et seule route les correspondances seront:</p>
<ul>
<li><code v-pre>/users</code></li>
<li><code v-pre>/people</code></li>
<li><code v-pre>/person</code></li>
</ul>
<p>Les alias doivent etre declare de la meme maniere qu'on declare les path
et si les paths contienent des parametres obligatoire, les alias devraient les avoir et ceci avec les meme noms.
En un mot les segment statiques sont les seules devrant etre change au niveau des alias.</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id(\\d+)/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'/people/:id(\\d+)/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'/person/:id(\\d+)/articles/:slug?'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Les correspondances seraient:</p>
<ul>
<li><code v-pre>/users/12/articles/javascript</code></li>
<li><code v-pre>/people/34/articles/stone.js</code></li>
<li><code v-pre>/person/56/articles/stone-router</code></li>
</ul>
</div></template>


