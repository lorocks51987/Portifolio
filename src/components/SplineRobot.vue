<template>
    <div class="robot-container">
      <canvas id="canvas3d"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { Application } from '@splinetool/runtime'
  
  onMounted(async () => {
    try {
      const canvas = document.getElementById('canvas3d')
      const app = new Application(canvas)
      const basePath = import.meta.env.BASE_URL || '/'
      console.log('Tentando carregar:', `${basePath}scene.splinecode`)
      await app.load(`${basePath}scene.splinecode`)
    } catch (error) {
      console.error('Erro ao carregar o modelo 3D:', error)
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