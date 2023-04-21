import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ElectricConsumption from "./ElectricConsumption";

function ECarSummary() {
  const { transactions } = useContext(GlobalContext);


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
    <ul className="list">

      <div className="content  active-content">
        <h2>Summary of all e-car transactions</h2>
        <hr />
        <li>Total Charging Cost (€): <b>{euroTotal.toFixed(2)}</b></li>
        <li>Total Amount Charged (kWh): <b>{kWhTotal.toFixed(2)}</b></li>
        <li>Total Amount Driven (km): <b>{kmTotal.toFixed(2)}</b></li>
        <li>Average Cost Per 100km (€/100km): <b>{ElectricConsumption(electricTransactions).average.toFixed(2)}</b></li>
        <li>Average Consumption Per 100km (kWh/100km): <b>{ElectricConsumption(electricTransactions).kWhPer100km.toFixed(2)}</b></li>
      </div>
    </ul>
  );
}

export default ECarSummary;
