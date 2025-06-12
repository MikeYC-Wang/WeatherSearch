<script setup>
import { computed } from 'vue'

const props = defineProps({
  forecast: Object
})

const dailyForecasts = computed(() => {
  if (!props.forecast?.list) {
    console.log('預報資料為空或無列表');
    return []
  }

  const uniqueDailyForecasts = [];
  const datesSeen = new Set();

  for (const item of props.forecast.list) {
    const date = item.dt_txt.split(' ')[0];
    if (!datesSeen.has(date)) {
      uniqueDailyForecasts.push(item);
      datesSeen.add(date);
    }
    if (uniqueDailyForecasts.length >= 5) {
      break;
    }
  }
  return uniqueDailyForecasts;
})
</script>

<template>
  <div v-if="dailyForecasts.length">
    <h2 class="circle">五日預報</h2>
    <ul>
      <li v-for="item in dailyForecasts" :key="item.dt">
        <p class="forecast-date">{{ item.dt_txt.split(' ')[0] }}</p>

        <img
          :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
          :alt="item.weather[0].description"
          class="weather-icon"
        />

        <p class="forecast-temp">{{ item.main.temp }}°C</p>
        <p class="forecast-desc">{{ item.weather[0].description }}</p>
  </li>
    </ul>
  </div>
  <div v-else>
    <p>目前沒有預報資料。</p>
  </div>
  
</template>

<style>
.forecast-container {
    text-align: center; /* 讓所有內部行內元素 (包括 h2.circle) 水平置中 */
}

h2 {
    margin-top: 20px;
    margin-bottom: 15px;
}
.circle {
    display: inline-block;
    padding: 5px 20px;
    border-radius: 50px;
    background-color: #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 22px;
    color: #333;
}
ul {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  gap: 40px;
  flex-wrap: nowrap;
  max-width: 100%;
  margin: 0 auto;
}

li {
  width: 180px;
  flex-shrink: 0;
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

li p {
    margin: 5px 0;
    font-size: 16px;
}

li p strong {
    color: #333;
}

.weather-icon {
  width: 60px;
  height: 60px;
  margin: 10px auto;
}
</style>