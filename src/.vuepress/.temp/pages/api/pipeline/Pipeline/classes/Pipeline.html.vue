<template><div><p><RouteLink to="/api/pipeline/"><strong>Pipeline Documentation v0.0.42</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/pipeline/modules.html">Pipeline Documentation v0.0.42</RouteLink> / <RouteLink to="/api/pipeline/Pipeline/">Pipeline</RouteLink> / Pipeline</p>
<h1 id="class-pipeline-t-r" tabindex="-1"><a class="header-anchor" href="#class-pipeline-t-r"><span>Class: Pipeline&lt;T, R&gt;</span></a></h1>
<p>Class representing a Pipeline.</p>
<h2 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters"><span>Type Parameters</span></a></h2>
<p>• <strong>T</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink></p>
<p>The type of the passable object in the pipeline.</p>
<p>• <strong>R</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink> | <code v-pre>T</code> = <code v-pre>T</code></p>
<p>The type of the return value from the pipeline execution.</p>
<p>This class is responsible for managing and executing a series of operations
on a set of passable values through multiple configurable pipes.</p>
<h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors"><span>Constructors</span></a></h2>
<h3 id="new-pipeline" tabindex="-1"><a class="header-anchor" href="#new-pipeline"><span>new Pipeline()</span></a></h3>
<blockquote>
<p><code v-pre>protected</code> <strong>new Pipeline</strong>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;(<code v-pre>container</code>?): <RouteLink to="/api/pipeline/Pipeline/classes/Pipeline.html"><code v-pre>Pipeline</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;</p>
</blockquote>
<p>Initialize a new Pipeline instance.</p>
<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4>
<p>• <strong>container?</strong>: <code v-pre>Container</code></p>
<p>Optional dependency injection container.</p>
<h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns"><span>Returns</span></a></h4>
<p><RouteLink to="/api/pipeline/Pipeline/classes/Pipeline.html"><code v-pre>Pipeline</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;</p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L50" target="_blank" rel="noopener noreferrer">Pipeline.ts:50</a></p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods"><span>Methods</span></a></h2>
<h3 id="defaultpriority" tabindex="-1"><a class="header-anchor" href="#defaultpriority"><span>defaultPriority()</span></a></h3>
<blockquote>
<p><strong>defaultPriority</strong>(<code v-pre>value</code>): <code v-pre>this</code></p>
</blockquote>
<p>Set the default priority for pipes in the pipeline.</p>
<h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h4>
<p>• <strong>value</strong>: <code v-pre>number</code></p>
<p>The priority value to set.</p>
<h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Pipeline instance.</p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L66" target="_blank" rel="noopener noreferrer">Pipeline.ts:66</a></p>
<hr>
<h3 id="pipe" tabindex="-1"><a class="header-anchor" href="#pipe"><span>pipe()</span></a></h3>
<blockquote>
<p><strong>pipe</strong>(<code v-pre>pipe</code>): <code v-pre>this</code></p>
</blockquote>
<p>Add additional pipes to the pipeline.</p>
<h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h4>
<p>• <strong>pipe</strong>: <RouteLink to="/api/pipeline/definitions/type-aliases/MixedPipe.html"><code v-pre>MixedPipe</code></RouteLink> | <RouteLink to="/api/pipeline/definitions/type-aliases/MixedPipe.html"><code v-pre>MixedPipe</code></RouteLink>[]</p>
<p>A single pipe or an array of pipes.</p>
<h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Pipeline instance.</p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L103" target="_blank" rel="noopener noreferrer">Pipeline.ts:103</a></p>
<hr>
<h3 id="send" tabindex="-1"><a class="header-anchor" href="#send"><span>send()</span></a></h3>
<blockquote>
<p><strong>send</strong>(...<code v-pre>passable</code>): <code v-pre>this</code></p>
</blockquote>
<p>Set the passable objects being sent through the pipeline.</p>
<h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h4>
<p>• ...<strong>passable</strong>: <code v-pre>T</code>[]</p>
<p>The objects to pass through the pipeline.</p>
<h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Pipeline instance.</p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L77" target="_blank" rel="noopener noreferrer">Pipeline.ts:77</a></p>
<hr>
<h3 id="sync" tabindex="-1"><a class="header-anchor" href="#sync"><span>sync()</span></a></h3>
<blockquote>
<p><strong>sync</strong>(<code v-pre>value</code>): <code v-pre>this</code></p>
</blockquote>
<p>Configure the pipeline to run synchronously or asynchronously.</p>
<h4 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h4>
<p>• <strong>value</strong>: <code v-pre>boolean</code> = <code v-pre>true</code></p>
<p>Set true for sync, false for async (default is true).</p>
<h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Pipeline instance.</p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L124" target="_blank" rel="noopener noreferrer">Pipeline.ts:124</a></p>
<hr>
<h3 id="then" tabindex="-1"><a class="header-anchor" href="#then"><span>then()</span></a></h3>
<blockquote>
<p><strong>then</strong>(<code v-pre>destination</code>): <code v-pre>R</code> | <code v-pre>Promise</code>&lt;<code v-pre>R</code>&gt;</p>
</blockquote>
<p>Run the pipeline with a final destination callback.</p>
<h4 id="parameters-5" tabindex="-1"><a class="header-anchor" href="#parameters-5"><span>Parameters</span></a></h4>
<p>• <strong>destination</strong>: <RouteLink to="/api/pipeline/definitions/type-aliases/PipeExecutor.html"><code v-pre>PipeExecutor</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;</p>
<p>The final function to execute.</p>
<h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5"><span>Returns</span></a></h4>
<p><code v-pre>R</code> | <code v-pre>Promise</code>&lt;<code v-pre>R</code>&gt;</p>
<p>The result of the pipeline, either synchronously or as a Promise.</p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L135" target="_blank" rel="noopener noreferrer">Pipeline.ts:135</a></p>
<hr>
<h3 id="thenreturn" tabindex="-1"><a class="header-anchor" href="#thenreturn"><span>thenReturn()</span></a></h3>
<blockquote>
<p><strong>thenReturn</strong>(): <code v-pre>R</code> | <code v-pre>Promise</code>&lt;<code v-pre>R</code>&gt;</p>
</blockquote>
<p>Run the pipeline and return the result.</p>
<h4 id="returns-6" tabindex="-1"><a class="header-anchor" href="#returns-6"><span>Returns</span></a></h4>
<p><code v-pre>R</code> | <code v-pre>Promise</code>&lt;<code v-pre>R</code>&gt;</p>
<p>The result of the pipeline, either synchronously or as a Promise.</p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L149" target="_blank" rel="noopener noreferrer">Pipeline.ts:149</a></p>
<hr>
<h3 id="through" tabindex="-1"><a class="header-anchor" href="#through"><span>through()</span></a></h3>
<blockquote>
<p><strong>through</strong>(<code v-pre>pipes</code>): <code v-pre>this</code></p>
</blockquote>
<p>Set the pipes for the pipeline.</p>
<h4 id="parameters-6" tabindex="-1"><a class="header-anchor" href="#parameters-6"><span>Parameters</span></a></h4>
<p>• <strong>pipes</strong>: <RouteLink to="/api/pipeline/definitions/type-aliases/MixedPipe.html"><code v-pre>MixedPipe</code></RouteLink>[]</p>
<p>Array of pipes or MetaPipe instances.</p>
<h4 id="returns-7" tabindex="-1"><a class="header-anchor" href="#returns-7"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Pipeline instance.</p>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L88" target="_blank" rel="noopener noreferrer">Pipeline.ts:88</a></p>
<hr>
<h3 id="via" tabindex="-1"><a class="header-anchor" href="#via"><span>via()</span></a></h3>
<blockquote>
<p><strong>via</strong>(<code v-pre>method</code>): <code v-pre>this</code></p>
</blockquote>
<p>Set the method to call on each pipe.</p>
<h4 id="parameters-7" tabindex="-1"><a class="header-anchor" href="#parameters-7"><span>Parameters</span></a></h4>
<p>• <strong>method</strong>: <code v-pre>string</code></p>
<p>The method name to use on each pipe.</p>
<h4 id="returns-8" tabindex="-1"><a class="header-anchor" href="#returns-8"><span>Returns</span></a></h4>
<p><code v-pre>this</code></p>
<p>The current Pipeline instance.</p>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L113" target="_blank" rel="noopener noreferrer">Pipeline.ts:113</a></p>
<hr>
<h3 id="create" tabindex="-1"><a class="header-anchor" href="#create"><span>create()</span></a></h3>
<blockquote>
<p><code v-pre>static</code> <strong>create</strong>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;(<code v-pre>container</code>?): <RouteLink to="/api/pipeline/Pipeline/classes/Pipeline.html"><code v-pre>Pipeline</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;</p>
</blockquote>
<p>Create a pipeline instance.</p>
<h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1"><span>Type Parameters</span></a></h4>
<p>• <strong>T</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink></p>
<p>• <strong>R</strong> <em>extends</em> <RouteLink to="/api/pipeline/definitions/type-aliases/Passable.html"><code v-pre>Passable</code></RouteLink> = <code v-pre>T</code></p>
<h4 id="parameters-8" tabindex="-1"><a class="header-anchor" href="#parameters-8"><span>Parameters</span></a></h4>
<p>• <strong>container?</strong>: <code v-pre>Container</code></p>
<p>The optional container for dependency resolution.</p>
<h4 id="returns-9" tabindex="-1"><a class="header-anchor" href="#returns-9"><span>Returns</span></a></h4>
<p><RouteLink to="/api/pipeline/Pipeline/classes/Pipeline.html"><code v-pre>Pipeline</code></RouteLink>&lt;<code v-pre>T</code>, <code v-pre>R</code>&gt;</p>
<p>The pipeline instance.</p>
<h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L41" target="_blank" rel="noopener noreferrer">Pipeline.ts:41</a></p>
</div></template>


