import './App.css';
import ChoiceCard from './Components/ChoiceCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'/>
        <h1>Rock Paper Scissors</h1>
        <ChoiceCard/>
      </Routes>
    </div>
  );
}

export default App;
