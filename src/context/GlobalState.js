import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: 'Suzuki Swift', Euro: 200, Litre: 150, kWh: 0, km: 450, type_id: 'petrol' },
    { id: 2, text: 'BMW x5', Euro: 150, Litre: 100, kWh: 0, km: 300, type_id: 'petrol' },
    { id: 3, text: 'Peugeot 208', Euro: 250, Litre: 300, kWh: 0, km: 450, type_id: 'petrol' },
    { id: 4, text: 'Toyota Aygo', Euro: 150, Litre: 200, kWh: 0, km: 600, type_id: 'petrol' },
    { id: 5, text: 'Polestar 2', Euro: 80, Litre: 0, kWh: 50, km: 200, type_id: 'electric' },
    { id: 6, text: 'Tesla Model 3', Euro: 120, Litre: 0, kWh: 80, km: 250, type_id: 'electric' }
  ],
  petrolCars: [],
  electricCars: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Update petrolCars and electricCars arrays based on the type_id property of each transaction
  useEffect(() => {
    const petrolCars = state.transactions.filter(transaction => transaction.type_id === 'petrol');
    const electricCars = state.transactions.filter(transaction => transaction.type_id === 'electric');
    dispatch({ type: 'SET_PETROL_CARS', payload: petrolCars });
    dispatch({ type: 'SET_ELECTRIC_CARS', payload: electricCars });
  }, [state.transactions]);

  // Actions

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function setTransaction(transactions) {
    dispatch({
      type: 'SET_TRANSACTIONS',
      payload: transactions
    });
  }

  function handleTransaction(transaction) {
    // Save the transaction to the history
    const newTransactions = [...state.transactions, transaction];
    window.history.pushState({ transactions: newTransactions }, null, null);

    // Update the state with the new transaction
    dispatch({
      type: 'HANDLE_TRANSACTION',
      payload: transaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        petrolCars: state.petrolCars,
        electricCars: state.electricCars,
        deleteTransaction,
        addTransaction,
        setTransaction,
        handleTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
