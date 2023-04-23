import Image from "next/image"

type MovieRowItemProps = {
  title: string
  image: string | null
}

function MovieRowItem({ title, image }: MovieRowItemProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-slate-700">
      <div className="relative h-80 w-full">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + image}
          alt={title}
          fill
          sizes="50vw,
          (min-width: 425px) 33vw,
          (min-width: 640px) 25vw,
          (min-width: 768px) 20vw,
          (min-width: 1024px) 17vw,
          (min-width: 1280px) 15vw,
          (min-width: 1536px) 13vw"
          className="object-cover"
        />
      </div>
      <h2 className="absolute bottom-0 w-full flex-1 bg-slate-900 bg-opacity-80 p-2 text-base font-bold text-slate-50 md:text-xl">
        {title}
      </h2>
    </div>
  )
}

export default MovieRowItem
