<template>
  <div class="background-container">
    <div v-if="!isLoaded" class="loading-placeholder"></div>
    <canvas id="background3d" ref="canvasRef" :class="{ 'fade-in': isLoaded }"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const canvasRef = ref(null)
const app = ref(null)
const isLoaded = ref(false)
let resizeTimeout

const updateCanvasSize = () => {
  if (!canvasRef.value) return

  const scale = Math.min(window.devicePixelRatio || 1, 2)
  const width = window.innerWidth
  const height = window.innerHeight

  canvasRef.value.width = width * scale
  canvasRef.value.height = height * scale
  canvasRef.value.style.width = width + 'px'
  canvasRef.value.style.height = height + 'px'
}

const debouncedResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(updateCanvasSize, 250)
}

const loadBackground = async () => {
  if (isLoaded.value || !canvasRef.value) return

  try {
    app.value = new Application(canvasRef.value, {
      renderer: {
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true
      },
      camera: {
        fov: 30,
        position: [0, 0, 25],
        target: [0, 0, 0]
      }
    })

    await new Promise(resolve => setTimeout(resolve, 500))
    await app.value.load('https://prod.spline.design/dnUzpjAuLSccaqd0/scene.splinecode')
    
    await new Promise(resolve => setTimeout(resolve, 300))
    isLoaded.value = true
  } catch (error) {
    console.error('Erro ao carregar o background:', error)
    isLoaded.value = true
  }
}

onMounted(() => {
  updateCanvasSize()
  window.addEventListener('resize', debouncedResize)
  loadBackground()
})

onUnmounted(() => {
  if (app.value) {
    app.value.dispose()
  }
  window.removeEventListener('resize', debouncedResize)
  clearTimeout(resizeTimeout)
})
</script>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  will-change: transform;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  pointer-events: all;
  touch-action: none;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

canvas.fade-in {
  opacity: 1;
}

.loading-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 1;
  transition: opacity 1s ease-in-out;
}

.loading-placeholder.fade-out {
  opacity: 0;
}

/* Garante que o canvas fique por baixo mas ainda interativo */
:deep(.content-wrapper) {
  pointer-events: none;
}

:deep(.content-wrapper > *) {
  pointer-events: auto;
}
</style>