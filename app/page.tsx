import { categories } from '@/constants'
import fetchNews from '@/lib/fetchNews'
import sortNewsByImage from '@/lib/sortNewsByImage'
import response from '@/response-example.json'
import NewsList from './NewsList'
import { NewsResponse } from 'api-types'

function wait(delay: number = 2000) {
  return new Promise(resolve => setTimeout(resolve, delay))
}

async function Home() {
  // - fetch the news data
  const news: NewsResponse =
    process.env.NODE_ENV === 'development'
      ? await wait().then(() => sortNewsByImage(response))
      : await fetchNews(categories.join(','))

  return (
    <main>
      <NewsList news={news}></NewsList>
    </main>
  )
}

export default Home
