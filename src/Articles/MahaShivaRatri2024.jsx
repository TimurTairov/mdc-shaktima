import React from 'react'
import MyCarousel from '../components/MyCarousel'

const slider = ['https://i.ibb.co/ncrXc2V/1.png', 'https://i.ibb.co/B3s7v4h/2.png', 'https://i.ibb.co/XXR8kzF/3.png', 'https://i.ibb.co/yg7BSdM/4.png']

const MahaShivaRatri2024 = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <h3 className="dark:text-white  text-gray-700 font-bold text-2xl mx-2">Махашиваратри 2024</h3>
      <div className="dark:text-slate-400 text-gray-700 mx-2">
        <p>Махашиваратри в этом году удался на славу Махадэву в прекрасном зале "Энергия Баланса".</p>
        <p>
          У нас было четыре пуджи, динамическая медитация, танцы, йога, чай, ханг, общение и прасад. На праздник пришло около 50 практикующих, многие из которых
          держали пост. Это было по-настоящему бхавно, весело и интересно. Милость Ануграха Шакти лилась неиссякаемым потоком. Вся ночь пролетела в одно
          мгновение.
        </p>
        <p>Ом Намах Шивая</p>
        <p>Хара Хара Махадева</p>
      </div>
      <MyCarousel className="mb-30" />
    </div>
  )
}

export default MahaShivaRatri2024
