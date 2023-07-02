import Image from "next/image"
import { useMovies } from "@/context/MoviesContext"

function MovieList() {
  const movies = useMovies()

  return (
    <div className="overflow-x-auto">
      <table className="mx-auto table w-full max-w-6xl">
        <thead>
          <tr>
            <th></th>
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
                    src={movie.image}
                    alt={movie.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </td>
                <td>{movie.title}</td>
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
