<template>
  <div class="min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Seção de Introdução -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-zinc-100 mb-4">{{ $t('contact.title') }}</h1>
        <p class="text-xl text-zinc-400">
          {{ $t('contact.description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-1 gap-8">
        <!-- Formulário de Contato -->
        <div class="bg-zinc-900/80 p-6 rounded-lg border border-zinc-800">
          <h2 class="text-2xl font-semibold text-zinc-100 mb-6">{{ $t('contact.form.title') }}</h2>
          <p class="text-zinc-400 mb-6 text-sm">{{ $t('contact.form.description') }}</p>
          <form class="space-y-4" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="block text-sm font-medium text-zinc-300 mb-1">
                {{ $t('contact.form.name') }}
              </label>
              <input type="text" id="name" name="name" v-model="formData.name"
                class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-600 focus:border-transparent text-zinc-100 placeholder-zinc-500"
                :placeholder="$t('contact.form.namePlaceholder')" required />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-zinc-300 mb-1">
                {{ $t('contact.form.email') }}
              </label>
              <input type="email" id="email" name="email" v-model="formData.email"
                class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-600 focus:border-transparent text-zinc-100 placeholder-zinc-500"
                :placeholder="$t('contact.form.emailPlaceholder')" required />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-zinc-300 mb-1">
                {{ $t('contact.form.message') }}
              </label>
              <textarea id="message" name="message" rows="4" v-model="formData.message"
                class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-600 focus:border-transparent text-zinc-100 placeholder-zinc-500"
                :placeholder="$t('contact.form.messagePlaceholder')" required></textarea>
            </div>

            <button type="submit"
              class="w-full bg-zinc-800 text-zinc-100 py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700">
              {{ $t('contact.form.submit') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted, ref } from 'vue'

const { t } = useI18n()

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = (event) => {
  event.preventDefault()
  // Formulário ilustrativo
  console.log('Formulário enviado:', formData.value)
  // Limpar o formulário após o envio
  formData.value = {
    name: '',
    email: '',
    message: ''
  }
}

onMounted(() => {
  // Garante que o componente seja carregado corretamente
  console.log('ContactView mounted')
  // Verifica se as traduções estão disponíveis
  console.log('Contact title:', t('contact.title'))
})
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
  padding-top: 4rem;
  /* Espaço para a navbar */
}

/* Adiciona animação de fade-in */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.min-h-screen {
  animation: fadeIn 0.5s ease-out;
}
</style>