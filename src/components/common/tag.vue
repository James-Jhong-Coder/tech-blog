<script setup>
import tagIcon from '@icons/tag.svg?url';
</script>

<template>
    <div class="tag">
        <img :src="tagIcon" alt="tagIcon" />
        <span class="text-xs ml-1">
            <slot />
        </span>
    </div>
</template>


<style scoped>
@reference "../../styles/global.css";
.tag {
    @apply inline-flex items-center;
    @apply bg-gray-500 rounded-lg p-2 text-white;
}
</style>