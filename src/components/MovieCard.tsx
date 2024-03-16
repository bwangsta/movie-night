import Image from "next/image"
import { useRouter } from "next/router"
import placeholderImage from "../assets/images/placeholder.webp"
import Rating from "./Rating"

type MovieCardProps = {
  id: number
  title: string
  rating: number
  image: string | null
}

function MovieCard({ id, title, rating, image }: MovieCardProps) {
  const router = useRouter()

  return (
    <div
      className="hover:cursor-pointer"
      onClick={() => router.push(`/movies/${id}`)}
    >
      <div className="relative aspect-poster overflow-hidden rounded-xl">
        <Rating rating={rating} />
        <Image
          src={
            image ? `https://image.tmdb.org/t/p/w342${image}` : placeholderImage
          }
          alt={title}
          fill
          sizes="100vw, 
          (min-height: 330px) 50vw, 
          (min-height: 560px) 33vw, 
          (min-height: 735px) 25vw, 
          (min-height: 912px) 20vw"
          className="-z-10 object-cover"
        />
      </div>
      <h2 className="py-2 text-lg font-bold">{title}</h2>
    </div>
  )
}

export default MovieCard
