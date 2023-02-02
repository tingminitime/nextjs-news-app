import { Article } from 'api-types'
import ReadMoreButton from './ReadMoreButton'
import LiveTimestamp from './LiveTimestamp'

type Props = {
  article: Article
}

function Article({ article }: Props) {
  return (
    <article className="flex flex-col rounded-lg bg-zinc-100 drop-shadow-lg transition-all duration-200 ease-out hover:scale-105 hover:bg-slate-200 hover:shadow-lg dark:bg-slate-800">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full rounded-t-lg object-cover shadow-md"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-serif font-bold dark:text-zinc-100">
            {article.title}
          </h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-2 dark:text-zinc-100">
              {article.description}
            </p>
          </section>
          <footer className="ml-auto flex space-x-1 pt-5 text-right text-xs italic text-gray-400">
            <p>{article.source} -</p>
            <p>
              <LiveTimestamp time={article.published_at}></LiveTimestamp>
              {/* {article.published_at} */}
            </p>
          </footer>
        </div>

        {/* Read more button */}
        <ReadMoreButton article={article}></ReadMoreButton>
      </div>
    </article>
  )
}
export default Article
