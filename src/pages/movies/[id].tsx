import GenreTags from "@/components/GenreTags"
import Layout from "@/components/Layout"
import MovieRow from "@/components/MovieRow"
import StatusDropdown from "@/components/StatusDropdown"
import { formatDate } from "@/utils/helpers"
import { GetServerSideProps } from "next"
import Image from "next/image"
import { Movie } from ".."
import placeholderImage from "../../assets/images/placeholder.webp"

type MoviePageProps = {
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

function MoviePage({ movie }: MoviePageProps) {
  return (
    <Layout title={`${movie.title} - Movie Night`}>
      <div className="relative h-72 w-full overflow-hidden sm:h-96 lg:h-[30rem] 2xl:h-[35rem]">
        <Image
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : placeholderImage
          }
          alt={movie.title}
          fill
          sizes="100vw"
          className="object-cover object-top-center opacity-70"
          priority
        />
      </div>
      <div className="mx-auto grid max-w-6xl items-center justify-items-center gap-12 px-4 py-8 sm:grid-cols-[1fr_2fr]">
        <div className="relative aspect-poster w-72 overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : placeholderImage
            }
            alt={movie.title}
            fill
          />
        </div>
        <div className="space-y-4 text-slate-100">
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <GenreTags genres={movie.genres} />
          {movie.release_date && <p>{formatDate(movie.release_date)}</p>}
          <p>{movie.overview}</p>
          <StatusDropdown
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
          />
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
    </Layout>
  )
}

export default MoviePage
