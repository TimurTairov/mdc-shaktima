import React from 'react'
import Pudjari from '../data/Pudjari'
import { pudjari } from '../data/Pudjari'
function AboutUs() {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 lg:h-screen">
      <h1 className="text-2xl ml-2">Информация о нас</h1>
      <p className="dark:text-slate-400 text-gray-700 ml-2">Ом, намасте. Мы ученики просветленного мастера. Проводим практики в традиции Адвайта сиддхов. </p>
      {pudjari.map((atman) => {
        return <Pudjari key={atman.id} img={atman.foto} name={atman.name} />
      })}
    </div>
  )
}

export default AboutUs
