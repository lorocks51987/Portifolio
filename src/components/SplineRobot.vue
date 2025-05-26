<template>
    <div class="robot-container">
      <canvas id="canvas3d"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import { Application } from '@splinetool/runtime'
  
  const app = ref(null)
  const isLoaded = ref(false)
  
  onMounted(() => {
    const canvas = document.getElementById('canvas3d')
    
    // Ajusta o tamanho do canvas para a resolução da tela
    const updateCanvasSize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2) // Limita a escala para melhor performance
      canvas.width = canvas.offsetWidth * scale
      canvas.height = canvas.offsetHeight * scale
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

    // Carrega o modelo apenas quando a página estiver pronta
    const loadRobot = () => {
      if (isLoaded.value) return
      
      app.value = new Application(canvas)
      const basePath = import.meta.env.BASE_URL || '/'
      app.value.load(`${basePath}scene.splinecode`, {
        quality: window.innerWidth <= 768 ? 'low' : 'medium'
      })
      .then(() => {
        isLoaded.value = true
      })
      .catch(error => {
        console.error('Erro ao carregar o modelo 3D:', error)
      })
    }

    // Carrega o modelo após um pequeno delay para priorizar o conteúdo principal
    setTimeout(loadRobot, 1500)
  })
  
  // Limpa a instância quando o componente é destruído
  onUnmounted(() => {
    if (app.value) {
      app.value.dispose()
      window.removeEventListener('resize', debouncedResize)
    }
  })
  </script>
  
  <style scoped>
  .robot-container {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 350px;
    height: 350px;
    z-index: 1000;
    will-change: transform; /* Otimização de performance */
  }
  
  canvas {
    width: 100%;
    height: 100%;
    display: block;
    will-change: transform; /* Otimização de performance */
  }

  /* Dispositivos muito pequenos (smartphones em modo retrato) */
  @media (max-width: 480px) {
    .robot-container {
      width: 200px;
      height: 200px;
      top: 10px;
      left: 10px;
    }
  }

  /* Tablets e smartphones em modo paisagem */
  @media (min-width: 481px) and (max-width: 768px) {
    .robot-container {
      width: 250px;
      height: 250px;
      top: 15px;
      left: 15px;
    }
  }

  /* Dispositivos em modo paisagem com altura pequena */
  @media (max-height: 500px) {
    .robot-container {
      width: 150px;
      height: 150px;
      top: 10px;
      left: 10px;
    }
  }
  </style>