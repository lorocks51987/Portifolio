<template>
  <div class="min-h-screen py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Projetos -->
      <div class="mt-16">
        <div class="mb-8">
          <TypingSVG class="mb-8" :text="$t('projects.title')" color="ffffff" :size="45" />
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Projeto 1 -->
          <a href="https://lorocks51987.github.io/Personagens_Rick_Morty/" target="_blank"
            class="block bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
            <div class="p-6">
              <img src="../assets/imgs/RM.png" alt="Rick and Morty" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-zinc-300">{{
                $t('projects.projects.rickMorty.title') }}</h3>
              <p class="text-zinc-400 text-sm mb-4">
                {{ $t('projects.projects.rickMorty.description') }}
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">Html</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">css</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">JavaScript</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">API</span>
              </div>
            </div>
          </a>

          <!-- Projeto 2 -->
          <a href="https://lorocks51987.github.io/Clima_tact/" target="_blank"
            class="block bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
            <div class="p-6">
              <img src="../assets/imgs/clima.png" alt="Clima" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-zinc-300">{{
                $t('projects.projects.climaTact.title') }}</h3>
              <p class="text-zinc-400 text-sm mb-4">
                {{ $t('projects.projects.climaTact.description') }}
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">HTML</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">CSS</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">JavaScript</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">API</span>
              </div>
            </div>
          </a>

          <!-- Projeto 3 -->
          <a href="https://unimapbootcamp.netlify.app/" target="_blank"
            class="block bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
            <div class="p-6">
              <img src="../assets/imgs/map.png" alt="Unimap" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-zinc-300">{{
                $t('projects.projects.unimap.title') }}</h3>
              <p class="text-zinc-400 text-sm mb-4">
                {{ $t('projects.projects.unimap.description') }}
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">HTML</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">CSS</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">JavaScript</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">API</span>
              </div>
            </div>
          </a>

          <!-- Projeto 4 -->
          <a href="https://lorocks51987.github.io/Contador/" target="_blank"
            class="block bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
            <div class="p-6">
              <img src="../assets/imgs/count.png" alt="Contador" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-zinc-300">{{
                $t('projects.projects.contador.title') }}</h3>
              <p class="text-zinc-400 text-sm mb-4">
                {{ $t('projects.projects.contador.description') }}
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">HTML</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">CSS</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">JavaScript</span>
              </div>
            </div>
          </a>

          <!-- Projeto 5 -->
          <a href="https://lorocks51987.github.io/Tailwind-Trabalho/" target="_blank"
            class="block bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
            <div class="p-6">
              <img src="../assets/imgs/FP.png" alt="Apresentação do Projeto"
                class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-zinc-300">{{
                $t('projects.projects.tailwind.title') }}</h3>
              <p class="text-zinc-400 text-sm mb-4">
                {{ $t('projects.projects.tailwind.description') }}
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">Html</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">Tailwindcss</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">JavaScript</span>
              </div>
            </div>
          </a>

          <!-- Projeto 6 -->
          <a href="https://lorocks51987.github.io/CalculadoraJS/" target="_blank"
            class="block bg-zinc-900/70 rounded-lg border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
            <div class="p-6">
              <img src="../assets/imgs/calc.png" alt="Calculadora" class="w-full h-40 object-cover rounded-lg mb-4">
              <h3 class="text-lg font-semibold text-zinc-100 mb-2 group-hover:text-zinc-300">{{
                $t('projects.projects.calculadora.title') }}</h3>
              <p class="text-zinc-400 text-sm mb-4">
                {{ $t('projects.projects.calculadora.description') }}
              </p>
              <div class="flex gap-2">
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">HTML</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">CSS</span>
                <span class="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400">JavaScript</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TypingSVG from '../components/TypingSVG.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
