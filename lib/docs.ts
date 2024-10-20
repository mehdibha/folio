import { allPosts, allLabs } from "content-collections";

export const getPostBySlug = (slug: string) => {
  const post = allPosts.find((post) => post._meta.fileName === slug);
  return post;
};

export const getLabBySlug = (slug: string) => {
  const lab = allLabs.find((lab) => lab._meta.fileName === slug);
  return lab;
};

export { allPosts, allLabs };
