import React from 'react';
import './App.css';
import  Tabs  from './components/Tabs';
import { Header } from './components/Header';
import { FuelingList } from './components/FuelingList';
import  CompareCosts  from './components/CompareCosts';
import { NewFueling } from './components/NewFueling';
import SearchBar from './components/Searchbar';
import { Transactions } from './components/Transaction'
import { GlobalProvider } from './context/GlobalState';

function App() {
  
  return (
    <GlobalProvider>
      <Header />
      <div className='Container'>
      <NewFueling />
      <Tabs />
        <SearchBar />
        <br></br>
      <CompareCosts />
      <FuelingList />
      
      </div>
      
    </GlobalProvider>
    
  );
}

export default App;