<template><div><p><RouteLink to="/api/service-container/"><strong>Service Container Documentation v0.0.41</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/service-container/modules.html">Service Container Documentation v0.0.41</RouteLink> / <RouteLink to="/api/service-container/declarations/">declarations</RouteLink> / BindingValue</p>
<h1 id="type-alias-bindingvalue" tabindex="-1"><a class="header-anchor" href="#type-alias-bindingvalue"><span>Type Alias: BindingValue</span></a></h1>
<blockquote>
<p><strong>BindingValue</strong>: <code v-pre>number</code> | <code v-pre>boolean</code> | <code v-pre>string</code> | <code v-pre>Function</code> | <code v-pre>object</code> | <code v-pre>symbol</code></p>
</blockquote>
<p>A union type representing the possible values that can be bound in the container.</p>
<p>Binding values can be of various types, including numbers, booleans, strings, functions, objects, or symbols.
Unlike <code v-pre>BindingKey</code>, <code v-pre>BindingValue</code> represents the actual data or instance being bound, while <code v-pre>BindingKey</code> represents the identifier used to access that data.</p>
<h2 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h2>
<p><a href="https://github.com/stonemjs/service-container/blob/7783da28757f6e31cf32b1e1a6dcef833c613a29/src/declarations.ts#L48" target="_blank" rel="noopener noreferrer">declarations.ts:48</a></p>
</div></template>


