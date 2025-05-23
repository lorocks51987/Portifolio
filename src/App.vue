<script setup>
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
import SplineRobot from './components/SplineRobot.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#0a0a0a]">
    <Navbar />
    <SplineRobot />

    <div class="main container mx-auto px-4 py-6 flex-grow">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>

    <Footer />
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

body {
  background-color: #0a0a0a;
  color: #fff;
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