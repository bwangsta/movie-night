import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Movie } from "@/pages"
import MovieRowItem from "./MovieRowItem"
import Link from "next/link"

type MovieRowProps = {
  title: string
  data: Movie[]
  isLink?: boolean
}

function MovieRow({ title, data, isLink = true }: MovieRowProps) {
  return (
    <div className="px-4 py-2">
      {isLink ? (
        <Link
          href={`/discover/${title.toLowerCase()}`}
          className="mb-2 inline-block text-2xl"
        >
          {title}
        </Link>
      ) : (
        <h2 className="mb-2 text-2xl">{title}</h2>
      )}
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
          1440: {
            slidesPerView: 8,
          },
          2000: {
            slidesPerView: 9,
          },
          2560: {
            slidesPerView: 10,
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
