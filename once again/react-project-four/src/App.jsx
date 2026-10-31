import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }

  return (
   <div>
      {
        //  <button increamentCount={handleClick} 
        // text="click me ">
        //   <h1>{count}</h1>
        // </button> 
      }



      <Card name="saigal saab">
        <h1>Best WEB DEV course</h1>
        <p>Trying to be cinsistent in this</p>
        <p>Will complete the course soon</p>
      </Card>

      <Card children='hiiiiiiii'></Card>
      
   </div>
   
  )
}

export default App
