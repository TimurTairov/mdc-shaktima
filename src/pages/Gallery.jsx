import Article from '../components/Article'
import { allGallaries } from '../Gallary'

const Gallery = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-4 lg:h-screen">
      <h1 className="text-2xl ml-2">Галлерея</h1>
      {allGallaries.map((article) => {
        return <Article key={article.id} img={article['img-url']} tittle={article.tittle} txt={article.description} url={article.url} />
      })}
    </div>
  )
}

export default Gallery
