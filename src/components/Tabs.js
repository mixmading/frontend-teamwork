import React, { useState, useContext } from "react";

import { GlobalContext } from '../context/GlobalState';

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
          Cars 
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          All Cars
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Electric Cars
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          All E-Cars
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Cars</h2>
          <hr />
          <ul className="list">
            {transactions.map(transaction => (
              <li key={transaction.transaction}>
                Car's name: {transaction.text} | €: {transaction.Euro} | Litres: {transaction.Litre} | Driven: {transaction.km}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Cars</h2>
          <hr />
          <p>
            Kakkea
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Electric Cars</h2>
          <hr />
          <p>
            Kakkea
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>All Electric Cars</h2>
          <hr />
          <p>
            Ribals
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;