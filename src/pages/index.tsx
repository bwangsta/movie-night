import MovieGrid from "@/components/MovieGrid"
import Navbar from "@/components/Navbar"
import apiClient from "../services/api-client"
import MovieRow from "@/components/MovieRow"
import Hero from "@/components/Hero"

export type Movie = {
  id: number
  title: string
  vote_average: number
  release_date: string
  poster_path: string | null
  overview: string
}

type HomeProps = {
  nowPlaying: Movie[]
  popular: Movie[]
  topRated: Movie[]
  upcoming: Movie[]
  trending: Movie[]
}

export async function getStaticProps() {
  const [nowPlaying, popular, topRated, upcoming, trending] = await Promise.all(
    [
      fetch(`${apiClient.nowPlaying}`).then((response) => response.json()),
      fetch(`${apiClient.popular}`).then((response) => response.json()),
      fetch(`${apiClient.topRated}`).then((response) => response.json()),
      fetch(`${apiClient.upcoming}`).then((response) => response.json()),
      fetch(`${apiClient.trending}`).then((response) => response.json()),
    ]
  )

  return {
    props: {
      nowPlaying: nowPlaying.results,
      popular: popular.results,
      topRated: topRated.results,
      upcoming: upcoming.results,
      trending: trending.results
    },
  }
}

function Home({
  nowPlaying,
  popular,
  topRated,
  upcoming,
  trending,
}: HomeProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero data={trending} />
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
