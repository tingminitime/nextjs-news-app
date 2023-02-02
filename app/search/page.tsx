import { categories } from '@/constants'
import fetchNews from '@/lib/fetchNews'
import sortNewsByImage from '@/lib/sortNewsByImage'
import NewsList from '../NewsList'
import { NewsResponse } from 'api-types'
import response from '@/response-example.json'

type Props = {
  searchParams?: { term: string }
}

async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(
    'general',
    searchParams?.term,
    true
  )

  return (
    <div>
      <h1 className="headerTitle">{searchParams?.term}</h1>
      <NewsList news={news}></NewsList>
    </div>
  )
}
export default SearchPage
