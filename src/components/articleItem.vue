<script setup>
defineProps({
    post: {
        type: Object,
        default: () => {
            return {};
        }
    }
})

</script>

<template>
    <div class="box">
        <div class="box__title">
            <a :href="`/posts/${post.id}`">{{ post.data.title }}</a>
        </div>
        <div class="box-description">{{ post.data.description }}</div>
    </div>
</template>

<style scoped>
@reference "../styles/global.css";

.box {
    @apply flex flex-col border border-gray-500;
    @apply w-full;
    @apply py-4 px-6 rounded-lg;
}

.box .box__title {
    @apply text-base font-bold;
}

.box-description {
    @apply text-base font-bold;
}
</style>