<template>
  <div class="min-h-full py-12">
    <!-- Hero Section -->
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-20">
        <!-- Foto de perfil -->
        <div class="mb-8">
          <img :src="profileImage" alt="Luiz Henrique"
            class="w-48 h-48 rounded-full mx-auto border-4 border-zinc-800 shadow-zinc-900/20 shadow-lg object-cover" />
        </div>

        <h1 class="text-4xl font-bold text-zinc-100 mb-6 ">
          Olá, eu sou <span class="text-zinc-400">Luiz Henrique</span>
        </h1>
        <p class="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed text-content">
          Estagiário em desenvolvimento de software, apaixonado por tecnologia, programação e fotografia.
          Estou sempre buscando aprender coisas novas e crescer na área.
        </p>
      </div>

      <!-- Featured Skills/Experience -->
      <div class="grid md:grid-cols-2 gap-8 mt-16">
        <div class="bg-zinc-900/80 p-8 rounded-lg border border-zinc-800">
          <h2 class="text-xl font-semibold text-zinc-100 mb-6 text-center mb-12">Principais Habilidades</h2>
          <div class="flex flex-wrap gap-6 justify-center">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" title="HTML"
              alt="HTML" class="w-8 h-8 text-zinc-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" title="CSS"
              alt="CSS" class="w-8 h-8 text-zinc-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              title="JavaScript" alt="JavaScript" class="w-8 h-8 text-zinc-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" title="PHP"
              alt="PHP" class="w-8 h-8 text-zinc-300" />
            </div>
            <div class="flex flex-wrap gap-6 justify-center mt-10" >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" title="Vue.js"
              alt="Vue.js" class="w-8 h-8 text-zinc-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              title="Tailwind CSS" alt="Tailwind CSS" class="w-8 h-8 text-zinc-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" title="MySQL"
              alt="MySQL" class="w-8 h-8 text-zinc-300" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" title="Oracle"
              alt="Oracle" class="w-8 h-8 text-zinc-300" />
          </div>
        </div>

        <div class="bg-[#1e1e1e] p-4 rounded-lg border border-zinc-800 font-mono">
          <!-- Editor Header -->
          <div class="flex items-center justify-between mb-4 border-b border-zinc-800 pb-2">
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span class="text-zinc-500 text-sm">destaques.js</span>
          </div>

          <!-- Code Content -->
          <div class="relative">
            <!-- Line Numbers -->
            <div class="absolute left-0 top-0 bottom-0 w-12 flex flex-col text-zinc-600 text-sm select-none">
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
              <div class="text-blue-400">const <span class="text-purple-400">destaques</span> = {</div>
              <div class="pl-4 text-zinc-300">
                <span class="text-purple-400">cargo</span>: <span class="text-green-400">"Estagiário em
                  Desenvolvimento"</span>,
              </div>
              <div class="pl-4 text-zinc-300">
                <span class="text-purple-400">empresa</span>: <span class="text-green-400">"UNIMAR"</span>,
              </div>
              <div class="pl-4 text-zinc-300">
                <span class="text-purple-400">atividades</span>: [
              </div>
              <div class="pl-8 text-green-400">
                "Co-host do podcast CodeCast",
              </div>
              <div class="pl-8 text-green-400">
                "Estudante de ADS - UNIMAR"
              </div>
              <div class="pl-4">]</div>
              <div>};</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import profileImage from '../assets/perfil.png'
</script>

<style scoped>
.min-h-full {
  min-height: 100%;
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
</style>
