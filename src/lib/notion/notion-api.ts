import { NotionAPI } from "notion-client"
import { NOTION_TOKEN } from "@/config"

export const api = new NotionAPI({ authToken: NOTION_TOKEN })
