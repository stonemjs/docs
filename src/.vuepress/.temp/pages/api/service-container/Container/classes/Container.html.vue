<template><div><p><RouteLink to="/api/service-container/"><strong>Service Container Documentation v0.0.41</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/service-container/modules.html">Service Container Documentation v0.0.41</RouteLink> / <RouteLink to="/api/service-container/Container/">Container</RouteLink> / Container</p>
<h1 id="class-container" tabindex="-1"><a class="header-anchor" href="#class-container"><span>Class: Container</span></a></h1>
<p>Class representing a Container.</p>
<p>The Container class acts as a dependency injection container, managing bindings and resolving instances.
It supports different types of bindings, such as singletons, factories, and instances, and allows the use of aliases for bindings.
This makes it easier to manage and resolve complex dependency trees in an application.</p>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>Author</span></a></h2>
<p>Mr. Stone <a href="mailto:evensstone@gmail.com" target="_blank" rel="noopener noreferrer">evensstone@gmail.com</a></p>
<h2 id="extends" tabindex="-1"><a class="header-anchor" href="#extends"><span>Extends</span></a></h2>
<ul>
<li><RouteLink to="/api/service-container/Proxiable/classes/Proxiable.html"><code v-pre>Proxiable</code></RouteLink></li>
</ul>
<h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2>
<h3 id="new-container" tabindex="-1"><a class="header-anchor" href="#new-container"><span>new Container()</span></a></h3>
<blockquote>
<p><strong>new Container</strong>(): <RouteLink to="/api/service-container/Container/classes/Container.html"><code v-pre>Container</code></RouteLink></p>
</blockquote>
<p>Create a container.</p>
<p>Initializes the container with empty alias and binding maps.</p>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>
<p><RouteLink to="/api/service-container/Container/classes/Container.html"><code v-pre>Container</code></RouteLink></p>
<h4 id="overrides" tabindex="-1"><a class="header-anchor" href="#overrides"><span>Overrides</span></a></h4>
<p><RouteLink to="/api/service-container/Proxiable/classes/Proxiable.html"><code v-pre>Proxiable</code></RouteLink>.<RouteLink to="/api/service-container/Proxiable/classes/Proxiable.html#constructors"><code v-pre>constructor</code></RouteLink></p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L29" target="_blank" rel="noopener noreferrer">Container.ts:29</a></p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2>
<h3 id="alias" tabindex="-1"><a class="header-anchor" href="#alias"><span>alias()</span></a></h3>
<blockquote>
<p><strong>alias</strong>(<code v-pre>key</code>, <code v-pre>aliases</code>): <code v-pre>this</code></p>
</blockquote>
<p>Set a binding as alias.</p>
<p>Adds one or more aliases for a given binding key.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The binding value.</p>
<p>• <strong>aliases</strong>: <code v-pre>string</code> | <code v-pre>string</code>[]</p>
<p>One or more strings representing the aliases.</p>
<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L71" target="_blank" rel="noopener noreferrer">Container.ts:71</a></p>
<hr>
<h3 id="asalias" tabindex="-1"><a class="header-anchor" href="#asalias"><span>asAlias()</span></a></h3>
<blockquote>
<p><strong>asAlias</strong>(<code v-pre>Class</code>): <code v-pre>this</code></p>
</blockquote>
<p>Set class name as camelCase alias.</p>
<p>Automatically assigns a camelCase alias to a given class based on its name or metadata.</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>
<p>• <strong>Class</strong>: <code v-pre>Function</code></p>
<p>The class to alias.</p>
<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L111" target="_blank" rel="noopener noreferrer">Container.ts:111</a></p>
<hr>
<h3 id="autobinding" tabindex="-1"><a class="header-anchor" href="#autobinding"><span>autoBinding()</span></a></h3>
<blockquote>
<p><strong>autoBinding</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>name</code>, <code v-pre>item</code>?, <code v-pre>singleton</code>?, <code v-pre>alias</code>?): <code v-pre>this</code></p>
</blockquote>
<p>AutoBind value to the service container.</p>
<h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h4>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4>
<p>• <strong>name</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>A key to make the binding. Can be anything.</p>
<p>• <strong>item?</strong>: <code v-pre>V</code></p>
<p>The item to bind.</p>
<p>• <strong>singleton?</strong>: <code v-pre>boolean</code> = <code v-pre>true</code></p>
<p>Bind as singleton when true.</p>
<p>• <strong>alias?</strong>: <code v-pre>string</code> | <code v-pre>string</code>[] = <code v-pre>[]</code></p>
<p>Key binding aliases.</p>
<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L309" target="_blank" rel="noopener noreferrer">Container.ts:309</a></p>
<hr>
<h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>binding()</span></a></h3>
<blockquote>
<p><strong>binding</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>key</code>, <code v-pre>resolver</code>): <code v-pre>this</code></p>
</blockquote>
<p>Bind a resolver function into the container under the provided key, returning a new instance each time.</p>
<h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type Parameters</span></a></h4>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to associate with the value.</p>
<p>• <strong>resolver</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/Resolver.html"><code v-pre>Resolver</code></RouteLink>&lt;<code v-pre>V</code>&gt;</p>
<p>The resolver function to provide the value.</p>
<h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L179" target="_blank" rel="noopener noreferrer">Container.ts:179</a></p>
<hr>
<h3 id="bindingif" tabindex="-1"><a class="header-anchor" href="#bindingif"><span>bindingIf()</span></a></h3>
<blockquote>
<p><strong>bindingIf</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>key</code>, <code v-pre>resolver</code>): <code v-pre>this</code></p>
</blockquote>
<p>Bind a resolver function into the container under the provided key, returning a new instance each time if not already bound.</p>
<h4 id="type-parameters-2" tabindex="-1"><a class="header-anchor" href="#type-parameters-2"><span>Type Parameters</span></a></h4>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to associate with the value.</p>
<p>• <strong>resolver</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/Resolver.html"><code v-pre>Resolver</code></RouteLink>&lt;<code v-pre>V</code>&gt;</p>
<p>The resolver function to provide the value.</p>
<h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L191" target="_blank" rel="noopener noreferrer">Container.ts:191</a></p>
<hr>
<h3 id="bound" tabindex="-1"><a class="header-anchor" href="#bound"><span>bound()</span></a></h3>
<blockquote>
<p><strong>bound</strong>(<code v-pre>key</code>): <code v-pre>boolean</code></p>
</blockquote>
<p>Check if a value is already bound in the container by its key.</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to check.</p>
<h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6"><span>Returns</span></a></h4>
<p><code v-pre>boolean</code></p>
<p>True if the key is bound, false otherwise.</p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L256" target="_blank" rel="noopener noreferrer">Container.ts:256</a></p>
<hr>
<h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear"><span>clear()</span></a></h3>
<blockquote>
<p><strong>clear</strong>(): <code v-pre>this</code></p>
</blockquote>
<p>Reset the container so that all bindings are removed.</p>
<h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L275" target="_blank" rel="noopener noreferrer">Container.ts:275</a></p>
<hr>
<h3 id="factory" tabindex="-1"><a class="header-anchor" href="#factory"><span>factory()</span></a></h3>
<blockquote>
<p><strong>factory</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>key</code>): () =&gt; <code v-pre>undefined</code> | <code v-pre>V</code></p>
</blockquote>
<p>Resolve a value from the container by its key and return it in a factory function.</p>
<h4 id="type-parameters-3" tabindex="-1"><a class="header-anchor" href="#type-parameters-3"><span>Type Parameters</span></a></h4>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to resolve.</p>
<h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8"><span>Returns</span></a></h4>
<p><code v-pre>Function</code></p>
<p>A factory function that returns the resolved value.</p>
<h5 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9"><span>Returns</span></a></h5>
<p><code v-pre>undefined</code> | <code v-pre>V</code></p>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L246" target="_blank" rel="noopener noreferrer">Container.ts:246</a></p>
<hr>
<h3 id="getaliases" tabindex="-1"><a class="header-anchor" href="#getaliases"><span>getAliases()</span></a></h3>
<blockquote>
<p><strong>getAliases</strong>(): <code v-pre>Map</code>&lt;<code v-pre>string</code>, <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink>&gt;</p>
</blockquote>
<p>Retrieve the value of the aliases property.</p>
<h4 id="returns-10" tabindex="-1"><a class="header-anchor" href="#returns-10"><span>Returns</span></a></h4>
<p><code v-pre>Map</code>&lt;<code v-pre>string</code>, <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink>&gt;</p>
<p>A map of all aliases registered in the container.</p>
<h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L58" target="_blank" rel="noopener noreferrer">Container.ts:58</a></p>
<hr>
<h3 id="getaliaskey" tabindex="-1"><a class="header-anchor" href="#getaliaskey"><span>getAliasKey()</span></a></h3>
<blockquote>
<p><strong>getAliasKey</strong>(<code v-pre>alias</code>): <code v-pre>undefined</code> | <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
</blockquote>
<p>Get a binding key by its alias.</p>
<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7"><span>Parameters</span></a></h4>
<p>• <strong>alias</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The alias name.</p>
<h4 id="returns-11" tabindex="-1"><a class="header-anchor" href="#returns-11"><span>Returns</span></a></h4>
<p><code v-pre>undefined</code> | <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The binding key associated with the alias, or undefined if not found.</p>
<h4 id="defined-in-10" tabindex="-1"><a class="header-anchor" href="#defined-in-10"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L99" target="_blank" rel="noopener noreferrer">Container.ts:99</a></p>
<hr>
<h3 id="getbindings" tabindex="-1"><a class="header-anchor" href="#getbindings"><span>getBindings()</span></a></h3>
<blockquote>
<p><strong>getBindings</strong>(): <code v-pre>Map</code>&lt;<RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink>, <RouteLink to="/api/service-container/models/Binding/classes/Binding.html"><code v-pre>Binding</code></RouteLink>&lt;<RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink>&gt;&gt;</p>
</blockquote>
<p>Retrieve the value of the bindings property.</p>
<h4 id="returns-12" tabindex="-1"><a class="header-anchor" href="#returns-12"><span>Returns</span></a></h4>
<p><code v-pre>Map</code>&lt;<RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink>, <RouteLink to="/api/service-container/models/Binding/classes/Binding.html"><code v-pre>Binding</code></RouteLink>&lt;<RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink>&gt;&gt;</p>
<p>A map of all bindings registered in the container.</p>
<h4 id="defined-in-11" tabindex="-1"><a class="header-anchor" href="#defined-in-11"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L49" target="_blank" rel="noopener noreferrer">Container.ts:49</a></p>
<hr>
<h3 id="has" tabindex="-1"><a class="header-anchor" href="#has"><span>has()</span></a></h3>
<blockquote>
<p><strong>has</strong>(<code v-pre>key</code>): <code v-pre>boolean</code></p>
</blockquote>
<p>Check if a value is already bound in the container by its key.</p>
<h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to check.</p>
<h4 id="returns-13" tabindex="-1"><a class="header-anchor" href="#returns-13"><span>Returns</span></a></h4>
<p><code v-pre>boolean</code></p>
<p>True if the key is bound, false otherwise.</p>
<h4 id="defined-in-12" tabindex="-1"><a class="header-anchor" href="#defined-in-12"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L266" target="_blank" rel="noopener noreferrer">Container.ts:266</a></p>
<hr>
<h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance"><span>instance()</span></a></h3>
<blockquote>
<p><strong>instance</strong>(<code v-pre>key</code>, <code v-pre>value</code>): <code v-pre>this</code></p>
</blockquote>
<p>Bind a single instance or value into the container under the provided key.</p>
<h4 id="parameters-9" tabindex="-1"><a class="header-anchor" href="#parameters-9"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to associate with the value.</p>
<p>• <strong>value</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<p>The value to be bound.</p>
<h4 id="returns-14" tabindex="-1"><a class="header-anchor" href="#returns-14"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-13" tabindex="-1"><a class="header-anchor" href="#defined-in-13"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L125" target="_blank" rel="noopener noreferrer">Container.ts:125</a></p>
<hr>
<h3 id="instanceif" tabindex="-1"><a class="header-anchor" href="#instanceif"><span>instanceIf()</span></a></h3>
<blockquote>
<p><strong>instanceIf</strong>(<code v-pre>key</code>, <code v-pre>value</code>): <code v-pre>this</code></p>
</blockquote>
<p>Bind a single instance or value into the container under the provided key if not already bound.</p>
<h4 id="parameters-10" tabindex="-1"><a class="header-anchor" href="#parameters-10"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to associate with the value.</p>
<p>• <strong>value</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<p>The value to be bound.</p>
<h4 id="returns-15" tabindex="-1"><a class="header-anchor" href="#returns-15"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-14" tabindex="-1"><a class="header-anchor" href="#defined-in-14"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L137" target="_blank" rel="noopener noreferrer">Container.ts:137</a></p>
<hr>
<h3 id="isalias" tabindex="-1"><a class="header-anchor" href="#isalias"><span>isAlias()</span></a></h3>
<blockquote>
<p><strong>isAlias</strong>(<code v-pre>alias</code>): <code v-pre>boolean</code></p>
</blockquote>
<p>Check if an alias exists in the container.</p>
<h4 id="parameters-11" tabindex="-1"><a class="header-anchor" href="#parameters-11"><span>Parameters</span></a></h4>
<p>• <strong>alias</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The alias to check.</p>
<h4 id="returns-16" tabindex="-1"><a class="header-anchor" href="#returns-16"><span>Returns</span></a></h4>
<p><code v-pre>boolean</code></p>
<p>True if the alias exists, false otherwise.</p>
<h4 id="defined-in-15" tabindex="-1"><a class="header-anchor" href="#defined-in-15"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L89" target="_blank" rel="noopener noreferrer">Container.ts:89</a></p>
<hr>
<h3 id="make" tabindex="-1"><a class="header-anchor" href="#make"><span>make()</span></a></h3>
<blockquote>
<p><strong>make</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>key</code>): <code v-pre>undefined</code> | <code v-pre>V</code></p>
</blockquote>
<p>Resolve a registered value from the container by its key.</p>
<h4 id="type-parameters-4" tabindex="-1"><a class="header-anchor" href="#type-parameters-4"><span>Type Parameters</span></a></h4>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<h4 id="parameters-12" tabindex="-1"><a class="header-anchor" href="#parameters-12"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to resolve.</p>
<h4 id="returns-17" tabindex="-1"><a class="header-anchor" href="#returns-17"><span>Returns</span></a></h4>
<p><code v-pre>undefined</code> | <code v-pre>V</code></p>
<p>The resolved value.</p>
<h4 id="throws" tabindex="-1"><a class="header-anchor" href="#throws"><span>Throws</span></a></h4>
<p>ContainerError if the key cannot be resolved.</p>
<h4 id="defined-in-16" tabindex="-1"><a class="header-anchor" href="#defined-in-16"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L205" target="_blank" rel="noopener noreferrer">Container.ts:205</a></p>
<hr>
<h3 id="register" tabindex="-1"><a class="header-anchor" href="#register"><span>register()</span></a></h3>
<blockquote>
<p><strong>register</strong>(<code v-pre>classes</code>): <code v-pre>this</code></p>
</blockquote>
<p>Register services with zero configuration.</p>
<h4 id="parameters-13" tabindex="-1"><a class="header-anchor" href="#parameters-13"><span>Parameters</span></a></h4>
<p>• <strong>classes</strong>: <code v-pre>Function</code> | <code v-pre>Function</code>[]</p>
<p>Classes representing the services to be registered in the container.</p>
<h4 id="returns-18" tabindex="-1"><a class="header-anchor" href="#returns-18"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-17" tabindex="-1"><a class="header-anchor" href="#defined-in-17"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L287" target="_blank" rel="noopener noreferrer">Container.ts:287</a></p>
<hr>
<h3 id="resolve" tabindex="-1"><a class="header-anchor" href="#resolve"><span>resolve()</span></a></h3>
<blockquote>
<p><strong>resolve</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>key</code>, <code v-pre>singleton</code>): <code v-pre>undefined</code> | <code v-pre>V</code></p>
</blockquote>
<p>Resolve a value from the container by its key, binding it if necessary.</p>
<h4 id="type-parameters-5" tabindex="-1"><a class="header-anchor" href="#type-parameters-5"><span>Type Parameters</span></a></h4>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<h4 id="parameters-14" tabindex="-1"><a class="header-anchor" href="#parameters-14"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to resolve.</p>
<p>• <strong>singleton</strong>: <code v-pre>boolean</code> = <code v-pre>false</code></p>
<p>Whether to bind as a singleton if not already bound.</p>
<h4 id="returns-19" tabindex="-1"><a class="header-anchor" href="#returns-19"><span>Returns</span></a></h4>
<p><code v-pre>undefined</code> | <code v-pre>V</code></p>
<p>The resolved value.</p>
<h4 id="defined-in-18" tabindex="-1"><a class="header-anchor" href="#defined-in-18"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L232" target="_blank" rel="noopener noreferrer">Container.ts:232</a></p>
<hr>
<h3 id="singleton" tabindex="-1"><a class="header-anchor" href="#singleton"><span>singleton()</span></a></h3>
<blockquote>
<p><strong>singleton</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>key</code>, <code v-pre>resolver</code>): <code v-pre>this</code></p>
</blockquote>
<p>Bind a resolver function into the container under the provided key as a singleton.</p>
<p>The resolver function will be called once, and the resulting value will be cached for future use.</p>
<h4 id="type-parameters-6" tabindex="-1"><a class="header-anchor" href="#type-parameters-6"><span>Type Parameters</span></a></h4>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<h4 id="parameters-15" tabindex="-1"><a class="header-anchor" href="#parameters-15"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to associate with the singleton value.</p>
<p>• <strong>resolver</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/Resolver.html"><code v-pre>Resolver</code></RouteLink>&lt;<code v-pre>V</code>&gt;</p>
<p>The resolver function to provide the value.</p>
<h4 id="returns-20" tabindex="-1"><a class="header-anchor" href="#returns-20"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-19" tabindex="-1"><a class="header-anchor" href="#defined-in-19"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L153" target="_blank" rel="noopener noreferrer">Container.ts:153</a></p>
<hr>
<h3 id="singletonif" tabindex="-1"><a class="header-anchor" href="#singletonif"><span>singletonIf()</span></a></h3>
<blockquote>
<p><strong>singletonIf</strong>&lt;<code v-pre>V</code>&gt;(<code v-pre>key</code>, <code v-pre>resolver</code>): <code v-pre>this</code></p>
</blockquote>
<p>Bind a resolver function into the container under the provided key as a singleton if not already bound.</p>
<h4 id="type-parameters-7" tabindex="-1"><a class="header-anchor" href="#type-parameters-7"><span>Type Parameters</span></a></h4>
<p>• <strong>V</strong> <em>extends</em> <RouteLink to="/api/service-container/declarations/type-aliases/BindingValue.html"><code v-pre>BindingValue</code></RouteLink></p>
<h4 id="parameters-16" tabindex="-1"><a class="header-anchor" href="#parameters-16"><span>Parameters</span></a></h4>
<p>• <strong>key</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/BindingKey.html"><code v-pre>BindingKey</code></RouteLink></p>
<p>The key to associate with the singleton value.</p>
<p>• <strong>resolver</strong>: <RouteLink to="/api/service-container/declarations/type-aliases/Resolver.html"><code v-pre>Resolver</code></RouteLink>&lt;<code v-pre>V</code>&gt;</p>
<p>The resolver function to provide the value.</p>
<h4 id="returns-21" tabindex="-1"><a class="header-anchor" href="#returns-21"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The container instance.</p>
<h4 id="defined-in-20" tabindex="-1"><a class="header-anchor" href="#defined-in-20"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/Container.ts#L165" target="_blank" rel="noopener noreferrer">Container.ts:165</a></p>
</div></template>


