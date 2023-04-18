import { GetServerSideProps } from "next"
import Image from "next/image"
import { Movie } from ".."

type MovieProps = {
  movie: Movie
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params?.id}?api_key=${process.env.API_KEY}`
  )
  const movie = await response.json()

  return {
    props: {
      movie: movie,
    },
  }
}

function Movie({ movie }: MovieProps) {
  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 md:grid-cols-2">
      <Image
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
        width={400}
        height={400}
      />
      <div>
        <h1 className="text-3xl">{movie.title}</h1>
        <div className="flex flex-wrap gap-1">
          {movie.genres.map((genre) => (
            <div key={genre.id} className="rounded-full bg-slate-500 px-2">
              <p>{genre.name}</p>
            </div>
          ))}
        </div>
        <p>Status: {movie.status}</p>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default Movie
