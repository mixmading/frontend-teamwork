import './App.css';
import { Cars } from './components/Cars';
import { Home } from './components/Home';
import { ElectricCars } from './components/ElectricCars';
import { AllCars } from './components/AllCars';
import { AllElectricCars } from './components/AllElectricCars';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="Home" element={<Home/>}/>
          <Route path="Cars" element={<Cars/>}/>
          <Route path="ElecricCars" element={<ElectricCars/>}/>
          <Route path="AllCars" element={<AllCars/>}/>
          <Route path="AllElectricCars" element={<AllElectricCars/>}/>
        </Routes>

    </div>
  );
}

export default App;
