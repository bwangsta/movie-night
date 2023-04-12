import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { Movie } from "@/pages"
import MovieCard from "./MovieCard"

type MovieRowProps = {
  title: string
  data: Movie[]
}

function MovieRow({ title, data }: MovieRowProps) {
  return (
    <div className="p-4">
      <h2 className="mb-2 text-2xl">{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={2}
        grabCursor={true}
        spaceBetween={8}
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
            <MovieCard
              title={movie.title}
              rating={movie.vote_average}
              release_date={movie.release_date}
              image={movie.poster_path}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieRow
