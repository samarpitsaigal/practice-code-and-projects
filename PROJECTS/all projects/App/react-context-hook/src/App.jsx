import { useState } from 'react'

import './App.css'
import { createContext } from 'react'
import A from './component/A'

  const ThemeContext=createContext()


function App() {


  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?'red' : 'black'}}>
        <A/>
      </div>
      
    </ThemeContext.Provider>
  )
}

export default App
export {ThemeContext}

