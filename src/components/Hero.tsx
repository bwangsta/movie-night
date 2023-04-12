import Image from "next/image"
import { Movie } from "@/pages"

type HeroProps = {
  data: Movie[]
}

function Hero({ data }: HeroProps) {
  const movie = data[0]
  return (
    <section className="bg-base-200 mb-4">
      <div className="mx-auto flex max-w-[70rem] flex-col items-center justify-items-center gap-6 md:flex-row p-6">
        <Image
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt={movie.title}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-2xl font-bold md:text-5xl">{movie.title}</h1>
          <p className="py-2 md:py-6">{movie.overview}</p>
          <button className="btn-primary btn">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
