import React from 'react';
import { MoonIcon } from "@heroicons/react/solid"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
const ThemeIcon = () => {
  const {darkMode,setDarkMode} = useContext(ThemeContext)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-2  xl:right-32 shadow-lg xl:mb-0 mb-16 ${darkMode ? "shadow-gray-800" : null} transition duration-300 hover:scale-125 `} onClick={toggleDarkMode}>
    <MoonIcon className={`w-5 h-5 xl:h-8 xl:w-8  cursor-pointer stroke-1 fill-none stroke-neutral-400 ${darkMode ? "fill-yellow-400 stroke-yellow-400" : "fill-none" }` }/>
  </button>
}

export default ThemeIcon
