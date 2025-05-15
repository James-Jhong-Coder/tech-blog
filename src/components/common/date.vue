<script setup>
import dateIcon from '@icons/date.svg?url';
</script>

<template>
    <div class="flex items-center">
        <img :src="dateIcon" alt="date" />
        <span class="text-xs ml-1">
            <slot />
        </span>
    </div>
</template>

