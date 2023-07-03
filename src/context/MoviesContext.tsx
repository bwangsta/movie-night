import { StaticImageData } from "next/image"
import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  Dispatch,
} from "react"

const MoviesContext = createContext([] as MovieListItem[])
const MoviesDispatchContext = createContext({} as Dispatch<MoviesAction>)

type MoviesProviderProps = {
  children: ReactNode
}

type MovieListItem = {
  id: number
  title: string
  image: string | StaticImageData
}

type MoviesAction = {
  type: string
  id: number
  title?: string
  image?: string | StaticImageData | null
}

export function useMovies() {
  return useContext(MoviesContext)
}

export function useMoviesDispatch() {
  return useContext(MoviesDispatchContext)
}

export function MoviesProvider({ children }: MoviesProviderProps) {
  const [movies, dispatch] = useReducer(moviesReducer, [])

  return (
    <MoviesContext.Provider value={movies}>
      <MoviesDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesDispatchContext.Provider>
    </MoviesContext.Provider>
  )
}

function moviesReducer(
  movies: MovieListItem[],
  action: MoviesAction
): MovieListItem[] {
  switch (action.type) {
    case "added": {
      // Check if movie exists in the movies list
      const movie = movies.find((movie) => movie.id === action.id)

      // If the movie already exists in the list
      if (movie !== undefined) {
        return movies
      }

      return [
        ...movies,
        { id: action.id, title: action.title!, image: action.image! },
      ]
    }
    case "removed": {
      const selectedMovie = movies.find((movie) => movie.id === action.id)

      return movies.filter((movie) => selectedMovie?.id !== movie.id)
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}
