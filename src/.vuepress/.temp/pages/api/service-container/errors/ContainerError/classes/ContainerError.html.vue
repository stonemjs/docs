<template><div><p><RouteLink to="/api/service-container/"><strong>Service Container Documentation v0.0.41</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/service-container/modules.html">Service Container Documentation v0.0.41</RouteLink> / <RouteLink to="/api/service-container/errors/ContainerError/">errors/ContainerError</RouteLink> / ContainerError</p>
<h1 id="class-containererror" tabindex="-1"><a class="header-anchor" href="#class-containererror"><span>Class: ContainerError</span></a></h1>
<p>Class representing a ContainerError.</p>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>Author</span></a></h2>
<p>Mr. Stone <a href="mailto:evensstone@gmail.com" target="_blank" rel="noopener noreferrer">evensstone@gmail.com</a></p>
<h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>Extends</span></a></h2>
<ul>
<li><code v-pre>Error</code></li>
</ul>
<h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2>
<h3 id="new-containererror" tabindex="-1"><a class="header-anchor" href="#new-containererror"><span>new ContainerError()</span></a></h3>
<blockquote>
<p><strong>new ContainerError</strong>(<code v-pre>type</code>, <code v-pre>message</code>): <RouteLink to="/api/service-container/errors/ContainerError/classes/ContainerError.html"><code v-pre>ContainerError</code></RouteLink></p>
</blockquote>
<p>Create a ContainerError.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>
<p>• <strong>type</strong>: <code v-pre>string</code></p>
<p>The type of the error.</p>
<p>• <strong>message</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The error message or key related to the error.</p>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>
<p><RouteLink to="/api/service-container/errors/ContainerError/classes/ContainerError.html"><code v-pre>ContainerError</code></RouteLink></p>
<h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides"><span>Overrides</span></a></h4>
<p><code v-pre>Error.constructor</code></p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/errors/ContainerError.ts#L55" target="_blank" rel="noopener noreferrer">errors/ContainerError.ts:55</a></p>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2>
<h3 id="alias-type" tabindex="-1"><a class="header-anchor" href="#alias-type"><span>ALIAS_TYPE</span></a></h3>
<blockquote>
<p><code v-pre>readonly</code> <code v-pre>static</code> <strong>ALIAS_TYPE</strong>: <code v-pre>&quot;alias&quot;</code> = <code v-pre>'alias'</code></p>
</blockquote>
<p>Error type indicating an alias conflict.</p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/errors/ContainerError.ts#L12" target="_blank" rel="noopener noreferrer">errors/ContainerError.ts:12</a></p>
<hr>
<h3 id="alias-unbound-type" tabindex="-1"><a class="header-anchor" href="#alias-unbound-type"><span>ALIAS_UNBOUND_TYPE</span></a></h3>
<blockquote>
<p><code v-pre>readonly</code> <code v-pre>static</code> <strong>ALIAS_UNBOUND_TYPE</strong>: <code v-pre>&quot;alias_unbound&quot;</code> = <code v-pre>'alias_unbound'</code></p>
</blockquote>
<p>Error type indicating an attempt to alias an unbound value.</p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/errors/ContainerError.ts#L27" target="_blank" rel="noopener noreferrer">errors/ContainerError.ts:27</a></p>
<hr>
<h3 id="cannot-resolve-type" tabindex="-1"><a class="header-anchor" href="#cannot-resolve-type"><span>CANNOT_RESOLVE_TYPE</span></a></h3>
<blockquote>
<p><code v-pre>readonly</code> <code v-pre>static</code> <strong>CANNOT_RESOLVE_TYPE</strong>: <code v-pre>&quot;cannot_resolve&quot;</code> = <code v-pre>'cannot_resolve'</code></p>
</blockquote>
<p>Error type indicating an error thrown by the resolver function.</p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/errors/ContainerError.ts#L37" target="_blank" rel="noopener noreferrer">errors/ContainerError.ts:37</a></p>
<hr>
<h3 id="circular-dependency-type" tabindex="-1"><a class="header-anchor" href="#circular-dependency-type"><span>CIRCULAR_DEPENDENCY_TYPE</span></a></h3>
<blockquote>
<p><code v-pre>readonly</code> <code v-pre>static</code> <strong>CIRCULAR_DEPENDENCY_TYPE</strong>: <code v-pre>&quot;circular_dependency&quot;</code> = <code v-pre>'circular_dependency'</code></p>
</blockquote>
<p>Error type indicating a circular dependency.</p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/errors/ContainerError.ts#L42" target="_blank" rel="noopener noreferrer">errors/ContainerError.ts:42</a></p>
<hr>
<h3 id="not-a-service-type" tabindex="-1"><a class="header-anchor" href="#not-a-service-type"><span>NOT_A_SERVICE_TYPE</span></a></h3>
<blockquote>
<p><code v-pre>readonly</code> <code v-pre>static</code> <strong>NOT_A_SERVICE_TYPE</strong>: <code v-pre>&quot;not_a_service&quot;</code> = <code v-pre>'not_a_service'</code></p>
</blockquote>
<p>Error type indicating that a value is not a service.</p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/errors/ContainerError.ts#L32" target="_blank" rel="noopener noreferrer">errors/ContainerError.ts:32</a></p>
<hr>
<h3 id="resolution-type" tabindex="-1"><a class="header-anchor" href="#resolution-type"><span>RESOLUTION_TYPE</span></a></h3>
<blockquote>
<p><code v-pre>readonly</code> <code v-pre>static</code> <strong>RESOLUTION_TYPE</strong>: <code v-pre>&quot;resolution&quot;</code> = <code v-pre>'resolution'</code></p>
</blockquote>
<p>Error type indicating a resolution failure.</p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/errors/ContainerError.ts#L22" target="_blank" rel="noopener noreferrer">errors/ContainerError.ts:22</a></p>
<hr>
<h3 id="resolver-type" tabindex="-1"><a class="header-anchor" href="#resolver-type"><span>RESOLVER_TYPE</span></a></h3>
<blockquote>
<p><code v-pre>readonly</code> <code v-pre>static</code> <strong>RESOLVER_TYPE</strong>: <code v-pre>&quot;resolver&quot;</code> = <code v-pre>'resolver'</code></p>
</blockquote>
<p>Error type indicating that the resolver is not a function.</p>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/errors/ContainerError.ts#L17" target="_blank" rel="noopener noreferrer">errors/ContainerError.ts:17</a></p>
</div></template>


