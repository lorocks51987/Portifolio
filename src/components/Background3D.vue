<template>
  <div class="background-container" :class="{ 'is-loaded': isLoaded }">
    <div v-if="!isLoaded" class="loading-placeholder"></div>
    <canvas id="background3d" v-show="isLoaded"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, onBeforeMount } from 'vue'
import { Application } from '@splinetool/runtime'

const app = ref(null)
const isLoaded = ref(false)
const isVisible = ref(false)
let resizeTimeout
let loadTimeout
let observer

const isMobile = () => window.innerWidth <= 768

const getQuality = () => {
  if (isMobile()) return 'low'
  if (navigator.connection?.saveData) return 'low'
  if (navigator.connection?.effectiveType === '4g') return 'low'
  return 'low'
}

const updateCanvasSize = () => {
  const canvas = document.getElementById('background3d')
  if (!canvas) return

  const scale = Math.min(window.devicePixelRatio || 1, 1)
  const width = window.innerWidth
  const height = window.innerHeight
  
  canvas.width = width * scale
  canvas.height = height * scale
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
}

const debouncedResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(updateCanvasSize, 500)
}

const checkVisibility = () => {
  const rect = document.querySelector('.background-container')?.getBoundingClientRect()
  if (rect) {
    isVisible.value = rect.top < window.innerHeight && rect.bottom > 0
  }
}

const loadBackground = async () => {
  if (isLoaded.value || !isVisible.value) return
  
  const canvas = document.getElementById('background3d')
  if (!canvas) return

  try {
    app.value = new Application(canvas)
    await app.value.load('https://prod.spline.design/dnUzpjAuLSccaqd0/scene.splinecode')
    isLoaded.value = true
  } catch (error) {
    console.error('Erro ao carregar o background:', error)
  }
}

const observeVisibility = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting
      if (isVisible.value && !isLoaded.value) {
        loadBackground()
      }
    })
  }, { threshold: 0.1 })

  const container = document.querySelector('.background-container')
  if (container) {
    observer.observe(container)
  }
  return observer
}

onBeforeMount(() => {
  if (isMobile()) {
    isLoaded.value = true
  }
})

onMounted(() => {
  if (isMobile()) return

  updateCanvasSize()
  window.addEventListener('resize', debouncedResize)
  observer = observeVisibility()
  
  if (document.readyState === 'complete') {
    checkVisibility()
    if (isVisible.value) {
      loadTimeout = setTimeout(loadBackground, 2000)
    }
  } else {
    window.addEventListener('load', () => {
      checkVisibility()
      if (isVisible.value) {
        loadTimeout = setTimeout(loadBackground, 2000)
      }
    })
  }
})

onUnmounted(() => {
  if (app.value) {
    app.value.dispose()
  }
  window.removeEventListener('resize', debouncedResize)
  clearTimeout(resizeTimeout)
  clearTimeout(loadTimeout)
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: transparent;
  overflow: hidden;
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.8s ease;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.background-container.is-loaded {
  opacity: 1;
}

.loading-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  opacity: 0.8;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
  background: transparent;
  transform-origin: center center;
  transition: transform 0.3s ease;
  will-change: transform, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  image-rendering: optimizeSpeed;
  image-rendering: -moz-crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: optimize-contrast;
  image-rendering: pixelated;
}

@media (max-width: 768px) {
  canvas { transform: scale(0.75); }
}

@media (max-height: 500px) {
  canvas { transform: scale(0.6); }
}

@supports (-webkit-touch-callout: none) {
  .background-container { height: -webkit-fill-available; }
}
</style> 