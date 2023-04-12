import MovieGrid from "@/components/MovieGrid"
import Navbar from "@/components/Navbar"
import apiClient from "../services/api-client"
import MovieRow from "@/components/MovieRow"

export type Movie = {
  id: number
  title: string
  vote_average: number
  release_date: string
  poster_path: string | null
}

type HomeProps = {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
}

export async function getStaticProps() {
  const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
    fetch(`${apiClient.nowPlaying}`).then((response) => response.json()),
    fetch(`${apiClient.popular}`).then((response) => response.json()),
    fetch(`${apiClient.topRated}`).then((response) => response.json()),
    fetch(`${apiClient.upcoming}`).then((response) => response.json()),
  ])

  return {
    props: {
      nowPlaying: nowPlaying.results,
      popular: popular.results,
      topRated: topRated.results,
      upcoming: upcoming.results,
    },
  }
}

function Home({ nowPlaying, popular, topRated, upcoming }: HomeProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <MovieRow title="Now Playing" data={nowPlaying} />
        <MovieRow title="Popular" data={popular} />
        <MovieRow title="Top Rated" data={topRated} />
        <MovieRow title="Upcoming" data={upcoming} />
        {/* <MovieGrid data={nowPlayingData} /> */}
      </main>
    </>
  )
}

export default Home
