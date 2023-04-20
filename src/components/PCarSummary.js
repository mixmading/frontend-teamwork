import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function PCarSummary() {
  const { transactions } = useContext(GlobalContext);

  // Calculate the summary of all petrol car transactions
  const petrolTransactions = transactions.filter(
    (transaction) => transaction.type_id === "petrol"
  );
  const euroTotal = petrolTransactions.reduce(
    (acc, transaction) => acc + transaction.Euro,
    0
  );
  const litreTotal = petrolTransactions.reduce(
    (acc, transaction) => acc + transaction.Litre,
    0
  );
  const kmTotal = petrolTransactions.reduce(
    (acc, transaction) => acc + transaction.km,
    0
  );
  return (
    <div className="content  active-content">
      <h2>Summary of all petrol car transactions</h2>
      <hr />
      <p>Total €: {euroTotal.toFixed(2)}
      <br></br>
      Total litres: {litreTotal.toFixed(2)}
      <br></br>
      Total driven: {kmTotal.toFixed(2)}</p>
    </div>
  );
}

export default PCarSummary;
