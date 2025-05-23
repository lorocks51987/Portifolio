<template>
  <footer class="bg-zinc-900/80 border-t border-zinc-800 py-3">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        
        <!-- Logo e Descrição -->
        <div class="text-center md:text-left">
          <div class="text-zinc-100 font-bold text-base">
            <span class="text-zinc-400">&lt;</span>LH<span class="text-zinc-400">/&gt;</span>
          </div>
          <p class="text-zinc-400 text-xs">
            Desenvolvedor Fullstack criando soluções com código.
          </p>
        </div>
  
      </div>

      <!-- Copyright -->
      <div class="mt-3 pt-3 border-t border-zinc-800 text-center">
        <p class="text-zinc-500 text-[10px]">
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
  { name: 'Projetos', path: '/projects' },
  { name: 'Contato', path: '/contato' }
]
</script>

<style scoped>
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 0.375rem;
  background-color: rgba(63, 63, 70, 0.1);
}

.social-link:hover {
  background-color: rgba(63, 63, 70, 0.2);
}
</style>
