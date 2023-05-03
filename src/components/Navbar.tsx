import Link from "next/link"
import Search from "./Search"
import { FaBars } from "react-icons/fa"

type NavbarProps = {
  toggleDrawer: () => void
}

function Navbar({ toggleDrawer }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-2 py-3">
      <button
        type="button"
        className="rounded-md p-3 hover:bg-slate-600"
        onClick={toggleDrawer}
      >
        <FaBars />
      </button>
      <Link href="/">
        <p>Movie Night</p>
      </Link>
      <div className="flex gap-2">
        <Search />
        <div className="rounded-full bg-slate-700 p-2">
          <span>BW</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
