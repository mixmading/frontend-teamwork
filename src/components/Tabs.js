import React, { useState, useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
import PCarSummary from "./PCarSummary";
import ECarSummary from "./ECarSummary";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const { transactions } = useContext(GlobalContext);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Petrol cars 
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          P-Car summary
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Electric cars
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          E-car summary
        </button>
      </div>

      <div className="content-tabs" style={{ overflowX: "auto" }}>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Transaction history of petrol cars</h2>
          <hr />
          <ul className="list">
            {transactions.map(transaction => (
              transaction.type_id === 'petrol' && (
                <li key={transaction.transaction}>
                  Car's name: {transaction.text} | €: {transaction.Euro} | Litres: {transaction.Litre} | Driven: {transaction.km}
                </li>
              )
            ))}
          </ul>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <PCarSummary />
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Transcaction history of Electric Cars</h2>
          <hr />
          <ul className="list">
            {transactions.map(transaction => (
              transaction.type_id === 'electric' && (
                <li key={transaction.transaction}>
                  Car's name: {transaction.text} | €: {transaction.Euro} | kW-hours: {transaction.kWh} | Driven: {transaction.km}
                </li>
              )
            ))}
          </ul>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <ECarSummary/>
        </div>
      </div>
    </div>
  );
              };


export default Tabs;