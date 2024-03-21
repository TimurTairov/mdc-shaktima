import React from 'react'

const Contscts = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 h-screen ">
      <div className="ml-2">
        <h1 className="text-2xl">Контакты</h1>
        <p className="dark:text-slate-400 text-gray-700">Контакт для связи: Мадхувидья - +79261234567 </p>
        <p className="dark:text-slate-400 text-gray-700">Адрес: г. Москва, 5-й Монетчиковский переулок 20с1</p>
        <h1 className="text-xl">Ресурсы</h1>
        <ul>
          <li>
            <a href="https://www.youtube.com/@ShaktiMA_MDC" className="text-indigo-700" target="_blank" rel="noreferrer">
              Наш YouTube канал
            </a>
          </li>
          <li>
            <a href="https://t.me/mdc_ShaktiMa" className="text-indigo-700" target="_blank" rel="noreferrer">
              Наш Telegram канал
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}

export default Contscts
