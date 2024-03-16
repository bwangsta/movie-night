import Layout from "@/components/Layout"
import MovieGrid from "@/components/MovieGrid"
import { GetServerSideProps } from "next"
import { Movie } from ".."

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
    <Layout title={`${query} - Movie Night`}>
      <div className="space-y-4 p-6">
        <h1 className="text-2xl">Search results for &quot;{query}&quot;</h1>
        <MovieGrid data={movies} />
      </div>
    </Layout>
  )
}

export default SearchPage
