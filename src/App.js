import React from 'react';
import './App.css';
import Tabs from './Tabs';
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
      <FuelingList />
      <Tabs />

      </div>
    </GlobalProvider>
  );
}

export default App;
