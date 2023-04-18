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
    <div className="px-8 py-2">
      <h2 className="mb-2 text-2xl">{title}</h2>
      <Swiper
        slidesPerView={2}
        grabCursor={true}
        spaceBetween={12}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1536: {
            slidesPerView: 7,
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
