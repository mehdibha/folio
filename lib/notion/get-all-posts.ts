import { notionAPI } from "./notion-api";

export async function getAllPosts() {
    const databaseId = process.env.NOTION_DATABASE_ID;
    if (!databaseId) {
      throw "NOTION_DATABASE_ID is required, please add it to your env variables"
    }
    const response = await notionAPI.databases.query({
        database_id: databaseId,
    });
    return response.results;
}
