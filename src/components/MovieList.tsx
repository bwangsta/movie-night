import { useMovies, useMoviesDispatch } from "@/context/MoviesContext"
import Image from "next/image"
import Link from "next/link"
import placeholderImage from "../assets/images/placeholder.webp"
import EditMovie from "./EditMovie"

function MovieList() {
  const movies = useMovies()
  const dispatch = useMoviesDispatch()

  return (
    <div className="overflow-x-auto">
      <table className="mx-auto table w-full max-w-6xl">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Title</th>
            <th>Status</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            return (
              <tr key={movie.id}>
                <td>{index + 1}</td>
                <td className="relative h-40 p-0">
                  <Image
                    src={
                      movie.image
                        ? `https://image.tmdb.org/t/p/w185${movie.image}`
                        : placeholderImage
                    }
                    alt={movie.title}
                    fill
                    sizes="20vw"
                    className="object-contain"
                  />
                </td>
                <td>
                  <Link href={`/movies/${movie.id}`} className="text-xl">
                    {movie.title}
                  </Link>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="btn-link block text-sm text-blue-500"
                      onClick={() =>
                        dispatch({
                          type: "removed",
                          id: movie.id,
                        })
                      }
                    >
                      Remove
                    </button>
                    <EditMovie
                      id={movie.id}
                      title={movie.title}
                      status={movie.status}
                    />
                  </div>
                </td>
                <td>{movie.status}</td>
                <td>{movie.score}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
