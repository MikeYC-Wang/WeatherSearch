<!-- 組合元件、處理邏輯 -->
<script setup>
import { ref } from 'vue'
const cityInput = ref('')

const emit = defineEmits(['search'])

const onSubmit = () => {
  if (cityInput.value.trim()) {
    emit('search', cityInput.value.trim())
    cityInput.value = ''
  }
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <input v-model="cityInput" placeholder="輸入城市名稱" />
        <button type="submit">查詢</button>
    </form>
</template>

<style>

</style>
