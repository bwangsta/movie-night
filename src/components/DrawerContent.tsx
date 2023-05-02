import Link from "next/link"

function DrawerContent() {
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "TV Movie",
    "Thriller",
    "War",
    "Western",
  ]

  return (
    <div className="h-full p-4">
      <h1 className="text-2xl">Movie Night</h1>
      <hr className="my-4 border-slate-500" />
      <h2 className="text-xl">Genres</h2>
      <ul className="flex h-[calc(100%-92px)] flex-col justify-between">
        {genres.map((genre) => (
          <div
            key={genre}
            className="flex h-full flex-col rounded-lg text-current hover:bg-slate-600"
          >
            <Link href="" className="my-auto px-4">
              {genre}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default DrawerContent
