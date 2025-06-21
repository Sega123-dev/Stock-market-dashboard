import { useContext } from "react"
import ModalContext from "../context/ModalContext"

const ModalOpener = () => {
    const {isModalOpened,setIsModalOpened} = useContext(ModalContext)

    const toggleModal = () => {
       setIsModalOpened(!isModalOpened)
}
  return (
    <button style={{zIndex:"99"}} className="absolute top-0 right-8 bg-indigo-600 p-2 m-0 rounded-b-sm cursor-pointer transition duration-300 hover:opacity-90 text-white cursor pointer text-base quicksand" onClick={toggleModal}>Subscribe to our newsletter</button>
  )
}

export default ModalOpener
