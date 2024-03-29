import React from 'react'
import youtube from '../images/icons/youtube.png'
import tg from '../images/icons/tg.png'
import adwaytaOrg from '../images/icons/icons8-site-96.png'

const Contscts = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 h-screen ">
      <div className="ml-2">
        <h1 className="text-2xl">Контакты для связи</h1>
        <p className="dark:text-slate-400 text-gray-700">Мадхувидья: +79859274240 </p>
        {/* <p className="dark:text-slate-400 text-gray-700">Дэванатха: +79055623388 </p> */}
        <h1 className="text-xl">Наши ресурсы</h1>
        <ul>
          <li className="text-gray-700 hover:text-indigo-700 hover:underline">
            <a href="https://www.youtube.com/@ShaktiMA_MDC" className="flex" target="_blank" rel="noreferrer">
              <img src={youtube} className="w-6 h-6 mr-2" alt="youtube" />
              YouTube канал
            </a>
          </li>
          <li className="text-gray-700 hover:text-indigo-700 hover:underline">
            <a href="https://t.me/mdc_ShaktiMa" className="flex" target="_blank" rel="noreferrer">
              <img src={tg} className="w-6 h-6 mr-2" alt="tg" />
              Telegram канал
            </a>
          </li>
          <li className="text-gray-700 hover:text-indigo-700 hover:underline">
            <a href="https://www.advayta.org/" className="flex" target="_blank" rel="noreferrer">
              <img src={adwaytaOrg} className="w-6 h-6 mr-2" alt="Adwayta.org" />
              Официальный сайт нашей традиции
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contscts
