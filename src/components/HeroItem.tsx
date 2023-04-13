import Image from "next/image"

type HeroItemProps = {
  title: string
  image: string | null
  overview: string
}

function HeroItem({ title, image, overview }: HeroItemProps) {
  return (
    <div className="mx-auto flex max-w-[70rem] flex-col items-center gap-4 px-6 py-4 md:flex-row md:gap-6 md:py-6">
      <Image
        src={"https://image.tmdb.org/t/p/w500" + image}
        alt={title}
        width={250}
        height={250}
        className="rounded-lg"
      />
      <div className="mb-6">
        <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
        <p className="mb-4 mt-2 max-h-[10rem] overflow-y-auto md:my-6">
          {overview}
        </p>
        <button className="btn bg-blue-600">Learn More</button>
      </div>
    </div>
  )
}

export default HeroItem
