import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { FaSearch } from "react-icons/fa"

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

  function handleCloseModal(
    event: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) {
    const modalDimensions = modalRef.current?.getBoundingClientRect()

    // Closes modal if user clicks outside of the modal
    if (modalDimensions) {
      if (
        event.clientX < modalDimensions.left ||
        event.clientX > modalDimensions.right ||
        event.clientY < modalDimensions.top ||
        event.clientY > modalDimensions.bottom
      ) {
        modalRef.current?.close()
      }
    }
  }

  return (
    <>
      <button
        onClick={() => modalRef.current?.showModal()}
        className="h-10 w-10 rounded-full hover:bg-slate-600"
      >
        <FaSearch size={18} className="mx-auto" />
      </button>
      <dialog
        ref={modalRef}
        onClick={(e) => handleCloseModal(e)}
        className="rounded-full bg-slate-700 backdrop:bg-black backdrop:bg-opacity-60"
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
      </dialog>
    </>
  )
}

export default Search
