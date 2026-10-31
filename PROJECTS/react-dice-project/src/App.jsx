import { useState } from "react";
import Button from "../../react-second-project/src/component/Button/Button"
import StartGamne from "./component/StartGamne";
import GamePlay from "./component/GamePlay";

function App() {

  const [isGameStarted,setIsGameStarted]=useState(false)

  const toggleGamePlay =() =>{
    setIsGameStarted((prev)=>!prev)
  }


  return (
    <div>
      {isGameStarted ? <GamePlay/> : <StartGamne toggle={toggleGamePlay} /> }


     </div>
  )
}

export default App;

