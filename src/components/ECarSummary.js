import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ECarSummary() {
  const { transactions } = useContext(GlobalContext);

  // Calculate the summary of all petrol car transactions
  const electricTransactions = transactions.filter(
    (transaction) => transaction.type_id === "electric"
  );
  const euroTotal = electricTransactions.reduce(
    (acc, transaction) => acc + transaction.Euro,
    0
  );
  const kWhTotal = electricTransactions.reduce(
    (acc, transaction) => acc + transaction.kWh,
    0
  );

  const kmTotal = electricTransactions.reduce(
    (acc, transaction) => acc + transaction.km,
    0
  );

  return (
    <div className="content  active-content">
      <h2>Summary of all e-car transactions</h2>
      <hr />
      <p>Total Charging Cost (€): <b>{euroTotal.toFixed(2)}</b> 
      <br></br>
      Total Amount Charged (kWh): <b>{kWhTotal.toFixed(2)}</b>
      <br></br>
      Total Amount Driven (km): <b>{kmTotal.toFixed(2)}</b></p>
    </div>
  );
}

export default ECarSummary;
