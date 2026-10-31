import './App.css'
import { createContext, useState } from 'react'
import ChildA from './component/ChildA'

// 1 step - context create krna eg;- createcontext()
// 2 step - provider create krna return k under
// 3 step - provider k under value pass krna hai jo hmne useState me pass kiya hai



// const UserContext=createContext()
 const ThemeContext=createContext()


function App() {
  // const[user,setUser]=useState({name:"Samarpit"})

  const[theme,setTheme]=useState('light')

  return (
    
    //provider k under hme value pass krni hoti h
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' 
        style={{backgroundColor:theme==='light'?   'beige':"red"}}>
        <ChildA  />
      </div>
    </ThemeContext.Provider>





      // provider k under hme value pass krni hoti hai

      // <UserContext.Provider value={user}>
      //   <ChildA/>
      // </UserContext.Provider>  
    
  )
}

export default App
// export {UserContext}
export {ThemeContext}