import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const FuelingList = () => {
  const { transactions, setTransaction } = useContext(GlobalContext);

  useEffect(() => {
    const handlePopstate = (event) => {
      if (event.state) {
        setTransaction(event.state.transactions);
      }
    };

    // Listen for the popstate event
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [setTransaction]);

  const handleTransaction = (transaction) => {
    // Save the transaction to the history
    const newTransactions = [...transactions, transaction];
    window.history.pushState({ transactions: newTransactions }, null, null);

    // Update the state with the new transaction
    setTransaction(newTransactions);
  };

  return (
    <>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li key={transaction.transaction}>
            Car's name: {transaction.text} | €: {transaction.Euro} | Litres: {transaction.Litre} | kW-hours: {transaction.kWh} | Driven: {transaction.km}
          </li>
        ))}
      </ul>
    </>
  );
};
