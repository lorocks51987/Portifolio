import { createI18n } from 'vue-i18n'
import { messages } from './translations'

const i18n = createI18n({
  legacy: false, // Usa a Composition API
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'en', // Idioma de fallback
  messages // Mensagens de tradução
})

export default i18n 