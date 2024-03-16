import Link from "next/link"
import { BiMoviePlay } from "react-icons/bi"
import { FaBars } from "react-icons/fa"
import Search from "./Search"

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
      <Link href="/" className="flex items-center gap-2">
        <p className="text-xl font-black md:text-3xl">Movie Night</p>
      </Link>
      <div className="flex gap-2">
        <Search />
        <div className="flex items-center rounded-md p-2 hover:bg-slate-600">
          <Link href="/movielist">
            <BiMoviePlay size={24} />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
