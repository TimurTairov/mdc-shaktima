import ImageGallery from 'react-image-gallery'
import { brahmanandaJayanti2024 } from '../data/photos2'

const BrahmanandaJayanti2024 = () => {
  const settings = {
    showBullets: true,
    showIndex: true,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: true,
    lazyLoad: true,
  }
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="mx-2">
        <h1 className="text-2xl ml-2">Фотографии со дня явления Брахмананды 2023</h1>

        <div className="mt-10 mb-10">
          <ImageGallery items={brahmanandaJayanti2024} {...settings} />
        </div>
      </div>
    </div>
  )
}

export default BrahmanandaJayanti2024
