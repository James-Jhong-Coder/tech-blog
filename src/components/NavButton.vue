<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isActive?: boolean;
    class?:
    | string
    | Record<string, boolean>
    | Array<string | Record<string, boolean>>;
    href?: string;
  }>(),
  {
    isActive: false,
    href: '/'
  }
);
const onButtonClickHandler = () => {
  window.location.href = props.href
}
</script>

<template>
  <div class="nav-btn" :class="[props.class, { 'is-active': props.isActive }]" @click="onButtonClickHandler()">
    <slot />
  </div>
</template>

<style scoped>
@reference "../styles/global.css";

.nav-btn {
  @apply inline-flex items-center cursor-pointer leading-none text-sm;
  @apply hover:bg-gray-150 py-2 px-2.5 rounded-md;
}

.is-active {
  @apply bg-gray-600 text-white;
  @apply hover:bg-gray-600;
}
</style>
