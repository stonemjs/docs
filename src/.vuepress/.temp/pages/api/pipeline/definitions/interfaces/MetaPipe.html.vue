<template><div><p><RouteLink to="/api/pipeline/"><strong>Pipeline Documentation v0.0.42</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/pipeline/modules.html">Pipeline Documentation v0.0.42</RouteLink> / <RouteLink to="/api/pipeline/definitions/">definitions</RouteLink> / MetaPipe</p>
<h1 id="interface-metapipe" tabindex="-1"><a class="header-anchor" href="#interface-metapipe"><span>Interface: MetaPipe</span></a></h1>
<p>Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.</p>
<p>A configuration object used for managing pipes in the pipeline.</p>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2>
<h3 id="params" tabindex="-1"><a class="header-anchor" href="#params"><span>params?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>params</strong>: <code v-pre>unknown</code>[]</p>
</blockquote>
<p>An optional array of parameters to pass to the pipe.</p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/definitions.ts#L78" target="_blank" rel="noopener noreferrer">definitions.ts:78</a></p>
<hr>
<h3 id="pipe" tabindex="-1"><a class="header-anchor" href="#pipe"><span>pipe</span></a></h3>
<blockquote>
<p><strong>pipe</strong>: <RouteLink to="/api/pipeline/definitions/type-aliases/Pipe.html"><code v-pre>Pipe</code></RouteLink></p>
</blockquote>
<p>The pipe to execute, which can be a function or a string identifier.</p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/definitions.ts#L76" target="_blank" rel="noopener noreferrer">definitions.ts:76</a></p>
<hr>
<h3 id="priority" tabindex="-1"><a class="header-anchor" href="#priority"><span>priority?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>priority</strong>: <code v-pre>number</code></p>
</blockquote>
<p>An optional priority level of the pipe.</p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/definitions.ts#L80" target="_blank" rel="noopener noreferrer">definitions.ts:80</a></p>
</div></template>


