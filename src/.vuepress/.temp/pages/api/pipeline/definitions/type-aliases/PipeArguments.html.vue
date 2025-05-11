<template><div><p><RouteLink to="/api/pipeline/"><strong>Pipeline Documentation v0.0.42</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/pipeline/modules.html">Pipeline Documentation v0.0.42</RouteLink> / <RouteLink to="/api/pipeline/definitions/">definitions</RouteLink> / PipeArguments</p>
<h1 id="type-alias-pipearguments-t-r" tabindex="-1"><a class="header-anchor" href="#type-alias-pipearguments-t-r"><span>Type Alias: PipeArguments&lt;T, R&gt;</span></a></h1>
<blockquote>
<p><strong>PipeArguments</strong>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;: (<code v-pre>T</code> | <RouteLink to="/api/pipeline/definitions/type-aliases/PipeExecutor.html"><code v-pre>PipeExecutor</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt; | <code v-pre>unknown</code>[])[]</p>
</blockquote>
<p>Represents the arguments passed to a pipe execution function.</p>
<p>The array can include:</p>
<ul>
<li><code v-pre>T</code>: The passable value (of type <code v-pre>Passable</code>).</li>
<li><code v-pre>PipeExecutor&lt;T, R&gt;</code>: The executor function for the pipe.</li>
<li><code v-pre>unknown[]</code>: Additional arguments that might be used during execution.</li>
</ul>
<h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2>
<p>• <strong>T</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink></p>
<p>The type of the passable object.</p>
<p>• <strong>R</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink> | <code v-pre>T</code> = <code v-pre>T</code></p>
<p>The type of the return value from the pipeline execution, defaulting to <code v-pre>T</code>.</p>
<h2 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h2>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/definitions.ts#L31" target="_blank" rel="noopener noreferrer">definitions.ts:31</a></p>
</div></template>


