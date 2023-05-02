import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"

type HeroItemProps = {
  id: number
  title: string
  backdrop: string | null
  image: string | null
  overview: string
}

function HeroItem({ id, title, backdrop, image, overview }: HeroItemProps) {
  const router = useRouter()

  return (
    <div className="relative bg-black">
      <Image
        src={`https://image.tmdb.org/t/p/w1280${backdrop}`}
        alt={title}
        fill
        sizes="50vw"
        priority
        className="object-cover opacity-30"
      />
      <div className="mx-auto flex max-w-[70rem] flex-col items-center gap-4 px-6 py-4 md:flex-row md:gap-6 md:py-6">
        <div className="relative h-[35rem] w-full">
          <Image
            src={"https://image.tmdb.org/t/p/w500" + image}
            alt={title}
            fill
            priority
            sizes="50vw"
            className="object-contain hover:cursor-pointer"
            onClick={() => router.push(`/movies/${id}`)}
          />
        </div>
        <div className="z-10 hidden text-slate-200 md:block">
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="mb-4 mt-2 max-h-[10rem] overflow-y-auto md:my-6">
            {overview}
          </p>
          <Link href={`/movies/${id}`} className="btn border-0 bg-blue-600">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroItem
