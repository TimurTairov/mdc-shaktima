import React from 'react'
import { Link } from 'react-router-dom'

//! блог и галлерея
const Article = ({ img, tittle, txt, url }) => {
  return (
    <div className="w-96 flex flex-col border-2 rounded m-4">
      <img className="w-auto lg:h-96 opacity-90 object-cover rounded" src={img} alt="img" />
      <div className="flex flex-col w-full h-auto mt-4 p-2">
        <h3 className="dark:text-white  text-gray-700 font-semibold lg:text-lg">{tittle}</h3>
        <p className="dark:text-slate-400 text-gray-700">{txt}</p>
        <p className="dark:text-slate-400 text-indigo-700 hover:underline">
          <Link to={url}>Подробнее...</Link>
        </p>
      </div>
    </div>
  )
}

export default Article
