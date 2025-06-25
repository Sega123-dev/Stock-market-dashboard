import React from 'react';
import { useContext } from "react"
import ModalContext from "../context/ModalContext"
import ThemeContext from "../context/ThemeContext"

const ModalWrapper = ({ children }) => {
  const {isModalOpened} = useContext(ModalContext)
  const {darkMode} = useContext(ThemeContext)
    return (
    <div className={`h-screen absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center ${isModalOpened ? "block" : "hidden"} ${darkMode ? "transparent-background-dark" : "transparent-background"}`}>
      { children }
    </div>
  ) 
}

export default ModalWrapper
