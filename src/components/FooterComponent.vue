<template>
  <footer class="bg-zinc-900/80 border-t border-zinc-800 py-2 w-full z-40">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-2">

        <!-- Logo e Descrição -->
        <div class="text-center md:text-left">
          <div class="text-zinc-100 font-bold text-lg mb-1">
            <span class="text-zinc-400">&lt;</span>LH<span class="text-zinc-400">/&gt;</span>
          </div>
          <p class="text-zinc-400 text-sm max-w-xs">
            Desenvolvedor Fullstack criando soluções inovadoras com código limpo e eficiente.
          </p>
        </div>

        <!-- Redes Sociais -->
        <div class="flex flex-col items-center md:items-start">
          <div class="flex gap-3">
            <a href="https://github.com/lorocks51987" target="_blank" rel="noopener noreferrer"
              class="icons-social-media" aria-label="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/luiz-henrique-costa-64b068221" target="_blank" rel="noopener noreferrer"
              class="icons-social-media" aria-label="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@codecast_unimar" target="_blank" rel="noopener noreferrer"
              class="icons-social-media" aria-label="CodeCastUnimar">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>


          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-2 pt-2 border-t border-zinc-800 text-center">
        <p class="text-zinc-500 text-xs">
          © {{ new Date().getFullYear() }} Luiz Henrique. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Removendo a constante navItems que não é mais necessária
</script>

<style scoped>
.icons-social-media {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 35px;
  height: 35px;
  cursor: pointer !important;
  transition: 300ms all ease-in-out;
  position: relative;
  color: #d4d4d8;
  background-color: rgba(63, 63, 70, 0.1);
  border-radius: 50%;
  clip-path: circle(65%);
}

.icons-social-media:hover {
  translate: 0 -10px;
  color: #ffffff;
}

.icons-social-media:hover svg {
  transform: scale(1.1);
}

/* Cores específicas para cada rede social */
.icons-social-media:nth-child(1):hover {
  background-color: #333333;
  /* GitHub */
}

.icons-social-media:nth-child(2):hover {
  background-color: #0077b5;
  /* LinkedIn */
}

@media (max-width: 768px) {
  .icons-social-media {
    padding: 6px;
    width: 32px;
    height: 32px;
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
