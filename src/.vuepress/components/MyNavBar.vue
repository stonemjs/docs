<template>
  <div class="app-navbar">
    <div class="app-container">
      <HopeNavBar @toggleSidebar="toggleSidebar" />
    </div>
  </div>
</template>

<script setup lang="js">
import HopeNavBar from "vuepress-theme-hope/modules/navbar/components/Navbar.js";

const emit = defineEmits(['toggleSidebar'])

function toggleSidebar () {
  emit('toggleSidebar')
}
</script>