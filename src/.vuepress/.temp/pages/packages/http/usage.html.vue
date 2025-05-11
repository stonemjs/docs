<template><div><p>To effectively utilize the <code v-pre>HTTP Core</code> library, you can leverage its comprehensive API to handle HTTP requests and responses seamlessly.
The provided classes and methods enable you to manage HTTP communication efficiently.</p>
<p>This section will guide you through practical examples and best practices,
ensuring that your HTTP interactions are both robust and adaptable to your application's needs.</p>
<h2 id="handling-incoming-requests" tabindex="-1"><a class="header-anchor" href="#handling-incoming-requests"><span>Handling Incoming Requests</span></a></h2>
<p>The <code v-pre>IncomingHttpEvent</code> class represents an incoming HTTP request.
It provides properties and methods to access the request's details such as the HTTP verb, URL, headers, and body.</p>
<CodeTabs id="12" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Event instance</span></span>
<span class="line"><span class="token keyword">const</span> httpEvent <span class="token operator">=</span> IncomingHttpEvent<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Available props</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>method       <span class="token comment">// Request method (e.g., 'GET')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>url          <span class="token comment">// Request URL (e.g., 'https://example.com/api/data')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>headers      <span class="token comment">// Request headers (e.g., { 'Accept': 'application/json' })</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>body         <span class="token comment">// Request body (e.g., JSON.stringify({ key: 'value' }))</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>host         <span class="token comment">// Request host (e.g., 'example.com')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>protocol     <span class="token comment">// Request protocol (e.g., 'https')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>params       <span class="token comment">// URL parameters (e.g., { id: '123' })</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>query        <span class="token comment">// Query parameters (e.g., { search: 'test' })</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>cookies      <span class="token comment">// Request cookies (e.g., { session: 'abcd1234' })</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>files        <span class="token comment">// Uploaded files (e.g., [])</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>ip           <span class="token comment">// Request IP address (e.g., '192.168.1.1')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>userAgent    <span class="token comment">// User agent string (e.g., 'Mozilla/5.0')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>referrer     <span class="token comment">// Referrer URL (e.g., 'https://referrer.com')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>path         <span class="token comment">// Request path (e.g., '/api/data')</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Available methods</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'accept'</span><span class="token punctuation">)</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">'accept'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check the IncomingHttpEvent on Github:</span></span>
<span class="line"><span class="token comment">// https://github.com/stonemjs/http-core/blob/main/src/IncomingHttpEvent.mjs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IncomingHttpEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone/http-core'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Event instance</span></span>
<span class="line"><span class="token keyword">const</span> httpEvent <span class="token operator">=</span> IncomingHttpEvent<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Available props</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>method       <span class="token comment">// Request method (e.g., 'GET')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>url          <span class="token comment">// Request URL (e.g., 'https://example.com/api/data')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>headers      <span class="token comment">// Request headers (e.g., { 'Accept': 'application/json' })</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>body         <span class="token comment">// Request body (e.g., JSON.stringify({ key: 'value' }))</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>host         <span class="token comment">// Request host (e.g., 'example.com')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>protocol     <span class="token comment">// Request protocol (e.g., 'https')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>params       <span class="token comment">// URL parameters (e.g., { id: '123' })</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>query        <span class="token comment">// Query parameters (e.g., { search: 'test' })</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>cookies      <span class="token comment">// Request cookies (e.g., { session: 'abcd1234' })</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>files        <span class="token comment">// Uploaded files (e.g., [])</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>ip           <span class="token comment">// Request IP address (e.g., '192.168.1.1')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>userAgent    <span class="token comment">// User agent string (e.g., 'Mozilla/5.0')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>referrer     <span class="token comment">// Referrer URL (e.g., 'https://referrer.com')</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span>path         <span class="token comment">// Request path (e.g., '/api/data')</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Available methods</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string">'accept'</span><span class="token punctuation">)</span></span>
<span class="line">httpEvent<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">'accept'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check the IncomingHttpEvent on Github:</span></span>
<span class="line"><span class="token comment">// https://github.com/stonemjs/http-core/blob/main/src/IncomingHttpEvent.mjs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="smart-get" tabindex="-1"><a class="header-anchor" href="#smart-get"><span>Smart Get</span></a></h3>
<p>The <code v-pre>get</code> method in the <code v-pre>IncomingHttpEvent</code> class is a smart and versatile function designed to retrieve request data efficiently.</p>
<p>It follows a prioritized sequence:</p>
<ol>
<li><strong>Route Parameters</strong>: First, it checks if the data exists in the route parameters.</li>
<li><strong>Request Body</strong>: If not found, it looks into the request body.</li>
<li><strong>Query Parameters</strong>: Next, it searches within the query parameters.</li>
<li><strong>Headers</strong>: Next, it searches within the headers.</li>
<li><strong>Cookies</strong>: Next, it searches within the cookies.</li>
<li><strong>Metadata</strong>: If the data is still not found, it checks the metadata.</li>
<li><strong>Default</strong>: Finally, if none of the above sources contain the data, it returns a provided default value.</li>
</ol>
<p>The <code v-pre>get</code> method ensures that the most relevant data is retrieved in an intelligent and prioritized manner.
Additionally, you can use the <strong>deep string dot notation</strong> syntax to retrieve nested data,
which applies only to body and query parameters.</p>
<CodeTabs id="69" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Go and search where you can find the name </span></span>
<span class="line"><span class="token comment">// by following the prioritized sequence</span></span>
<span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> httpEvent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'Stone.js'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Get user fullname using Deep string dot notation</span></span>
<span class="line"><span class="token keyword">const</span> fullname <span class="token operator">=</span> httpEvent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user.fullname'</span><span class="token punctuation">,</span> <span class="token string">'Jonh Doe'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Print them</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> fullname<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> httpEvent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'Stone.js'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<p>This feature provides a flexible and powerful way to access deeply nested values within your request data.</p>
<h3 id="handling-file-uploads" tabindex="-1"><a class="header-anchor" href="#handling-file-uploads"><span>Handling File Uploads</span></a></h3>
<p>The <code v-pre>UploadedFile</code> class manages file uploads by providing properties and methods to access file details and save them to the server.</p>
<p>Uploaded files can be accessed through the <code v-pre>files</code> property in the <code v-pre>IncomingHttpEvent</code> instance.
The <code v-pre>files</code> property is an object where keys are field names and values are arrays of <code v-pre>UploadedFile</code> instances.</p>
<p>This structure allows you to handle multiple files uploaded under the same field name efficiently, giving you detailed control over each uploaded file.</p>
<CodeTabs id="92" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Get uploaded files</span></span>
<span class="line"><span class="token keyword">const</span> files <span class="token operator">=</span> httpEvent<span class="token punctuation">.</span>files</span>
<span class="line"></span>
<span class="line"><span class="token comment">// Get uploaded files filtered by field name</span></span>
<span class="line"><span class="token keyword">const</span> files <span class="token operator">=</span> httpEvent<span class="token punctuation">.</span><span class="token function">filterFiles</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'documents'</span><span class="token punctuation">,</span> <span class="token string">'images'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Save documents</span></span>
<span class="line">files<span class="token punctuation">.</span>documents<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=></span> file<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token string">'./documents-directory/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Save images with new name</span></span>
<span class="line">files<span class="token punctuation">.</span>images<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> file<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token string">'./image-directory/'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">file-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Save files with default name</span></span>
<span class="line">Object</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>fieldName<span class="token punctuation">,</span> uploadedFiles<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    uploadedFiles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token operator">=></span> file<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token string">'./files-directory/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Save files with new name</span></span>
<span class="line">Object</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>fieldName<span class="token punctuation">,</span> uploadedFiles<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    uploadedFiles<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> file<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token string">'./files-directory/'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">file-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> name <span class="token operator">=</span> httpEvent<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'Stone.js'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="sending-responses" tabindex="-1"><a class="header-anchor" href="#sending-responses"><span>Sending Responses</span></a></h2>
<p>The <code v-pre>OutgoingHttpResponse</code> class is used to create and send HTTP responses. It allows setting headers, status codes, and the response body.</p>
<CodeTabs id="106" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// or</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set header</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set cookie</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'session_id'</span><span class="token punctuation">,</span> <span class="token string">'********'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">httpOnly</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Encrypt cookies</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">secureCookies</span><span class="token punctuation">(</span><span class="token string">'secret_salt_value'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check the OutgoingHttpResponse on Github:</span></span>
<span class="line"><span class="token comment">// https://github.com/stonemjs/http-core/blob/main/src/OutgoingHttpResponse.mjs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// or</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> OutgoingHttpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Stone.js'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set header</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set cookie</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">'session_id'</span><span class="token punctuation">,</span> <span class="token string">'********'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> httpOnly<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Encrypt cookies</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">secureCookies</span><span class="token punctuation">(</span><span class="token string">'secret_salt_value'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check the OutgoingHttpResponse on Github:</span></span>
<span class="line"><span class="token comment">// https://github.com/stonemjs/http-core/blob/main/src/OutgoingHttpResponse.mjs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="sending-binary-files" tabindex="-1"><a class="header-anchor" href="#sending-binary-files"><span>Sending Binary Files</span></a></h3>
<p>The <code v-pre>BinaryFileResponse</code> class is a specialized response for sending binary files, such as PDFs, images, or other binary data.</p>
<CodeTabs id="120" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> BinaryFileResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">'/path/to/file.pdf'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set header</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> BinaryFileResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">'/path/to/file.pdf'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set header</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="json-responses" tabindex="-1"><a class="header-anchor" href="#json-responses"><span>JSON Responses</span></a></h3>
<p>The <code v-pre>JsonResponse</code> class sends JSON responses with appropriate headers.</p>
<CodeTabs id="134" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> JsonResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> JsonResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> success<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="jsonp-responses" tabindex="-1"><a class="header-anchor" href="#jsonp-responses"><span>JSONP Responses</span></a></h3>
<p>The <code v-pre>JsonpResponse</code> class sends JSONP responses for cross-domain requests.</p>
<CodeTabs id="148" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> JsonpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set callback function</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token string">'callbackFunction'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> JsonpResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> success<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set callback function</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token string">'callbackFunction'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="redirect-responses" tabindex="-1"><a class="header-anchor" href="#redirect-responses"><span>Redirect Responses</span></a></h3>
<p>The RedirectResponse class handles HTTP redirects.</p>
<CodeTabs id="162" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> RedirectResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">'https://example.com'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Response instance</span></span>
<span class="line"><span class="token keyword">const</span> response <span class="token operator">=</span> RedirectResponse<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">'https://example.com'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Set status code</span></span>
<span class="line">response<span class="token punctuation">.</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">302</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h3 id="httpresponse-utility-class" tabindex="-1"><a class="header-anchor" href="#httpresponse-utility-class"><span>HttpResponse Utility Class</span></a></h3>
<p>The <code v-pre>HttpResponse</code> utility class provides additional methods for handling HTTP responses.
It simplifies common tasks such as setting headers, status codes, and body content.</p>
<CodeTabs id="176" :data='[{"id":"JavaScript"},{"id":"TypeScript"}]' :active="0" tab-id="js">
<template #title0="{ value, isActive }">JavaScript</template>
<template #title1="{ value, isActive }">TypeScript</template>
<template #tab0="{ value, isActive }">
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// Available static methods</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">noContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">badRequest</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">forbidden</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">notFound</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">methodNotAllowed</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">serverError</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">unavailable</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check the HttpResponse on Github:</span></span>
<span class="line"><span class="token comment">// https://github.com/stonemjs/http-core/blob/main/src/HttpResponse.mjs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Available static methods</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">noContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">badRequest</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">unauthorized</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">forbidden</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">notFound</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">methodNotAllowed</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">serverError</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">unavailable</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line">HttpResponse<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Check the HttpResponse on Github:</span></span>
<span class="line"><span class="token comment">// https://github.com/stonemjs/http-core/blob/main/src/HttpResponse.mjs</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion"><span>Conclusion</span></a></h2>
<p>The <code v-pre>HTTP Core</code> Library offers essential tools for handling HTTP requests and responses within the <strong>Stone.js</strong> framework.
By leveraging these classes, you can build robust and efficient web applications that seamlessly integrate with platform-specific HTTP handling.</p>
<p>This documentation covers the basic usage and installation of the <code v-pre>HTTP Core</code> Library. For more advanced topics and contributions, please refer to the repository on <a href="https://github.com/stonemjs/http-core/blob/main/" target="_blank" rel="noopener noreferrer">Github</a>.</p>
</div></template>


