<template><div><p><RouteLink to="/api/pipeline/"><strong>Pipeline Documentation v0.0.42</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/pipeline/modules.html">Pipeline Documentation v0.0.42</RouteLink> / <RouteLink to="/api/pipeline/definitions/">definitions</RouteLink> / PipeInstance</p>
<h1 id="interface-pipeinstance-t-r" tabindex="-1"><a class="header-anchor" href="#interface-pipeinstance-t-r"><span>Interface: PipeInstance&lt;T, R&gt;</span></a></h1>
<p>Represents a pipe instance that contains different pipe functions.</p>
<h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2>
<p>• <strong>T</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink></p>
<p>The type of the passable object.</p>
<p>• <strong>R</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink> | <code v-pre>T</code> = <code v-pre>T</code></p>
<p>The type of the return value from the pipeline execution, defaulting to <code v-pre>T</code>.</p>
<p>An object representing a set of functions used as part of the pipeline.
The keys represent function names, and the values are functions that take specific arguments.</p>
<h2 id="indexable" tabindex="-1"><a class="header-anchor" href="#indexable"><span>Indexable</span></a></h2>
<p>[<code v-pre>key</code>: <code v-pre>string</code>]: (...<code v-pre>args</code>) =&gt; <code v-pre>R</code></p>
</div></template>


