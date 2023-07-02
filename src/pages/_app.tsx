import "@/styles/globals.css"
import "@/styles/swiper.css"
import type { AppProps } from "next/app"
import Layout from "@/components/Layout"
import { MoviesProvider } from "@/context/MoviesContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MoviesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoviesProvider>
  )
}
