<template>
  <div class="context-aware">
    <div class="context-aware-text">
      <div class="section-container">
        <h2 class="section-title">Build once. <br> Deploy everywhere.</h2>
        <p class="section-subtitle">
          Whether it’s Node.js, the browser, AWS Lambda, or the next platform that hasn’t been invented yet, 
          Stone.js lets you shape your app without locking it to a runtime.
        </p>
      </div>
    </div>
    <div class="continuum-hero-layer">
      <div v-for="(row, y) in rows" :key="y" class="continuum-row">
        <div
          v-for="(col, x) in cols"
          :key="x"
          class="continuum-col"
        >
          <div class="continuum-tile"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const rows = 6
const cols = ref(8) // Default value for SSR

onMounted(() => {
  cols.value = Math.floor(document.documentElement.clientWidth / 96)
})
</script>

<style scoped lang="scss">
.context-aware {
  padding-top: 3rem;
  padding-bottom: 3rem;
  position: relative;
    
  .context-aware-text {
    width: 100%;
    position: absolute;

    .section-container {
      padding-bottom: 0;
    }

    .section-title {
      margin-top: 0;
    }
  }

  .continuum-hero-layer {
    gap: 1rem;
    padding-top: 15rem;
    display: flex;
    position: relative;
    width: 100%;
    pointer-events: none;
    flex-direction: column;

    .continuum-row {
      gap: 1rem;
      display: flex;
      margin-left: 0;
      overflow: hidden;
      justify-content: center;

      &:nth-child(odd) {
        padding-left: 5%;
      }

      .continuum-col {
        display: flex;
        align-items: center;
        justify-content: center;

        .continuum-tile {
          width: 96px;
          height: 96px;
          display: flex;
          align-items: center;
          pointer-events: auto;
          border-radius: 12px;
          justify-content: center;
          backdrop-filter: blur(2px);
          transition: transform 1s ease;
          transform: scale(1) translateZ(0);
          background: linear-gradient(180deg, #fafafa, #fdf9f5);

          &:hover {
            transform: scale(.85) translateZ(0);
            transition: transform .2s ease-in-out;
          }

          .continuum-icon {
            color: #2c3e50;
            width: 24px;
            height: 24px;
            opacity: 0.9;
            transition: opacity 0.3s ease;
          }
        }
      }

      &:first-child .continuum-tile {
        background: linear-gradient(180deg, #fff, #f8f9fa);
      }
      &:nth-child(2) .continuum-tile {
        background: linear-gradient(180deg, #f8f9fa, #f4f6f8);
      }
      &:nth-child(3) .continuum-tile {
        background: linear-gradient(180deg, #f4f6f8, #fdf9f5);
      }
      &:nth-last-child(3) .continuum-tile {
        background: linear-gradient(360deg, #f4f6f8, #fdf9f5);
      }
      &:nth-last-child(2) .continuum-tile {
        background: linear-gradient(360deg, #f8f9fa, #f4f6f8);
      }
      &:last-child .continuum-tile {
        background: linear-gradient(360deg, #fff, #f8f9fa);
      }
    }
  }
}
</style>
