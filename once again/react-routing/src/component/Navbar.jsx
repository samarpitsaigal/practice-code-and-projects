import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import Dashboard from './Dashboard'
import Home from './Home'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='navv'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </div>    
  )
}

export default Navbar