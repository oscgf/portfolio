import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().optional(),  // If your projects have a completion or creation date
        tags: z.array(z.string()),  // Tags like 'React', 'UI/UX', 'Backend'
        url: z.string().url().optional(),  // A link to the project or demo
        github: z.string().url().optional(),  // A link to the GitHub repo
        image: z.string().optional(),  // Path to the image of the project
        featured: z.boolean().default(false),  // Flag for highlighting certain projects
    }),
});

export const collections = {
    project: projectCollection,
};
