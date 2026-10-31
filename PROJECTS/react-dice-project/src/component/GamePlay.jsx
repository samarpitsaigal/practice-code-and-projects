import React, { use } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'

const GamePlay = () => {
  const [selectedNumber,setSelectedNumber]=useState();
  const[currentDice,setCurrentDice]=useState(1)
  const [score,setScore]=useState(0)
  const [error,setError]=useState()

    const generateRandomNumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min) + min )
  }

  const rolDice=()=>{
    if(!selectedNumber) {
      setError("You have not selected any number")
      return
    }
    setError("")
    const randomNumber=generateRandomNumber(1,7)
    setCurrentDice((prev)=>randomNumber)
    if(selectedNumber==randomNumber){
      setScore((prev)=>prev + 5)
    }
    else{
      setScore((prev)=>prev - 2)
    }

    setSelectedNumber(undefined)

  }


  return (
    <MainContainer>
      <div className='top_section'>
        <TotalScore score={score} />
        <NumberSelector error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} rolDice={rolDice} />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`