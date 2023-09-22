import axios from "axios"

export const getRepoDetails = async () => {
  const owner = "Mehdi-BHA"
  const repo = "notionfolio"
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}`
  )

  return response.data
}
