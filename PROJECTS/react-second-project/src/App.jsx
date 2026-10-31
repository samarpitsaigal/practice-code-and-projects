import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import Contect from './component/Contact/Contect'
import ContactForm from './component/Contact Form/ContactForm'
import Button from './component/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='containerr'>
      <Navigation/>
      <main className='main_container'>
        <Contect/>
        <ContactForm/>
      </main>
    </div>
  )
}

export default App
