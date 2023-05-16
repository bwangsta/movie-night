import { Genre } from "@/pages"
import Link from "next/link"

type GenreTagsProps = {
  genres: Genre[]
}

function GenreTags({ genres }: GenreTagsProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {genres.map((genre) => (
        <div key={genre.id} className="rounded-full bg-slate-500 px-3">
          <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default GenreTags
