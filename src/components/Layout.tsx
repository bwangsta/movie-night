import { useState } from "react"
import Drawer from "react-modern-drawer"
import "react-modern-drawer/dist/index.css"
import Navbar from "./Navbar"
import DrawerContent from "./DrawerContent"

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleDrawer() {
    setIsOpen((prevIsOpen) => !prevIsOpen)
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
