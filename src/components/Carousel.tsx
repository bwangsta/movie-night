import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import { Movie } from "@/pages"
import MovieRowItem from "./MovieRowItem"

type CarouselProps = {
  data: Movie[]
}

function Carousel({ data }: CarouselProps) {
  return (
    <Swiper
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
          <MovieRowItem title={movie.title} image={movie.poster_path} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
