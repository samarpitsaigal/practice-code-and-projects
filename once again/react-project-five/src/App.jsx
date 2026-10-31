
import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  //create state
  //manage state
  //change state
  //sbhii child me state ko sync krwa dunga
  const[name, setName]=useState('');

  return (
    <div>
      <Card name={name} setName={setName}/>
      <p>I am inside parents components and of name is :{name}</p>
      
    </div>
  )
}

export default App
