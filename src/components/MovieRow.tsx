import { Movie } from "@/pages"
import Carousel from "./Carousel"

type MovieRowProps = {
  title: string
  data: Movie[]
}

function MovieRow({ title, data }: MovieRowProps) {
  return (
    <div className="p-4">
      <h2 className="mb-2 text-2xl">{title}</h2>
      <Carousel data={data} />
    </div>
  )
}

export default MovieRow
