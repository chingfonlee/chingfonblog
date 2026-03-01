import { defineCollection, z } from 'astro:content';

const cloudinaryUrl = z
  .string()
  .url()
  .regex(/^https:\/\/res\.cloudinary\.com\//, 'coverImage must be a Cloudinary URL');

const postCategory = z.enum(['ai-practice', 'productivity-system', 'life-thinking']);

const posts = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      pubDate: z.coerce.date(),
      dateModified: z.coerce.date().optional(),
      category: postCategory.default('life-thinking'),
      tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).default([]),
      draft: z.boolean().default(true),
      coverImage: cloudinaryUrl.optional(),
      coverImageAlt: z.string().optional(),
      canonicalURL: z.string().url().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.dateModified && data.dateModified < data.pubDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['dateModified'],
          message: 'dateModified must be greater than or equal to pubDate',
        });
      }

      if (data.coverImage && !data.coverImageAlt) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['coverImageAlt'],
          message: 'coverImageAlt is required when coverImage is set',
        });
      }
    }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    link: z.string().url().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    link: z.string().url().optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts,
  projects,
  tools,
};
