<template>
  <div class="robot-container">
    <canvas id="canvas3d" ref="canvasRef"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const app = ref(null)
const isLoaded = ref(false)
const canvasRef = ref(null)
let resizeTimeout = null

const updateCanvasSize = (canvas) => {
  if (!canvas) return
  const scale = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = canvas.offsetWidth * scale
  canvas.height = canvas.offsetHeight * scale
}

const debouncedResize = (canvas) => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => updateCanvasSize(canvas), 250)
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  updateCanvasSize(canvas)

  const handleResize = () => debouncedResize(canvas)
  window.addEventListener('resize', handleResize)

  const loadRobot = async () => {
    if (isLoaded.value) return

    try {
      app.value = new Application(canvas, {
        events: {
          onLoad: () => {
            isLoaded.value = true
          }
        }
      })
      const basePath = import.meta.env.BASE_URL || '/'
      await app.value.load(`${basePath}scene.splinecode`)
    } catch (error) {
      console.error('Erro ao carregar o modelo 3D:', error)
    }
  }

  setTimeout(loadRobot, 1500)

  onUnmounted(() => {
    if (app.value) {
      app.value.dispose()
    }
    window.removeEventListener('resize', handleResize)
    clearTimeout(resizeTimeout)
  })
})
</script>

<style scoped>
.robot-container {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 300px;
  height: 300px;
  z-index: 1000;
  will-change: transform;
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
  will-change: transform;
}

@media (max-width: 480px) {
  .robot-container {
    width: 200px;
    height: 200px;
    top: 10px;
    left: 10px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .robot-container {
    width: 250px;
    height: 250px;
    top: 15px;
    left: 15px;
  }
}

@media (max-height: 500px) {
  .robot-container {
    width: 150px;
    height: 150px;
    top: 10px;
    left: 10px;
  }
}
</style>