import { GetServerSideProps } from "next"
import Image from "next/image"
import { Movie } from ".."
import { formatDate } from "@/utils/helpers"
import placeholderImage from "../../asssets/images/placeholder.webp"
import MovieRow from "@/components/MovieRow"
import GenreTags from "@/components/GenreTags"

type MovieProps = {
  movie: Movie
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${context.params?.id}?api_key=${process.env.API_KEY}&append_to_response=recommendations,similar`
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
      <div className="relative h-80 w-full overflow-hidden sm:h-[30rem]">
        <Image
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : placeholderImage
          }
          alt={movie.title}
          fill
          sizes="100vw"
          className="object-cover opacity-70"
          priority
        />
      </div>
      <div className="mx-auto grid max-w-4xl items-center justify-items-center gap-8 px-4 py-8 sm:grid-cols-[1fr_2fr]">
        <div className="relative h-96 w-full">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : placeholderImage
            }
            alt={movie.title}
            fill
            sizes="100vw
            (min-width: 640px) 50vw"
            className="object-contain sm:object-left"
          />
        </div>
        <div className="space-y-4 text-slate-100">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <GenreTags genres={movie.genres} />
          {movie.release_date && <p>{formatDate(movie.release_date)}</p>}
          <p>{movie.overview}</p>
        </div>
      </div>
      <MovieRow
        title="Recommended Movies"
        data={movie.recommendations.results}
        isLink={false}
      />
      <MovieRow
        title="Similar Movies"
        data={movie.similar.results}
        isLink={false}
      />
    </>
  )
}

export default Movie
