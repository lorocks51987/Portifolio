<template>
  <nav class="bg-zinc-900/50 backdrop-blur-sm border-b border-zinc-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-zinc-100 font-bold text-xl">
            Luiz Henrique
          </router-link>
        </div>

        <!-- Links de Navegação -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              to="/"
              class="text-zinc-300 hover:text-zinc-100 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-zinc-100 bg-zinc-800"
            >
              Início
            </router-link>
            <router-link
              to="/sobre"
              class="text-zinc-300 hover:text-zinc-100 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-zinc-100 bg-zinc-800"
            >
              Sobre
            </router-link>
            <router-link
              to="/projetos"
              class="text-zinc-300 hover:text-zinc-100 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-zinc-100 bg-zinc-800"
            >
              Projetos
            </router-link>
            <router-link
              to="/contato"
              class="text-zinc-300 hover:text-zinc-100 px-3 py-2 rounded-md text-sm font-medium"
              active-class="text-zinc-100 bg-zinc-800"
            >
              Contato
            </router-link>
          </div>
        </div>

        <!-- Menu Mobile -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="text-zinc-300 hover:text-zinc-100 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile Expandido -->
    <div v-show="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link
          to="/"
          class="text-zinc-300 hover:text-zinc-100 block px-3 py-2 rounded-md text-base font-medium"
          active-class="text-zinc-100 bg-zinc-800"
          @click="isOpen = false"
        >
          Início
        </router-link>
        <router-link
          to="/sobre"
          class="text-zinc-300 hover:text-zinc-100 block px-3 py-2 rounded-md text-base font-medium"
          active-class="text-zinc-100 bg-zinc-800"
          @click="isOpen = false"
        >
          Sobre
        </router-link>
        <router-link
          to="/projetos"
          class="text-zinc-300 hover:text-zinc-100 block px-3 py-2 rounded-md text-base font-medium"
          active-class="text-zinc-100 bg-zinc-800"
          @click="isOpen = false"
        >
          Projetos
        </router-link>
        <router-link
          to="/contato"
          class="text-zinc-300 hover:text-zinc-100 block px-3 py-2 rounded-md text-base font-medium"
          active-class="text-zinc-100 bg-zinc-800"
          @click="isOpen = false"
        >
          Contato
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #3f3f46 0%, #52525b 100%);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
</style> 