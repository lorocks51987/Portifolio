<template>
  <nav class="bg-zinc-900/50 backdrop-blur-sm border-b border-zinc-800 fixed w-full top-0 z-50">
    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-zinc-100 font-bold text-xl hover:text-zinc-300 transition-colors">
            Luiz Henrique
          </router-link>
        </div>

        <!-- Links de Navegação -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              class="nav-link relative text-zinc-300 hover:text-zinc-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              active-class="text-zinc-100 bg-zinc-800"
            >
              {{ link.text }}
            </router-link>
          </div>
        </div>

        <!-- Menu Mobile -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="text-zinc-300 hover:text-zinc-100 focus:outline-none transition-colors p-2 rounded-md"
            :aria-expanded="isOpen"
            aria-label="Menu principal"
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
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-show="isOpen" class="md:hidden w-full bg-zinc-900/95 backdrop-blur-sm">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            class="text-zinc-300 hover:text-zinc-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            active-class="text-zinc-100 bg-zinc-800"
            @click="closeMenu"
          >
            {{ link.text }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const links = [
  { to: '/', text: 'Início' },
  { to: '/sobre', text: 'Sobre' },
  { to: '/projetos', text: 'Projetos' },
  { to: '/contato', text: 'Contato' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.nav-link {
  position: relative;
  overflow: hidden;
}

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
.nav-link.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-link::after {
    display: none;
  }
}

/* Ajuste para telas muito pequenas */
@media (max-width: 360px) {
  .text-xl {
    font-size: 1rem;
  }
}
</style>
