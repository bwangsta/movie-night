import Image from "next/image"
import Rating from "./Rating"
import { formatDate } from "@/utils/helpers"

type MovieCardProps = {
  title: string
  rating: number
  release_date: string
  image: string | null
}

function MovieCard({ title, rating, release_date, image }: MovieCardProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-slate-700">
      <Image
        src={"https://image.tmdb.org/t/p/w500" + image}
        alt={title}
        width={500}
        height={500}
        className="w-full object-cover"
      />
      <Rating rating={rating} />
      <div className="flex h-full flex-col gap-2 p-4">
        <h2 className="flex-1 text-lg font-bold">{title}</h2>
        {release_date && <p>{formatDate(release_date)}</p>}
      </div>
    </div>
  )
}

export default MovieCard
