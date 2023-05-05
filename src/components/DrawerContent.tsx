import Link from "next/link"
import genres from "../data/genres.json"

function DrawerContent() {
  return (
    <div className="h-full p-4">
      <h1 className="text-2xl">Movie Night</h1>
      <hr className="my-4 border-slate-500" />
      <h2 className="text-xl">Genres</h2>
      <ul className="flex h-[calc(100%-92px)] flex-col justify-between">
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
      </ul>
    </div>
  )
}

export default DrawerContent
