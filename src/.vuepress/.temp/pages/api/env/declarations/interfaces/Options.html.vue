<template><div><p><RouteLink to="/api/env/"><strong>Env Documentation v0.0.2</strong></RouteLink> • <strong>Docs</strong></p>
<hr>
<p><RouteLink to="/api/env/modules.html">Env Documentation v0.0.2</RouteLink> / <RouteLink to="/api/env/declarations/">declarations</RouteLink> / Options</p>
<h1 id="interface-options" tabindex="-1"><a class="header-anchor" href="#interface-options"><span>Interface: Options</span></a></h1>
<p>Options for retrieving environment variables.</p>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties"><span>Properties</span></a></h2>
<h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>default</strong>: <code v-pre>any</code></p>
</blockquote>
<p>The default value if the environment variable is not set.</p>
<h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L22" target="_blank" rel="noopener noreferrer">declarations.ts:22</a></p>
<hr>
<h3 id="enums" tabindex="-1"><a class="header-anchor" href="#enums"><span>enums?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>enums</strong>: <code v-pre>string</code>[]</p>
</blockquote>
<p>An array of allowed values for enum types.</p>
<h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L20" target="_blank" rel="noopener noreferrer">declarations.ts:20</a></p>
<hr>
<h3 id="format" tabindex="-1"><a class="header-anchor" href="#format"><span>format?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>format</strong>: <code v-pre>&quot;email&quot;</code> | <code v-pre>&quot;host&quot;</code> | <code v-pre>&quot;url&quot;</code></p>
</blockquote>
<p>The format of the environment variable if it's a string. Can be 'url', 'host', or 'email'.</p>
<h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L19" target="_blank" rel="noopener noreferrer">declarations.ts:19</a></p>
<hr>
<h3 id="optional" tabindex="-1"><a class="header-anchor" href="#optional"><span>optional?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>optional</strong>: <code v-pre>boolean</code></p>
</blockquote>
<p>Whether the environment variable is optional.</p>
<h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L21" target="_blank" rel="noopener noreferrer">declarations.ts:21</a></p>
<hr>
<h3 id="protocol" tabindex="-1"><a class="header-anchor" href="#protocol"><span>protocol?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>protocol</strong>: <code v-pre>boolean</code></p>
</blockquote>
<p>Whether a protocol is required for URLs.</p>
<h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L25" target="_blank" rel="noopener noreferrer">declarations.ts:25</a></p>
<hr>
<h3 id="separator" tabindex="-1"><a class="header-anchor" href="#separator"><span>separator?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>separator</strong>: <code v-pre>string</code></p>
</blockquote>
<p>The separator for parsing array or object values (default is ',').</p>
<h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L23" target="_blank" rel="noopener noreferrer">declarations.ts:23</a></p>
<hr>
<h3 id="tld" tabindex="-1"><a class="header-anchor" href="#tld"><span>tld?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>tld</strong>: <code v-pre>boolean</code></p>
</blockquote>
<p>Whether a top-level domain is required for URLs or emails.</p>
<h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L24" target="_blank" rel="noopener noreferrer">declarations.ts:24</a></p>
<hr>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>type</strong>: <code v-pre>&quot;string&quot;</code> | <code v-pre>&quot;number&quot;</code> | <code v-pre>&quot;boolean&quot;</code> | <code v-pre>&quot;object&quot;</code> | <code v-pre>&quot;array&quot;</code> | <code v-pre>&quot;json&quot;</code> | <code v-pre>&quot;enum&quot;</code> | <code v-pre>&quot;email&quot;</code> | <code v-pre>&quot;host&quot;</code> | <code v-pre>&quot;url&quot;</code></p>
</blockquote>
<p>The type of the environment variable. Can be 'number', 'boolean', 'array', 'object', 'json', 'enum', 'email', 'host', 'url', or 'string'.</p>
<h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L18" target="_blank" rel="noopener noreferrer">declarations.ts:18</a></p>
<hr>
<h3 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>version?</span></a></h3>
<blockquote>
<p><code v-pre>optional</code> <strong>version</strong>: <code v-pre>IPVersion</code></p>
</blockquote>
<p>The IP version if the type is 'host'.</p>
<h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8"><span>Defined in</span></a></h4>
<p><a href="https://github.com/stonemjs/env/blob/695c924d11add6d23337945b2dffa763b18be5aa/src/declarations.ts#L26" target="_blank" rel="noopener noreferrer">declarations.ts:26</a></p>
</div></template>


