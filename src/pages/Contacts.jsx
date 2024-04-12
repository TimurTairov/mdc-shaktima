import React from 'react'
import youtube from '../images/icons/youtube.png'
import tg from '../images/icons/tg.png'
import site from '../images/icons/icons8-site-96.png'
import om from '../images/om_big.png'
import whapsup from '../images/gif/icons8-whatsapp 2.gif'

const Contacts = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 h-screen ">
      <div className="ml-2">
        <h1 className="text-2xl">Контакты для связи</h1>

        <div className="flex">
          <img src={whapsup} className="w-6 h-6 mr-2" alt="whapsup" />
          <h5 className="dark:text-slate-400 text-gray-700">
            Мадхувидья:
            <a href="whatsapp://send?phone=+79859274240" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-indigo-700 hover:underline ml-2">
              +79859274240
            </a>
          </h5>
        </div>

        <div className="flex">
          <img src={whapsup} className="w-6 h-6 mr-2" alt="whapsup" />
          <h5 className="dark:text-slate-400 text-gray-700">
            Тиртхадева:
            <a href="whatsapp://send?phone=+79672067710" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-indigo-700 hover:underline ml-2">
              +79672067710
            </a>
          </h5>
        </div>

        {/* <p className="dark:text-slate-400 text-gray-700">Дэванатха: +79055623388 </p> */}
        <h1 className="text-xl mt-4">Наши ресурсы</h1>
        <ul>
          <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
            <a href="https://www.youtube.com/@ShaktiMA_MDC" className="flex" target="_blank" rel="noreferrer">
              <img src={youtube} className="w-6 h-6 mr-2" alt="youtube" />
              YouTube канал
            </a>
          </li>
          <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
            <a href="https://t.me/mdc_ShaktiMa" className="flex" target="_blank" rel="noreferrer">
              <img src={tg} className="w-6 h-6 mr-2" alt="tg" />
              Telegram канал
            </a>
          </li>
          <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
            <a href="https://www.advayta.org/" className="flex" target="_blank" rel="noreferrer">
              <img src={om} className="w-7 h-7 mr-2" alt="Adwayta.org" />
              Официальный сайт нашей традиции
            </a>
          </li>
          <li className="text-gray-700 hover:text-indigo-700 hover:underline my-2">
            <a href="https://institute-vasishtha.com/" className="flex" target="_blank" rel="noreferrer">
              <img src="https://institute-vasishtha.com/local/include/template/png/screen-1-img.png" className="w-7 h-7 mr-2" alt="institute-vasishtha.com" />
              Институт Риши Васиштхи. Прохождение обучения по курсам.
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contacts
