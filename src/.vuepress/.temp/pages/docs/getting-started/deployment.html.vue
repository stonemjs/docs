<template><div><p>Stone.js apps are built for freedom, deployable anywhere JavaScript runs: Node.js, the browser, serverless, edge networks, and even that smart toaster with a JS engine (well, almost). Thanks to its Continuum Architecture, Stone.js doesn’t care about your runtime, because everything is context. And deployment? It's just the final form of your app's intention.</p>
<blockquote>
<p><strong>Requirements:</strong><br>
You'll need Node.js <code v-pre>&gt;= 20</code>. That’s where the magic starts.</p>
</blockquote>
<h2 id="building-for-production" tabindex="-1"><a class="header-anchor" href="#building-for-production"><span>Building for Production</span></a></h2>
<p>Stone.js uses the latest JS features, some still too hot for regular engines. That’s why we bundle your app into a <strong>single deployable artifact</strong>, no <code v-pre>node_modules</code>, no clutter, just pure power.</p>
<p>Run:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>You’ll find your ready-to-deploy bundle in the <code v-pre>dist/</code> folder. This artifact can be thrown into any JS-capable environment like:</p>
<ul>
<li>Node.js servers</li>
<li>Serverless (AWS Lambda, Azure Functions…)</li>
<li>Edge platforms (Cloudflare Workers, Vercel Edge…)</li>
<li>Static file servers/CDNs (for frontend apps)</li>
<li>Docker containers</li>
<li>or wherever JavaScript dares to run.</li>
</ul>
<p>Wanna preview it?</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run preview</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>It spins up a local server to simulate your production bundle.</p>
<h2 id="deploying-static-frontend-apps-cdn-style" tabindex="-1"><a class="header-anchor" href="#deploying-static-frontend-apps-cdn-style"><span>Deploying Static Frontend Apps (CDN-style)</span></a></h2>
<p>Stone.js frontend apps can be deployed like any other SPA: bundle it, upload it, boom.</p>
<ol>
<li>Build your app:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>
<p>Upload the contents of <code v-pre>dist/</code> to your favorite static host:</p>
<ul>
<li>Vercel, Netlify, S3, GitHub Pages, Cloudflare Pages, pick your poison.</li>
</ul>
</li>
<li>
<p>Set your CDN or static server to serve <code v-pre>index.html</code> as the entry point.</p>
</li>
<li>
<p>Make sure assets (JS, CSS, images) in the root folder are served correctly.</p>
</li>
<li>
<p>For SPA-style routing, configure your server to redirect <strong>all paths</strong> to <code v-pre>index.html</code>.</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tip</p>
<p>You can even deploy the frontend on a CDN and the backend on Lambda, continuum, baby!</p>
</div>
<h2 id="serverless-deployment" tabindex="-1"><a class="header-anchor" href="#serverless-deployment"><span>Serverless Deployment</span></a></h2>
<p>Stone.js was made for the cloud-native era. That means it plays nicely with serverless platforms like AWS Lambda. You just need to connect the right adapter, build your artifact, and let the platform handle the scaling and infrastructure.</p>
<h3 id="aws-lambda" tabindex="-1"><a class="header-anchor" href="#aws-lambda"><span>AWS Lambda</span></a></h3>
<ol>
<li>Install the AWS Lambda adapter:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @stone-js/aws-lambda-http-adapter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Add an Adapter to your context:</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// app/Application.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AwsLambdaHttpAdapter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/aws-lambda-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">AwsLambdaHttpAdapter</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Build your system:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>Deploy the <code v-pre>dist/</code> folder to AWS Lambda.</li>
</ol>
<ul>
<li>Set your handler to <code v-pre>server.stone</code>.</li>
<li>Define environment variables if needed.</li>
<li>Use your usual deployment method (ZIP, AWS SAM, Serverless Framework, Terraform, etc.).</li>
</ul>
<p>Check the adapter’s documentation for advanced usage and configuration.</p>
<h2 id="node-js-server-deployment" tabindex="-1"><a class="header-anchor" href="#node-js-server-deployment"><span>Node.js Server Deployment</span></a></h2>
<p>Deploying on a classic Node.js server? You’re covered.</p>
<ol>
<li>Install the Node.js adapter:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @stone-js/node-http-adapter</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Configure your context:</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// app/Application.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StoneApp<span class="token punctuation">,</span> IncomingEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/core'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NodeHttpAdapter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@stone-js/node-http-adapter'</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">StoneApp</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NodeHttpAdapter</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handle</span><span class="token punctuation">(</span>event<span class="token operator">:</span> IncomingEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'Hello world!'</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Build the system:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>Run it:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> dist/server.mjs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="using-nginx-as-a-reverse-proxy" tabindex="-1"><a class="header-anchor" href="#using-nginx-as-a-reverse-proxy"><span>Using Nginx as a Reverse Proxy</span></a></h3>
<p>Stone.js apps often sit behind a reverse proxy like Nginx for handling TLS, load balancing, or just good old port 80.</p>
<p>Here’s a basic config example:</p>
<div class="language-nginx line-numbers-mode" data-highlighter="prismjs" data-ext="nginx"><pre v-pre><code><span class="line"><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token directive"><span class="token keyword">listen</span> [::]:80</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">server_name</span> &lt;YOUR_DOMAIN></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:&lt;STONE_PORT></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token string">'upgrade'</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token directive"><span class="token keyword">proxy_cache_bypass</span> <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Update <code v-pre>&lt;YOUR_DOMAIN&gt;</code> and <code v-pre>&lt;STONE_PORT&gt;</code> accordingly.</p>
<h3 id="using-pm2-for-process-management" tabindex="-1"><a class="header-anchor" href="#using-pm2-for-process-management"><span>Using PM2 for Process Management</span></a></h3>
<p>You can start your app with <code v-pre>node dist/server.mjs</code>, but in production, that’s like driving without a seatbelt. Use PM2 instead.</p>
<ol>
<li>Install PM2 (if you haven’t):</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pm2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>Create an ecosystem file:</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// ecosystem.config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">apps</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'stone-app'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">script</span><span class="token operator">:</span> <span class="token string">'./dist/server.mjs'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">instances</span><span class="token operator">:</span> <span class="token string">'max'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">exec_mode</span><span class="token operator">:</span> <span class="token string">'cluster'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">autorestart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">'production'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>Start your app:</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">pm2 start ecosystem.config.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>PM2 handles restarts, logs, and can scale your app across CPU cores.</p>
<h2 id="docker-deployment" tabindex="-1"><a class="header-anchor" href="#docker-deployment"><span>Docker Deployment</span></a></h2>
<p>Need to containerize your app? Stone.js builds down to a clean artifact, perfect for Dockerized environments.</p>
<p>Here’s a simple <code v-pre>Dockerfile</code>:</p>
<div class="language-Dockerfile line-numbers-mode" data-highlighter="prismjs" data-ext="Dockerfile"><pre v-pre><code><span class="line">FROM node:20</span>
<span class="line">WORKDIR /app</span>
<span class="line">COPY . .</span>
<span class="line">RUN npm install</span>
<span class="line">RUN npm run build</span>
<span class="line">EXPOSE 8080</span>
<span class="line">CMD [&quot;node&quot;, &quot;dist/server.mjs&quot;]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Build and run your container:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> stone-app <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 stone-app</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>You now have a deployable, containerized Stone.js app, no <code v-pre>node_modules</code>, no junk, just your logic.</p>
<h2 id="github-actions-ci-cd" tabindex="-1"><a class="header-anchor" href="#github-actions-ci-cd"><span>GitHub Actions (CI/CD)</span></a></h2>
<p>To automate your build and deployment, you can use <strong>GitHub Actions</strong>. Here's a basic workflow that builds your Stone.js system and can be extended for deployment to any platform.</p>
<h3 id="example-build-deploy-workflow" tabindex="-1"><a class="header-anchor" href="#example-build-deploy-workflow"><span>Example: Build &amp; Deploy Workflow</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code><span class="line"><span class="token comment"># .github/workflows/deploy.yml</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line"></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout code</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Set up Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">20</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build the app</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build</span>
<span class="line"></span>
<span class="line">      <span class="token comment"># Example: Deploy somewhere (you can replace this)</span></span>
<span class="line">      <span class="token comment"># - name: Deploy to S3 / Server / Lambda / etc.</span></span>
<span class="line">      <span class="token comment">#   run: your-deploy-command-here</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tips" tabindex="-1"><a class="header-anchor" href="#tips"><span>Tips</span></a></h3>
<ul>
<li>Add a <code v-pre>test</code> step if you have unit tests.</li>
<li>Add secrets (e.g., AWS credentials, SSH keys) via GitHub repository settings.</li>
<li>You can use any deployment method after the build step: upload to Lambda, push to a Docker registry, sync to S3, etc.</li>
</ul>
<h2 id="adapter-compatibility-table" tabindex="-1"><a class="header-anchor" href="#adapter-compatibility-table"><span>Adapter Compatibility Table</span></a></h2>
<p>Stone.js uses adapters to abstract the runtime environment, so you can build once and deploy anywhere. Here’s a quick overview of available adapters and where they shine:</p>
<table>
<thead>
<tr>
<th>Adapter</th>
<th>Use Case</th>
<th>Package</th>
<th>Target Platform Examples</th>
</tr>
</thead>
<tbody>
<tr>
<td>Browser Adapter</td>
<td>Client-side SPA</td>
<td><code v-pre>@stone-js/browser-adapter</code></td>
<td>Browser</td>
</tr>
<tr>
<td>Node.js HTTP Adapter</td>
<td>Traditional HTTP server</td>
<td><code v-pre>@stone-js/node-http-adapter</code></td>
<td>Node.js, Express-style servers</td>
</tr>
<tr>
<td>AWS Lambda Adapter</td>
<td>Serverless all purpose</td>
<td><code v-pre>@stone-js/aws-lambda-adapter</code></td>
<td>AWS Lambda, Serverless Framework</td>
</tr>
<tr>
<td>AWS Lambda HTTP Adapter</td>
<td>Serverless HTTP purpose</td>
<td><code v-pre>@stone-js/aws-lambda-http-adapter</code></td>
<td>AWS Lambda, Serverless Framework</td>
</tr>
<tr>
<td>Node.js CLI Adapter</td>
<td>CLI based App</td>
<td><code v-pre>@stone-js/node-cli-adapter</code></td>
<td>Node.js runtime</td>
</tr>
</tbody>
</table>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Don’t see your platform here? Don’t worry, Stone.js was designed to be adaptable. Write your own adapter or let us know what you need!</p>
</div>
</div></template>


