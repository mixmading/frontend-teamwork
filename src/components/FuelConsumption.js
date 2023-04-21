import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function FuelConsumption(props) {
  const { transactions } = useContext(GlobalContext);

  // Calculate the total liters of fuel used
  const litreTotal = props.reduce(
    (acc, transaction) => acc + transaction.Litre,
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

  const litersPer100km = litreTotal / kmTotal * 100;
  const average = kmTotal / litreTotal;
  const euroPer100km = (euroTotal / kmTotal) * 100;

  return {
    average: average,
    litersPer100km: litersPer100km,
    euroPer100km: euroPer100km,
  };
}

export default FuelConsumption;
