import  Button  from 'react-bootstrap/Button';
import { useState } from 'react';

const ChoiceCard = () => {
  const [choice, setChoice] = useState('Start')

  const handleOnClick = evt => {
    setChoice(evt.target.value)
  }

  return (
    <div>
      <Button variant='primary' onClick={handleOnClick} value='Rock'>Rock</Button>
      <Button onClick={handleOnClick} value='Paper'>Paper</Button>
      <Button onClick={handleOnClick} value='Scissors'>Scissors</Button>
      {choice}
    </div>
  );
}

export default ChoiceCard;