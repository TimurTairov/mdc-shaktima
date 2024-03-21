import React from 'react'
import Article from '../components/Article'
import { allArcles } from '../Articles'

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <h1 className="text-2xl ml-2">Блог</h1>

      {/* <card className="w-full flex border-2 rounded p-2 my-2">
        <img src={sadhu} alt="sadhu" className="w-40 h-40 rounded mr-2" />
        <div className="flex flex-col w-full h-40">
          <h3 className="dark:text-white  text-gray-700 text-2xl">Как не попасть в ловушку поверхностной Адвайты</h3>
          <p className="dark:text-slate-400 text-gray-700">О двенадцати видах поверхностного отношения, подстерегающих практиков недвойственных учений.</p>
          <p className="dark:text-slate-400 text-gray-700">
            Адвайта — это мощнейшее мировоззрение, я бы сказал, это самое мощное мировоззрение, которое может быть вообще во вселенной для человека или любого
            существа. Это учение практикуют не только люди, но и боги, асуры, сиддхи, риши, дакини и другие существа.
          </p>
          <p className="dark:text-slate-400 text-indigo-700">
            <button onClick={() => navigate('/neoadwayta')}>Подробнее...</button>
          </p>
        </div>
      </card> */}

      {allArcles.map((article) => {
        return <Article key={article.id} img={article['img-url']} tittle={article.tittle} txt={article.description} url={article.url} />
      })}
    </div>
  )
}

export default Blog
