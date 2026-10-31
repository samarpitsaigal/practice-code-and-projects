import { useCallback, useState } from 'react'
import './App.css'
import ChildCompo from './compo/ChildCompo';


function App() {
  const [count, setCount] = useState(0);


  // jb jb useSate update ho rha hai tb tb handleClick wala function re-render ho rha h jiski wjh se (Child Component go re-render again) dubara print ho rha h 
  
  // esko freez krne k liye

  // function handleClick(){
  //   setCount(count+1)
  // }

  const handleClick=useCallback(()=>{
    setCount(count+1)
  }
)
  return (
    <div>

      <div>
        Count is: {count}
      </div>
      <div>
        <button onClick={handleClick}>Increament</button>
      </div>
      <br /><br />

      <div>
        <ChildCompo buttonName="Click Me"
          handleClick={handleClick}/>
      </div>

    </div>
  )
}

export default App
