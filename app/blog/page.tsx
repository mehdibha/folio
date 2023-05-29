import Link from "next/link";
import { getAllPosts } from "@lib/notion";

const getPosts = async () => {
    const posts = await getAllPosts();
    return posts;
};

export default async function Blog() {
    const posts = await getPosts();
    // console.log(posts[0].properties.title.title);
    return null
}
