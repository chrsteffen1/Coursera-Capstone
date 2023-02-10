import {Route, Routes} from "react-router-dom"
import './App.css';
import RPS from "./Components/Pages/RPS";
import Home from "./Components/Pages/Home";
import NavBar from "./Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rps' element={<RPS/>} />
      </Routes>
    </div>
  );
}

export default App;
