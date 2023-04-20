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
      <p>Total Fueling Cost (€): <b>{euroTotal.toFixed(2)}</b>
      <br></br>
      Total Amount Of Fuel (L): <b>{litreTotal.toFixed(2)}</b>
      <br></br>
      Total Amount Driven: (km) <b>{kmTotal.toFixed(2)}</b></p>
    </div>
  );
}

export default PCarSummary;
