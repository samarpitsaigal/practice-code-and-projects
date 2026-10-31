import React, { useState } from 'react'


const Authorise = () => {
  const [isLogin, setIsLogin]=useState(true);

  return (
    <div className='container'>
      <div className="form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : "" } onClick={()=>setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ""} onClick={()=>setIsLogin(false)}>Sign Up</button>
        </div>

        {
          isLogin ? <>
          <div className='form'>
            <h2>Login Form</h2>
            <input type="email" placeholder='Enter Email' />
            <input type="password" placeholder='Enter Password' />
            <a href="#">Forgot Password</a>
            <button>Login</button>
            <p>Not a member? <a href="###" onClick={()=> setIsLogin(false)} >signup now</a> </p>
          </div>
          </>
          : <>
          <div className="form">
            <h2>Login Form</h2>
            <input type="email" placeholder='Enter Email' />
            <input type="password" placeholder='Enter Password' />
            <input type="password" placeholder='Confirm Password' />          
            <button>Sign Up</button>
          </div>
          </>
        } 
      </div>
    </div>

  )
}

export default Authorise