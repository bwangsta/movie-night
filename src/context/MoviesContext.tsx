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

export type WatchStatus =
  | "Completed"
  | "Watching"
  | "Plan To Watch"
  | "Add To List"
  | "Remove From List"
  | undefined

type MovieListItem = {
  id: number
  title: string
  image: string | StaticImageData
  status: WatchStatus
}

type MoviesAction = {
  type: string
  id: number
  title?: string
  image?: string | StaticImageData | null
  status?: WatchStatus
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
        {
          id: action.id,
          title: action.title!,
          image: action.image!,
          status: action.status!,
        },
      ]
    }
    case "changed": {
      return movies.map((movie) => {
        if (movie.id === action.id) {
          return { ...movie, status: action.status }
        }
        return movie
      })
    }
    case "removed": {
      return movies.filter((movie) => action.id !== movie.id)
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}
