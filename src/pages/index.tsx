import apiClient from "../services/api-client"
import MovieRow from "@/components/MovieRow"
import Hero from "@/components/Hero"

type Genre = {
  id: number
  name: string
}

type Recommendations = {
  results: Movie[]
}

type Similar = {
  results: Movie[]
}

export type Movie = {
  id: number
  title: string
  vote_average: number
  release_date: string
  poster_path: string | null
  backdrop_path: string | null
  overview: string
  genres: Genre[]
  revenue: number
  runtime: number | null
  status: string
  recommendations: Recommendations
  similar: Similar
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
      trending: trending.results,
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
      <Hero data={trending.slice(0, 10)} />
      <MovieRow title="Now Playing" data={nowPlaying} />
      <MovieRow title="Popular" data={popular} />
      <MovieRow title="Top Rated" data={topRated} />
      <MovieRow title="Upcoming" data={upcoming} />
    </>
  )
}

export default Home
