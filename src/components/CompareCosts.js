import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import FuelConsumption from "./FuelConsumption";
import ElectricConsumption from "./ElectricConsumption";
import "../scripts/ComparisonTable.css";

function CompareCosts() {
  const { transactions } = useContext(GlobalContext);

  const petrolTransactions = transactions.filter(
    (transaction) => transaction.type_id === "petrol"
  );
  const electricTransactions = transactions.filter(
    (transaction) => transaction.type_id === "electric"
  );

  const petrolEuroPer100km = FuelConsumption(petrolTransactions).average;
  const petrolLitersPer100km = FuelConsumption(petrolTransactions).litersPer100km;
  const electricEuroPer100km = ElectricConsumption(electricTransactions).average;
  const electricKWhPer100km = ElectricConsumption(electricTransactions).kWhPer100km;

  return (
    <>
        <h2>Comparison of costs and consumption</h2>
        <ul className="list">
            {[      { label: "Cost per 100km for petrol:", value: petrolEuroPer100km.toFixed(2), marker: "€" },      { label: "Cost per 100km for electric:", value: electricEuroPer100km.toFixed(2), marker: "€" },    { label: "Consumption per 100km for petrol:", value: petrolLitersPer100km.toFixed(2), marker: "L" },      { label: "Consumption per 100km for electric:", value: electricKWhPer100km.toFixed(2), marker: "kWh" },    ].map((data, index) => (
                <li key={index}>
                    {data.label} <b>{data.value} {data.marker}</b>
                </li>
            ))}
        </ul>
    </>

  );
}

export default CompareCosts;
