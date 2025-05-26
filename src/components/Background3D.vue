<template>
  <div class="background-container">
    <canvas id="background3d"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const app = ref(null)
const isLoaded = ref(false)

onMounted(() => {
  const canvas = document.getElementById('background3d')
  
  // Ajusta o tamanho do canvas para a resolução da tela
  const updateCanvasSize = () => {
    const scale = Math.min(window.devicePixelRatio || 1, 2) // Limita a escala para melhor performance
    const width = window.innerWidth
    const height = window.innerHeight
    
    canvas.width = width * scale
    canvas.height = height * scale
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
  }

  // Inicializa o canvas com o tamanho correto
  updateCanvasSize()

  // Debounce para o evento de resize
  let resizeTimeout
  const debouncedResize = () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(updateCanvasSize, 250)
  }
  window.addEventListener('resize', debouncedResize)

  // Carrega o background apenas quando a página estiver pronta
  const loadBackground = () => {
    if (isLoaded.value) return
    
    app.value = new Application(canvas)
    app.value.load('https://prod.spline.design/dnUzpjAuLSccaqd0/scene.splinecode', {
      quality: window.innerWidth <= 768 ? 'low' : 'medium'
    })
    .then(() => {
      isLoaded.value = true
    })
    .catch(error => {
      console.error('Erro ao carregar o background:', error)
    })
  }

  // Carrega o background após um pequeno delay para priorizar o conteúdo principal
  setTimeout(loadBackground, 1000)
})

onUnmounted(() => {
  if (app.value) {
    app.value.dispose()
    window.removeEventListener('resize', debouncedResize)
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
  will-change: transform, opacity; /* Otimização de performance */
  opacity: 0; /* Começa invisível para a animação */
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
  background: transparent;
  transform-origin: center center;
  transition: transform 0.3s ease;
  will-change: transform, opacity; /* Otimização de performance */
}

/* Otimizações para dispositivos móveis */
@media (max-width: 768px) {
  canvas {
    transform: scale(0.75);
  }
}

@media (max-height: 500px) {
  canvas {
    transform: scale(0.6);
  }
}

/* Previne problemas de overflow em iOS */
@supports (-webkit-touch-callout: none) {
  .background-container {
    height: -webkit-fill-available;
  }
}
</style> 