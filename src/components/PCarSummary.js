import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import FuelConsumption from "./FuelConsumption";

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
    <ul className="list">
      <div className="content  active-content">
        <h2>Summary of all p-car transactions</h2>
        <hr />
        <li>Total Fueling Cost (€): <b>{euroTotal.toFixed(2)}</b></li>
        <li>Total Amount Of Fuel (L): <b>{litreTotal.toFixed(2)}</b></li>
        <li>Total Amount Driven (km): <b>{kmTotal.toFixed(2)}</b></li>
        <li>Average Cost Per 100km (€/100km): <b>{FuelConsumption(petrolTransactions).average.toFixed(2)}</b></li>
        <li>Average Consumption Per 100km (L/100km): <b>{FuelConsumption(petrolTransactions).litersPer100km.toFixed(2)}</b></li>
      </div>
    </ul>
  );
}

export default PCarSummary;
