import Link from "next/link"
import genres from "../data/genres.json"

function DrawerContent() {
  const discovers = ["Now Playing", "Popular", "Top Rated", "Upcoming"]

  return (
    <div className="h-full overflow-y-auto p-4">
      <h1 className="text-2xl">Movie Night</h1>
      <div className="flex h-full flex-col justify-between">
        <hr className="my-4 border-slate-500" />
        <h2 className="mb-2 text-xl">Discover</h2>
        {discovers.map((discover) => (
          <div
            key={discover}
            className="flex h-full flex-col rounded-lg text-current hover:bg-slate-600"
          >
            <Link
              href={`/discover/${discover.toLowerCase()}`}
              className="my-auto px-4"
            >
              {discover}
            </Link>
          </div>
        ))}
        <hr className="my-4 border-slate-500" />
        <h2 className="mb-2 text-xl">Genres</h2>
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="flex h-full flex-col rounded-lg text-current hover:bg-slate-600"
          >
            <Link href={`/genre/${genre.id}`} className="my-auto px-4">
              {genre.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DrawerContent
