import React, { useContext } from 'react';
import { NewFueling } from './NewFueling';

import { GlobalContext } from '../context/GlobalState';

export const FuelingList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<NewFueling key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}