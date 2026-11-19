import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { BLOG_CATEGORIES } from './data/blogCategories';

const categorySlugs = BLOG_CATEGORIES.map(
  (category) => category.slug
);

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),
      // 不填写分类的旧文章仍然可正常构建，并保留在“全部文章”中。
      category: z.enum(categorySlugs).optional(),
    }),
});

export const collections = { blog };
