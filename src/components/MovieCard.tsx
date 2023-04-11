import Image from "next/image"
import { FaStar } from "react-icons/fa"

type MovieCardProps = {
  title: string
  rating: number
  release_date: string
  image: string | null
}

function MovieCard({ title, rating, release_date, image }: MovieCardProps) {
  const date = new Date(release_date)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const formattedDate = new Intl.DateTimeFormat("default", options).format(date)

  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-slate-700">
      <Image
        src={"https://image.tmdb.org/t/p/w500" + image}
        alt={title}
        width={500}
        height={500}
        className=" w-full object-cover"
      />
      <div className="absolute right-0 top-0 flex items-center gap-1 bg-green-600 p-1">
        <FaStar />
        <p className="text-xl text-white">{rating}</p>
      </div>
      <div className="flex h-full flex-col gap-2 p-4">
        <h2 className="flex-1 text-xl font-bold">{title}</h2>
        <p>{formattedDate}</p>
      </div>
    </div>
  )
}

export default MovieCard
