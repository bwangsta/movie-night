import { GetServerSideProps } from "next"
import Image from "next/image"
import { Movie } from ".."
import { formatDate } from "@/utils/helpers"

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
    <>
      <div
        className="relative min-h-offset bg-black"
        style={{
          clipPath: "inset(0 0 0 0)",
        }}
      >
        <div className="fixed left-0 top-0 h-full w-full">
          <Image
            src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
            alt={movie.title}
            fill
            className="bg-fixed object-cover opacity-25"
            priority
          />
        </div>
        <div className="absolute grid min-h-offset items-center justify-items-center gap-6 p-8 md:grid-cols-2">
          <Image
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
            width={300}
            height={300}
            className="h-auto rounded-lg"
          />
          <div className="space-y-4 text-slate-100">
            <h1 className="text-4xl">{movie.title}</h1>
            <div className="flex flex-wrap gap-1">
              {movie.genres.map((genre) => (
                <div key={genre.id} className="rounded-full bg-slate-500 px-2">
                  <p>{genre.name}</p>
                </div>
              ))}
            </div>
            <p>Status: {movie.status}</p>
            {movie.release_date && <p>{formatDate(movie.release_date)}</p>}
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie
