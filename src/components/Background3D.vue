<template>
  <div class="background-container">
    <canvas id="background3d" width="1920" height="1080"></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Application } from '@splinetool/runtime'

onMounted(() => {
  const canvas = document.getElementById('background3d')
  const app = new Application(canvas)
  app.load('/Portifolio/scene.splinecode')
})
</script>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: transparent;
  overflow: hidden;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
  background: transparent;
  transform: scale(1); 
  transform-origin: center center;
}
</style> 