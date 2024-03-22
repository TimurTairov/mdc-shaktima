import React from 'react'
import { NavLink } from 'react-router-dom'
import mahashivaratri from '../images/mahashivaratri.jpg'
import mahalakshmiJayanti from '../images/Mahalakshmi jayanti 25032024.jpg'
import { news } from '../data/News'
import logo from '../images/ShaktiMa-logo.jpg'
import Column from '../components/Column'

const Home = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-4 lg:h-screen">
        {/* banners */}
        <section className="px-2 lg:flex lg:space-x-2">
          <NavLink
            to="/mahashivaratri2024"
            className="w-full lg:w-2/3 h-96 mb-4 relative rounded inline-block overflow-hidden bg-gradient-to-r from-red-500 to-red-700"
          >
            <div className="absolute left-0 top-0 w-full h-full z-0 bg-gradient-to-b from-black/5 to-black/20"></div>
            <img className="absolute left-0 top-0 w-full h-full z-0 object-cover" src={mahashivaratri} alt="MahaShivaRatri 2024" />
            <div className="p-4 absolute bottom-0 left-0">
              <h2 className="text-2xl font-semibold text-gray-100 leading-tight">МахаШиваРатри 2024</h2>
            </div>
          </NavLink>

          <NavLink className="w-full lg:w-1/3 bg-purple-300 h-96 mb-4 relative rounded inline-block overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full z-0 bg-gradient-to-b from-black/5 to-black/20"></div>
            <img className="absolute left-0 top-0 w-full h-full z-0 object-cover" src={logo} alt="logotip ShaktiMa" />
            <div className="p-4 absolute bottom-0 left-0 z-0">{/* <h2 className="text-2xl font-semibold text-gray-100 leading-tight">МДЦ ШактиМа</h2> */}</div>
          </NavLink>
        </section>

        <main className="lg:flex">
          {/* post cards  */}
          <div className="min-[320px]:px-2 lg:px-0 w-full lg:w-2/3 lg:space-x-2">
            <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mt-1 lg:ml-2">Новости Московской сангхи</h5>

            {/* <div className="block w-full lg:flex lg:mb-10 mt-4">
              <img src={mahalakshmiJayanti} alt="Mahalakshmi Jayanti" className="h-40 w-40 opacity-90 object-cover lg:mr-4 p-0 rounded" />
              <div className="flex flex-col w-full h-40">
                <h3 className="dark:text-white  text-gray-700 font-bold text-2xl">Махалакшми Джаянти | Аяпа Джаянти | Холи</h3>
                <p className="dark:text-slate-400 text-gray-700">
                  Намасте, Драгоценные 🙏
                  <br />
                  В ближайший понедельник 25 марта нас ждет тройной праздник!
                  <br />
                  МАХАЛАКШМИ ДЖАЯНТИ, АЙЯПА ДЖАЯНТИ, ХОЛИ
                  <br />
                  Некоторое время в феврале назад мы почтили Ма Сарасвати - ее день явления считается первым шагом весны
                  <br />
                  Теперь мы отмечаем расцвет Шакти, возрождение, полную Весну с приходом Лакшми Ма <br />
                  Мы приглашаем вас <br />
                  📍25 марта <br />
                  📍18:00 <br />
                  📍Центр «Вершина» (м Курская/Чистые пруды) <br />
                  Приносите цветы, фрукты , дойнет и преданное сердце 🩷
                  <br /> Так же приглаем матадж на служение по подготовке праздника - обращайтесь к Мадхувидье в вотсап 89859274240🙏 <br />
                  Джей Ма💖
                </p>
              </div>
            </div> */}

            <iframe
              src="https://www.youtube.com/embed/6Rb7frU3Org?si=PflcaHrJjItMiAwD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-[500px] max-[400px]:h-72 lg:ml-2 mt-2 lg:pr-4 "
            />
            <h5 className="dark:text-white font-semibold text-lg  text-gray-700 lg:ml-2 mb-2">Видео с Махашиваратри 2024</h5>

            <section className="py-2 pr-2">
              {news.map((post) => {
                return <Column key={post.id} img={post.image} tittle={post.tittle} txt={post.description} />
              })}
            </section>
          </div>

          {/* topics */}
          <div className="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0">
            <div className="w-full md:w-1/2 lg:w-full mb-5">
              <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">Популярные статьи</h5>
              <ul>
                <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                  <NavLink to="/neoadwayta" className="dark:text-slate-400 flex items-center text-indigo-600">
                    <img src={logo} alt="logo" className="mr-2 rounded h-4 w-4" />
                    Как не попасть в ловушку поверхностной Адвайты
                  </NavLink>
                </li>
                <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                  <NavLink to="/mahashivaratri2024" className="dark:text-slate-400 flex items-center text-indigo-600">
                    <img src={logo} alt="logo" className="mr-2 rounded h-4 w-4" />
                    МахаШиваратри 2024
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-full">
              {/* divider */}
              <div className="border border-dotted border-red-700 dark:border-white md:hidden lg:block"></div>

              {/* subscribe */}
              <div className="my-5 md:my-0 lg:my-5">
                <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">Subscribe</h5>
                <p className="dark:text-slate-400 text-gray-600 mb-4">Subscribe to our newsletter</p>
                <input
                  placeholder="your email address"
                  type="email"
                  className="text-gray-700 bg-gray-100 w-full border rounded hover:border-gray-600 transition-all duration-300"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800 transition-all duration-300">Subscribe</button>
              </div>

              {/* divider */}
              <div className="border border-dotted  border-red-700 dark:border-white md:hidden lg:block"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
