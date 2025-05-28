import { createI18n } from 'vue-i18n'
import { messages } from './translations'

const i18n = createI18n({
  legacy: false, // Usa a Composition API
  locale: 'pt', // Idioma padrão
  fallbackLocale: 'en', // Idioma de fallback
  messages, // Mensagens de tradução
  silentTranslationWarn: true, // Suprime avisos de tradução faltando
  silentFallbackWarn: true, // Suprime avisos de fallback
  missingWarn: false, // Desativa avisos de tradução faltando
  fallbackWarn: false // Desativa avisos de fallback
})

export default i18n 