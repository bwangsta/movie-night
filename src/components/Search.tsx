import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"
import Modal from "./Modal"

const styles = {
  dialog: "w-full rounded-full",
  button: "h-10 w-10 rounded-full hover:bg-slate-600",
}

function Search() {
  const router = useRouter()
  const modalRef = useRef<HTMLDialogElement>(null)
  const [searchQuery, setSearchQuery] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    router.push(`/search?q=${searchQuery}`)
    setSearchQuery("")
    modalRef.current?.close()
  }

  return (
    <Modal
      title={<FaSearch size={18} className="mx-auto" />}
      style={styles}
      modalRef={modalRef}
    >
      <form className="flex items-center gap-3" onSubmit={handleSubmit}>
        <FaSearch className="ml-2" />
        <input
          type="search"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="w-full bg-inherit outline-none"
        />
      </form>
    </Modal>
  )
}

export default Search
