import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    pubDatetime: z.union([z.string().datetime({ offset: true }), z.date()]),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["untagged"]),
    ogImage: z.string().optional(),
    description: z.string(),
    license: z.string().optional().default("default"),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;
