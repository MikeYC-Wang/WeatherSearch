<!-- 顯示天氣資料 -->
<script setup>
defineProps({
  weather: {
    type: Object,
  }
})
</script>

<template>
    <div v-if="weather">
        <p>城市：{{ weather.name }}</p>
        <p>溫度：{{ weather.main.temp }}°C</p>
        <p>
          天氣：{{ weather.weather[0].description }}
          <img 
            :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" 
            :alt="weather.weather[0].description" 
            class="weather-icon-2"
          />
        </p>
    </div>
</template>

<style>
.weather-icon-2 {
  width: 31.41px;
  height: 31.41px;
  vertical-align: middle;
}
</style>