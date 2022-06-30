import './App.css';
import Info from './Components/Info';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="nav"><Navbar /></div>
     <div className="info">
      <Info />
      </div>
    </div>
  );
}

export default App;
