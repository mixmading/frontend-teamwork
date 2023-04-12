import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const FuelingList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Fueling History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li key={transaction.transaction}>
          Car's name: {transaction.text} | €: {transaction.Euro} | Litres: {transaction.Litre} | Charged: {transaction.kWh} | Driven: {transaction.km}
          </li>
        ))}
      </ul>
    </>
  );
};