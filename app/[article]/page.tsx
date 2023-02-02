import { notFound } from 'next/navigation'
import { Article } from 'api-types'
import LiveTimestamp from '../LiveTimestamp'

type Props = {
  searchParams?: Article
}

export const dynamic = 'force-dynamic'

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound()
  }

  console.log('[ArticlePage]searchParams:', searchParams)
  const article: Article = searchParams

  return (
    <article>
      <section className="flex flex-col px-0 pb-24 lg:flex-row lg:px-10">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="h-50 mx-auto max-w-md rounded-lg object-cover shadow-md md:max-w-lg lg:max-w-xl"
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 pb-2 no-underline">
            {article.title}
          </h1>

          <div className="flex space-x-4 divide-x-2">
            <h2 className="font-bold">By: {article.author || 'unknown'}</h2>
            <h2 className="pl-4 font-bold">
              Source: {article.source || 'unknown'}
            </h2>
            <p className="pl-4">
              <LiveTimestamp time={article.published_at}></LiveTimestamp>
              {/* {article.published_at} */}
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
export default ArticlePage
