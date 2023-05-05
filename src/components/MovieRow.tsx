import { Swiper, SwiperSlide } from "swiper/react"
import { Movie } from "@/pages"
import MovieRowItem from "./MovieRowItem"
import Link from "next/link"

type MovieRowProps = {
  title: string
  data: Movie[]
}

function MovieRow({ title, data }: MovieRowProps) {
  return (
    <div className="px-4 py-2">
      <Link href={`/discover/${title.toLowerCase()}`} className="text-2xl">
        {title}
      </Link>
      <Swiper
        slidesPerView={2}
        grabCursor={true}
        spaceBetween={12}
        breakpoints={{
          425: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 7,
          },
          1536: {
            slidesPerView: 8,
          },
        }}
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <MovieRowItem title={movie.title} image={movie.poster_path} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieRow
