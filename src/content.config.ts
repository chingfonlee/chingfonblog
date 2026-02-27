import { defineCollection, z } from 'astro:content';

const cloudinaryUrl = z
  .string()
  .url()
  .regex(/^https:\/\/res\.cloudinary\.com\//, 'coverImage must be a Cloudinary URL');

const posts = defineCollection({
  type: 'content',
  schema: z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      pubDate: z.coerce.date(),
      dateModified: z.coerce.date().optional(),
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

export const collections = {
  posts,
};
