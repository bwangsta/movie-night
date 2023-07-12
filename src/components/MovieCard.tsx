import Link from "next/link"
import Image from "next/image"
import Rating from "./Rating"
import placeholderImage from "../assets/images/placeholder.webp"

type MovieCardProps = {
  id: number
  title: string
  rating: number
  image: string | null
}

function MovieCard({ id, title, rating, image }: MovieCardProps) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-xl">
        <Rating rating={rating} />
        <Image
          src={
            image ? `https://image.tmdb.org/t/p/w342${image}` : placeholderImage
          }
          alt={title}
          width={342}
          height={513}
        />
      </div>
      <h2 className="py-2 text-lg font-bold">
        <Link href={`/movies/${id}`}>{title}</Link>
      </h2>
    </div>
  )
}

export default MovieCard
