import React from 'react'
import { NavLink } from 'react-router-dom'
import { news } from '../data/News'
import logo from '../images/ShaktiMa-logo.jpg'
import Column from '../components/Column'
import ImageGallery from 'react-image-gallery'
import { home_banner_1 } from '../data/photos'

const Home = () => {
  const settings = {
    showBullets: false,
    showIndex: false,
    slideDuration: 2500,
    slideInterval: 5000,
    showFullscreenButton: false,
    showNav: false,
    showPlayButton: false,
    autoPlay: true,
  }
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-4">
        {/* banners */}
        <section className="px-2 lg:flex justify-between lg:space-x-2">
          <NavLink
            to="/"
            className="w-full lg:w-7/12 h-48 md:h-96 lg:h-96 mb-4 relative rounded-xl inline-block overflow-hidden bg-gradient-to-r from-red-500 to-red-700"
          >
            <div className="absolute left-0 top-0 w-full h-full z-0 bg-gradient-to-b from-black/10 to-black/80"></div>
            <ImageGallery items={home_banner_1} {...settings} />
            {/* <img
              className="absolute left-0 top-0  w-full h-auto lg:h-full z-0 object-cover"
              src="https://sun9-53.userapi.com/impg/HbOouWkPke2xMcbvOLqydh1j5on_JSevFOsHRw/vQs0ZFhU9Yk.jpg?size=1024x576&quality=95&sign=3d4562ceaa64fa6e6e51f7e82e15f765&type=album"
              alt="MahaShivaRatri 2024"
            /> */}
            {/* <div className="p-4 absolute bottom-0 left-0">
              <h2 className="text-2xl font-semibold text-red-500 leading-tight">Московский Дхарма центр ШактиМа</h2>
            </div> */}
          </NavLink>

          <NavLink className="w-full lg:w-4/12 bg-purple-300 h-96 mb-4 relative rounded-xl inline-block overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-full z-0 bg-gradient-to-b from-black/10 to-black/80"></div>
            <img className="absolute left-0 top-0 w-full h-full z-0 object-contain lg:object-cover" src={logo} alt="logotip ShaktiMa" />
            <div className="p-4 absolute bottom-0 left-0 z-0">{/* <h2 className="text-2xl font-semibold text-gray-100 leading-tight">МДЦ ШактиМа</h2> */}</div>
          </NavLink>
        </section>

        <main className="lg:flex">
          {/* news  */}
          <div className="min-[320px]:px-2 lg:px-0 w-full lg:w-2/3 lg:space-x-2">
            <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mt-1 lg:ml-2">Новости Московской сангхи</h5>

            <section className="py-2 pr-2">
              {news.map((post) => {
                return <Column key={post.id} img={post.image} title={post.title} txt={post.description} url={post.url} url_info={post.url_info} />
              })}
            </section>
          </div>

          {/* topics */}
          <div className="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0">
            <div className="w-full md:w-1/2 lg:w-full mb-5">
              <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">Популярные статьи</h5>
              <ul>
                <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                  <NavLink to="/eventlist2024" className="dark:text-slate-400 flex items-center text-indigo-600 hover:underline">
                    <img src={logo} alt="logo" className="mr-2 rounded h-4 w-4" />
                    Календарь событий 2024
                  </NavLink>
                </li>
                <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                  <NavLink to="/mahashivaratri2024" className="dark:text-slate-400 flex items-center text-indigo-600 hover:underline">
                    <img src={logo} alt="logo" className="mr-2 rounded h-4 w-4" />
                    МахаШиваРатри 2024
                  </NavLink>
                </li>
                <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-1 border-y border-white hover:border-gray-200 transition-all duration-300">
                  <NavLink to="/neoadwayta" className="dark:text-slate-400 flex items-center text-indigo-600 hover:underline">
                    <img src={logo} alt="logo" className="mr-2 rounded h-4 w-4" />
                    Как не попасть в ловушку поверхностной Адвайты
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-full">
              {/* divider */}
              <div className="border border-dotted border-red-700 dark:border-white md:hidden lg:block"></div>

              {/* subscribe */}
              {/* <div className="my-5 md:my-0 lg:my-5">
                <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">Subscribe</h5>
                <p className="dark:text-slate-400 text-gray-600 mb-4">Subscribe to our newsletter</p>
                <input
                  placeholder="your email address"
                  type="email"
                  className="text-gray-700 bg-gray-100 w-full border rounded hover:border-gray-600 transition-all duration-300"
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800 transition-all duration-300">Subscribe</button>
              </div> */}

              {/* divider */}
              {/* <div className="border border-dotted  border-red-700 dark:border-white md:hidden lg:block"></div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
