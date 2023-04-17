import React from 'react';
import './App.css';
import  Tabs  from './components/Tabs';
import { BackGround } from './components/BackGround'
import { Header } from './components/Header';
import { FuelingList } from './components/FuelingList';
import { NewFueling } from './components/NewFueling';


import { GlobalProvider } from './context/GlobalState';

function App() {
  
  return (
    <GlobalProvider>
      <Header />
      <BackGround />
      <div className='Container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <NewFueling />
      <Tabs />
      <FuelingList />
      

      </div>
    </GlobalProvider>
  );
}

export default App;
