import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/blog',
    }),
    schema: z.object({
        title: z.string(),          // 必填
        description: z.string(),          // 必填
        pubDate: z.coerce.date(),     // 必填，會自動轉成 Date
        updatedDate: z.coerce.date().optional(), // 選填
        tags:         z.array(z.string()).default([]),  // ← 新增這行
    }),
})

const sideProject = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/sideProject',
    }),
    schema: z.object({
        title: z.string(),          // 必填
        description: z.string(),          // 必填
        pubDate: z.coerce.date(),     // 必填，會自動轉成 Date
        updatedDate: z.coerce.date().optional(), // 選填
        tags:         z.array(z.string()).default([]),  // ← 新增這行
    }),
})

export const collections = { blog, sideProject };