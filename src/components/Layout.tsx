import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Drawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"
import Navbar from "./Navbar"
import DrawerContent from "./DrawerContent"

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
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
    <>
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
    </>
  )
}

export default Layout
