<script setup>
import { ref, computed, watch } from 'vue'
import SearchForm from './components/SearchForm.vue'
import WeatherInfo from './components/WeatherInfo.vue'
import ErrorMessage from './components/ErrorMessage.vue'
import { convertCityName } from './utils/cityMap.js'
import WeatherForecast from './components/WeatherForecast.vue'

// state
const weatherData = ref(null)
const error = ref('')
const loading = ref(false)
const forecastData = ref(null)

// API Key
const apiKey = '2953898d52882831a4f34ec21ff7669d'

const fetchWeather = async (city) => {
  error.value = ''
  weatherData.value = null
  loading.value = true

  const cityEnglish = convertCityName(city)

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityEnglish)}&units=metric&appid=${apiKey}&lang=zh_tw`)
    if (!response.ok) {
      throw new Error('無法取得天氣資料，請檢查城市名稱是否正確。')
    }
    const data = await response.json()
    weatherData.value = data
    // 在這裡呼叫 fetchForecast，成功取得當前天氣後再取得預報
    await fetchForecast(city); 
  } catch (err) {
    error.value = err.message || '發生錯誤，請稍後再試。'
  } finally {
    loading.value = false
  }
}

const fetchForecast = async (city) => {
  const cityEnglish = convertCityName(city)
  forecastData.value = null

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(cityEnglish)}&units=metric&appid=${apiKey}&lang=zh_tw`)
    if (!response.ok) throw new Error('無法取得天氣預報資料，請檢查城市名稱是否正確。')
    
    const data = await response.json()
    forecastData.value = data
  } catch (err) {
    console.error('取得預報失敗：',err)
  }
}

const weatherMain = computed(() => {
  return weatherData.value?.weather?.[0]?.main || ''
})

watch(weatherMain, (newWeather) => {
  document.body.className = ''

  switch (newWeather) {
    case 'Clear':
      document.body.classList.add('bg-clear')
      break
    case 'Clouds':
      document.body.classList.add('bg-clouds')
      break
    case 'Rain':
      document.body.classList.add('bg-rain')
      break
    case 'Snow':
      document.body.classList.add('bg-snow')
      break
    default:
      document.body.classList.add('bg-default')
  }
})
</script>


<template>
<div class="app">
  <h1>天氣查詢 App</h1>
    <SearchForm @search="fetchWeather" />
    <ErrorMessage v-if="error" :message="error" />
    <div v-if="loading" class="spinner"></div>
    <WeatherInfo v-if="weatherData && !loading" :weather="weatherData" />
    <WeatherForecast v-if="forecastData" :forecast="forecastData" />
</div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, sans-serif;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 20px;
    transition: background 0.5s ease;
  }
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  p {
    font-size: 20px;
    font-weight: 700;
  }

  .bg-clear {
    background: linear-gradient(to top, #a1c4fd, #c2e9fb);
  }
  
  .bg-clouds {
    background: linear-gradient(to top, #d7d2cc, #304352);
  }

  .bg-rain {
    background: linear-gradient(to top, #4b6cb7, #182848);
  }

  .bg-snow {
    background: linear-gradient(to top, #e6dada, #274046);
  }

  .bg-default {
    background: linear-gradient(to top, #888, #d9d9d9);
  }

  .app {
    max-width: 500px;
    margin: 0 auto;
  
  }

  form {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  }

  input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
  }

  button {
    padding: 8px 12px;
  }

  .error {
    color: red;
    margin-top: 10px;
  }

  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 40px auto;
  }
  @keyframes spin {
    to {transform: rotate(360deg);}
  }
</style>
