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
          Model: <b>{transaction.text}</b> | €: <b>{transaction.Euro}</b> | Litres: <b>{transaction.Litre}</b> | kW-hours: <b>{transaction.kWh}</b> | Driven: <b>{transaction.km}</b>
          </li>
        ))}
      </ul>
    </>
  );
};