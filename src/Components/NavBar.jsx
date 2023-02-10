import {Link} from 'react-router-dom'
import '../App.css'

const NavBar = () => {
  return (  
    <nav>
      <Link to={'/'}>Home</Link>
      <Link to={'rps'}>Rock Paper Scissors </Link>
    </nav>
  );
}

export default NavBar;