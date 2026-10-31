import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({setError ,error, selectedNumber , setSelectedNumber}) => {
  const arrNumber=[1,2,3,4,5,6];

  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setError("")
  }

  console.log(selectedNumber)
  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {arrNumber.map((value,i)=>(
          <Box key={i} 
            isSelected={value===selectedNumber}
            onClick={()=>numberSelectorHandler(value)}
          >{value}</Box>
        ))}
        
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-weight: 700px;
    font-size: 24px;
  }

  .error{
    color: red;
  }
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props)=>(props.isSelected ? "black" : "white")};
  color: ${(props)=>(!props.isSelected ? "black" : "white")};  
`
