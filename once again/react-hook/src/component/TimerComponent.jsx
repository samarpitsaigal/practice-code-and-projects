import React,{useState, useEffect} from 'react'

function TimerComponent(){
  const[second,setSecond]=useState(0);

  useEffect(() => {
    const intervalId=setInterval(()=>{
      console.log('setInterval executed');
      setSecond(prevSecond=>prevSecond +1)
    },1000);
  
    return () => {
      console.log('Timer to stop')
      clearInterval(intervalId)
    }
  }, []);


  return (
    <div>
      <h1>Seconds: {second}</h1>
    </div>
  )
  
}

export default TimerComponent