import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function ElectricConsumption(props) {
  const { transactions } = useContext(GlobalContext);

  // Calculate the total liters of fuel used
  const kWhTotal = props.reduce(
    (acc, transaction) => acc + transaction.kWh,
    0
  );

  
  const euroTotal = transactions.reduce(
    (acc, transaction) => acc + transaction.Euro,
    0
  );
  const kmTotal = transactions.reduce(
    (acc, transaction) => acc + transaction.km,
    0
  );

  const kWhPer100km = kWhTotal / kmTotal * 100;
  const average = kmTotal / kWhTotal;
  const euroPer100km = (euroTotal / kmTotal) * 100;

  return {
    average: average,
    kWhPer100km: kWhPer100km,
    euroPer100km: euroPer100km,
  };
}

export default ElectricConsumption;
