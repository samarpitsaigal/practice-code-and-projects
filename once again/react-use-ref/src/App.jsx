import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {

  // const [ count,setCount]= useState(0);
  // let val=useRef(0);
  // let btnRef=useRef();

  // function handleIncreament(){
  //   val.current=val.current+1;
  //   console.log("value of val: ",val.current);
  //   setCount(count + 1)
    
  // }

  // function changeColor(){
  //   btnRef.current.style.backgroundColor='red';
  // }
 
  // it runs on every render
  // useEffect(()=>{
  //   console.log('mai fir se render ho gya hu')
  // })




  

  const [ time,setTime ] = useState(0);
  let timerRef=useRef(null);

  function startTimer(){
    timerRef.current=setInterval(() => {
      setTime(time => time+1)
    },1000)
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer(){
    stopTimer();
    setTime(0);
  }


  return (
    <div>
      {/* <button ref={btnRef} onClick={handleIncreament}>
        Increament
      </button>
      <br /><br />
      <button onClick={changeColor}>
        Change color of 1st Button
      </button>
      <div>
        Count is: {count}
      </div> */}






        <h1>Stop Watch: {time} second</h1>
        <button onClick={startTimer}>Start</button>
        <br /><br />

        <button onClick={stopTimer}>Stop</button>
        <br /><br />
         
        <button onClick={resetTimer}>Reset</button>

    </div>
  )
}

export default App
