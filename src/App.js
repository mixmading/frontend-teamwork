import './App.css';
import { Home } from './components/Home';
import { Cars } from './components/Cars';
import { ElectricCar } from './components/ElectricCars';

function App() {
  return (
    <div className="App">
      <Home/>
      <Cars/>
      <ElectricCar/>
      

    </div>
  );
}

export default App;
