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
  </style>