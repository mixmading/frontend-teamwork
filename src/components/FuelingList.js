import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const FuelingList = () => {
  const { transactions } = useContext(GlobalContext);

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