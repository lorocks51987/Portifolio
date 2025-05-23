<template>
  <footer class="bg-zinc-900/80 border-t border-zinc-800 py-6">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        
        <!-- Logo e Descrição -->
        <div class="text-center md:text-left">
          <div class="text-zinc-100 font-bold text-lg mb-2">
            <span class="text-zinc-400">&lt;</span>LH<span class="text-zinc-400">/&gt;</span>
          </div>
          <p class="text-zinc-400 text-sm max-w-xs">
            Desenvolvedor Fullstack criando soluções inovadoras com código limpo e eficiente.
          </p>
        </div>

        <!-- Links Rápidos -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-zinc-100 font-semibold text-sm mb-2">Links Rápidos</h3>
          <nav class="flex flex-wrap justify-center gap-3">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-zinc-400 hover:text-zinc-100 text-sm transition-colors"
            >
              {{ item.name }}
            </router-link>
          </nav>
        </div>

        <!-- Redes Sociais -->
        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-zinc-100 font-semibold text-sm mb-2">Redes Sociais</h3>
          <div class="flex gap-3">
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-6 pt-6 border-t border-zinc-800 text-center">
        <p class="text-zinc-500 text-xs">
          © {{ new Date().getFullYear() }} Luiz Henrique. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Sobre', path: '/sobre' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Contato', path: '/contato' }
]
</script>

<style scoped>
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: rgba(63, 63, 70, 0.1);
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: rgba(63, 63, 70, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .social-link {
    padding: 0.4rem;
  }
  
  .gap-6 {
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .text-lg {
    font-size: 1.1rem;
  }
  
  .text-sm {
    font-size: 0.8rem;
  }
}
</style>
