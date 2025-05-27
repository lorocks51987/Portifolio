<template>
  <div class="min-h-screen py-12">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-zinc-100 mb-4">{{ $t('about.title') }}</h1>
        <p class="text-xl text-zinc-300 max-w-3xl mx-auto text-content">
          {{ $t('about.description') }}
        </p>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-6">{{ $t('about.skills.title') }}</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-8 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300">
            <h3 class="text-xl font-semibold text-zinc-300 mb-6">{{ $t('about.skills.frontend') }}</h3>
            <div class="grid grid-cols-3 gap-6 justify-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" title="HTML"
                alt="HTML" class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" title="CSS"
                alt="CSS" class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                title="JavaScript" alt="JavaScript"
                class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                title="Vue.js" alt="Vue.js" class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                title="Tailwind CSS" alt="Tailwind CSS"
                class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                title="Bootstrap" alt="Bootstrap"
                class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
            </div>
          </div>

          <div
            class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-8 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300">
            <h3 class="text-xl font-semibold text-zinc-300 mb-6">{{ $t('about.skills.backend') }}</h3>
            <div class="grid grid-cols-3 gap-6 justify-items-center">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" title="PHP"
                alt="PHP" class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                title="Python" alt="Python" class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                title="MySQL" alt="MySQL" class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" title="Git"
                alt="Git" class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg"
                title="WordPress" alt="WordPress"
                class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                title="Linux" alt="Linux" class="w-10 h-10 transition-transform hover:scale-110 hover:brightness-125"
                style="filter: brightness(85%);" />
            </div>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-6">{{ $t('about.experience.title') }}</h2>
        <div
          class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-6 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300 space-y-6">
          <div class="border-l-4 border-zinc-700 pl-4">
            <h3 class="text-lg font-semibold text-zinc-200">{{ $t('about.experience.internship.title') }}</h3>
            <p class="text-zinc-400">{{ $t('about.experience.internship.company') }}</p>
            <p class="text-sm text-zinc-500">{{ $t('about.experience.current') }}</p>
            <ul class="mt-2 text-zinc-400 list-disc list-inside">
              <li>{{ $t('about.experience.internship.tasks.0') }}</li>
              <li>{{ $t('about.experience.internship.tasks.1') }}</li>
              <li>{{ $t('about.experience.internship.tasks.2') }}</li>
            </ul>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-6 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300 space-y-6 mt-6">
          <div class="border-l-4 border-zinc-700 pl-4">
            <h3 class="text-lg font-semibold text-zinc-200">{{ $t('about.experience.instructor.title') }}</h3>
            <p class="text-zinc-400">{{ $t('about.experience.instructor.company') }}</p>
            <p class="text-sm text-zinc-500">{{ $t('about.experience.current') }}</p>
            <ul class="mt-2 text-zinc-400 list-disc list-inside">
              <li>{{ $t('about.experience.instructor.tasks.0') }}</li>
              <li>{{ $t('about.experience.instructor.tasks.1') }}</li>
              <li>{{ $t('about.experience.instructor.tasks.2') }}</li>
            </ul>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-6 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300 space-y-6 mt-6">
          <div class="border-l-4 border-zinc-700 pl-4">
            <h3 class="text-lg font-semibold text-zinc-200">{{ $t('about.experience.apprentice.title') }}</h3>
            <p class="text-zinc-400">{{ $t('about.experience.apprentice.company') }}</p>
            <p class="text-sm text-zinc-500">{{ $t('about.experience.apprentice.period') }}</p>
            <ul class="mt-2 text-zinc-400 list-disc list-inside">
              <li>{{ $t('about.experience.apprentice.tasks.0') }}</li>
              <li>{{ $t('about.experience.apprentice.tasks.1') }}</li>
              <li>{{ $t('about.experience.apprentice.tasks.2') }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-semibold text-zinc-100 mb-6">{{ $t('about.education.title') }}</h2>
        <div
          class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-6 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300">
          <div class="border-l-4 border-zinc-700 pl-4">
            <h3 class="text-lg font-semibold text-zinc-200">{{ $t('about.education.courses.ads.title') }}</h3>
            <p class="text-zinc-400">{{ $t('about.education.courses.ads.institution') }}</p>
            <p class="text-sm text-zinc-500">{{ $t('about.education.inProgress') }}</p>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-6 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300 mt-6">
          <div class="border-l-4 border-zinc-700 pl-4">
            <h3 class="text-lg font-semibold text-zinc-200">{{ $t('about.education.courses.computerOperator.title') }}
            </h3>
            <p class="text-zinc-400">{{ $t('about.education.courses.computerOperator.institution') }}</p>
            <p class="text-sm text-zinc-500">{{ $t('about.education.courses.computerOperator.year') }}</p>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-6 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300 mt-6">
          <div class="border-l-4 border-zinc-700 pl-4">
            <h3 class="text-lg font-semibold text-zinc-200">{{ $t('about.education.courses.cpp.title') }}</h3>
            <p class="text-zinc-400">{{ $t('about.education.courses.cpp.institution') }}</p>
            <p class="text-sm text-zinc-500">{{ $t('about.education.courses.cpp.year') }}</p>
          </div>
        </div>

        <div
          class="bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 p-6 rounded-xl border border-zinc-700/50 shadow-xl backdrop-blur-sm hover:border-zinc-600/50 transition-all duration-300 mt-6">
          <div class="border-l-4 border-zinc-700 pl-4">
            <h3 class="text-lg font-semibold text-zinc-200">{{ $t('about.education.courses.itAssistant.title') }}</h3>
            <p class="text-zinc-400">{{ $t('about.education.courses.itAssistant.institution') }}</p>
            <p class="text-sm text-zinc-500">{{ $t('about.education.courses.itAssistant.year') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.mb-16, .mb-12, h2, .bg-gradient-to-br').forEach((el, index) => {
    el.style.opacity = '0'
    el.classList.add(`animate-delay-${(index % 3) + 1}`)
    observer.observe(el)
  })
})
</script>

<style scoped>
img {
  transition: all 0.2s ease-in-out;
}

.bg-gradient-to-br {
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.bg-gradient-to-br:hover {
  transform: translateY(-2px);
  border-color: rgb(161 161 170);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-delay-1 {
  animation-delay: 0.2s;
}

.animate-delay-2 {
  animation-delay: 0.4s;
}

.animate-delay-3 {
  animation-delay: 0.6s;
}
</style>
