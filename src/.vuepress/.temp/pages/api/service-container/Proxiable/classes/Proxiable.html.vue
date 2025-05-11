<template><div><p><RouteLink to="/api/service-container/"><strong>Service Container Documentation v0.0.41</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/service-container/modules.html">Service Container Documentation v0.0.41</RouteLink> / <RouteLink to="/api/service-container/Proxiable/">Proxiable</RouteLink> / Proxiable</p>
<h1 id="class-abstract-proxiable" tabindex="-1"><a class="header-anchor" href="#class-abstract-proxiable"><span>Class: <code v-pre>abstract</code> Proxiable</span></a></h1>
<p>Class representing a Proxiable.</p>
<p>This class allows instances to be wrapped in a Proxy, enabling custom behaviors for property access, assignment, etc.</p>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>Author</span></a></h2>
<p>Mr. Stone <a href="mailto:evensstone@gmail.com" target="_blank" rel="noopener noreferrer">evensstone@gmail.com</a></p>
<h2 id="extended-by" tabindex="-1"><a class="header-anchor" href="#extended-by"><span>Extended by</span></a></h2>
<ul>
<li><RouteLink to="/api/service-container/Container/classes/Container.html"><code v-pre>Container</code></RouteLink></li>
</ul>
<h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2>
<h3 id="new-proxiable" tabindex="-1"><a class="header-anchor" href="#new-proxiable"><span>new Proxiable()</span></a></h3>
<blockquote>
<p><strong>new Proxiable</strong>(<code v-pre>handler</code>): <RouteLink to="/api/service-container/Proxiable/classes/Proxiable.html"><code v-pre>Proxiable</code></RouteLink></p>
</blockquote>
<p>Creates a Proxiable instance wrapped in a Proxy.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>
<p>• <strong>handler</strong>: <code v-pre>ProxyHandler</code>&lt;<RouteLink to="/api/service-container/Proxiable/classes/Proxiable.html"><code v-pre>Proxiable</code></RouteLink>&gt;</p>
<p>A trap object for the proxy, which defines custom behavior for fundamental operations (e.g., property lookup, assignment, etc.).</p>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>
<p><RouteLink to="/api/service-container/Proxiable/classes/Proxiable.html"><code v-pre>Proxiable</code></RouteLink></p>
<p>A new proxy object for this instance.</p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Proxiable.ts#L16" target="_blank" rel="noopener noreferrer">Proxiable.ts:16</a></p>
</div></template>


