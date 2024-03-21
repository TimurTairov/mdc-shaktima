import React from 'react'

const Column = ({ img, tittle, txt }) => {

  return (

    <div div className="block w-full lg:flex lg:mb-10" >

      <img
        className="h-40 w-40 opacity-90 object-cover lg:mr-4 rounded"
        src={img}
        alt="img"
      />

      <div className="flex flex-col w-full h-40">

        <h3 className="dark:text-white  text-gray-700 font-bold text-2xl">
          {tittle}
        </h3>
        <p className="dark:text-slate-400 text-gray-700">
          {txt}
        </p>

      </div>
    </div>
  )
}

export default Column