import { GetServerSideProps } from "next"
import { Movie } from ".."
import MovieGrid from "@/components/MovieGrid"

type SearchPageProps = {
  movies: Movie[]
  query: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${context.query.q}`
  )
  const data = await response.json()

  return {
    props: {
      movies: data.results,
      query: context.query.q,
    },
  }
}

function SearchPage({ movies, query }: SearchPageProps) {
  return (
    <div className="space-y-4 px-6">
      <h1 className="text-2xl">Search results for &quot;{query}&quot;</h1>
      <MovieGrid data={movies} />
    </div>
  )
}

export default SearchPage
