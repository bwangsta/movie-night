import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { Movie } from "@/pages"
import HeroItem from "./HeroItem"

type HeroProps = {
  data: Movie[]
}

function Hero({ data }: HeroProps) {
  return (
    <section className="mb-4 bg-base-300">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        longSwipes={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <HeroItem
              title={movie.title}
              image={movie.poster_path}
              overview={movie.overview}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero
