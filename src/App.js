import React from 'react';
import './App.css';
import  Tabs  from './components/Tabs';
import { Header } from './components/Header';
import { FuelingList } from './components/FuelingList';
import { NewFueling } from './components/NewFueling';

import { GlobalProvider } from './context/GlobalState';

function App() {
  
  return (
    <GlobalProvider>
      <Header />
      <div className='Container'>
      <NewFueling />
      <Tabs />
      <FuelingList />
      

      </div>
    </GlobalProvider>
  );
}

export default App;
