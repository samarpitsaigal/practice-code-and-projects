import styled from 'styled-components'

const StartGamne = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" alt="" />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle} >Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGamne

const Container = styled.div`
  max-width  : 1180px;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  align-items: center;

  .content h1{
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`

  padding: 10px 18px;
  color: white;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: 1px solid black;
  transition: 0.3s background ease-in ;  
  cursor: pointer;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in ;
  }


`