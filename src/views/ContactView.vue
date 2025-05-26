<template>
  <div class="min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Seção de Introdução -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-zinc-100 mb-4">Entre em Contato</h1>
        <p class="text-xl text-zinc-400">
          Se quiser entrar em contato, pode me mandar um e-mail ou acessar minhas redes sociais.
        </p>
      </div>

      <div class="grid md:grid-cols-1 gap-8">
        <!-- Formulário de Contato -->
        <div class="bg-zinc-900/80 p-6 rounded-lg border border-zinc-800">
          <h2 class="text-2xl font-semibold text-zinc-100 mb-6">Envie uma mensagem</h2>
          <p class="text-zinc-400 mb-6 text-sm">O formulário abaixo é apenas ilustrativo e não envia mensagens.</p>
          <form class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-zinc-300 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-600 focus:border-transparent text-zinc-100 placeholder-zinc-500"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-zinc-300 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-600 focus:border-transparent text-zinc-100 placeholder-zinc-500"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-zinc-300 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-600 focus:border-transparent text-zinc-100 placeholder-zinc-500"
                placeholder="Sua mensagem aqui..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-zinc-800 text-zinc-100 py-2 px-4 rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

// Usando Composition API
const handleSubmit = (event) => {
  event.preventDefault()
  // Formulário ilustrativo
  console.log('Formulário enviado (apenas ilustrativo)')
}
</script> 