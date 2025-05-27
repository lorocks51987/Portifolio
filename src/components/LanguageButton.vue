<template>
    <div class="flex items-center space-x-2">
        <button @click="changeLanguage('pt')" class="language-button" :class="{ 'active': currentLocale === 'pt' }">
            <img src="../assets/imgs/brasil.png" alt="Português" class="w-6 h-6 rounded-full" />
        </button>
        <button @click="changeLanguage('en')" class="language-button" :class="{ 'active': currentLocale === 'en' }">
            <img src="../assets/imgs/estados-unidos.png" alt="English" class="w-6 h-6 rounded-full" />
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const changeLanguage = (lang) => {
    locale.value = lang
}
</script>

<style scoped>
.language-button {
    padding: 0.25rem;
    border-radius: 9999px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.language-button:hover {
    transform: scale(1.1);
    border-color: rgba(255, 255, 255, 0.2);
}

.language-button.active {
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.language-button img {
    transition: all 0.3s ease;
}

.language-button:hover img {
    filter: brightness(1.2);
}
</style>