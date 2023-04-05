import './App.css';
import { Tabs } from './Tabs';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Cars } from './components/Cars';
import { Home } from './components/Home';
import { ElectricCars } from './components/ElectricCars';
import { AllCars } from './components/AllCars';
import { AllElectricCars } from './components/AllElectricCars';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div>
      <Header></Header>
      <Tabs></Tabs>
      <NavBar>
        <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Cars" element={<Cars/>}/>
            <Route path="/ElectricCars" element={<ElectricCars/>}/>
            <Route path="/AllCars" element={<AllCars/>}/>
            <Route path="/AllElectricCars" element={<AllElectricCars/>}/>
          </Routes>
        </BrowserRouter>
      </NavBar>
    </div>
  );
}

export default App;
