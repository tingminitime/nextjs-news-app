'use client'

import { Article } from 'api-types'
import { useRouter } from 'next/navigation'
import { encode } from 'querystring'

type Props = {
  article: Article
}

function ReadMoreButton({ article }: Props) {
  const router = useRouter()

  const handleClick = () => {
    // const queryString = Object.entries(article)
    //   .map(([key, value]) => `${key}=${value}`)
    //   .join('&')

    const url = `/article?${encode(article)}`
    router.push(url)
  }

  return (
    <button
      type="button"
      className="h-10 rounded-b-lg bg-orange-400 hover:bg-orange-500 dark:text-gray-900"
      onClick={handleClick}
    >
      Read More
    </button>
  )
}
export default ReadMoreButton
