<template>
  <div class="min-h-screen py-12 flex items-center justify-center">
    <div class="max-w-6xl mx-auto px-4 w-full">
      <!-- Hero Section -->
      <section class="mb-24">
        <div class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <!-- Texto e Botões -->
          <div class="flex-1 text-center md:text-left">
            <!-- Efeito de Digitação -->
            <div class="mb-6">
              <TypingSVG class="mb-4" :text="$t('home.greeting')" color="ffffff" :size="45" />
            </div>

            <p class="text-xl text-zinc-300 mt-8 mb-8 leading-relaxed text-content font-light">
              {{ $t('home.description') }}
            </p>
          </div>

          <!-- Foto de perfil -->
          <div class="flex-shrink-0 mb-8 md:mb-0 md:ml-auto">
            <div class="profile-image-container relative w-64 h-64">
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur-xl animate-pulse">
              </div>
              <img :src="profileImage" alt="Luiz Henrique"
                class="profile-image w-64 h-64 rounded-full object-cover border-4 border-zinc-800 shadow-2xl relative z-10" />
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Skills/Experience -->
      <section class="grid md:grid-cols-2 gap-8 mt-24">
        <div
          class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-8 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300">
          <h2
            class="text-2xl font-semibold text-zinc-100 mb-6 text-center mb-12 bg-gradient-to-r from-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            {{ $t('home.skills.title') }}</h2>
          <div class="flex flex-wrap gap-6 justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" title="HTML"
              alt="HTML" class="w-10 h-10 text-zinc-300 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" title="CSS"
              alt="CSS" class="w-10 h-10 text-zinc-300 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              title="JavaScript" alt="JavaScript"
              class="w-10 h-10 text-zinc-300 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" title="PHP"
              alt="PHP" class="w-10 h-10 text-zinc-300 hover:scale-110 transition-transform duration-300" />
          </div>
          <div class="flex flex-wrap gap-6 justify-center mt-10">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" title="Vue.js"
              alt="Vue.js" class="w-10 h-10 text-zinc-300 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              title="Tailwind CSS" alt="Tailwind CSS"
              class="w-10 h-10 text-zinc-300 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" title="MySQL"
              alt="MySQL" class="w-10 h-10 text-zinc-300 hover:scale-110 transition-transform duration-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
              title="Oracle" alt="Oracle"
              class="w-10 h-10 text-zinc-300 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] p-6 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300 font-mono">
          <!-- Editor Header -->
          <div class="flex items-center justify-between mb-4 border-b border-zinc-700/50 pb-2">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
              <div class="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
            </div>
            <span class="text-zinc-400 text-sm font-medium">{{ $t('home.highlights.title') }}.js</span>
          </div>

          <!-- Code Content -->
          <div class="relative">
            <!-- Line Numbers -->
            <div class="absolute left-0 top-0 bottom-0 w-12 flex flex-col text-zinc-500 text-sm select-none">
              <span class="px-2">1</span>
              <span class="px-2">2</span>
              <span class="px-2">3</span>
              <span class="px-2">4</span>
              <span class="px-2">5</span>
              <span class="px-2">6</span>
              <span class="px-2">7</span>
              <span class="px-2">8</span>
            </div>

            <!-- Code -->
            <div class="pl-12 text-sm">
              <div class="text-blue-400">const <span class="text-purple-400">{{
                $t('home.highlights.title').toLowerCase() }}</span> = {</div>
              <div class="pl-4 text-zinc-300">
                <span class="text-purple-400">{{ $t('home.highlights.role') }}</span>: <span class="text-green-400">"{{
                  $t('home.highlights.activitiesList.0') }}"</span>,
              </div>
              <div class="pl-4 text-zinc-300">
                <span class="text-purple-400">{{ $t('home.highlights.company') }}</span>: <span
                  class="text-green-400">"UNIMAR"</span>,
              </div>
              <div class="pl-4 text-zinc-300">
                <span class="text-purple-400">{{ $t('home.highlights.activities') }}</span>: [
              </div>
              <div class="pl-8 text-green-400">
                "{{ $t('home.highlights.activitiesList.0') }}",
              </div>
              <div class="pl-8 text-green-400">
                "{{ $t('home.highlights.activitiesList.1') }}"
              </div>
              <div class="pl-4">]</div>
              <div>};</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import profileImage from '../assets/perfil.png'
import TypingSVG from '../components/TypingSVG.vue'
import { onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'

onMounted(() => {
  // Seleciona o contêiner da foto onde o Vanilla Tilt será aplicado
  const element = document.querySelector('.profile-image-container')
  if (element) {
    VanillaTilt.init(element, {
      max: 15, // Ângulo máximo de inclinação
      speed: 400, // Velocidade da transição
      glare: true, // Habilita o efeito de brilho
      'max-glare': 0.3, // Intensidade máxima do brilho
      // scale: 1.05 // Removido ou ajustado se aplicado ao container
    })
  }
})
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}

/* Estilização da barra de rolagem */
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

.profile-image-container {
  perspective: 1000px;
  transform-style: preserve-3d;
  border-radius: 50%;
  overflow: hidden;
}

.profile-image {
  transform-style: preserve-3d;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.profile-image:hover {
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  transform: scale(1.02);
  border-radius: 50%;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.4;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes gradient-xy {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-xy {
  animation: gradient-xy 15s ease infinite;
  background-size: 400% 400%;
}
</style>
