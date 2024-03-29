import React from 'react'

const Pudjari = ({ img, name, description }) => {
  return (
    <div className="h-48 w-auto flex border-2 rounded p-2 my-2">
      <img
        className="h-40 w-40 opacity-90 object-cover mr-4 rounded"
        src={img}
        alt="img"
      />
      <div>
        <p className="dark:text-white  text-gray-700 font-semibold text-2xl">
          {name}
        </p>
        <p className="dark:text-white  text-gray-700 text-xl">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Pudjari

export const pudjari = [
  {
    "id": "001",
    "name": "Дэванатха",
    "foto": 'https://sun9-80.userapi.com/impg/DyUczFAX85RP1Izv-e2QfoSX9JzNoN28SodFUQ/LOyW_XI87YA.jpg?size=1440x2160&quality=95&sign=353b8fe62d05a20ae08f3dbd532692de&type=album',
    "description": "Пуджари. В традиции с 1998 г. Руководитель дхарма центра ШактиМА.",

  },
  {
    "id": "004",
    "name": "Мадхувидья",
    "foto": 'https://sun9-11.userapi.com/impg/Fsz3_l0e3VEcRsrLk-q6F9jrQIZUwX0bnp_iVA/WcYPGhVTrak.jpg?size=1440x2160&quality=95&sign=43027b1abc56433c193383497edce004&type=album',
    "description": "Пуджари. В традиции с 2011 г.",

  },
  {
    "id": "003",
    "name": "Анантарупа",
    "foto": 'https://sun9-79.userapi.com/impg/WQnhTfZ5_zuPWaW2jp2122dHjtRf_e1d5Y2Yrg/_9Go8NUxEDM.jpg?size=1440x2160&quality=95&sign=09ebeb32f2fa291865c1150829d5de58&type=album',
    "description": "Пуджари. В традиции с 2018 г.",

  },
  {
    "id": "002",
    "name": "Рамана",
    "foto": 'https://sun9-68.userapi.com/impg/nlyrVD78dknrX0wnr3bXak_twHaA4axmFuG08w/bIGtBUJSqV8.jpg?size=1440x2160&quality=95&sign=fe91062117af218432cf1d40a5511645&type=album',
    "description": "Пуджари. В традиции с 2019 г.",
  },


]