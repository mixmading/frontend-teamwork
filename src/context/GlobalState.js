import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions: [
           { id: 1, text: 'Minnas car', Euro: 200, Litre: 150, kWh: 0 },
           { id: 2, text: 'Mattis car', Euro: 300, Litre: 170, kWh: 0},
           { id: 3, text: 'Reijos car', Euro: 112, Litre: 90, kWh: 0},
           { id: 4, text: 'Raijas car', Euro: 150, Litre: 100, kWh: 0}
        ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//  Actions

    function deleteTransaction(transaction) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: transaction 
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}