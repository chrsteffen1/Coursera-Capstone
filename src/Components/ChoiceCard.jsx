import  Button  from 'react-bootstrap/Button';
import { useState, useEffect} from 'react';
import 'animate.css'
import '../App.css';

const ChoiceCard = () => {
  const [choice, setChoice] = useState('Start')
  const [color, setColor] = useState("outline-dark")
  const [compChoice, setCompChoice] = useState('')
  const [result, setResult] = useState('Who will win')

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

  const determineWinner = (choice, compChoice) => {
    if (choice === 'Rock'){
      if(compChoice === 'Paper'){
        setResult( 'You are as dull as the rock that lost to paper')
      } else if (compChoice === 'Scissors'){
        setResult( 'You rocked that mother f***er')
      }
    }
    if (choice === 'Paper'){
      if(compChoice === 'Rock'){
        setResult( 'You beat rock with paper and that makes as much sense as Tenet did')
      } else if (compChoice === 'Scissors'){
        setResult( 'well scissor me timbers you lost a game of chance to an AI')
      }
    }
    if (choice === 'Scissors'){
      if(compChoice === 'Paper'){
        setResult( 'Snip snap sling those things')
      } else if (compChoice === 'Rock'){
        setResult( 'You lose. ')
      }
    }
    if(choice === compChoice){
      setResult( 'You tie so you lose')
    }
  }

  useEffect(() => {
    determineWinner(choice, compChoice)
  }, [compChoice])


  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <Button variant={color} onClick={handleOnClick} value='Rock'>Rock</Button>
      <Button variant={color} onClick={handleOnClick} value='Paper'>Paper</Button>
      <Button variant={color} onClick={handleOnClick} value='Scissors'>Scissors</Button>
      <Button onClick={getComputerChoice}>Play game</Button>
      <p>{choice}</p>
      <p>{compChoice}</p>
      <p>{result}</p> 
    </div>
  );
}

export default ChoiceCard;