<script setup>
import Date from '@components/common/date.vue';
import Tag from '@components/common/tag.vue';
import dayjs from 'dayjs';
import { computed } from 'vue';

const props = defineProps({
    post: {
        type: Object,
        default: () => {
            return {};
        }
    }
});

const computedDate = computed(() => {
    return dayjs(props.post.data.pubDate).format('YYYY-MM-DD');
})

</script>

<template>
    <div class="box">
        <div class="bo-title">
            <a :href="`/posts/${post.id}`">{{ post.data.title }}</a>
        </div>
        <div class="box-description mt-2.5">{{ post.data.description }}</div>
        <div class="flex items-center mt-2.5">
            <Date>{{ computedDate }}</Date>
        </div>
        <div class="flex items-center mt-2">
            <Tag v-for="(item, index) in post.data.tags" :key="index" :class="{ 'ml-2': index > 0 }">
                {{ item }}
            </Tag>
        </div>
    </div>
</template>

<style scoped>
@reference "../styles/global.css";

.box {
    @apply flex flex-col border border-gray-500;
    @apply w-full;
    @apply py-4 px-6 rounded-lg leading-none;
}

.box-title {
    @apply text-base font-bold;
}

.box-description {
    @apply text-xs font-bold;
}
</style>