import Link from "next/link"
import Searchbar from "./Searchbar"

function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-2 px-4 py-3">
      <Link href="/">
        <p>Movie Night</p>
      </Link>
      <Searchbar />
      <div className="rounded-full bg-slate-700 p-2">
        <span>BW</span>
      </div>
    </nav>
  )
}

export default Navbar
