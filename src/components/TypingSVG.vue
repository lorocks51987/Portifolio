<template>
  <div class="typing-container">
    <img :src="typingUrl" alt="Typing SVG" class="typing-svg" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Seja bem vindo'
  },
  color: {
    type: String,
    default: '00FF00'
  },
  size: {
    type: Number,
    default: 35
  }
})

const typingUrl = computed(() => {
  const baseUrl = 'https://readme-typing-svg.herokuapp.com'
  const params = new URLSearchParams({
    color: props.color,
    size: props.size,
    center: 'true',
    vCenter: 'true',
    width: '1000',
    lines: props.text,
    repeat: 'false'
  })
  return `${baseUrl}/?${params.toString()}`
})
</script>

<style scoped>
.typing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.typing-svg {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .typing-container {
    margin: 1.5rem 0;
  }
}
</style> 