import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
  return (  
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'rps'}>Rock Paper Scissors </Link>
      <Link to={'reservation'}>Make A Reservation</Link>
    </nav>
  );
}

export default NavBar;