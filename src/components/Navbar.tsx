import Link from "next/link"
import Searchbar from "./Searchbar"
import { FaBars } from "react-icons/fa"

type NavbarProps = {
  toggleDrawer: () => void
}

function Navbar({ toggleDrawer }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between gap-2 px-4 py-3">
      <div className="flex items-center gap-2">
        <button type="button" className="btn" onClick={toggleDrawer}>
          <FaBars />
        </button>
        <Link href="/">
          <p>Movie Night</p>
        </Link>
      </div>
      <Searchbar />
      <div className="rounded-full bg-slate-700 p-2">
        <span>BW</span>
      </div>
    </nav>
  )
}

export default Navbar
