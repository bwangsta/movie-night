import { Movie } from "@/pages"
import MovieCard from "./MovieCard"

type MovieGridProps = {
  data: Movie[]
}

function MovieGrid({ data }: MovieGridProps) {
  return (
    <div className="grid grid-cols-fluid gap-4">
      {data.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          release_date={movie.release_date}
          image={movie.poster_path}
        />
      ))}
    </div>
  )
}

export default MovieGrid
