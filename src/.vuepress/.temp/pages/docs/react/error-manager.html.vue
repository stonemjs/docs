<template><div><p>In a context-aware system like Stone.js, errors aren’t exceptions, they’re part of the design. From failed API calls to unexpected user input, errors can occur at any stage of an application’s lifecycle. The question is not how to avoid them, but how to handle them <strong>gracefully</strong>, both in code and in the UI.</p>
<p>Stone.js introduces the concept of <strong>Error Pages</strong>: specialized pages rendered in response to failures, designed to catch and display user-friendly messages without crashing the app.</p>
<p>These pages follow the same composable structure as regular pages but with one key difference: they react to thrown errors, not user events.</p>
<h3 id="why-error-pages-matter" tabindex="-1"><a class="header-anchor" href="#why-error-pages-matter"><span>Why Error Pages Matter</span></a></h3>
<p>Error Pages are your system’s visual safety net. Whether something goes wrong during data fetching, rendering, or integration, Stone.js ensures:</p>
<ul>
<li>The application remains stable</li>
<li>The user is guided, not lost</li>
<li>The error is handled contextually</li>
</ul>
<p>Rather than burying users in console errors or blank screens, you offer them meaningful fallback experiences, wrapped in the same powerful context engine that powers your pages.</p>
<h3 id="handlers-vs-pages-know-the-difference" tabindex="-1"><a class="header-anchor" href="#handlers-vs-pages-know-the-difference"><span>Handlers vs. Pages: Know the Difference</span></a></h3>
<p>Stone.js has <strong>two mechanisms</strong> for dealing with errors:</p>
<table>
<thead>
<tr>
<th>Mechanism</th>
<th>Purpose</th>
<th>Scope</th>
<th>Handles UI?</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Error Handlers</strong></td>
<td>Catch and process exceptions</td>
<td>Functional &amp; Integration dimensions</td>
<td>❌ No</td>
</tr>
<tr>
<td><strong>Error Pages</strong></td>
<td>Display friendly UI when errors occur</td>
<td>View dimension (SPA/SSR/SOR)</td>
<td>✅ Yes</td>
</tr>
</tbody>
</table>
<p>You can (and should) use <strong>both</strong>:</p>
<ul>
<li><strong>Throw</strong> freely in your application logic.</li>
<li>Let error <strong>handlers</strong> catch the error and return structured responses.</li>
<li>If the error reaches the <strong>view</strong>, let an <strong>ErrorPage</strong> take over and guide the user.</li>
</ul>
<p>Stone.js routes each failure to the appropriate layer, and gives you complete control over how it’s handled.</p>
<h3 id="a-continuum-safe-system" tabindex="-1"><a class="header-anchor" href="#a-continuum-safe-system"><span>A Continuum-Safe System</span></a></h3>
<p>Thanks to the Continuum Architecture, error management in Stone.js is:</p>
<ul>
<li><strong>Dimension-aware</strong>: Different responses for functional vs. integration failures</li>
<li><strong>Composable</strong>: Error pages are just React renderers with access to DI and context</li>
<li><strong>Extensible</strong>: Customize responses per error type, per adapter, or globally</li>
<li><strong>Framework-consistent</strong>: You register, inject, and snapshot just like any other handler</li>
</ul>
<p>An ErrorPage is a <strong>view-level fail-safe</strong>, not just a UI bandage. It’s the moment where <strong>architecture meets empathy</strong>, turning uncertainty into clarity.</p>
</div></template>


