<template>
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-left">
        <img
          class="moai-logo"
          src="/assets/image/moai_img_5.png"
          alt="Stone.js Moai Logo"
        />
      </div>

      <div class="hero-right">
        <h1 class="hero-title">Stone.js</h1>
        <p class="hero-subtitle">
          One framework. Every dimension.<br />
          Build for the browser, the cloud, or the unknown.
        </p>

        <div class="hero-buttons">
          <a href="/docs" class="btn primary">Get Started</a>
          <a href="/continuum" class="btn secondary">Learn the Continuum</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
a:hover {
  text-decoration: none;
}

.hero-section {
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.hero-inner {
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.hero-left {
  flex: 1 1 200px;
  display: flex;
  justify-content: center;
}

.moai-logo {
  max-width: 280px;
  width: 100%;
  height: auto;
}

.hero-right {
  flex: 1 1 400px;
  text-align: left;
  padding: 1rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #d35400;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-weight: 500;
  line-height: 1.3;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  color: var(--vp-c-text-mute);
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;
}

.btn.primary {
  background: rgb(229.5, 91.36492891, 0);
  color: #fff;
}

.btn.secondary {
  background: transparent;
  border: 2px solid #d35400;
  color: #d35400;
}

.btn.primary:hover {
  background: #e67e22;
}

.btn.secondary:hover {
  background: #d3540011;
}
@media (max-width: 768px) {
  .hero-right {
    text-align: center;
    padding: 1rem 0;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-buttons {
    justify-content: center;
  }
}
</style>
