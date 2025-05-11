<template><div><p><RouteLink to="/api/service-container/"><strong>Service Container Documentation v0.0.41</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/service-container/modules.html">Service Container Documentation v0.0.41</RouteLink> / <RouteLink to="/api/service-container/models/Binding/">models/Binding</RouteLink> / Binding</p>
<h1 id="class-abstract-binding-v" tabindex="-1"><a class="header-anchor" href="#class-abstract-binding-v"><span>Class: <code v-pre>abstract</code> Binding&lt;V&gt;</span></a></h1>
<p>Abstract class representing a Binding.</p>
<p>This abstract class serves as the base class for all types of bindings in the service container. It holds a value and provides an abstract method
to resolve and return that value, allowing different subclasses to implement their own resolution logic. Bindings are used to manage dependencies
and control how objects are instantiated within the container.</p>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>Author</span></a></h2>
<p>Mr. Stone <a href="mailto:evensstone@gmail.com" target="_blank" rel="noopener noreferrer">evensstone@gmail.com</a></p>
<h2 id="extended-by" tabindex="-1"><a class="header-anchor" href="#extended-by"><span>Extended by</span></a></h2>
<ul>
<li><RouteLink to="/api/service-container/models/Instance/classes/Instance.html"><code v-pre>Instance</code></RouteLink></li>
<li><RouteLink to="/api/service-container/models/ResolverBinding/classes/ResolverBinding.html"><code v-pre>ResolverBinding</code></RouteLink></li>
</ul>
<h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<p>The type of value that this binding holds.</p>
<h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2>
<h3 id="new-binding" tabindex="-1"><a class="header-anchor" href="#new-binding"><span>new Binding()</span></a></h3>
<blockquote>
<p><strong>new Binding</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>value</code>?): <RouteLink to="/api/service-container/models/Binding/classes/Binding.html"><code v-pre>Binding</code></RouteLink>&lt;<code v-pre>V</code>&gt;</p>
</blockquote>
<p>Create a new instance of Binding.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>
<p>• <strong>value?</strong>: <code v-pre>V</code></p>
<p>The value to be held by the binding.</p>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>
<p><RouteLink to="/api/service-container/models/Binding/classes/Binding.html"><code v-pre>Binding</code></RouteLink>&lt;<code v-pre>V</code>&gt;</p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/models/Binding.ts#L27" target="_blank" rel="noopener noreferrer">models/Binding.ts:27</a></p>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2>
<h3 id="value" tabindex="-1"><a class="header-anchor" href="#value"><span>value?</span></a></h3>
<blockquote>
<p><code v-pre>protected</code> <code v-pre>optional</code> <strong>value</strong>: <code v-pre>V</code></p>
</blockquote>
<p>The value held by the binding.</p>
<p>This value is resolved at runtime, either directly or through a resolver function.</p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/models/Binding.ts#L20" target="_blank" rel="noopener noreferrer">models/Binding.ts:20</a></p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2>
<h3 id="isresolved" tabindex="-1"><a class="header-anchor" href="#isresolved"><span>isResolved()</span></a></h3>
<blockquote>
<p><code v-pre>protected</code> <strong>isResolved</strong>(): <code v-pre>boolean</code></p>
</blockquote>
<p>Check if the value has been resolved.</p>
<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4>
<p><code v-pre>boolean</code></p>
<p>A boolean indicating whether the value has been resolved.</p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/models/Binding.ts#L36" target="_blank" rel="noopener noreferrer">models/Binding.ts:36</a></p>
<hr>
<h3 id="resolve" tabindex="-1"><a class="header-anchor" href="#resolve"><span>resolve()</span></a></h3>
<blockquote>
<p><code v-pre>abstract</code> <strong>resolve</strong>(<code v-pre>container</code>): <code v-pre>undefined</code> | <code v-pre>V</code></p>
</blockquote>
<p>Resolve and return the value of the binding.</p>
<p>This abstract method must be implemented by subclasses to provide specific resolution logic.</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>
<p>• <strong>container</strong>: <RouteLink to="/api/service-container/Container/classes/Container.html"><code v-pre>Container</code></RouteLink></p>
<p>The container to resolve dependencies from.</p>
<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4>
<p><code v-pre>undefined</code> | <code v-pre>V</code></p>
<p>The resolved value of the binding.</p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/models/Binding.ts#L48" target="_blank" rel="noopener noreferrer">models/Binding.ts:48</a></p>
</div></template>


