import ImageGallery from 'react-image-gallery'
import { mshr_photos_1, mshr_photos_2 } from '../data/photos'

const MShR2024Photos = () => {
  const settings = {
    showBullets: true,
    showIndex: true,
    slideDuration: 1000,
    showFullscreenButton: true,
  }
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="mx-2">
        <h1 className="text-2xl ml-2">Фотографии с махашиваратри 2024</h1>

        <div className="mt-10 mb-10">
          <h5 className="dark:text-white font-semibold text-lg  text-gray-700 lg:ml-2 mb-2">Фото с Махашиваратри 2024. Часть 1.</h5>
          <ImageGallery items={mshr_photos_1} {...settings} />
        </div>
        <div className="mt-10 mb-10">
          <h5 className="dark:text-white font-semibold text-lg  text-gray-700 lg:ml-2 mb-2">Фото с Махашиваратри 2024. Часть 2.</h5>
          <ImageGallery items={mshr_photos_2} {...settings} />
        </div>
      </div>
    </div>
  )
}

export default MShR2024Photos
