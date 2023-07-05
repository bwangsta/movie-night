import { ReactNode, RefObject } from "react"

type ModalProps = {
  title: string | ReactNode
  style: { [key: string]: string }
  modalRef: RefObject<HTMLDialogElement>
  children: ReactNode
}

function Modal({ title, style, children, modalRef }: ModalProps) {
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
        type="button"
        className={style.button}
        onClick={() => modalRef.current?.showModal()}
      >
        {title}
      </button>
      <dialog
        ref={modalRef}
        className={`${style.dialog} bg-slate-700 backdrop:bg-black backdrop:bg-opacity-60`}
        onClick={(e) => handleCloseModal(e)}
      >
        {children}
      </dialog>
    </>
  )
}

export default Modal
