<template>
  <section class="getting-started">
    <div class="container">
      <div class="intro">
        <h2>Get Started with Stone.js</h2>
        <p class="subtitle">From zero to cloud-native in under a minute. Stone.js was built for this.</p>
      </div>

      <div class="content">
        <div class="terminal-box">
          <div class="terminal-header">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <pre><code>
$ npm create stone@latest
✔ Choose project type: Fullstack
✔ Choose frontend: React
✔ Choose deployment: AWS Lambda
✔ Choose deployment: AWS Lambda
✔ Choose deployment: AWS Lambda

✨ Your project is ready.
▶ Run `npm run dev`
</code></pre>
        </div>

        <ul class="steps">
          <li>
            <h3>1. Scaffold in seconds</h3>
            <p>Use the CLI to spin up backend, frontend, or fullstack apps instantly.</p>
          </li>
          <li>
            <h3>2. Customize with Blueprint</h3>
            <p>Configure anything, imperatively or declaratively. Stone.js adapts to your style.</p>
          </li>
          <li>
            <h3>3. Deploy anywhere</h3>
            <p>From Node.js to Lambda to the browser. One artifact. Zero friction.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nothing needed here for now
</script>

<style scoped>
.getting-started {
  padding: 6rem 2rem;
  background: linear-gradient(to bottom right, #ffffff, #fdf9f5);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.intro {
  text-align: center;
  margin-bottom: 3rem;
}

.intro h2 {
  font-size: 3.5rem;
  color: #2c3e50;
  border: 0 none;
}

.subtitle {
  font-size: 1.25rem;
  color: #7f8c8d;
  max-width: 700px;
  margin: 1rem auto 0;
}

.content {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
}

.terminal-box {
  background: #1e1e1e;
  color: #f1f1f1;
  padding: 1.5rem;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Courier New', monospace;
  position: relative;
}

.terminal-header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.red { background: #e74c3c; }
.yellow { background: #f1c40f; }
.green { background: #2ecc71; }

.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 480px;
}

.steps li {
  margin-bottom: 2rem;
}

.steps h3 {
  font-size: 1.2rem;
  color: #d35400;
  margin-bottom: 0.5rem;
}

.steps p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
  .terminal-box, .steps {
    width: 100%;
    max-width: 100%;
  }
  .terminal-box {
    font-size: 0.85rem;
  }
}
</style>
