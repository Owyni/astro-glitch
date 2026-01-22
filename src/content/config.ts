import { defineCollection, z } from 'astro:content';
// z es zod, una biblioteca para validar esquemas de datos
const members = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        role: z.string(),
        image: z.string()
    })
});

export const collections = { members };
