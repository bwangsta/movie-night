import Image from "next/image"
import Link from "next/link"
import placeholderImage from "../asssets/images/placeholder.webp"
import { useMovies, useMoviesDispatch } from "@/context/MoviesContext"

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
                    sizes="100vw"
                    className="object-contain"
                  />
                </td>
                <td>
                  <Link href={`/movies/${movie.id}`} className="text-xl">
                    {movie.title}
                  </Link>
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
                </td>
                <td>10</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList
