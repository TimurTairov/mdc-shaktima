import ImageGallery from 'react-image-gallery'
import { mshr_photos_2923 } from '../data/photos'

const MShR2023Photos = () => {
  const settings = {
    showBullets: true,
    showIndex: true,
    slideDuration: 1000,
    showFullscreenButton: true,
  }
  return (
    <div className="max-w-screen-xl mx-auto mt-4">
      <div className="mx-2">
        <h1 className="text-2xl ml-2">Фотографии с махашиваратри 2023</h1>

        <div className="mt-10 mb-10">
          <ImageGallery items={mshr_photos_2923} {...settings} />
        </div>
      </div>
    </div>
  )
}

export default MShR2023Photos
