<template>
  <section class="join-community">
    <div class="container">
      <div class="text-content">
        <h2>Join the Stone.js Community</h2>
        <p>
          Stone.js is more than a framework. It's a movement built around clean architecture, cloud-native principles, and a radically simplified developer experience.
        </p>
        <p>
          Whether you're building apps, libraries, plugins, or frameworks on top of Stone.js, you're not alone. Meet developers, ask questions, share ideas, and shape the future.
        </p>
        <div class="cta-buttons">
          <a href="https://github.com/stonemjs/" target="_blank" rel="noopener" class="btn primary">GitHub</a>
          <a href="https://discord.gg/stonejs" target="_blank" rel="noopener" class="btn outline">Join Discord</a>
        </div>
      </div>

      <div class="visual-content" aria-hidden="true">
        <img src="/assets/image/moai_community.png" alt="Stone.js community graphic" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.join-community {
  background: #f9f9f9;
  padding: 6rem 2rem;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
}

.text-content {
  flex: 1 1 400px;
}

.visual-content {
  display: flex;
  flex: 1 1 400px;
  align-items: center;
  justify-content: center;
}

.visual-content img {
  height: auto;
  max-width: 100%;
  // filter: drop-shadow(-4px -4px 10px rgba(0, 0, 0, 0.3));
}

h2 {
  font-size: 3.5rem;
  color: #2c3e50;
  border: 0 none;
  margin-bottom: 1rem;
}

p {
  font-size: 1.125rem;
  color: #7f8c8d;
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
}

.btn.primary {
  background-color: #d35400;
  color: #fff;
}

.btn.primary:hover {
  background-color: #c0392b;
}

.btn.outline {
  border: 2px solid #d35400;
  color: #d35400;
}

.btn.outline:hover {
  background-color: #fbeee0;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .visual-content {
    order: -1;
  }

  .cta-buttons {
    justify-content: center;
  }
}
</style>
