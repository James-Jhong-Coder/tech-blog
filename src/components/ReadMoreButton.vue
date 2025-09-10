<script setup lang="ts">
import iconReadMore from '@/assets/icons/icon_read_more.svg?url';
</script>

<template>
  <div class="btn">
    <span>閱讀更多</span>
    <img :src="iconReadMore" alt="iconReadMore" class="w-5 h-5 ml-2" />
  </div>
</template>

<style scoped>
@reference "../styles/global.css";

.btn {
  @apply flex items-center;
  @apply leading-none;
  @apply text-gray-600 font-medium;
}
</style>
