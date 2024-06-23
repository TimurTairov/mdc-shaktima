import React from 'react'
import MyCarousel from '../components/MyCarousel'
import img1 from '../images/MahaShivaRatri2024/img1.jpg'
import img2 from '../images/MahaShivaRatri2024/img2.jpg'
import img3 from '../images/MahaShivaRatri2024/img3.jpg'
import img4 from '../images/MahaShivaRatri2024/img4.jpg'
import img5 from '../images/MahaShivaRatri2024/img5.jpg'

const MahaShivaRatri2024 = () => {
  const slides = [img1, img2, img3, img4, img5]
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="mx-2">
        <h3 className="dark:text-white text-gray-700 font-bold text-2xl">Махашиваратри 2024</h3>
        <div className="dark:text-slate-400 text-gray-700">
          <p>Махашиваратри в этом году удался на славу Махадэву в прекрасном зале "Энергия Баланса".</p>
          <p>
            У нас было четыре пуджи, динамическая медитация, танцы, йога, чай, ханг, общение и прасад. На праздник пришло около 50 практикующих, многие из
            которых держали пост. Это было по-настоящему бхавно, весело и интересно. Милость Ануграха Шакти лилась неиссякаемым потоком. Вся ночь пролетела в
            одно мгновение.
          </p>
          <p>Ом Намах Шивая</p>
          <p>Хара Хара Махадева</p>
        </div>

        <div className="mt-20">
          <h5 className="dark:text-white font-semibold text-lg  text-gray-700 lg:ml-2 mb-2">Видео с Махашиваратри</h5>
          <iframe
            src="https://www.youtube.com/embed/6Rb7frU3Org?si=PflcaHrJjItMiAwD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-[500px] max-[400px]:h-72 lg:ml-2 mt-2 lg:pr-4 "
          />
        </div>

        <div className="mt-20">
          <h5 className="dark:text-white font-semibold text-lg  text-gray-700 lg:ml-2 mb-2">Фото с Махашиваратри</h5>
          <MyCarousel slides={slides} />
        </div>
      </div>
    </div>
  )
}

export default MahaShivaRatri2024
