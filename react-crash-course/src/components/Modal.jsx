import styles from './Modal.module.css'

function Modal(props) {
  const { children, onClose } = props

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  )
}

export default Modal
