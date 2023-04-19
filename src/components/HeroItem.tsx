import Image from "next/image"
import Link from "next/link"

type HeroItemProps = {
  id: number
  title: string
  backdrop: string | null
  image: string | null
  overview: string
}

function HeroItem({ id, title, backdrop, image, overview }: HeroItemProps) {
  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1280${backdrop}')`,
      }}
      className="bg-gray-600 bg-cover bg-center bg-no-repeat bg-blend-multiply"
    >
      <div className="mx-auto flex max-w-[70rem] flex-col items-center gap-4 px-6 py-4 md:flex-row md:gap-6 md:py-6">
        {/* <Image
          src={"https://image.tmdb.org/t/p/w342" + image}
          alt={title}
          width={350}
          height={350}
          className="h-auto w-72 rounded-lg"
        /> */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"https://image.tmdb.org/t/p/w342" + image}
          alt={title}
          className="h-auto w-72 rounded-lg"
        />
        <div className="hidden md:block">
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="mb-4 mt-2 max-h-[10rem] overflow-y-auto md:my-6">
            {overview}
          </p>
          <button className="btn border-0 bg-blue-600">
            <Link href={`/movies/${id}`}>Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroItem
