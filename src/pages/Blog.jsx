import React from 'react'
import Article from '../components/Article'
import { allArcles } from '../Articles'

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 lg:h-screen">
      <h1 className="text-2xl ml-2">Блог</h1>

      {allArcles.map((article) => {
        return <Article key={article.id} img={article['img-url']} tittle={article.tittle} txt={article.description} url={article.url} />
      })}
    </div>
  )
}

export default Blog
