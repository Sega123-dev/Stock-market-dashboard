import { useContext } from "react"
import ModalContext from "../context/ModalContext"

const ModalWrapper = ({ children }) => {
  const {isModalOpened} = useContext(ModalContext)
    return (
    <div className={`h-screen absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center transparent-background ${isModalOpened ? "block" : "hidden"}`}>
      { children }
    </div>
  ) 
}

export default ModalWrapper
