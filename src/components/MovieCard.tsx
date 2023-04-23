import Link from "next/link"
import Image from "next/image"
import Rating from "./Rating"
import { formatDate } from "@/utils/helpers"

type MovieCardProps = {
  id: number
  title: string
  rating: number
  release_date: string
  image: string | null
}

function MovieCard({ id, title, rating, release_date, image }: MovieCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-slate-700">
      <div className="relative h-96 w-full">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt={title}
          fill
          sizes="50vw"
          className="object-cover"
        />
        <Rating rating={rating} />
      </div>
      <h2 className="flex-1 p-4 pb-0 text-lg font-bold">
        <Link href={`/movies/${id}`}>{title}</Link>
      </h2>
      {release_date && <p className="p-4">{formatDate(release_date)}</p>}
    </div>
  )
}

export default MovieCard
