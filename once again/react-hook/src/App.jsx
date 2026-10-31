
import { useEffect, useState } from 'react'
import './App.css'
import TimerComponent from './component/TImerComponent'
import DataFetch from './component/DataFetch'
import ResizeComponent from './component/ResizeComponent'

function App() {
//  const[count,setCount]=useState(0);  //this is state variable
  // const[total,setTotal]=useState(1)

//first -> side-effect function
//second -> clean-up-function
//third - . comma separated dep list


  // variation 1
  // run on every render (means hum jitni baar click krenge ye utni baar chlega)

  // useEffect(() => {
  //   alert("I will run on each render")
  // })




  //variation 2
  // that run on only first render

  // useEffect(() => {
  //   alert("that run only first render")
  // }, [])





  //variation 3
    // useEffect(() => {
    //   alert("I will run every time when count is updated")
    // }, [count])
    
  
  

    // variation 4
    // useEffect(() => {
    //   alert(" I will run every time when count/total is updated")  
    // }, [count,total])





    // variation 5
    //es baar add a cleanup function
    // useEffect(() => {
    //   alert("count is updated")
    
    //   return () => {
    //     alert('count is unmounted from ui');
    //   }
    // }, [count])
    

  // function handleClick(){
  //   setCount(count+1);
  // }
  
  // function handleTotal(){
  //   setTotal(total+1)

  // }

  return (
    
    <div>

     {/* <TimerComponent/> */}

    {/* <DataFetch/> */}

    <ResizeComponent/>

      {/* <button onClick={handleClick}>Click Count</button>
      <br />
      <p>Count is: {count}</p>
      <br />
      <button onClick={handleTotal}>Click Total</button>
      <p>Total is: {total}</p> */}
    </div>
  )
}

export default App
