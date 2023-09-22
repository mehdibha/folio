import { NOTION_PAGE_ID } from "@/config"
import { TPosts } from "@/types"
import { idToUuid } from "notion-utils"
import { getAllPageIds } from "./get-all-page-ids"
import { getPageProperties } from "./get-page-properties"
import { mapImgUrl } from "./map-image"
import { api } from "./notion-api"

export async function getAllPosts({ includePages = false }) {
  const id = idToUuid(NOTION_PAGE_ID)
  const response = await api.getPage(id)
  const collection = Object.values(response.collection)[0]?.value
  const collectionQuery = response.collection_query
  const block = response.block
  const schema = collection?.schema

  const rawMetadata = block[id].value

  // Check Type
  if (
    rawMetadata?.type !== "collection_view_page" &&
    rawMetadata?.type !== "collection_view"
  ) {
    console.log(`pageId "${id}" is not a database`)
    return null
  } else {
    // Construct Data
    const pageIds = getAllPageIds(collectionQuery)
    const data = []
    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i]
      const properties = (await getPageProperties(id, block, schema)) || null

      // Add fullwidth to properties
      properties.fullWidth = block[id].value?.format?.page_full_width ?? false
      // // Convert date (with timezone) to unix milliseconds timestamp
      properties.createdTime = new Date(
        block[id].value?.created_time
      ).toISOString()
      properties.thumbnail =
        mapImgUrl(block[id].value?.format?.page_cover, block[id].value) ?? ""

      data.push(properties)
    }

    // Sort by date
    data.sort((a: any, b: any) => {
      const dateA: any = new Date(a?.date?.start_date || a.createdTime)
      const dateB: any = new Date(b?.date?.start_date || b.createdTime)
      return dateB - dateA
    })

    const posts = data as TPosts
    return posts
  }
}
