import React from 'react';
import { XIcon } from "@heroicons/react/solid"
import { useContext } from "react"
import ModalContext from "../context/ModalContext"


const CloseIcon = () => {
    const {setIsModalOpened,isModalOpened} = useContext(ModalContext)

    const toggleModal = () => {
       setIsModalOpened(!isModalOpened)
}

  return (
    <button className="h-12 w-12 absolute top-10 xl:right-10 right-0 cursor-pointer" onClick={toggleModal}><XIcon className="p-2 text-white"/></button>
  )
}

export default CloseIcon
