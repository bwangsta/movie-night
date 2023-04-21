import { useRouter } from "next/router"
import { useState } from "react"
import { FaSearch } from "react-icons/fa"

function Searchbar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push(`/search?q=${searchQuery}`)
    setSearchQuery("")
  }

  return (
    <form
      className="flex items-center gap-2 rounded-full bg-slate-700 p-2"
      onSubmit={handleSubmit}
    >
      <FaSearch className="ml-2" />
      <input
        type="search"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="w-full bg-inherit outline-none"
      />
    </form>
  )
}

export default Searchbar
