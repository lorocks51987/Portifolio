<script setup>
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import SplineRobot from './components/SplineRobot.vue'
import Background3D from './components/Background3D.vue'
</script>

<template>
  <div class="app-container">
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
}

body {
  background: transparent;
  color: #fff;
  overflow-x: hidden;
}

/* Melhorias de legibilidade para textos */
h1, h2, h3, h4, h5, h6 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
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
</style>