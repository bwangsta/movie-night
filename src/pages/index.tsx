import MovieGrid from "@/components/MovieGrid"

export type Movie = {
  id: number
  title: string
  popularity: number
  overview: string
  release_date: string
  poster_path: string | null
}

type Response = {
  page: number
  results: Movie[]
}

type HomeProps = {
  data: Movie[]
}

export async function getStaticProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`
  )
  const data: Response = await response.json()

  return {
    props: { data: data.results },
  }
}

function Home({ data }: HomeProps) {
  return (
    <main>
      <MovieGrid data={data} />
    </main>
  )
}

export default Home
