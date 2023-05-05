import { GetStaticPaths, GetStaticProps } from "next"
import MovieGrid from "@/components/MovieGrid"
import { Movie } from ".."

type DiscoverPageProps = {
  data: Movie[]
  title: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ["now playing", "popular", "top rated", "upcoming"]
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Replaces all spaces with an underscore
  const formattedSlug = params?.slug?.toString().replace(/ /g, "_")
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${formattedSlug}?api_key=${process.env.API_KEY}`
  )
  const data = await response.json()

  return {
    props: {
      data: data.results,
      title: params?.slug,
    },
  }
}

function DiscoverPage({ data, title }: DiscoverPageProps) {
  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl font-bold">
        {title.replace(
          /(\w)(\w*)/g,
          (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()
        )}{" "}
        Movies
      </h1>
      <MovieGrid data={data} />
    </div>
  )
}

export default DiscoverPage
