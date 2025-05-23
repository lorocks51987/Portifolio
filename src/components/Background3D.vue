<template>
  <div class="background-container">
    <canvas id="background3d"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Application } from '@splinetool/runtime'

const app = ref(null)

onMounted(() => {
  const canvas = document.getElementById('background3d')
  
  // Ajusta o tamanho do canvas para a resolução da tela
  const updateCanvasSize = () => {
    const scale = window.devicePixelRatio || 1
    const width = window.innerWidth
    const height = window.innerHeight
    
    canvas.width = width * scale
    canvas.height = height * scale
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
  }

  // Inicializa o canvas com o tamanho correto
  updateCanvasSize()

  // Atualiza o tamanho quando a janela é redimensionada
  window.addEventListener('resize', updateCanvasSize)

  // Inicializa a aplicação Spline
  app.value = new Application(canvas)
  app.value.load('https://prod.spline.design/dnUzpjAuLSccaqd0/scene.splinecode')
    .catch(error => {
      console.error('Erro ao carregar o background:', error)
    })

  // Reduz a qualidade em dispositivos móveis para melhor performance
  if (window.innerWidth <= 768) {
    canvas.style.transform = 'scale(0.75)'
  }
})

onUnmounted(() => {
  if (app.value) {
    app.value.dispose()
    window.removeEventListener('resize', updateCanvasSize)
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
}

canvas {
  width: 100%;
  height: 100%;
  display: block;
  background: transparent;
  transform-origin: center center;
  transition: transform 0.3s ease;
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