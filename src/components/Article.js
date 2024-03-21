import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({ img, tittle, txt, url }) => {
  return (
    <div>
      <card className="w-full flex border-2 rounded p-2 my-2">
        <img
          className="h-40 w-40 opacity-90 object-cover lg:mr-4 rounded"
          src={img}
          alt="img"
        />
        <div className="flex flex-col w-full h-40">

          <h3 className="dark:text-white  text-gray-700 font-semibold text-2xl">
            {tittle}
          </h3>
          <p className="dark:text-slate-400 text-gray-700">
            {txt}
          </p>
          <p className="dark:text-slate-400 text-indigo-700">
            <Link to={url}>Подробнее...</Link>
          </p>

        </div>
      </card>
    </div>
  )
}

export default Article