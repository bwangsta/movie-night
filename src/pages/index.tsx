import MovieGrid from "@/components/MovieGrid"
import Navbar from "@/components/Navbar"
import services from "../utils/services"

export type Movie = {
  id: number
  title: string
  vote_average: number
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
  const response = await fetch(`${services.nowPlaying.url}`)
  const data: Response = await response.json()

  return {
    props: { data: data.results },
  }
}

function Home({ data }: HomeProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MovieGrid data={data} />
      </main>
    </>
  )
}

export default Home
