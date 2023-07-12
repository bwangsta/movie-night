import { Score, useMoviesDispatch, WatchStatus } from "@/context/MoviesContext"
import { useRef, useState } from "react"
import Modal from "./Modal"

type EditMovieProps = {
  id: number
  title: string
  status: WatchStatus
}

const styles = {
  button: "btn-link block text-sm text-blue-500",
  dialog: "rounded-lg p-8",
}

const statusOptions: WatchStatus[] = ["Completed", "Plan To Watch", "Watching"]
const scoreOptions: Score[] = [
  "",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
]

function EditMovie({ id, title, status }: EditMovieProps) {
  const [selectedStatus, setSelectedStatus] = useState(status)
  const [selectedScore, setSelectedScore] = useState<Score>("")
  const dispatch = useMoviesDispatch()
  const modalRef = useRef<HTMLDialogElement>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    dispatch({
      type: "changed",
      id: id,
      status: selectedStatus,
      score: selectedScore,
    })
    modalRef.current?.close()
  }

  return (
    <Modal title="Edit" style={styles} modalRef={modalRef}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-xl">{title}</h1>
        <div className="flex gap-4 py-4">
          <div>
            <label htmlFor="statusSelect" className="mb-1 block text-sm">
              Status
            </label>
            <select
              id="statusSelect"
              value={selectedStatus}
              className="select select-sm w-full max-w-[10rem]"
              onChange={(e) => setSelectedStatus(e.target.value as WatchStatus)}
            >
              {statusOptions.map((watchStatus) => {
                return (
                  <option key={watchStatus} value={watchStatus}>
                    {watchStatus}
                  </option>
                )
              })}
            </select>
          </div>
          <div>
            <label htmlFor="scoreSelect" className="mb-1 block text-sm">
              Score
            </label>
            <select
              id="scoreSelect"
              value={selectedScore}
              className="select select-sm w-full max-w-[5rem]"
              onChange={(e) => setSelectedScore(e.target.value as Score)}
            >
              {scoreOptions.map((score) => {
                return (
                  <option key={score} value={score}>
                    {score}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <button type="submit" className="btn ml-auto block">
          Save
        </button>
      </form>
    </Modal>
  )
}

export default EditMovie
