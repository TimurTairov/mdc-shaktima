import React from 'react'
import Article from '../components/Article'
import { allArticles } from '../Articles'

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 lg:h-screen">
      <h1 className="text-2xl ml-2">Блог</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {allArticles.map((article) => {
          return <Article key={article.id} img={article['img-url']} tittle={article.tittle} txt={article.description} url={article.url} />
        })}
      </div>
    </div>
  )
}

export default Blog
