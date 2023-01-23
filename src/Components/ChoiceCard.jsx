import  Button  from 'react-bootstrap/Button';
import { useState } from 'react';

const ChoiceCard = () => {
  const [choice, setChoice] = useState('Start')
  const [color, setColor] = useState("outline-dark")
  const [compChoice, setCompChoice] = useState('')

  const handleOnClick = evt => {
    setChoice(evt.target.value)
    
  }
  const getComputerChoice= () => {
    let randomNumber= Math.floor(Math.random() * 3)
      if(randomNumber === 0){
        setCompChoice('Rock')
      }
      if(randomNumber === 1){
        setCompChoice('Paper')
      }
      if(randomNumber === 2){
        setCompChoice('Scissors')
      }
 }

  return (
    <div>
      <Button variant={color} onClick={handleOnClick} value='Rock'>Rock</Button>
      <Button variant={color} onClick={handleOnClick} value='Paper'>Paper</Button>
      <Button variant={color} onClick={handleOnClick} value='Scissors'>Scissors</Button>
      <Button onClick={getComputerChoice}>Play game</Button>
      {compChoice}
    </div>
  );
}

export default ChoiceCard;