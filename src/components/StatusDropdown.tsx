import { useEffect, useMemo, useRef, useState } from "react"
import {
  useMoviesDispatch,
  WatchStatus,
  useMovies,
} from "@/context/MoviesContext"

type StatusDropdownProps = {
  id: number
  title: string
  image: string | null
}

function StatusDropdown({ id, title, image }: StatusDropdownProps) {
  const movies = useMovies()
  const dispatch = useMoviesDispatch()
  const [watchStatus, setWatchStatus] = useState<WatchStatus>("Add To List")
  const dropdownRef = useRef<HTMLUListElement>(null)

  const movie = useMemo(
    () => movies.find((movie) => movie.id === id),
    [movies, id]
  )
  useEffect(() => {
    if (movie) {
      setWatchStatus(movie.status)
    }
  }, [movie])

  function handleDropdownClick(status: WatchStatus) {
    setWatchStatus(status)
    dropdownRef?.current?.blur()

    if (!movie) {
      dispatch({
        type: "added",
        id: id,
        title: title,
        image: image,
        status: status,
      })
      return
    }

    if (status === "Remove From List") {
      dispatch({
        type: "removed",
        id: id,
      })
      setWatchStatus("Add To List")
    } else if (status !== watchStatus) {
      dispatch({
        type: "changed",
        id: id,
        status: status,
      })
    }
  }

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-0 bg-blue-600">
        {watchStatus}
      </label>
      <ul
        tabIndex={0}
        ref={dropdownRef}
        className="dropdown-content menu rounded-box z-[1] w-52 bg-blue-600 p-2 shadow"
      >
        <li onClick={() => handleDropdownClick("Completed")}>
          <a>Completed</a>
        </li>
        <li onClick={() => handleDropdownClick("Watching")}>
          <a>Watching</a>
        </li>
        <li onClick={() => handleDropdownClick("Plan To Watch")}>
          <a>Plan To Watch</a>
        </li>
        {movie && (
          <>
            <hr />
            <li onClick={() => handleDropdownClick("Remove From List")}>
              <a>Remove From List</a>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default StatusDropdown
