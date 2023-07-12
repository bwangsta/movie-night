import Image from "next/image"
import placeholderImage from "../assets/images/placeholder.webp"

type MovieRowItemProps = {
  title: string
  image: string | null
}

function MovieRowItem({ title, image }: MovieRowItemProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-slate-700">
      <Image
        src={
          image ? `https://image.tmdb.org/t/p/w342${image}` : placeholderImage
        }
        alt={title}
        width={342}
        height={513}
      />
      <h2 className="absolute bottom-0 w-full flex-1 bg-slate-900 bg-opacity-90 p-2 text-base font-semibold text-slate-50 md:text-lg">
        {title}
      </h2>
    </div>
  )
}

export default MovieRowItem
