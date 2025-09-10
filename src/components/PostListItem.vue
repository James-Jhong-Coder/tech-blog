<script setup lang="ts">
import iconPostDateUrl from '@/assets/icons/icon_post_date.svg?url';
import ReadMoreButton from '@/components/ReadMoreButton.vue';
import dayjs from 'dayjs';
const props = withDefaults(
  defineProps<{
    id?: string;
    slug?: string;
    title?: string;
    description?: string;
    createDate?: Date;
  }>(),
  {
    id: '',
    slug: '',
    title: '',
    description: '',
  }
);
</script>

<template>
  <div class="card">
    <div class="header">
      <img :src="iconPostDateUrl" alt="iconPostDateUrl" class="w-3 h-3" />
      <span class="ml-1">{{ dayjs(createDate).format('YYYY-MM-DD') }}</span>
    </div>
    <div class="content mt-3">
      <div class="card-title">{{ title }}</div>
      <div class="post-description mt-2">{{ description }}</div>
    </div>
    <div class="footer mt-6">
      <ReadMoreButton class="ml-auto" />
    </div>
  </div>
</template>

<style scoped>
@reference "../styles/global.css";
.card {
  @apply border border-gray-460 rounded-xl p-6;
  @apply hover:shadow-lg;
  @apply transition-all duration-300;
}
.header {
  @apply flex items-center;
  @apply text-gray-430 text-xs leading-none;
}
.content {
  @apply flex flex-col;
}
.footer {
  @apply flex items-center;
}

.card-title {
  @apply text-xl;
}

.post-description {
  @apply text-gray-430;
}
</style>
