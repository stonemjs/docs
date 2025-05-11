<template><div><p><RouteLink to="/api/pipeline/"><strong>Pipeline Documentation v0.0.42</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/pipeline/modules.html">Pipeline Documentation v0.0.42</RouteLink> / <RouteLink to="/api/pipeline/definitions/">definitions</RouteLink> / ReducerCallback</p>
<h1 id="type-alias-reducercallback-t-r" tabindex="-1"><a class="header-anchor" href="#type-alias-reducercallback-t-r"><span>Type Alias: ReducerCallback()&lt;T, R&gt;</span></a></h1>
<blockquote>
<p><strong>ReducerCallback</strong>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;: (<code v-pre>previousPipeExecutor</code>, <code v-pre>currentPipe</code>) =&gt; <RouteLink to="/api/pipeline/definitions/type-aliases/PipeExecutor.html"><code v-pre>PipeExecutor</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;</p>
</blockquote>
<p>Reducer callback function type used to build a sequence of pipe executions.</p>
<h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2>
<p>• <strong>T</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink></p>
<p>The type of the passable object.</p>
<p>• <strong>R</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink> | <code v-pre>T</code> = <code v-pre>T</code></p>
<p>The type of the return value from the pipeline execution, defaulting to <code v-pre>T</code>.</p>
<h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h2>
<p>• <strong>previousPipeExecutor</strong>: <RouteLink to="/api/pipeline/definitions/type-aliases/PipeExecutor.html"><code v-pre>PipeExecutor</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;</p>
<p>The executor from the previous step in the pipeline.</p>
<p>• <strong>currentPipe</strong>: <RouteLink to="/api/pipeline/definitions/type-aliases/Pipe.html"><code v-pre>Pipe</code></RouteLink></p>
<p>The current pipe being added to the sequence.</p>
<h2 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h2>
<p><RouteLink to="/api/pipeline/definitions/type-aliases/PipeExecutor.html"><code v-pre>PipeExecutor</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;</p>
<p>The combined executor function.</p>
<h2 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h2>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/definitions.ts#L54" target="_blank" rel="noopener noreferrer">definitions.ts:54</a></p>
</div></template>


