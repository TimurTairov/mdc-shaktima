import React from 'react'

//! Новости
const Column = ({ img, title, txt, url, url_info }) => {

  return (

    <div className="block lg:w-11/12 lg:flex mb-10 h-auto rounded border border-slate-200" >

      <img
        className="h-40 w-auto opacity-90 object-cover lg:mr-4 p-0 rounded"
        src={img}
        alt={title}
      />

      <div className="flex flex-col w-full ">

        <h3 className="dark:text-white  text-gray-700 font-bold text-2xl">
          {title}
        </h3>
        <p className="dark:text-slate-400 text-gray-700">
          {txt}
        </p>
        <p className="dark:text-slate-400 text-indigo-600 hover:underline">
          {url ?
            <a href={url} target="_blank" rel="noreferrer">
              {url_info}
            </a> : ''}
        </p>

      </div>
    </div>
  )
}

export default Column