import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({currentDice,rolDice}) => {


  return (
    <DiceContainer>
      <div className='dice' onClick={rolDice}>
        <img src={`dice_${currentDice}.png`} alt="1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .dice{
    cursor: pointer;
  }
  p{
    font-size: 27px;
    font-weight: bold;
    color: #000000d5;
  }

`