<!-- 顯示錯誤訊息 -->
<script setup>
defineProps({
  message:String
})
</script>

<template>
    <div class="error" v-if="message">
        ⚠️ {{ message }}
    </div>
</template>

<style>

</style>