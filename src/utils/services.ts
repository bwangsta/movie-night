const API_KEY = process.env.API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const responses = {
  popular: {
    title: "Popular",
    url: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  },
  nowPlaying: {
    title: "Now Playing",
    url: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  },
  topRated: {
    title: "Top Rated",
    url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  },
  upcoming: {
    title: "Upcoming",
    url: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  },
}

export default responses
