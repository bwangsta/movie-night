import { Montserrat } from "next/font/google"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Drawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"
import DrawerContent from "./DrawerContent"
import Navbar from "./Navbar"

type LayoutProps = {
  title: string
  children: React.ReactNode
}

const montserrat = Montserrat({ subsets: ["latin"] })

function Layout({ title, children }: LayoutProps) {
  const { events } = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    events.on("routeChangeStart", closeDrawer)

    return () => {
      events.off("routeChangeStart", closeDrawer)
    }
  }, [events])

  function toggleDrawer() {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  function closeDrawer() {
    setIsOpen(false)
  }

  return (
    <div className={montserrat.className}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar toggleDrawer={toggleDrawer} />
      </header>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        customIdSuffix="1"
        style={{ backgroundColor: "#2a303c" }}
      >
        <DrawerContent />
      </Drawer>
      <main>{children}</main>
    </div>
  )
}

export default Layout
