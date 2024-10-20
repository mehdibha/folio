import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
// import { transformMDX } from "@fumadocs/content-collections/configuration";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

const lab = defineCollection({
  name: "lab",
  directory: "content/lab",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
  }),
  // transform: async (data, ctx) => {
  //   const { body, structuredData } = await transformMDX(data, ctx);
  //   const href = `/samples/${data._meta.directory}`;
  //   const name = data._meta.directory;
  //   return {
  //     title: data.title,
  //     description: data.description,
  //     href,
  //     name,
  //     body,
  //     lastModified: await lastModificationDate(ctx, data),
  //     structuredData,
  //   };
  // },
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts, lab],
});
