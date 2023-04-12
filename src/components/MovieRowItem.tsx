import Image from "next/image"

type MovieRowItemProps = {
  title: string
  image: string | null
}

function MovieRowItem({ title, image }: MovieRowItemProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-slate-700">
      <Image
        src={"https://image.tmdb.org/t/p/w500" + image}
        alt={title}
        width={500}
        height={500}
        className=" w-full object-cover"
      />
      <h2 className="absolute bottom-0 w-full flex-1 bg-slate-900 bg-opacity-80 p-2 text-xl font-bold text-slate-50">
        {title}
      </h2>
    </div>
  )
}

export default MovieRowItem
