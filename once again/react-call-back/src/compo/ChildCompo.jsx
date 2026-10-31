import React from 'react'

// React.memo me wrap krne se component re-render nhi hoga 

// fi you are send a function then react.memo wont be able to save you from re-rendering 

const ChildCompo = React.memo((props) => {

  console.log("Child Component go re-render again")

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
})

export default ChildCompo