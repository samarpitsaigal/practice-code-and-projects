import './App.css'
import About from './component/About'
import Home from './component/Home'
import Dashboard from './component/Dashboard'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Navbar from './component/Navbar'

// step 1 - ek page se dusre page pe jane k liye hme createBrowserRouter() ka use krna hota hai
// step 2 - eske under hme [ ] square braket k under curly bracket ka use kr ke hm alg alg page ko link kr skte h
// step 3 - curlu bracket k under hme sabse pahle path dena hota hai uske bad hme element: k under us page ko jod skte hai 


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Home/>
      </div>
    },

    {
      path:"/about",
      element:
      <div>
        <About/>
      </div>     
    },

    {
      path:"/dashboard",
      element:
      <div>
        <Dashboard/>
      </div>      
    }
  ]
);

function App() {
 

  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
