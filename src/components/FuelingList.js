import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const FuelingList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Fueling History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li key={transaction.id}>
          Cars name: {transaction.text} | €: {transaction.Euro} | Litre: {transaction.Litre} | Charged: {transaction.kWh}
          </li>
        ))}
      </ul>
    </>
  );
};