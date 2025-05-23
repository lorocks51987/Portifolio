<script setup>
import { onMounted } from 'vue'
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import SplineRobot from './components/SplineRobot.vue'
import Background3D from './components/Background3D.vue'

// VLibras Script
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js'
  script.onload = () => {
    new window.VLibras.Widget()
  }
  document.head.appendChild(script)
})
</script>

<template>
  <div class="app-container">
    <!-- VLibras Widget -->
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>

    <Background3D />
    <div class="content-wrapper">
      <Navbar />
      <SplineRobot />

      <div class="main container mx-auto px-4 py-6 flex-grow">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>

      <Footer />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

.app-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background: transparent;
}

.content-wrapper {
  position: relative;
  z-index: 1;
  padding: 1rem;
}

body {
  background: transparent;
  color: #fff;
  overflow-x: hidden;
}

/* Melhorias de legibilidade para textos */
h1, h2, h3, h4, h5, h6 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  color: #ffffff !important;
}

p, span, a, li {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}

/* Adiciona um fundo semi-transparente aos textos sem caixa */
.text-content {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Ajusta a opacidade dos textos para melhor contraste */
.text-zinc-300 {
  color: #e4e4e7 !important;
  opacity: 1;
}

.text-zinc-400 {
  color: #d4d4d8 !important;
  opacity: 1;
}

.text-zinc-500 {
  color: #a1a1aa !important;
  opacity: 1;
}

/* Estilização global da barra de rolagem */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #18181b;
  /* Cor de fundo da trilha - zinc-900 */
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #3f3f46;
  /* Cor do "polegar" - zinc-700 */
  border-radius: 5px;
  border: 2px solid #18181b;
  /* Borda com a cor do fundo */
}

::-webkit-scrollbar-thumb:hover {
  background: #52525b;
  /* Cor hover - zinc-600 */
}

/* Animações */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-on-scroll {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-delay-1 {
  animation-delay: 0.2s;
}

.animate-delay-2 {
  animation-delay: 0.4s;
}

.animate-delay-3 {
  animation-delay: 0.6s;
}

/* Transições de página */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Estilização do VLibras */
div[vw].enabled {
  position: fixed !important;
  z-index: 9999 !important;
}

div[vw] .access-button {
  background: rgba(24, 24, 27, 0.9) !important;
  border: 2px solid rgb(63, 63, 70) !important;
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
}

div[vw] .access-button:hover {
  background: rgba(39, 39, 42, 0.9) !important;
  border-color: rgb(82, 82, 91) !important;
  transform: translateY(-2px) !important;
}

div[vw] .access-button .icon {
  fill: #d4d4d8 !important;
}

div[vw] .access-button:hover .icon {
  fill: #e4e4e7 !important;
}

/* Ajuste do wrapper do plugin */
div[vw] .vw-plugin-wrapper {
  backdrop-filter: blur(8px) !important;
  background: rgba(24, 24, 27, 0.8) !important;
  border: 1px solid rgb(63, 63, 70) !important;
  border-radius: 12px !important;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

/* Responsividade */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 0.5rem;
  }

  .main {
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.75rem !important;
  }

  h2 {
    font-size: 1.5rem !important;
  }

  h3 {
    font-size: 1.25rem !important;
  }

  .text-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem !important;
  }

  h2 {
    font-size: 1.25rem !important;
  }

  h3 {
    font-size: 1.1rem !important;
  }

  .text-content {
    padding: 0.75rem;
  }
}

/* Ajuste do VLibras para mobile */
@media (max-width: 768px) {
  div[vw].enabled {
    transform: scale(0.8);
    transform-origin: bottom right;
  }
}
</style>