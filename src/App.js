import './App.css';
import Tabs from './Tabs';
import { Header } from './components/Header';
import { FuelingList } from './components/FuelingList';

function App() {
  
  return (
    <div>
      <div className='Container'>
      <Header></Header>
      <Tabs />
      <FuelingList />
      
      </div>
    </div>
  );
}

export default App;
