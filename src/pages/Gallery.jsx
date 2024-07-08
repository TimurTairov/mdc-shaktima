import Article from '../components/Article'
import { allGallaries } from '../Gallary'

const Gallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 h-min-['100vh']">
      <h1 className="text-2xl ml-2">Галлерея</h1>
      <div className="flex flex-row flex-wrap justify-center">
        {allGallaries.map((article) => {
          return <Article key={article.id} img={article['img-url']} tittle={article.tittle} txt={article.description} url={article.url} />
        })}
      </div>
    </div>
  )
}

export default Gallery
