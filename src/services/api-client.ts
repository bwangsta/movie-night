const API_KEY = process.env.API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

export default {
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
  trending: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
}
