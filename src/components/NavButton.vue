<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isActive?: boolean;
    class?:
    | string
    | Record<string, boolean>
    | Array<string | Record<string, boolean>>;
  }>(),
  {
    isActive: false,
  }
);
</script>

<template>
  <div class="nav-btn" :class="[props.class, { 'is-active': props.isActive }]">
    <slot />
  </div>
</template>

<style scoped>
@reference "../styles/global.css";

.nav-btn {
  @apply inline-flex items-center cursor-pointer leading-none;
  @apply hover:bg-gray-150 py-1 px-2 rounded-md;
}

.is-active {
  @apply bg-gray-600 text-white;
  @apply hover:bg-gray-600;
}
</style>
