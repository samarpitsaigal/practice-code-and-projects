import React, { createContext, useContext } from 'react'
import { ThemeContext } from '../App';

const C = () => {

  const {theme,setTheme}=useContext(ThemeContext)

  function handleTheme(){
    if (theme === 'light')
      setTheme('dark')
    else
      setTheme('light')
  }

  return (
    <button onClick={handleTheme}>
      Change Theme 
    </button>
  )
}

export default C