import {Route, Routes} from "react-router-dom"
import './App.css';
import RPS from "./Pages/RPS";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservation from "./Pages/Reservation";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rps' element={<RPS/>} />
        <Route path='reservation' element={<Reservation/>}/>
      </Routes>
    </div>
  );
}

export default App;
