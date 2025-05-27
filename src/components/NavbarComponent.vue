<template>
  <nav class="navbar">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo ou Nome -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-xl font-bold text-white">
            LH
          </router-link>
        </div>

        <!-- Links de Navegação -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
          <router-link to="/about" class="nav-link">{{ $t('nav.about') }}</router-link>
          <router-link to="/projects" class="nav-link">{{ $t('nav.projects') }}</router-link>
          <router-link to="/contact" class="nav-link">{{ $t('nav.contact') }}</router-link>
          <ClimateComponent />
          <LanguageButton />
        </div>

        <!-- Menu Mobile -->
        <div class="md:hidden">
          <button @click="isMenuOpen = !isMenuOpen" class="mobile-menu-button">
            <span class="sr-only">Abrir menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu Mobile Expandido -->
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link to="/" class="mobile-nav-link" @click="isMenuOpen = false">{{ $t('nav.home') }}</router-link>
          <router-link to="/about" class="mobile-nav-link" @click="isMenuOpen = false">{{ $t('nav.about')
          }}</router-link>
          <router-link to="/projects" class="mobile-nav-link" @click="isMenuOpen = false">{{ $t('nav.projects')
          }}</router-link>
          <router-link to="/contact" class="mobile-nav-link" @click="isMenuOpen = false">{{ $t('nav.contact')
          }}</router-link>
          <div class="px-2 py-2 flex items-center space-x-4">
            <ClimateComponent />
            <LanguageButton />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import LanguageButton from './LanguageButton.vue'
import ClimateComponent from './ClimateComponent.vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(24, 24, 27, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(63, 63, 70, 0.5);
}

.nav-link {
  color: #e4e4e7;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
}

.mobile-menu-button {
  color: #e4e4e7;
  padding: 0.5rem;
}

.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: #e4e4e7;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: rgba(39, 39, 42, 0.9);
  color: #ffffff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
