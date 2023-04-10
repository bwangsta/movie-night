import Image from "next/image"
import { Movie } from "@/pages"

type MovieGridProps = {
  data: Movie[]
}

function MovieGrid({ data }: MovieGridProps) {
  const movies = data.map((movie) => {
    return (
      <div key={movie.id}>
        <Image
          src={"https://image.tmdb.org/t/p/w185" + movie.poster_path}
          alt={movie.title}
          width={150}
          height={300}
        />
        <h2>{movie.title}</h2>
      </div>
    )
  })

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies}
    </div>
  )
}

export default MovieGrid
