import { Category } from 'common-types'
import { gql } from 'graphql-request'
import sortNewsByImage from './sortNewsByImage'

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // - GraphQL query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        keywords: $keywords
        countries: "us" # limit: "100" # offset: "0" # sort: "publish_desc"
      ) {
        data {
          author
          category
          country
          image
          description
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `

  // - Fetch function with Next.js 13 caching...
  const res = await fetch(
    `https://santacecilia.stepzen.net/api/wishful-seastar/__graphql`,
    {
      method: 'POST',
      cache: isDynamic ? 'no-cache' : 'default',
      next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  )

  const newsResponse = await res.json()

  // - Sort function by images vs not images present
  const news = sortNewsByImage(newsResponse.data.myQuery)

  // - return res
  return news
}

export default fetchNews

// - Example :
// stepzen import curl "http://api.mediastack.com/v1/news?access_key=your_api_key&countries=tw%2Cus&limit=100&offset=0&sort=published_desc"
