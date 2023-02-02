import { Category } from 'common-types'
import fetchNews from '@/lib/fetchNews'
import NewsList from '@/app/NewsList'
import { NewsResponse } from 'api-types'
import { categories } from '@/constants'

type Props = {
  params: { category: Category }
}

async function NewsCategoryPage({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category)

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news}></NewsList>
    </div>
  )
}
export default NewsCategoryPage

export async function generateStaticParams() {
  return categories.map(category => ({
    category,
  }))
}

// localhost:3000/news/business
// localhost:3000/news/entertainment
// localhost:3000/news/general
// ...
// - Prebuild these pages
