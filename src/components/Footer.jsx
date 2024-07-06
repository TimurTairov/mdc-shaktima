import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="max-w-screen-xl mx-auto border-t mt-auto py-5  px-2 bg-gray-100">
      <div className="md:flex">
        <div className="w-full mb-5 md:w-2/5 lg:ml-20">
          <h6 className="dark:text-white font-semibold text-gray-700 mb-4">Московский Дхарма центр ШактиМа</h6>
          <ul>
            <li className="py-1 mr-1">На благо всех живых существ!</li>
            <li className="py-1 mr-1">© All Rights Reserved 2024™</li>
          </ul>
        </div>

        <div className="w-full mb-5 md:w-2/5">
          <h6 className="dark:text-white font-semibold text-gray-700 mb-1">Контент</h6>
          <ul>
            <li>
              <Link className="footer-link" to="/">
                Новости
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/blog">
                Блог
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/aboutus">
                О нас
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/contacts">
                Контакты
              </Link>
            </li>
            <li>
              <Link className="footer-link" to="/donate">
                Пожертвовать
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h6 className="dark:text-white font-semibold text-gray-700 mb-4">Ресурсы</h6>
          <ul className="flex">
            <li className="mr-2">
              <a href="https://www.youtube.com/@ShaktiMA_MDC" target="_blank" rel="noreferrer">
                <FaYoutube className="w-6 h-6 mr-2 text-slate-400" />
              </a>
            </li>
            <li className="mr-2">
              <a href="https://t.me/mdc_ShaktiMa" target="_blank" rel="noreferrer">
                <FaTelegram className="w-6 h-6 mr-2 text-slate-400" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
