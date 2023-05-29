import { Client, LogLevel } from "@notionhq/client";

const notionAPI = new Client({
    auth: process.env.NOTION_TOKEN,
    // logLevel: LogLevel.DEBUG,
});

export { notionAPI };
