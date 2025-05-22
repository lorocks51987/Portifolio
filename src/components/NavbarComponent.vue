<template>
  <nav class="bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Nome -->
        <router-link to="/" class="text-zinc-100 font-bold text-xl hover:text-zinc-300 transition-colors">
          <span class="text-zinc-400">&lt;</span>LH<span class="text-zinc-400">/&gt;</span>
        </router-link>

        <!-- Links de Navegação -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="(item, index) in navItems" 
            :key="index"
            :to="item.path"
            class="nav-link relative text-zinc-400 hover:text-zinc-100 transition-colors py-2"
            :class="{ 'active': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Menu Mobile -->
        <div class="md:hidden">
          <button 
            @click="isOpen = !isOpen"
            class="text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              :class="{ 'hidden': isOpen }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-6 w-6" 
              :class="{ 'hidden': !isOpen }"
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile Dropdown -->
    <div 
      v-show="isOpen" 
      class="md:hidden border-t border-zinc-800"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.path"
          class="block px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md transition-all"
          :class="{ 'bg-zinc-800/50 text-zinc-100': $route.path === item.path }"
          @click="isOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Projetos', path: '/projects' },
  { name: 'Contato', path: '/contato' }
]
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

/* Animação do menu mobile */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.md:hidden > div {
  animation: slideDown 0.2s ease-out;
}
</style> 