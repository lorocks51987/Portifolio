<template>
    <div class="robot-container">
      <canvas id="canvas3d"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { Application } from '@splinetool/runtime'
  
  let app = null
  
  onMounted(async () => {
    try {
      const canvas = document.getElementById('canvas3d')
      app = new Application(canvas)
      const basePath = import.meta.env.BASE_URL || '/'
      // Adiciona timestamp para evitar cache
      const timestamp = new Date().getTime()
      await app.load(`${basePath}scene.splinecode?v=${timestamp}`)
    } catch (error) {
      console.error('Erro ao carregar o modelo 3D:', error)
    }
  })
  
  // Limpa a instância quando o componente é destruído
  onUnmounted(() => {
    if (app) {
      app.dispose()
      app = null
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
  }
  
  canvas {
    width: 100%;
    height: 100%;
    display: block;
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