import Layout from "@/components/Layout"
import MovieGrid from "@/components/MovieGrid"
import { GetStaticPaths, GetStaticProps } from "next"
import { Movie } from ".."
import genres from "../../data/genres.json"

type GenrePageProps = {
  data: Movie[]
  genreId: number
}

type GenreMap = {
  [id: number]: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: genres.map((genre) => ({
      params: {
        id: genre.id.toString(),
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const genreId = context.params?.id
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`
  )
  const data = await response.json()

  return {
    props: {
      data: data.results,
      genreId: Number(genreId),
    },
  }
}

function GenrePage({ data, genreId }: GenrePageProps) {
  const genreMap: GenreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  }
  const genre = genreMap[genreId]

  return (
    <Layout title={`${genre} Movies - Movie Night`}>
      <div className="p-4">
        <h1 className="mb-4 text-3xl font-bold">{genre} Movies</h1>
        <MovieGrid data={data} />
      </div>
    </Layout>
  )
}

export default GenrePage
