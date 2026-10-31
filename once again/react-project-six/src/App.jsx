import { useState } from 'react'
import './App.css'
import LoginBtn from './components/loginBtn';
import LogoutBtn from './components/logoutBtn';

function App() {
  const[isLoggedIn, setLoggedIn] = useState(true);


  if(!isLoggedIn) {
    return(
      <LoginBtn/>
    )
  }

  return(
    <div>
      <h1>welcome everyone to codehelp web dev course</h1>
      <div>
        {isLoggedIn&& <LogoutBtn/>}
      </div>
    </div>

)



  // return(
  //   <div>
  //     conditional mathod in turnary operator
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>} 
  //   </div>
  // )




  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }
}

export default App
