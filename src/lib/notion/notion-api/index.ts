// import { NotionAPI } from ""
import { NOTION_TOKEN } from "@/config"
import { NotionAPI } from "./notion-api"

export const api = new NotionAPI({ authToken: NOTION_TOKEN })
