<template>
    <div class="weather flex items-center justify-center text-white text-xs rounded-md px-2 py-1">
        <img :src="iconUrl" alt="Ícone do clima" class="w-4 h-4" />
        <span>{{ temp }}°C em {{ city }}</span>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const city = ref('')
const temp = ref('')
const iconUrl = ref('')

const fetchWeather = async (lat, lon) => {
    const apiKey = '614b3ac38be03af818fe2ad1149f6ff5' // Coloca tua API Key do OpenWeather
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`

    const res = await fetch(url)
    const data = await res.json()

    city.value = data.name
    temp.value = Math.round(data.main.temp)
    iconUrl.value = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

onMounted(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => {
                const { latitude, longitude } = pos.coords
                fetchWeather(latitude, longitude)
            },
            err => {
                console.error(err)
            }
        )
    }
})
</script>
