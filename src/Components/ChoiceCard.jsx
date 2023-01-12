import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ChoiceCard = () => {
  const [choice, setChoice] = useState('')

  return (
    <div>
      <Button>Rock</Button>
      <Button>Paper</Button>
      <Button>Scissors</Button>
      {choice}
    </div>
  );
}

export default ChoiceCard;