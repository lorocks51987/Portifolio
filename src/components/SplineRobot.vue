<template>
    <div class="robot-container">
      <canvas id="canvas3d" width="400" height="400"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { Application } from '@splinetool/runtime'
  
  onMounted(() => {
    const canvas = document.getElementById('canvas3d')
    const app = new Application(canvas)
    app.load('/scene.splinecode')
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