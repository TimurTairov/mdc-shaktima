import ImageGallery from 'react-image-gallery'
import { paambatiJayanti2023 } from '../data/photos2'

const PaambatiJayanti2023 = () => {
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
        <h1 className="text-2xl ml-2">Фотографии с Паамбатиджаянти 2023</h1>

        <div className="mt-10 mb-10">
          <ImageGallery items={paambatiJayanti2023} {...settings} />
        </div>
      </div>
    </div>
  )
}

export default PaambatiJayanti2023
