import { NewsResponse } from 'api-types'

export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImage = news.data.filter(item => item.image !== null)
  const newsWithoutImage = news.data.filter(item => !item.image)

  const sortedNewsResponse: NewsResponse = {
    pagination: news.pagination,
    data: [...newsWithImage, ...newsWithoutImage],
  }

  return sortedNewsResponse
}
