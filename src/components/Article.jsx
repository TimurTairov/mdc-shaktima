import React from 'react'
import { Link } from 'react-router-dom'

//! блог
const Article = ({ img, tittle, txt, url }) => {
  return (
    <div className="w-full flex border-2 rounded p-2 my-4 mx-2">
      <img className="h-20 w-20 lg:h-40 lg:w-40 opacity-90 object-cover mr-4 rounded" src={img} alt="img" />
      <div className="flex flex-col w-full h-auto lg:h-40">
        <h3 className="dark:text-white  text-gray-700 font-semibold text-xl">{tittle}</h3>
        <p className="dark:text-slate-400 text-gray-700">{txt}</p>
        <p className="dark:text-slate-400 text-indigo-700 hover:underline">
          <Link to={url}>Подробнее...</Link>
        </p>
      </div>
    </div>
  )
}

export default Article
