import { FaSearch } from "react-icons/fa"

function Searchbar() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-slate-700 p-2">
      <FaSearch className="ml-2" />
      <input
        type="search"
        placeholder="Search movies..."
        className="w-full bg-inherit outline-none"
      />
    </div>
  )
}

export default Searchbar
