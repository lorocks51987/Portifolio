<script setup>
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#0a0a0a]">
    <Navbar />
    <div class="main container mx-auto px-4 py-6 flex-grow">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style>
/* Estilização global da barra de rolagem */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #18181b; /* Cor de fundo da trilha - zinc-900 */
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #3f3f46; /* Cor do "polegar" - zinc-700 */
  border-radius: 5px;
  border: 2px solid #18181b; /* Borda com a cor do fundo */
}

::-webkit-scrollbar-thumb:hover {
  background: #52525b; /* Cor hover - zinc-600 */
}
</style>