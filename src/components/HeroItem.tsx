import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import placeholderImage from "../assets/images/placeholder.webp"

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
        src={
          image
            ? `https://image.tmdb.org/t/p/original${backdrop}`
            : placeholderImage
        }
        alt={title}
        fill
        sizes="100vw"
        priority
        className="object-cover object-top-center opacity-30"
      />
      <div className="mx-auto flex max-w-[70rem] flex-col items-center gap-4 px-6 py-4 md:flex-row md:gap-6 md:py-6">
        <Image
          src={
            image ? `https://image.tmdb.org/t/p/w342${image}` : placeholderImage
          }
          alt={title}
          width={342}
          height={513}
          priority
          className="z-10 rounded-xl shadow-2xl hover:cursor-pointer"
          onClick={() => router.push(`/movies/${id}`)}
        />
        <div className="z-10 hidden text-slate-200 md:block">
          <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
          <p className="mb-4 mt-2 max-h-[10rem] overflow-y-auto md:my-6">
            {overview}
          </p>
          <div className="flex gap-4">
            <Link href={`/movies/${id}`} className="btn border-0 bg-blue-600">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroItem
